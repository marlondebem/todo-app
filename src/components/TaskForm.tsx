'use client'

import { ChangeEvent, FormEvent, useState, useRef, useEffect } from 'react'

interface TaskFormProps {
  onAddTask: (description: string) => void
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [description, setDescription] = useState('')

  const maxCharCount = 60
  const remainingChars = maxCharCount - description.length

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (value.length <= maxCharCount) {
      setDescription(value)
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (description.trim() !== '') {
      onAddTask(description)
      setDescription('')
    }
  }

  return (
    <div className='max-w-sm px-4 md:max-w-md md:px-0 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full'>
      <div className='bg-zinc-100 dark:bg-zinc-900 flex items-center h-16 rounded-2xl my-8'>
        <form 
          className='w-full flex items-center'
          onSubmit={handleSubmit}
        >
          <input 
            className='bg-transparent px-5 outline-none w-full font-normal text-base text-zinc-600 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500'
            type='text'
            placeholder='Quick add...'
            value={description}
            onChange={handleInputChange}
            ref={inputRef}
          />
          <span className={`px-4 text-xs font-medium ${remainingChars === 0 ? 'text-red-400' : 'text-zinc-300 dark:text-zinc-500'}`}>{remainingChars}</span>
          <button type='submit' hidden></button>
        </form>
      </div>
    </div>
  )
}
'use client'

import { ChangeEvent, FormEvent, useState } from 'react'

interface TaskFormProps {
  onAddTask: (description: string) => void
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [description, setDescription] = useState('')

  const maxCharCount = 65
  const remainingChars = maxCharCount - description.length

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
    <div className='bg-zinc-100 dark:bg-zinc-900 flex items-center max-w-2xl w-full h-16 rounded-2xl my-8'>
      <form 
        className='w-full flex items-center'
        onSubmit={handleSubmit}
      >
        <input 
          className='bg-transparent px-5 outline-none w-full font-normal text-base text-zinc-600 dark:text-zinc-100'
          type='text'
          placeholder='Add a description...'
          value={description}
          onChange={handleInputChange}
        />
        <span className={`px-4 text-xs font-medium ${remainingChars === 0 ? 'text-red-400' : 'text-zinc-500'}`}>{remainingChars}</span>
        <button type='submit' hidden></button>
      </form>
    </div>
  )
}
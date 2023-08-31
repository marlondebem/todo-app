'use client'

import { ChangeEvent, FormEvent, useState } from 'react'

interface TaskFormProps {
  onAddTask: (description: string) => void
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [description, setDescription] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setDescription(value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (description.trim() !== '') {
      onAddTask(description)
      setDescription('')
    }
  }

  return (
    <div className='bg-zinc-100 flex items-center max-w-2xl w-full h-16 rounded-3xl my-8'>
      <form 
        className='w-full'
        onSubmit={handleSubmit}
      >
        <input 
          className='bg-transparent px-5 outline-none w-full font-normal text-base text-[#5c5c5c]'
          type='text'
          placeholder='Add a description...'
          value={description}
          onChange={handleInputChange}
        />
        <button type='submit' hidden></button>
      </form>
    </div>
  )
}
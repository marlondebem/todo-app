'use client'

import { useState } from 'react'

import { TaskForm } from '@/components/TaskForm'
import { TaskList } from '@/components/TaskList'

interface Task {
  id: number
  description: string
  completed: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (description: string) => {
    const newTask = {
      id: Date.now(),
      description: description,
      completed: false
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  return (
    <div className='flex flex-col items-center'>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onTaskToggle={toggleTaskCompletion} />
    </div>
  )
}

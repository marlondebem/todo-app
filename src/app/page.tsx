'use client'

import { useEffect, useState } from 'react'

import { TaskForm } from '@/components/TaskForm'
import { TaskList } from '@/components/TaskList'
import { DarkModeButton } from '@/components/DarkModeButton'

interface Task {
  id: number
  description: string
  completed: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const cachedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    setTasks(cachedTasks)
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (description: string) => {
    const newTask = {
      id: Date.now(),
      description: description,
      completed: false
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const removeTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  return (
    <div className='flex flex-col items-center'>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onTaskToggle={toggleTaskCompletion} onTaskRemove={removeTask} />
      <DarkModeButton />
    </div>
  )
}

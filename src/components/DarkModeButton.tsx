'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function DarkModeButton() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div 
      className='bg-transparent text-zinc-500 hover:bg-zinc-200 hover:text-cyan-500 dark:text-zinc-200 hover:dark:bg-zinc-900 hover:dark:text-yellow-400 h-9 w-9 flex items-center justify-center rounded-full cursor-pointer transition'
      onClick={toggleTheme}
    >
      {currentTheme === 'dark' ? (
        <SunIcon className='h-5 w-5' />
      ) : (
        <MoonIcon className='h-5 w-5' />
      )}
    </div>
  )
}
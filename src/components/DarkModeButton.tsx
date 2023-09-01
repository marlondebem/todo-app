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

  return (
    <div>
      {currentTheme === 'dark' ? (
        <SunIcon className='h-5 w-5 cursor-pointer' onClick={() => setTheme('light')} />
      ) : (
        <MoonIcon className='h-5 w-5 cursor-pointer' onClick={() => setTheme('dark')} />
      )}
    </div>
  )
}
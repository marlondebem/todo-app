'use client'

import { ThemeProvider } from 'next-themes'

export function ThemeContext({ children }: { children: React.ReactNode } ) {
  return (
    <ThemeProvider enableSystem={false} attribute='class'>
      {children}
    </ThemeProvider>
  )
}
import { DarkModeButton } from './DarkModeButton'

export function Header() {
  return (
    <header className='sticky top-0 w-full h-14 flex items-center justify-center bg-zinc-100/30 dark:bg-zinc-950/30 backdrop-filter backdrop-blur border-b dark:border-b-zinc-900'>
      <nav className='max-w-4xl w-full flex items-center justify-between'>
        <span className='font-semibold text-base text-zinc-600 dark:text-zinc-200'>Tasks</span>
        <DarkModeButton />
      </nav>
    </header>
  )
}
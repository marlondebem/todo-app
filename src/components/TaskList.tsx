import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon, TrashIcon } from '@heroicons/react/24/outline'

interface Task {
  id: number
  description: string
  completed: boolean
}

interface TaskListProps {
  tasks: Task[]
  onTaskToggle: (id: number) => void
  onTaskRemove: (id: number) => void
}

export function TaskList({ tasks, onTaskToggle, onTaskRemove }: TaskListProps) {
  return (
    <ul className='max-w-2xl w-full'>
      {tasks.map((task) => (
        <li 
          className={`pl-5 flex items-center gap-4 py-4 ${task.completed ? 'line-through text-zinc-400' : 'text-zinc-500 dark:text-zinc-300'}`}
          key={task.id}
        >
          <Checkbox.Root
            className='flex items-center bg-zinc-100 dark:bg-zinc-900 justify-center w-5 h-5 border border-zinc-200 dark:border-zinc-800 aria-checked:bg-cyan-400 aria-checked:border-cyan-400 dark:aria-checked:bg-cyan-500 dark:aria-checked:border-cyan-500 rounded-md transition'
            checked={task.completed}
            onCheckedChange={() => onTaskToggle(task.id)}
          >
            <Checkbox.Indicator className='text-white'>
              <CheckIcon className='h-4' />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <span className='flex-1'>
            {task.description}
          </span>
          <button
            className='bg-transparent text-zinc-300 dark:text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-red-400 dark:hover:text-red-400 p-2 rounded-full transition'
            onClick={() => onTaskRemove(task.id)}
          >
            <TrashIcon className='h-4' />
          </button>
        </li>
      ))}
    </ul>
  )
}
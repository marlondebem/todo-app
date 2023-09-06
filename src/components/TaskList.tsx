import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon, ExclamationCircleIcon, TrashIcon } from '@heroicons/react/24/outline'

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
    <div className='max-w-sm px-4 md:max-w-md md:px-0 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full pb-8'>
      {tasks.length === 0 ? (
       <div className='flex items-center justify-center gap-2 text-zinc-500 dark:text-zinc-500'>
        <ExclamationCircleIcon className='h-5' />
        <p>No task added.</p>
       </div>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li 
              className={`pl-5 flex items-center gap-4 py-4 ${task.completed ? 'line-through text-zinc-400' : 'text-zinc-500 dark:text-zinc-300'}`}
              key={task.id}
            >
              <Checkbox.Root
                className='flex items-center bg-transparent justify-center w-5 h-5 border border-zinc-300 dark:border-zinc-600 aria-checked:bg-cyan-400 aria-checked:border-cyan-400 dark:aria-checked:bg-cyan-500 dark:aria-checked:border-cyan-500 rounded-md transition'
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
                className='bg-transparent text-zinc-400 dark:text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-red-400 dark:hover:text-red-400 p-2 rounded-full transition'
                onClick={() => onTaskRemove(task.id)}
              >
                <TrashIcon className='h-4' />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
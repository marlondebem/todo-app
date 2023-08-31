interface Task {
  id: number
  description: string
  completed: boolean
}

interface TaskListProps {
  tasks: Task[]
  onTaskToggle: (id: number) => void
}

export function TaskList({ tasks, onTaskToggle }: TaskListProps) {
  return (
    <ul className='max-w-2xl w-full'>
      {tasks.map((task) => (
        <li 
          className='px-5 flex items-center text-[#5c5c5c] gap-4 h-16'
          key={task.id}
        >
          <input
            className='appearance-none w-5 h-5 border border-zinc-200 rounded-md checked:bg-cyan-400 checked:border-cyan-400'
            type='checkbox'
            checked={task.completed}
            onChange={() => onTaskToggle(task.id)}
          />
          {task.description}
        </li>
      ))}
    </ul>
  )
}
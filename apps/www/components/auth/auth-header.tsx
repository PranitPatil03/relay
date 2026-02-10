interface AuthHeaderProps {
  title: string
  description: string
  dark?: boolean
}

export function AuthHeader({ title, description, dark }: AuthHeaderProps) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <h1
        className={`text-2xl font-semibold ${dark ? 'text-white' : 'text-black'}`}
      >
        {title}
      </h1>
      <p
        className={`text-center text-sm font-normal ${dark ? 'text-neutral-400' : 'text-gray-500'}`}
      >
        {description}
      </p>
    </div>
  )
}

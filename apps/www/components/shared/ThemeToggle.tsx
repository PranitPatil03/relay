'use client'

import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/providers/ThemeProvider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-neutral-700 transition-colors hover:bg-[#FEFFFE] dark:text-gray-300 dark:hover:bg-[#252525]"
      aria-label="Toggle theme"
    >
      <div className="relative h-4 w-4">
        <Sun className="absolute h-4 w-4 rotate-0 scale-100 text-neutral-600 transition-all dark:-rotate-90 dark:scale-0 dark:text-gray-400" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 text-neutral-600 transition-all dark:rotate-0 dark:scale-100 dark:text-gray-400" />
      </div>
      <span>Theme</span>
    </button>
  )
}

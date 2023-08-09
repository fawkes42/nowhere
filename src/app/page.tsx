'use client'

import { useTheme } from 'next-themes'
import { ThemeSwitcher } from './components/ThemeSwitcher'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <ThemeSwitcher />
    </div>
  )
}

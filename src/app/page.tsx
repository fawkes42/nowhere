'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { ThemeSwitch } from './components/ThemeSwitcher'

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <ThemeSwitch />
    </div>
  )
}

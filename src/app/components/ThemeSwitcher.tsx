'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Component1Icon, MoonIcon, SunIcon } from '@radix-ui/react-icons'

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <Select value={theme} onValueChange={e => setTheme(e)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">
                    <div className='flex items-center'>
                        <SunIcon className="w-4 h-4 mr-2" />
                        Light
                    </div>
                </SelectItem>
                <SelectItem value="dark">
                    <div className='flex items-center'>
                        <MoonIcon className="w-4 h-4 mr-2" />
                        Dark
                    </div>
                </SelectItem>
                <SelectItem value="system">
                    <div className='flex items-center'>
                        <Component1Icon className="w-4 h-4 mr-2" />
                        System
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    )
}
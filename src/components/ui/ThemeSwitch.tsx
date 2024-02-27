import { Moon, Sun } from 'lucide-react'

import { Switch } from '@/components/ui/switch'
import { useEffect, useState } from 'react'

function ThemeSwitch() {
  const [theme, setTheme] = useState<'theme-light' | 'dark' | 'system'>(
    'system'
  )
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setTheme(isDarkMode ? 'dark' : 'theme-light')
  }, [])

  useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [theme])

  return (
    <Switch
      className='relative z-[9999]'
      checked={theme === 'dark'}
      onCheckedChange={() =>
        setTheme(theme === 'dark' ? 'theme-light' : 'dark')
      }
    >
      <div className='relative h-4 w-4 rounded-full'>
        <Sun
          fill='hsl(var(--secondary))'
          className='absolute inset-0 h-4 w-4 rotate-0 scale-100 text-secondary transition-all dark:-rotate-90 dark:scale-0'
        />
        <Moon
          fill='hsl(var(--secondary))'
          className='absolute inset-0 h-4 w-4 rotate-90 scale-0 text-secondary transition-all dark:-translate-x-5 dark:rotate-0 dark:scale-100'
        />
      </div>
    </Switch>
  )
}

export default ThemeSwitch

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageTitles } from '../config/routes'

// Custom hook for managing page titles
export const usePageTitle = () => {
  const location = useLocation()

  useEffect(() => {
    const title = pageTitles[location.pathname] || 'Codey'
    document.title = title
  }, [location.pathname])
}

// Custom hook for checking active routes
export const useActiveRoute = () => {
  const location = useLocation()
  
  const isActive = (path) => {
    if (path === '/' || path === '/home') {
      return location.pathname === '/' || location.pathname === '/home'
    }
    return location.pathname === path
  }

  return { isActive, currentPath: location.pathname }
}
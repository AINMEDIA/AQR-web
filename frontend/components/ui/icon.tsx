import React from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IconProps {
  icon: LucideIcon
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  variant?: 'default' | 'outline' | 'minimal' | 'simple'
}

const sizeClasses = {
  sm: {
    container: 'w-8 h-8',
    inner: 'w-5 h-5',
    icon: 'w-3 h-3'
  },
  md: {
    container: 'w-10 h-10',
    inner: 'w-6 h-6',
    icon: 'w-4 h-4'
  },
  lg: {
    container: 'w-12 h-12',
    inner: 'w-8 h-8',
    icon: 'w-5 h-5'
  },
  xl: {
    container: 'w-16 h-16',
    inner: 'w-12 h-12',
    icon: 'w-6 h-6'
  }
}

export function Icon({ 
  icon: IconComponent, 
  size = 'md', 
  className,
  variant = 'default'
}: IconProps) {
  const sizes = sizeClasses[size]
  
  // Ensure IconComponent is valid
  if (!IconComponent) {
    console.error('Icon component received undefined icon')
    return null
  }
  
  if (variant === 'minimal') {
    return (
      <IconComponent 
        className={cn('text-blue-600', sizes.icon, className)} 
      />
    )
  }
  
  if (variant === 'simple') {
    return (
      <IconComponent 
        className={cn('w-4 h-4', className)} 
      />
    )
  }
  
  if (variant === 'outline') {
    return (
      <div className={cn('flex items-center justify-center', sizes.container, className)}>
        <div className={cn('w-full h-full bg-blue-100 rounded-full flex items-center justify-center')}>
          <div className={cn('bg-blue-600 rounded-lg flex items-center justify-center', sizes.inner)}>
            <IconComponent className={cn('text-white', sizes.icon)} />
          </div>
        </div>
      </div>
    )
  }
  
  // Default variant - matches the image style
  return (
    <div className={cn('flex items-center justify-center', sizes.container, className)}>
      <div className={cn('w-full h-full bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm')}>
        <div className={cn('bg-blue-600 rounded-lg flex items-center justify-center', sizes.inner)}>
          <IconComponent className={cn('text-white', sizes.icon)} />
        </div>
      </div>
    </div>
  )
}

// Convenience components for common use cases
export function IconWithBackground({ 
  icon, 
  size = 'md', 
  className 
}: Omit<IconProps, 'variant'>) {
  return <Icon icon={icon} size={size} className={className} variant="default" />
}

export function IconOutline({ 
  icon, 
  size = 'md', 
  className 
}: Omit<IconProps, 'variant'>) {
  return <Icon icon={icon} size={size} className={className} variant="outline" />
}

export function IconMinimal({ 
  icon, 
  size = 'md', 
  className 
}: Omit<IconProps, 'variant'>) {
  return <Icon icon={icon} size={size} className={className} variant="minimal" />
}

// Default export for easier importing
export default Icon

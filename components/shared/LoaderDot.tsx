import React from 'react'

const LoaderDot = (
  {
    color,
    className,
    small,
  }: {
    color?: 'light' | 'dark';
    className?: string;
    small?: boolean;
  }
) => {

  let bgColor;
  switch (color) {
    case 'light':
      bgColor = 'light-1';
      break;
    case 'dark':
      bgColor = 'dark-2';
      break;
      
      default:
      bgColor = 'light-3';
      break;
  }

  return (
    <div className={`p-6 flex items-center justify-center gap-1 ${className}`}>
      <div className={`${small ? 'size-1' : 'size-2'} shrink-0 grow-0 rounded-full animate-pulse ${color ? `bg-${bgColor}` : 'bg-light-3'}`} />
      <div className={`${small ? 'size-1' : 'size-2'} shrink-0 grow-0 rounded-full animate-pulse delay-[300ms] bg-${bgColor}`} />
      <div className={`${small ? 'size-1' : 'size-2'} shrink-0 grow-0 rounded-full animate-pulse delay-[600ms] bg-${bgColor}`} />
    </div>
  )
}

export default LoaderDot
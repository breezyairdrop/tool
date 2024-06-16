// import { cn } from '@/lib/utils'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className='animate-pulse rounded-md bg-muted'
    />
  )
}

export { Skeleton }

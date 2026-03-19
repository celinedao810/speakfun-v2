import { Spinner } from '@/components/ui/spinner'

export default function RootLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <Spinner className="size-5" />
    </div>
  )
}

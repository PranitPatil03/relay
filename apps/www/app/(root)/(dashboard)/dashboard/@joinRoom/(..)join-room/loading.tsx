import { LoadingSpinner as Spinner } from '@relay/ui/icons/spinner.tsx'

const loading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center backdrop-blur-md">
      <Spinner />
    </div>
  )
}
export default loading

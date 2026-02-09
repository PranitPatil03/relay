import { redirect } from 'next/navigation'

// Plans page is disabled - redirect to home
const page = () => {
  redirect('/')
}

export default page

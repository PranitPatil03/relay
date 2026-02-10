'use client'

import Link from 'next/link'

const RelayLogo = () => {
  return (
    <Link
      href={'/'}
      className="z-[60] flex items-center text-neutral-900"
      aria-label="Relay Home"
    >
      <span className="text-xl font-bold">Relay</span>
    </Link>
  )
}
export default RelayLogo

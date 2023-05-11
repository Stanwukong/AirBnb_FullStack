"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
  const router = useRouter()

  return (
    <div className="focus:outline-none">
      <Image
        onClick={() => router.push("/")}
        alt="Logo"
        className="md:block cursor-pointer"
        height="100"
        width="100"
        src="/images/logo.png"
      />
    </div>
  )
}

export default Logo

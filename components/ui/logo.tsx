import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="https://img.icons8.com/fluency/48/000000/restaurant.png" alt="FoodDelivery Logo" width={40} height={40} />
      <span className="font-bold text-xl">FoodDelivery</span>
    </Link>
  )
}


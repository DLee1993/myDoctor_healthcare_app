import Image from "next/image"
import Favicon from '@/public/assets/favicon.svg'

export const Logo = () => {
  return (
    <figure className="w-fit flex justify-center items-center gap-2">
        <Image src={Favicon} alt="logo" width={25}/>
        <figcaption className="text-18-bold">My <span className="text-green-500">Doctor</span></figcaption>
    </figure>
  )
}
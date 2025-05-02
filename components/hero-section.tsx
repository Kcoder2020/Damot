import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Ethiopian farmland with modern farming equipment"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 container px-4 md:px-6 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-start gap-4 max-w-3xl text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Modern Farming Solutions for Ethiopia
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-gray-200">
            Damot Mechanization Farming provides cutting-edge agricultural equipment and services to boost productivity
            and transform farming across Ethiopia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/services">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Our Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

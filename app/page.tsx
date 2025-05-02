import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tractor, Wheat, Phone, Mail, MapPin, ChevronRight, Leaf } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        {/* Services Section */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide comprehensive mechanized farming solutions to boost agricultural productivity across
                  Ethiopia.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <Tractor className="h-12 w-12 mb-2 text-green-600" />
                  <CardTitle>Land Preparation</CardTitle>
                  <CardDescription>Modern plowing, harrowing, and field preparation services</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our advanced machinery ensures efficient and precise land preparation, saving time and improving
                    soil quality.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/services">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Wheat className="h-12 w-12 mb-2 text-green-600" />
                  <CardTitle>Planting & Harvesting</CardTitle>
                  <CardDescription>Precision planting and efficient harvesting operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Maximize your yield with our state-of-the-art planting and harvesting equipment operated by skilled
                    professionals.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/services">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Leaf className="h-12 w-12 mb-2 text-green-600" />
                  <CardTitle>Crop Management</CardTitle>
                  <CardDescription>Modern solutions for crop protection and maintenance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our specialized equipment for spraying, fertilizing, and crop maintenance ensures healthy growth and
                    optimal yields.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/services">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link href="/services">
                <Button className="bg-green-600 hover:bg-green-700">
                  View All Services
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-12 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Damot Mechanization Farming
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Founded with a vision to transform Ethiopian agriculture through modern mechanization, we bring years
                  of expertise and cutting-edge equipment to farms across the country.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/about">
                    <Button className="bg-green-600 hover:bg-green-700">Our Story</Button>
                  </Link>
                  <Link href="/equipment">
                    <Button variant="outline">Our Equipment</Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Farming equipment in action"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Preview */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Equipment</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We invest in the latest agricultural technology to provide the best service to our clients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Modern tractor"
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-4 text-white">
                    <h3 className="font-bold">Modern Tractors</h3>
                    <p className="text-sm">High-power, fuel-efficient tractors</p>
                  </div>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Harvesting combine"
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-4 text-white">
                    <h3 className="font-bold">Harvesting Combines</h3>
                    <p className="text-sm">Efficient grain harvesting equipment</p>
                  </div>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Precision planter"
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-4 text-white">
                    <h3 className="font-bold">Precision Planters</h3>
                    <p className="text-sm">Advanced seed placement technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/equipment">
                <Button className="bg-green-600 hover:bg-green-700">
                  View All Equipment
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <TestimonialSection />

        {/* Contact CTA */}
        <section className="py-12 md:py-24 bg-green-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Farm?
                </h2>
                <p className="md:text-xl">
                  Contact us today to discuss how our mechanization services can improve your agricultural productivity
                  and profitability.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>+251 XX XXX XXXX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span>info@damotfarming.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>Addis Ababa, Ethiopia</span>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="bg-white text-green-600 hover:bg-gray-100">Contact Us</Button>
                </Link>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-xl lg:h-[400px]">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Farming landscape in Ethiopia"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

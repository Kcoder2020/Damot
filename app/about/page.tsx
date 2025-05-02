import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Tractor, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Ethiopian farmland"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 container px-4 md:px-6 py-24 md:py-32">
            <div className="flex flex-col items-start gap-4 max-w-3xl text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                About Damot Mechanization Farming
              </h1>
              <p className="max-w-[700px] text-lg md:text-xl text-gray-200">
                Transforming Ethiopian agriculture through modern mechanization solutions since 2015.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="text-muted-foreground md:text-lg">
                  Damot Mechanization Farming was founded in 2015 with a clear vision: to revolutionize Ethiopian
                  agriculture through modern mechanization solutions.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Our founder, a third-generation farmer with an agricultural engineering background, witnessed
                  firsthand the challenges faced by Ethiopian farmers due to limited access to modern farming equipment
                  and techniques.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Starting with just two tractors and a small team of dedicated professionals, we have grown to become
                  one of Ethiopia's leading agricultural mechanization service providers, serving hundreds of farms
                  across the country.
                </p>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Founder with farming equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-12 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mission, Vision & Values</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-white border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="rounded-full bg-green-100 p-3">
                      <Target className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Our Mission</h3>
                    <p>
                      To empower Ethiopian farmers with access to modern agricultural technology and expertise, enabling
                      them to increase productivity, profitability, and sustainability. enabling them to increase
                      productivity, profitability, and sustainability.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="rounded-full bg-green-100 p-3">
                      <Tractor className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Our Vision</h3>
                    <p>
                      To be the leading agricultural mechanization service provider in Ethiopia, driving the
                      transformation of traditional farming into a modern, efficient, and sustainable industry that
                      ensures food security and economic prosperity.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="rounded-full bg-green-100 p-3">
                      <Award className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Our Values</h3>
                    <p>
                      Excellence in service, integrity in business practices, innovation in agricultural solutions,
                      sustainability in farming methods, and commitment to the development of Ethiopian agriculture and
                      the communities we serve.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the dedicated professionals behind Damot Mechanization Farming.
                </p>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full mb-4">
                  <Image src="/placeholder.svg?height=400&width=400" alt="Team member" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Dawit Bekele</h3>
                <p className="text-green-600 font-medium">Founder & CEO</p>
                <p className="mt-2 text-muted-foreground">
                  Agricultural engineer with 15+ years of experience in farm mechanization.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full mb-4">
                  <Image src="/placeholder.svg?height=400&width=400" alt="Team member" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Meron Tadesse</h3>
                <p className="text-green-600 font-medium">Operations Director</p>
                <p className="mt-2 text-muted-foreground">
                  Expert in agricultural operations management with a focus on efficiency and sustainability.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full mb-4">
                  <Image src="/placeholder.svg?height=400&width=400" alt="Team member" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Solomon Abebe</h3>
                <p className="text-green-600 font-medium">Technical Director</p>
                <p className="mt-2 text-muted-foreground">
                  Mechanical engineer specialized in agricultural machinery maintenance and optimization.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/contact">
                <Button className="bg-green-600 hover:bg-green-700">
                  Contact Our Team
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-12 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Ethiopian farmers with modern equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact</h2>
                <p className="text-muted-foreground md:text-lg">
                  Since our founding, we have worked with over 500 farms across Ethiopia, helping to increase
                  agricultural productivity by an average of 35%.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Our mechanization services have enabled farmers to cultivate larger areas, reduce post-harvest losses,
                  and improve the quality of their produce.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  We are proud to contribute to Ethiopia's agricultural transformation and food security goals through
                  our work with individual farmers, cooperatives, and commercial farms.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-3xl font-bold text-green-600">500+</p>
                    <p className="text-sm text-muted-foreground">Farms Served</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-3xl font-bold text-green-600">35%</p>
                    <p className="text-sm text-muted-foreground">Average Yield Increase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

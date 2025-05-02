import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tractor, Wheat, Leaf, BarChart, Truck, ChevronRight, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Farming equipment in action"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 container px-4 md:px-6 py-24 md:py-32">
            <div className="flex flex-col items-start gap-4 max-w-3xl text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
              <p className="max-w-[700px] text-lg md:text-xl text-gray-200">
                Comprehensive mechanized farming solutions to boost agricultural productivity across Ethiopia.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Comprehensive Farming Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From land preparation to harvest, we provide end-to-end mechanized farming services tailored to your
                  specific needs.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <Tractor className="h-12 w-12 mb-2 text-green-600" />
                  <CardTitle>Land Preparation</CardTitle>
                  <CardDescription>Modern plowing, harrowing, and field preparation services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Primary tillage with moldboard and disc plows</li>
                    <li>Secondary tillage with disc harrows</li>
                    <li>Land leveling and bed formation</li>
                    <li>Subsoiling for breaking hardpans</li>
                    <li>Precision land preparation for row crops</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Request Service
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Wheat className="h-12 w-12 mb-2 text-green-600" />
                  <CardTitle>Planting & Seeding</CardTitle>
                  <CardDescription>Precision planting and seeding operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Row crop planting with precision planters</li>
                    <li>Grain drill seeding for cereals</li>
                    <li>Broadcast seeding for pastures</li>
                    <li>Transplanting services for vegetables</li>
                    <li>Seed and fertilizer application in one pass</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Request Service
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
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Precision fertilizer application</li>
                    <li>Spraying services for pest and disease control</li>
                    <li>Mechanical weed control</li>
                    <li>Irrigation system installation and management</li>
                    <li>Crop monitoring and advisory services</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Request Service
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Truck className="h-12 w-12 mb-2 text-green-600" />
                  <CardTitle>Harvesting</CardTitle>
                  <CardDescription>Efficient harvesting operations for various crops</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Combine harvesting for grains and pulses</li>
                    <li>Specialized harvesting for row crops</li>
                    <li>Forage harvesting for animal feed</li>
                    <li>Root crop harvesting</li>
                    <li>On-field threshing services</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Request Service
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <BarChart className="h-12 w-12 mb-2 text-green-600" />
                  <CardTitle>Post-Harvest Solutions</CardTitle>
                  <CardDescription>Services to preserve crop quality after harvest</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Grain cleaning and sorting</li>
                    <li>Drying services for grains and other crops</li>
                    <li>Storage solutions and management</li>
                    <li>Primary processing services</li>
                    <li>Quality assessment and grading</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Request Service
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Users className="h-12 w-12 mb-2 text-green-600" />
                  <CardTitle>Training & Consulting</CardTitle>
                  <CardDescription>Knowledge transfer and advisory services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Operator training for farm machinery</li>
                    <li>Farm management consulting</li>
                    <li>Mechanization planning for farms</li>
                    <li>Crop production technical advice</li>
                    <li>Equipment selection and acquisition support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Request Service
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-12 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Service Process</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We follow a structured approach to ensure high-quality service delivery tailored to your specific
                  needs.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Consultation</h3>
                <p className="text-muted-foreground">
                  We meet with you to understand your farm's specific needs, challenges, and goals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Planning</h3>
                <p className="text-muted-foreground">
                  Our team develops a customized service plan tailored to your crop, soil type, and timeline.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Execution</h3>
                <p className="text-muted-foreground">
                  Our skilled operators and modern equipment carry out the planned operations efficiently.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Follow-up</h3>
                <p className="text-muted-foreground">
                  We provide ongoing support and evaluate results to ensure your satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Service Areas</h2>
                <p className="text-muted-foreground md:text-lg">
                  We currently provide our mechanization services across major agricultural regions in Ethiopia,
                  including:
                </p>
                <ul className="grid grid-cols-2 gap-2 mt-4">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    <span>Oromia Region</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    <span>Amhara Region</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    <span>SNNPR</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    <span>Tigray Region</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    <span>Sidama Region</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    <span>Benishangul-Gumuz</span>
                  </li>
                </ul>
                <p className="text-muted-foreground md:text-lg mt-4">
                  We are continuously expanding our service areas to reach more farmers across Ethiopia. Contact us to
                  check availability in your specific location.
                </p>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="bg-green-600 hover:bg-green-700">
                      Contact Us
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Map of Ethiopia showing service areas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-24 bg-green-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Ready to Transform Your Farm?
            </h2>
            <p className="max-w-[900px] mx-auto md:text-xl mb-8">
              Contact us today to discuss how our mechanization services can improve your agricultural productivity and
              profitability.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EquipmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Modern farming equipment"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 container px-4 md:px-6 py-24 md:py-32">
            <div className="flex flex-col items-start gap-4 max-w-3xl text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Equipment</h1>
              <p className="max-w-[700px] text-lg md:text-xl text-gray-200">
                We invest in the latest agricultural technology to provide the best service to our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Equipment Categories */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Equipment Fleet</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We maintain a diverse fleet of modern agricultural equipment to meet all your farming needs.
                </p>
              </div>
            </div>

            {/* Tractors */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 border-l-4 border-green-600 pl-4">Tractors</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="High-power tractor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>High-Power Tractors</CardTitle>
                    <CardDescription>150-250 HP range for heavy-duty operations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Ideal for primary tillage in large fields</li>
                      <li>4WD capability for difficult terrain</li>
                      <li>Advanced GPS guidance systems</li>
                      <li>Climate-controlled cabins for operator comfort</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Medium-power tractor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>Medium-Power Tractors</CardTitle>
                    <CardDescription>75-140 HP range for versatile applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Versatile for various farming operations</li>
                      <li>Excellent fuel efficiency</li>
                      <li>Compatible with a wide range of implements</li>
                      <li>Maneuverability for smaller fields</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Specialized tractor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>Specialized Tractors</CardTitle>
                    <CardDescription>Purpose-built for specific agricultural tasks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Orchard and vineyard tractors</li>
                      <li>Row crop tractors with adjustable wheel spacing</li>
                      <li>Narrow tractors for specialized applications</li>
                      <li>High clearance models for tall crops</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tillage Equipment */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 border-l-4 border-green-600 pl-4">Tillage Equipment</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Primary tillage equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>Primary Tillage</CardTitle>
                    <CardDescription>Equipment for initial soil preparation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Moldboard plows for complete soil inversion</li>
                      <li>Disc plows for heavy residue conditions</li>
                      <li>Chisel plows for reduced tillage systems</li>
                      <li>Subsoilers for breaking compaction layers</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Secondary tillage equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>Secondary Tillage</CardTitle>
                    <CardDescription>Equipment for seedbed preparation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Disc harrows for residue incorporation</li>
                      <li>Field cultivators for seedbed preparation</li>
                      <li>Rotary tillers for intensive soil mixing</li>
                      <li>Bed formers for raised bed cultivation</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Conservation tillage equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>Conservation Tillage</CardTitle>
                    <CardDescription>Equipment for sustainable soil management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Strip-till implements for targeted soil disturbance</li>
                      <li>No-till drills for direct seeding</li>
                      <li>Mulch tillers for residue management</li>
                      <li>Zone tillage equipment for precision farming</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Planting & Seeding */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 border-l-4 border-green-600 pl-4">Planting & Seeding Equipment</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Precision planters"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>Precision Planters</CardTitle>
                    <CardDescription>For accurate seed placement in row crops</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Variable rate technology for optimized seeding</li>
                      <li>Precise depth control for consistent emergence</li>
                      <li>Row monitoring systems for planting accuracy</li>
                      <li>Capability for simultaneous fertilizer application</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Grain drills"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>Grain Drills</CardTitle>
                    <CardDescription>For planting small grains and cover crops</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Conventional and no-till configurations</li>
                      <li>Adjustable row spacing for different crops</li>
                      <li>Press wheels for good seed-to-soil contact</li>
                      <li>Calibration systems for accurate seeding rates</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Specialized seeders"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>Specialized Seeders</CardTitle>
                    <CardDescription>For specific crops and conditions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Vegetable seeders for precise small seed placement</li>
                      <li>Broadcast seeders for pasture renovation</li>
                      <li>Air seeders for large-scale operations</li>
                      <li>Transplanting equipment for vegetable production</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Harvesting Equipment */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 border-l-4 border-green-600 pl-4">Harvesting Equipment</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Combine harvesters"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>Combine Harvesters</CardTitle>
                    <CardDescription>For grain and pulse crops</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Modern combines with high threshing efficiency</li>
                      <li>Adjustable settings for different crops</li>
                      <li>Yield monitoring and mapping capabilities</li>
                      <li>Various header options for different crops</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Forage harvesters"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>Forage Harvesters</CardTitle>
                    <CardDescription>For animal feed production</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Self-propelled and pull-type options</li>
                      <li>Precision cutting for optimal feed quality</li>
                      <li>Multiple crop headers available</li>
                      <li>Kernel processors for improved digestibility</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Specialized harvesters"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>Specialized Harvesters</CardTitle>
                    <CardDescription>For specific crop types</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Root crop harvesters for potatoes and other tubers</li>
                      <li>Cotton pickers for efficient cotton harvesting</li>
                      <li>Vegetable harvesters for commercial production</li>
                      <li>Coffee harvesters for plantation operations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Need Specific Equipment for Your Farm?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Our equipment fleet is continuously expanding. If you don't see what you need, contact us to discuss
                your specific requirements.
              </p>
              <Link href="/contact">
                <Button className="bg-green-600 hover:bg-green-700">
                  Contact Us
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Equipment Maintenance */}
        <section className="py-12 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Equipment maintenance facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Equipment Maintenance & Care</h2>
                <p className="text-muted-foreground md:text-lg">
                  We maintain all our equipment to the highest standards to ensure reliability and performance in the
                  field.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600 mt-2"></div>
                    <span>Regular preventive maintenance by certified technicians</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600 mt-2"></div>
                    <span>Comprehensive pre-season inspections and servicing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600 mt-2"></div>
                    <span>On-site repair capabilities for minimal downtime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600 mt-2"></div>
                    <span>Genuine parts used for all repairs and replacements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600 mt-2"></div>
                    <span>Regular operator training to ensure proper equipment use</span>
                  </li>
                </ul>
                <p className="text-muted-foreground md:text-lg">
                  Our commitment to equipment maintenance ensures that we can provide reliable service when you need it
                  most, minimizing downtime during critical farming operations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

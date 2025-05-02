import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialSection() {
  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from farmers and agricultural businesses who have transformed their operations with our services.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <Quote className="h-8 w-8 text-green-600" />
                <p className="text-lg italic">
                  "Damot Mechanization Farming has completely transformed our wheat production. Their modern equipment
                  and skilled operators increased our yield by 40% while reducing our labor costs."
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Testimonial author"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Abebe Kebede</h4>
                    <p className="text-sm text-muted-foreground">Wheat Farmer, Oromia Region</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <Quote className="h-8 w-8 text-green-600" />
                <p className="text-lg italic">
                  "As a cooperative of small-scale farmers, we couldn't afford our own machinery. Damot's services
                  allowed us to access modern farming technology at an affordable price, improving our members'
                  livelihoods."
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Testimonial author"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Tigist Haile</h4>
                    <p className="text-sm text-muted-foreground">Director, Amhara Farmers Cooperative</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

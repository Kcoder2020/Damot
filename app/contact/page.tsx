"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setIsSubmitted(true)
  }

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
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
              <p className="max-w-[700px] text-lg md:text-xl text-gray-200">
                Get in touch with our team to discuss how we can help transform your farming operations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below, and our team will get back to you within 24 hours to discuss your farming
                  needs.
                </p>

                {isSubmitted ? (
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center gap-2">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                        <h3 className="text-xl font-bold">Thank You!</h3>
                        <p className="text-muted-foreground">
                          Your message has been received. Our team will contact you shortly to discuss your farming
                          needs.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Enter your last name" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="farm-location">Farm Location</Label>
                      <Input id="farm-location" placeholder="Enter your farm location/region" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service-type">Service Interested In</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="land-preparation">Land Preparation</SelectItem>
                          <SelectItem value="planting">Planting & Seeding</SelectItem>
                          <SelectItem value="crop-management">Crop Management</SelectItem>
                          <SelectItem value="harvesting">Harvesting</SelectItem>
                          <SelectItem value="post-harvest">Post-Harvest Solutions</SelectItem>
                          <SelectItem value="training">Training & Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your farming needs and any specific questions you have."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                )}
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Reach out to us directly through these channels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">+251 XX XXX XXXX</p>
                        <p className="text-muted-foreground">+251 XX XXX XXXX (Alternative)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">info@damotfarming.com</p>
                        <p className="text-muted-foreground">support@damotfarming.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Office Address</h3>
                        <p className="text-muted-foreground">
                          Damot Mechanization Farming
                          <br />
                          Bole Sub-City, Addis Ababa
                          <br />
                          Ethiopia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Business Hours</CardTitle>
                    <CardDescription>When you can reach our office team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Note: Field operations run on extended hours during peak farming seasons.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="relative h-[300px] overflow-hidden rounded-xl">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Map location" fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <p className="text-white font-medium">Interactive Map Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our services.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">What areas do you serve?</h3>
                  <p className="text-muted-foreground">
                    We currently provide services across major agricultural regions in Ethiopia, including Oromia,
                    Amhara, SNNPR, Tigray, Sidama, and Benishangul-Gumuz regions. Contact us to check availability in
                    your specific location.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How far in advance should I book your services?</h3>
                  <p className="text-muted-foreground">
                    We recommend booking at least 2-4 weeks in advance for most services, especially during peak farming
                    seasons. For larger projects or specialized services, earlier booking is advisable.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Do you provide services for small-scale farmers?</h3>
                  <p className="text-muted-foreground">
                    Yes, we work with farms of all sizes. For small-scale farmers, we offer cooperative service
                    arrangements where multiple neighboring farms can share the cost of equipment and services.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">What crops do you specialize in?</h3>
                  <p className="text-muted-foreground">
                    We have experience with a wide range of crops including teff, wheat, maize, barley, sorghum, pulses,
                    oilseeds, and various vegetables. Our equipment and expertise can be adapted to most crop types
                    grown in Ethiopia.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Do you offer training for farm workers?</h3>
                  <p className="text-muted-foreground">
                    Yes, we provide training services for farm workers on modern agricultural practices, equipment
                    operation, and maintenance. This can be arranged as part of a comprehensive service package.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">What are your payment terms?</h3>
                  <p className="text-muted-foreground">
                    We offer flexible payment options including advance deposits, post-service payments, and installment
                    plans for larger projects. We can discuss the most suitable arrangement based on your specific
                    needs.
                  </p>
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

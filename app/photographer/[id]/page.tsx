"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Star, MapPin, Camera, ArrowLeft, Mail, Phone, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { photographers, type Photographer } from "@/lib/mock-data"

export default function PhotographerProfilePage() {
  const params = useParams()
  const router = useRouter()
  const [photographer, setPhotographer] = useState<Photographer | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  })

  useEffect(() => {
    const id = Number.parseInt(params.id as string)
    const found = photographers.find((p) => p.id === id)
    setPhotographer(found || null)
  }, [params.id])

  if (!photographer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Photographer not found</h2>
          <Button onClick={() => router.back()} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === photographer.portfolio.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? photographer.portfolio.length - 1 : prev - 1))
  }

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the inquiry to your backend
    console.log("Inquiry submitted:", inquiryForm)
    setIsInquiryOpen(false)
    setInquiryForm({ name: "", email: "", phone: "", eventDate: "", message: "" })
    // Show success message
    alert("Inquiry sent successfully! The photographer will contact you soon.")
  }

  const averageRating =
    photographer.reviews.reduce((acc, review) => acc + review.rating, 0) / photographer.reviews.length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-rose-600 text-white py-8">
        <div className="container mx-auto px-4">
          <Button variant="ghost" onClick={() => router.back()} className="text-white hover:bg-white/20 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Search
          </Button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <Image
                src={photographer.profilePic || "/placeholder.svg"}
                alt={photographer.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-white/20"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{photographer.name}</h1>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{photographer.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>
                    {photographer.rating} ({photographer.reviews.length} reviews)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Camera className="h-4 w-4" />
                <span className="text-lg font-semibold">Starting from ₹{photographer.price.toLocaleString()}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {photographer.styles.map((style) => (
                  <Badge key={style} variant="secondary" className="bg-white/20 text-white">
                    {style}
                  </Badge>
                ))}
              </div>
            </div>

            <Dialog open={isInquiryOpen} onOpenChange={setIsInquiryOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Inquiry
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Send Inquiry to {photographer.name}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm((prev) => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm((prev) => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm((prev) => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={inquiryForm.eventDate}
                      onChange={(e) => setInquiryForm((prev) => ({ ...prev, eventDate: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your event and requirements..."
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm((prev) => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Inquiry
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{photographer.bio}</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {photographer.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Portfolio Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                {photographer.portfolio.length > 0 && (
                  <div className="space-y-4">
                    {/* Main Image */}
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={photographer.portfolio[currentImageIndex] || "/placeholder.svg"}
                        alt={`Portfolio ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                      {photographer.portfolio.length > 1 && (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                            onClick={prevImage}
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                            onClick={nextImage}
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>

                    {/* Thumbnail Grid */}
                    {photographer.portfolio.length > 1 && (
                      <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                        {photographer.portfolio.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`relative aspect-square rounded overflow-hidden ${
                              index === currentImageIndex ? "ring-2 ring-orange-600" : ""
                            }`}
                          >
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Thumbnail ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews ({photographer.reviews.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {photographer.reviews.map((review, index) => (
                  <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{review.name}</span>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Starting Price</span>
                  <span className="font-semibold">₹{photographer.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Average Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{photographer.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Reviews</span>
                  <span className="font-semibold">{photographer.reviews.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-semibold">{photographer.location}</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Dialog open={isInquiryOpen} onOpenChange={setIsInquiryOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Inquiry
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Button variant="outline" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Check Availability
                </Button>
              </CardContent>
            </Card>

            {/* Photography Styles */}
            <Card>
              <CardHeader>
                <CardTitle>Photography Styles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {photographer.styles.map((style) => (
                    <div key={style} className="flex items-center justify-between">
                      <span>{style}</span>
                      <Badge variant="secondary">Available</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, Heart, Award, Globe } from "lucide-react"
import Image from "next/image"

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Visionary leader with 15+ years in tech innovation.",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Full-stack architect passionate about scalable solutions.",
    },
    {
      name: "Emily Watson",
      role: "Head of Design",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Creative director focused on user-centered design.",
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Engineering leader building high-performance teams.",
    },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission-Driven",
      description: "We're committed to solving real problems that matter to our users and communities.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technology and creative thinking to push boundaries.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "People-Centered",
      description: "Our team and customers are at the heart of everything we do.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Impact",
      description: "We build solutions that create positive change on a worldwide scale.",
    },
  ]

  const stats = [
    { number: "500K+", label: "Active Users" },
    { number: "50+", label: "Team Members" },
    { number: "25+", label: "Countries" },
    { number: "99.9%", label: "Uptime" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-rose-50" />
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="text-orange-600 border-orange-200">
              About Our Company
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Building the future, one innovation at a time
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're a passionate team of creators, engineers, and visionaries dedicated to transforming ideas into
              powerful digital experiences that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Join Our Team
              </Button>
              <Button size="lg" variant="outline">
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="text-orange-600 border-orange-200">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">From startup to industry leader</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2018 with a simple mission: to democratize technology and make powerful tools accessible to
                  everyone. What started as a small team of five has grown into a global company serving millions of
                  users worldwide.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, strategic partnerships, and an unwavering
                  commitment to our core values. We've weathered challenges, celebrated victories, and learned valuable
                  lessons that shape who we are today.
                </p>
                <p>
                  Today, we're proud to be at the forefront of digital transformation, helping businesses and
                  individuals achieve their goals through cutting-edge technology and exceptional user experiences.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Award className="h-6 w-6 text-orange-600" />
                <span className="font-medium">Winner of Tech Innovation Award 2023</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our office and team"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-orange-600" />
                  <div>
                    <div className="font-bold text-lg">50+ Experts</div>
                    <div className="text-sm text-muted-foreground">Across 6 countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-orange-600 border-orange-200">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">What drives us forward</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and shape the culture we've built together.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-orange-600 border-orange-200">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Meet the people behind the magic</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience and fresh perspectives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-orange-600 font-medium">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Team Members
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-rose-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to join our journey?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Whether you're looking to join our team, partner with us, or simply want to learn more about what we do,
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600"
              >
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

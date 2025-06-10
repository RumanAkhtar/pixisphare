import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Photographer } from "@/lib/mock-data"

interface PhotographerCardProps {
  photographer: Photographer
}

export function PhotographerCard({ photographer }: PhotographerCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={photographer.profilePic || "/placeholder.svg"}
            alt={photographer.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{photographer.rating}</span>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-lg group-hover:text-orange-600 transition-colors">{photographer.name}</h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <MapPin className="h-3 w-3" />
              {photographer.location}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Camera className="h-4 w-4 text-orange-600" />
            <span className="font-medium">Starting from ₹{photographer.price.toLocaleString()}</span>
          </div>

          <div className="flex flex-wrap gap-1">
            {photographer.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {photographer.tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{photographer.tags.length - 2} more
              </Badge>
            )}
          </div>

          <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
            {photographer.styles.map((style) => (
              <span key={style} className="bg-muted px-2 py-1 rounded">
                {style}
              </span>
            ))}
          </div>

          <Link href={`/photographer/${photographer.id}`} className="block">
            <Button className="w-full bg-orange-600 hover:bg-orange-700">View Profiles</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

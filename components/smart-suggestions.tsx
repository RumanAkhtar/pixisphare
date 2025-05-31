import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

interface SmartSuggestionsProps {
  city?: string
  category?: string
}

export function SmartSuggestions({ city = "Bengaluru", category = "maternity" }: SmartSuggestionsProps) {
  const suggestions = [
    `Top-rated ${category} photographers in ${city}`,
    `Affordable ${category} photography under ₹10,000`,
    `Outdoor ${category} specialists near you`,
    `Studio ${category} photography with props`,
  ]

  return (
    <Card className="bg-gradient-to-r from-orange-50 to-rose-50 border-orange-200">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-4 w-4 text-orange-600" />
          <span className="text-sm font-medium text-orange-800">AI Smart Suggestions</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion, index) => (
            <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-orange-100 transition-colors">
              {suggestion}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

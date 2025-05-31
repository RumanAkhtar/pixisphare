"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Filter } from "lucide-react"
import { cities, styles, tags } from "@/lib/mock-data"

export interface Filters {
  priceRange: [number, number]
  minRating: number
  selectedStyles: string[]
  selectedTags: string[]
  city: string
  sortBy: string
}

interface FiltersSidebarProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => void
  onClearFilters: () => void
}

export function FiltersSidebar({ filters, onFiltersChange, onClearFilters }: FiltersSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const updateFilters = (updates: Partial<Filters>) => {
    onFiltersChange({ ...filters, ...updates })
  }

  const toggleStyle = (style: string) => {
    const newStyles = filters.selectedStyles.includes(style)
      ? filters.selectedStyles.filter((s) => s !== style)
      : [...filters.selectedStyles, style]
    updateFilters({ selectedStyles: newStyles })
  }

  const toggleTag = (tag: string) => {
    const newTags = filters.selectedTags.includes(tag)
      ? filters.selectedTags.filter((t) => t !== tag)
      : [...filters.selectedTags, tag]
    updateFilters({ selectedTags: newTags })
  }

  const hasActiveFilters =
    filters.priceRange[0] > 5000 ||
    filters.priceRange[1] < 20000 ||
    filters.minRating > 0 ||
    filters.selectedStyles.length > 0 ||
    filters.selectedTags.length > 0 ||
    filters.city !== "All Cities"

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Active Filters</span>
          <Button variant="ghost" size="sm" onClick={onClearFilters}>
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        </div>
      )}

      {/* Sort By */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Sort By</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={filters.sortBy} onValueChange={(value) => updateFilters({ sortBy: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating-desc">Rating: High to Low</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="recently-added">Recently Added</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
            max={20000}
            min={5000}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{filters.priceRange[0].toLocaleString()}</span>
            <span>₹{filters.priceRange[1].toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      {/* Rating */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Minimum Rating</CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            value={filters.minRating.toString()}
            onValueChange={(value) => updateFilters({ minRating: Number.parseFloat(value) })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Any Rating</SelectItem>
              <SelectItem value="3">3+ Stars</SelectItem>
              <SelectItem value="4">4+ Stars</SelectItem>
              <SelectItem value="4.5">4.5+ Stars</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* City */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">City</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={filters.city} onValueChange={(value) => updateFilters({ city: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Photography Styles */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Photography Styles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {styles.map((style) => (
            <div key={style} className="flex items-center space-x-2">
              <Checkbox
                id={`style-${style}`}
                checked={filters.selectedStyles.includes(style)}
                onCheckedChange={() => toggleStyle(style)}
              />
              <Label htmlFor={`style-${style}`} className="text-sm">
                {style}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Specializations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {tags.map((tag) => (
            <div key={tag} className="flex items-center space-x-2">
              <Checkbox
                id={`tag-${tag}`}
                checked={filters.selectedTags.includes(tag)}
                onCheckedChange={() => toggleTag(tag)}
              />
              <Label htmlFor={`tag-${tag}`} className="text-sm">
                {tag}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <Button variant="outline" onClick={() => setIsOpen(!isOpen)} className="w-full">
          <Filter className="h-4 w-4 mr-2" />
          Filters{" "}
          {hasActiveFilters &&
            `(${filters.selectedStyles.length + filters.selectedTags.length + (filters.city !== "All Cities" ? 1 : 0)})`}
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <FilterContent />
      </div>

      {/* Mobile Filters */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <FilterContent />
            <div className="mt-6 flex gap-2">
              <Button onClick={() => setIsOpen(false)} className="flex-1">
                Apply Filters
              </Button>
              <Button variant="outline" onClick={onClearFilters}>
                Clear
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

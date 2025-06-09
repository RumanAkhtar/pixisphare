"use client"

import { useState, useMemo, useEffect } from "react"
import { PhotographerCard } from "@/components/photographer-card"
import { PhotographerSkeleton } from "@/components/photographer-skeleton"
import { FiltersSidebar, type Filters } from "@/components/filters-sidebar"
import { SearchBar } from "@/components/search-bar"
import { SmartSuggestions } from "@/components/smart-suggestions"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { photographers } from "@/lib/mock-data"

export default function CategoryListingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [displayCount, setDisplayCount] = useState(6)

  const [filters, setFilters] = useState<Filters>({
    priceRange: [5000, 20000],
    minRating: 0,
    selectedStyles: [],
    selectedTags: [],
    city: "All Cities",
    sortBy: "rating-desc",
  })

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const filteredAndSortedPhotographers = useMemo(() => {
    const filtered = photographers.filter((photographer) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch =
          photographer.name.toLowerCase().includes(query) ||
          photographer.location.toLowerCase().includes(query) ||
          photographer.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          photographer.styles.some((style) => style.toLowerCase().includes(query))

        if (!matchesSearch) return false
      }

      // Price range filter
      if (photographer.price < filters.priceRange[0] || photographer.price > filters.priceRange[1]) {
        return false
      }

      // Rating filter
      if (photographer.rating < filters.minRating) {
        return false
      }

      // City filter
      if (filters.city !== "All Cities" && photographer.location !== filters.city) {
        return false
      }

      // Styles filter
      if (filters.selectedStyles.length > 0) {
        const hasMatchingStyle = filters.selectedStyles.some((style) => photographer.styles.includes(style))
        if (!hasMatchingStyle) return false
      }

      // Tags filter
      if (filters.selectedTags.length > 0) {
        const hasMatchingTag = filters.selectedTags.some((tag) => photographer.tags.includes(tag))
        if (!hasMatchingTag) return false
      }

      return true
    })

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "rating-desc":
          return b.rating - a.rating
        case "recently-added":
          return b.id - a.id
        default:
          return b.rating - a.rating
      }
    })

    return filtered
  }, [searchQuery, filters])

  const displayedPhotographers = filteredAndSortedPhotographers.slice(0, displayCount)
  const hasMore = displayCount < filteredAndSortedPhotographers.length

  const clearFilters = () => {
    setFilters({
      priceRange: [5000, 20000],
      minRating: 0,
      selectedStyles: [],
      selectedTags: [],
      city: "All Cities",
      sortBy: "rating-desc",
    })
    setSearchQuery("")
  }

  const loadMore = () => {
    setDisplayCount((prev) => prev + 6)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-rose-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">Find the Perfect Photographer</h1>
            <p className="text-lg opacity-90">Discovery talented photographers for your special moments</p>
            <div className="max-w-2xl text-black mx-auto">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search photographers, locations, or specializations..."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Smart Suggestions */}
        <div className="mb-8">
          <SmartSuggestions />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <FiltersSidebar filters={filters} onFiltersChange={setFilters} onClearFilters={clearFilters} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  {isLoading ? "Loading..." : `${filteredAndSortedPhotographers.length} Photographers Found`}
                </h2>
                {searchQuery && <p className="text-muted-foreground">Results for "{searchQuery}"</p>}
              </div>

              {/* Active Filters */}
              {(filters.selectedStyles.length > 0 || filters.selectedTags.length > 0) && (
                <div className="hidden md:flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Filters:</span>
                  {filters.selectedStyles.map((style) => (
                    <Badge key={style} variant="secondary">
                      {style}
                    </Badge>
                  ))}
                  {filters.selectedTags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Photographers Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {isLoading
                ? Array.from({ length: 6 }).map((_, index) => <PhotographerSkeleton key={index} />)
                : displayedPhotographers.map((photographer) => (
                    <PhotographerCard key={photographer.id} photographer={photographer} />
                  ))}
            </div>

            {/* Load More */}
            {!isLoading && hasMore && (
              <div className="text-center mt-8">
                <Button onClick={loadMore} variant="outline" size="lg">
                  Load More Photographers
                </Button>
              </div>
            )}

            {/* No Results */}
            {!isLoading && filteredAndSortedPhotographers.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No photographers found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

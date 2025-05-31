export interface Photographer {
  id: number
  name: string
  location: string
  price: number
  rating: number
  styles: string[]
  tags: string[]
  bio: string
  profilePic: string
  portfolio: string[]
  reviews: Review[]
}

export interface Review {
  name: string
  rating: number
  comment: string
  date: string
}

export const photographers: Photographer[] = [
  {
    id: 1,
    name: "Ravi Studio",
    location: "Bengaluru",
    price: 10000,
    rating: 4.6,
    styles: ["Outdoor", "Studio"],
    tags: ["Candid", "Maternity"],
    bio: "Award-winning studio specializing in maternity and newborn shoots.",
    profilePic: "https://images.unsplash.com/photo-1480365334925-2aee561aa28e?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    portfolio: [
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1528364226066-ec76a960030b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8T3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE91dGRvb3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1464069668014-99e9cd4abf16?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fE91dGRvb3J8ZW58MHx8MHx8fDA%3D",
    ],
    reviews: [
      {
        name: "Ananya",
        rating: 5,
        comment: "Truly amazing photos and experience!",
        date: "2024-12-15",
      },
      {
        name: "Meera",
        rating: 4.5,
        comment: "Professional and creative approach to maternity photography.",
        date: "2024-11-20",
      },
    ],
  },
  {
    id: 2,
    name: "Lens Queen Photography",
    location: "Delhi",
    price: 15000,
    rating: 4.2,
    styles: ["Candid", "Indoor"],
    tags: ["Newborn", "Birthday"],
    bio: "Delhi-based candid specialist for kids and birthday parties.",
    profilePic: "https://plus.unsplash.com/premium_photo-1674389991678-0836ca77c7f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    portfolio: [
      "https://plus.unsplash.com/premium_photo-1682546068715-386bd3c676e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FuZGlkfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1544077449-199c4040f04a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENhbmRpZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1588977827076-b4db84d29151?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENhbmRpZHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    reviews: [
      {
        name: "Priya",
        rating: 4,
        comment: "Very professional and punctual!",
        date: "2024-10-01",
      },
    ],
  },
  {
    id: 3,
    name: "Click Factory",
    location: "Mumbai",
    price: 8000,
    rating: 4.8,
    styles: ["Studio", "Outdoor", "Traditional"],
    tags: ["Wedding", "Pre-wedding"],
    bio: "Capturing timeless wedding stories across India.",
    profilePic: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    portfolio: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1690148812608-9942834931a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1674581215484-e6242a37c51e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    ],
    reviews: [
      {
        name: "Rahul",
        rating: 5,
        comment: "We loved every single moment they captured.",
        date: "2025-01-22",
      },
      {
        name: "Kavya",
        rating: 4.8,
        comment: "Exceptional wedding photography with attention to detail.",
        date: "2024-12-10",
      },
    ],
  },
  {
    id: 4,
    name: "Moments by Neha",
    location: "Bengaluru",
    price: 12000,
    rating: 4.3,
    styles: ["Outdoor", "Candid"],
    tags: ["Maternity", "Couple"],
    bio: "Natural light specialist focusing on emotional storytelling.",
    profilePic: "https://plus.unsplash.com/premium_photo-1682097066897-209d0d9e9ae5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    portfolio: [
      "https://plus.unsplash.com/premium_photo-1716937631637-d788a7590aa7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fENhbmRpZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675369024334-421784aa1574?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fENhbmRpZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1505673271747-923ee579555c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxDYW5kaWR8ZW58MHx8MHx8fDA%3D",
    ],
    reviews: [
      {
        name: "Sneha",
        rating: 4.5,
        comment: "Captured our maternity journey so beautifully.",
        date: "2024-11-05",
      },
    ],
  },
  {
    id: 5,
    name: "Snapshot Studio",
    location: "Hyderabad",
    price: 7000,
    rating: 3.9,
    styles: ["Studio"],
    tags: ["Birthday", "Family"],
    bio: "Affordable indoor shoots with creative themes.",
    profilePic: "https://plus.unsplash.com/premium_photo-1716328265454-edb37fb8d492?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxwaG90b2dyYXBoZXJ8ZW58MHx8MHx8fDA%3D",
    portfolio: ["https://media.istockphoto.com/id/2158580612/photo/mature-woman-celebrating-birthday-with-family-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=BW9v0WFbTZNCLqivHjvNQFFAzFB7BaEqIi09ejFmGxE=", "https://images.unsplash.com/photo-1482731910308-31e96e5d1d28?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fEJpcnRoZGF5fGVufDB8fDB8fHww"],
    reviews: [
      {
        name: "Vikram",
        rating: 3.5,
        comment: "Decent service, could improve on punctuality.",
        date: "2024-09-10",
      },
    ],
  },
  {
    id: 6,
    name: "Artistic Frames",
    location: "Chennai",
    price: 11000,
    rating: 4.7,
    styles: ["Traditional", "Studio"],
    tags: ["Wedding", "Family"],
    bio: "Traditional photography with modern techniques for timeless memories.",
    profilePic: "https://images.unsplash.com/photo-1475274226786-e636f48a5645?q=80&w=2947&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    portfolio: [
      "https://images.unsplash.com/photo-1667132712523-e22ceda0dcd9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJhZGl0aW9uYWx8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1585302397841-b42e837d0d81?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VHJhZGl0aW9uYWx8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1692870613890-380d202518f4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fFRyYWRpdGlvbmFsfGVufDB8fDB8fHww",
    ],
    reviews: [
      {
        name: "Lakshmi",
        rating: 5,
        comment: "Beautiful traditional wedding photography!",
        date: "2024-12-01",
      },
    ],
  },
  {
    id: 7,
    name: "Urban Lens",
    location: "Pune",
    price: 9500,
    rating: 4.4,
    styles: ["Candid", "Outdoor"],
    tags: ["Couple", "Pre-wedding"],
    bio: "Contemporary photography for modern couples in urban settings.",
    profilePic: "https://images.unsplash.com/photo-1719937206094-8de79c912f40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D",
    portfolio: [
      "https://plus.unsplash.com/premium_photo-1714839369049-482a3683d5d0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fENhbmRpZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1625725764771-663bbc578f2e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fENhbmRpZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1712029680474-57b0c1e186fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fENhbmRpZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1634546269470-d59cff60d1be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fENhbmRpZHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    reviews: [
      {
        name: "Arjun",
        rating: 4.5,
        comment: "Great pre-wedding shoot experience!",
        date: "2024-10-15",
      },
    ],
  },
  {
    id: 8,
    name: "Little Angels Photography",
    location: "Bengaluru",
    price: 6500,
    rating: 4.1,
    styles: ["Indoor", "Studio"],
    tags: ["Newborn", "Baby"],
    bio: "Specialized in newborn and baby photography with safe, comfortable setups.",
    profilePic: "https://images.unsplash.com/photo-1601934025804-c631e2777f26?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D",
    portfolio: ["https://images.unsplash.com/photo-1659771073908-2c7fd84f5be6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxDYW5kaWR8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1506490100646-2e5d275fe00e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxDYW5kaWR8ZW58MHx8MHx8fDA%3D"],
    reviews: [
      {
        name: "Divya",
        rating: 4,
        comment: "Very gentle with babies, great patience.",
        date: "2024-11-12",
      },
    ],
  },
]

export const cities = ["All Cities", "Bengaluru", "Delhi", "Mumbai", "Hyderabad", "Chennai", "Pune"]
export const styles = ["Traditional", "Candid", "Studio", "Outdoor", "Indoor"]
export const tags = ["Maternity", "Newborn", "Birthday", "Wedding", "Pre-wedding", "Couple", "Family", "Baby"]

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface Profile {
  id: string
  user_id: string
  email: string | null
  full_name: string | null
  role: 'admin' | 'user'
  created_at: string
  updated_at: string
}

export interface ContactInquiry {
  id: string
  name: string
  email: string
  phone: string | null
  subject: string | null
  message: string
  status: 'new' | 'contacted' | 'completed'
  created_at: string
  updated_at: string
}

export interface PortfolioProject {
  id: string
  title: string
  description: string | null
  category: 'residential' | 'commercial' | 'hospitality' | 'showroom'
  client_name: string | null
  location: string | null
  completion_date: string | null
  project_size: string | null
  image_url: string | null
  gallery_images: string[] | null
  featured: boolean
  status: 'active' | 'draft' | 'archived'
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  client_name: string
  client_title: string | null
  company_name: string | null
  testimonial_text: string
  rating: number | null
  project_id: string | null
  image_url: string | null
  featured: boolean
  status: 'active' | 'draft' | 'archived'
  created_at: string
  updated_at: string
}

export interface ServiceInquiry {
  id: string
  name: string
  email: string
  phone: string | null
  service_type: 'turnkey' | 'architecture' | 'interiors' | 'landscaping' | 'project_management' | 'electrical' | 'ac' | 'utilities'
  project_type: 'residential' | 'commercial' | 'hospitality' | 'showroom' | null
  budget_range: string | null
  project_timeline: string | null
  location: string | null
  project_details: string | null
  status: 'new' | 'quoted' | 'approved' | 'in_progress' | 'completed'
  created_at: string
  updated_at: string
}

export interface NewsletterSubscriber {
  id: string
  email: string
  name: string | null
  subscribed_at: string
  status: 'active' | 'unsubscribed'
}
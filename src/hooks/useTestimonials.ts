import { useState, useEffect } from 'react'
import { supabase, Testimonial } from '@/lib/supabase'

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('status', 'active')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false })

      if (error) throw error
      setTestimonials(data || [])
    } catch (err: any) {
      console.error('Error fetching testimonials:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const getFeaturedTestimonials = () => {
    return testimonials.filter(testimonial => testimonial.featured)
  }

  return {
    testimonials,
    loading,
    error,
    getFeaturedTestimonials,
    refetch: fetchTestimonials
  }
}
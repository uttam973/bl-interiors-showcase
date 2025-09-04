import { useState, useEffect } from 'react'
import { supabase, PortfolioProject } from '@/lib/supabase'

export function usePortfolio() {
  const [projects, setProjects] = useState<PortfolioProject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .eq('status', 'active')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false })

      if (error) throw error
      setProjects(data || [])
    } catch (err: any) {
      console.error('Error fetching portfolio projects:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const getFeaturedProjects = () => {
    return projects.filter(project => project.featured)
  }

  const getProjectsByCategory = (category?: string) => {
    if (!category) return projects
    return projects.filter(project => project.category === category)
  }

  return {
    projects,
    loading,
    error,
    getFeaturedProjects,
    getProjectsByCategory,
    refetch: fetchProjects
  }
}
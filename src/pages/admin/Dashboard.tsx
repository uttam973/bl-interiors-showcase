import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { supabase, ContactInquiry, ServiceInquiry, PortfolioProject, Testimonial, NewsletterSubscriber } from '@/lib/supabase'
import { useAuthContext } from '@/components/AuthProvider'
import { useToast } from '@/hooks/use-toast'
import { 
  Users, 
  MessageSquare, 
  Briefcase, 
  Star, 
  Mail, 
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Plus
} from 'lucide-react'

export default function AdminDashboard() {
  const { user, profile, signOut, isAdmin } = useAuthContext()
  const { toast } = useToast()
  const [stats, setStats] = useState({
    contactInquiries: 0,
    serviceInquiries: 0,
    portfolioProjects: 0,
    testimonials: 0,
    newsletterSubscribers: 0
  })
  const [contactInquiries, setContactInquiries] = useState<ContactInquiry[]>([])
  const [serviceInquiries, setServiceInquiries] = useState<ServiceInquiry[]>([])
  const [portfolioProjects, setPortfolioProjects] = useState<PortfolioProject[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [newsletterSubscribers, setNewsletterSubscribers] = useState<NewsletterSubscriber[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isAdmin) {
      fetchData()
    }
  }, [isAdmin])

  const fetchData = async () => {
    try {
      const [
        contactRes,
        serviceRes,
        portfolioRes,
        testimonialsRes,
        newsletterRes
      ] = await Promise.all([
        supabase.from('contact_inquiries').select('*').order('created_at', { ascending: false }),
        supabase.from('service_inquiries').select('*').order('created_at', { ascending: false }),
        supabase.from('portfolio_projects').select('*').order('created_at', { ascending: false }),
        supabase.from('testimonials').select('*').order('created_at', { ascending: false }),
        supabase.from('newsletter_subscribers').select('*').order('subscribed_at', { ascending: false })
      ])

      if (contactRes.data) setContactInquiries(contactRes.data)
      if (serviceRes.data) setServiceInquiries(serviceRes.data)
      if (portfolioRes.data) setPortfolioProjects(portfolioRes.data)
      if (testimonialsRes.data) setTestimonials(testimonialsRes.data)
      if (newsletterRes.data) setNewsletterSubscribers(newsletterRes.data)

      setStats({
        contactInquiries: contactRes.data?.length || 0,
        serviceInquiries: serviceRes.data?.length || 0,
        portfolioProjects: portfolioRes.data?.length || 0,
        testimonials: testimonialsRes.data?.length || 0,
        newsletterSubscribers: newsletterRes.data?.length || 0
      })
    } catch (error) {
      console.error('Error fetching data:', error)
      toast({
        title: "Error loading data",
        description: "Please refresh the page and try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of the admin dashboard.",
      })
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const getStatusBadge = (status: string) => {
    const variants: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
      new: 'destructive',
      contacted: 'outline',
      completed: 'default',
      active: 'default',
      draft: 'secondary',
      archived: 'outline'
    }
    return <Badge variant={variants[status] || 'default'}>{status}</Badge>
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You don't have admin privileges to access this dashboard.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">BL Interiors Admin</h1>
            <p className="text-muted-foreground">Welcome back, {profile?.full_name || user?.email}</p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contact Inquiries</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.contactInquiries}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Service Inquiries</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.serviceInquiries}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Portfolio Projects</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.portfolioProjects}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.testimonials}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.newsletterSubscribers}</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="contact" className="space-y-4">
          <TabsList>
            <TabsTrigger value="contact">Contact Inquiries</TabsTrigger>
            <TabsTrigger value="services">Service Inquiries</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
          </TabsList>

          <TabsContent value="contact" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Contact Inquiries</h2>
            </div>
            <div className="grid gap-4">
              {contactInquiries.map((inquiry) => (
                <Card key={inquiry.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{inquiry.name}</CardTitle>
                        <CardDescription>{inquiry.email} • {inquiry.phone}</CardDescription>
                      </div>
                      {getStatusBadge(inquiry.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">{inquiry.subject && <strong>Subject: </strong>}{inquiry.subject}</p>
                    <p className="text-muted-foreground">{inquiry.message}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Received: {new Date(inquiry.created_at).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Service Inquiries</h2>
            </div>
            <div className="grid gap-4">
              {serviceInquiries.map((inquiry) => (
                <Card key={inquiry.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{inquiry.name}</CardTitle>
                        <CardDescription>{inquiry.email} • {inquiry.phone}</CardDescription>
                      </div>
                      {getStatusBadge(inquiry.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p><strong>Service:</strong> {inquiry.service_type.replace('_', ' ')}</p>
                        <p><strong>Project Type:</strong> {inquiry.project_type || 'Not specified'}</p>
                      </div>
                      <div>
                        <p><strong>Budget:</strong> {inquiry.budget_range || 'Not specified'}</p>
                        <p><strong>Timeline:</strong> {inquiry.project_timeline || 'Not specified'}</p>
                      </div>
                    </div>
                    {inquiry.location && <p><strong>Location:</strong> {inquiry.location}</p>}
                    {inquiry.project_details && (
                      <div className="mt-2">
                        <strong>Project Details:</strong>
                        <p className="text-muted-foreground mt-1">{inquiry.project_details}</p>
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">
                      Received: {new Date(inquiry.created_at).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Portfolio Projects</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Project
              </Button>
            </div>
            <div className="grid gap-4">
              {portfolioProjects.map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <CardDescription>{project.client_name} • {project.location}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        {project.featured && <Badge variant="secondary">Featured</Badge>}
                        {getStatusBadge(project.status)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{project.description}</p>
                    <div className="flex gap-4 text-sm">
                      <span><strong>Category:</strong> {project.category}</span>
                      {project.completion_date && (
                        <span><strong>Completed:</strong> {new Date(project.completion_date).toLocaleDateString()}</span>
                      )}
                      {project.project_size && <span><strong>Size:</strong> {project.project_size}</span>}
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="testimonials" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Client Testimonials</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Testimonial
              </Button>
            </div>
            <div className="grid gap-4">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{testimonial.client_name}</CardTitle>
                        <CardDescription>
                          {testimonial.client_title} • {testimonial.company_name}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        {testimonial.featured && <Badge variant="secondary">Featured</Badge>}
                        {testimonial.rating && (
                          <Badge variant="outline">
                            <Star className="mr-1 h-3 w-3 fill-current" />
                            {testimonial.rating}
                          </Badge>
                        )}
                        {getStatusBadge(testimonial.status)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{testimonial.testimonial_text}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="newsletter" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Newsletter Subscribers</h2>
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Send Newsletter
              </Button>
            </div>
            <div className="grid gap-2">
              {newsletterSubscribers.map((subscriber) => (
                <Card key={subscriber.id}>
                  <CardContent className="flex justify-between items-center py-4">
                    <div>
                      <p className="font-medium">{subscriber.name || 'Anonymous'}</p>
                      <p className="text-sm text-muted-foreground">{subscriber.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {new Date(subscriber.subscribed_at).toLocaleDateString()}
                      </span>
                      {getStatusBadge(subscriber.status)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
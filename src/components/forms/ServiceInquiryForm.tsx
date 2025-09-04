import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'
import { Loader2, Send } from 'lucide-react'

interface ServiceInquiryFormProps {
  onSuccess?: () => void
}

export function ServiceInquiryForm({ onSuccess }: ServiceInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    project_type: '',
    budget_range: '',
    project_timeline: '',
    location: '',
    project_details: ''
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const serviceTypes = [
    { value: 'turnkey', label: 'Turnkey Projects' },
    { value: 'architecture', label: 'Architecture' },
    { value: 'interiors', label: 'Interior Design' },
    { value: 'landscaping', label: 'Landscaping' },
    { value: 'project_management', label: 'Project Management' },
    { value: 'electrical', label: 'Electrical' },
    { value: 'ac', label: 'Air-Conditioning' },
    { value: 'utilities', label: 'Utilities' }
  ]

  const projectTypes = [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'showroom', label: 'Showroom' }
  ]

  const budgetRanges = [
    { value: '5-15', label: '₹5L - ₹15L' },
    { value: '15-50', label: '₹15L - ₹50L' },
    { value: '50-100', label: '₹50L - ₹1Cr' },
    { value: '100+', label: '₹1Cr+' },
    { value: 'discuss', label: 'Prefer to discuss' }
  ]

  const timelines = [
    { value: '1-3', label: '1-3 months' },
    { value: '3-6', label: '3-6 months' },
    { value: '6-12', label: '6-12 months' },
    { value: '12+', label: '12+ months' },
    { value: 'flexible', label: 'Flexible' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from('service_inquiries')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          service_type: formData.service_type,
          project_type: formData.project_type || null,
          budget_range: formData.budget_range || null,
          project_timeline: formData.project_timeline || null,
          location: formData.location || null,
          project_details: formData.project_details || null
        }])

      if (error) throw error

      toast({
        title: "Service inquiry submitted!",
        description: "Our team will contact you with a detailed proposal within 48 hours.",
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service_type: '',
        project_type: '',
        budget_range: '',
        project_timeline: '',
        location: '',
        project_details: ''
      })

      onSuccess?.()
    } catch (error: any) {
      console.error('Error submitting service inquiry:', error)
      toast({
        title: "Failed to submit inquiry",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Request a Service Quote</CardTitle>
        <CardDescription>
          Tell us about your project and we'll provide a detailed proposal
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98806 17307"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Project Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="City, State"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Project Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Project Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Service Required *</Label>
                <Select value={formData.service_type} onValueChange={(value) => handleSelectChange('service_type', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Project Type</Label>
                <Select value={formData.project_type} onValueChange={(value) => handleSelectChange('project_type', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Budget Range</Label>
                <Select value={formData.budget_range} onValueChange={(value) => handleSelectChange('budget_range', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Project Timeline</Label>
                <Select value={formData.project_timeline} onValueChange={(value) => handleSelectChange('project_timeline', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    {timelines.map((timeline) => (
                      <SelectItem key={timeline.value} value={timeline.value}>
                        {timeline.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <Label htmlFor="project_details">Project Description</Label>
            <Textarea
              id="project_details"
              name="project_details"
              placeholder="Please describe your project requirements, space details, specific needs, etc..."
              rows={5}
              value={formData.project_details}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading || !formData.service_type}>
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Send className="mr-2 h-4 w-4" />
            )}
            Submit Service Inquiry
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
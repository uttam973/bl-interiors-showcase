import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'
import { Loader2, Mail, CheckCircle } from 'lucide-react'

interface NewsletterSignupProps {
  className?: string
  showName?: boolean
  placeholder?: string
}

export function NewsletterSignup({ 
  className = "", 
  showName = false,
  placeholder = "Enter your email address"
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{
          email: email,
          name: showName ? name || null : null
        }])

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already subscribed!",
            description: "This email is already subscribed to our newsletter.",
            variant: "destructive",
          })
        } else {
          throw error
        }
      } else {
        setSubscribed(true)
        toast({
          title: "Successfully subscribed!",
          description: "You'll receive our latest updates and project insights.",
        })
        
        // Reset form
        setEmail('')
        setName('')
        
        // Reset subscribed state after 3 seconds
        setTimeout(() => setSubscribed(false), 3000)
      }
    } catch (error: any) {
      console.error('Error subscribing to newsletter:', error)
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  if (subscribed) {
    return (
      <div className={`flex items-center justify-center p-4 bg-primary/10 rounded-lg ${className}`}>
        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
        <span className="text-primary font-medium">Thank you for subscribing!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
      {showName && (
        <Input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-background/80 backdrop-blur"
        />
      )}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 bg-background/80 backdrop-blur"
            required
          />
        </div>
        <Button type="submit" disabled={loading || !email}>
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Subscribe"
          )}
        </Button>
      </div>
    </form>
  )
}
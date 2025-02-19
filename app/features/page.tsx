"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Clock, Mic, Globe, ArrowLeft, Phone, Calendar } from "lucide-react"

interface FeatureSectionProps {
  icon: React.ElementType
  title: string
  description: string
  imageSrc: string
  children?: React.ReactNode
}

const FeatureSection = ({ icon: Icon, title, description, imageSrc, children }: FeatureSectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="py-20"
  >
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Icon className="w-16 h-16 mb-4 text-cyan-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-300 mb-4">{description}</p>
          {children}
        </div>
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>
)

const DemoCallForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log("Demo call requested:", { name, email, phone })
    alert("Thank you for requesting a demo call. We'll be in touch soon!")
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-gray-700 text-white"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-gray-700 text-white"
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="bg-gray-700 text-white"
        />
      </div>
      <Button type="submit" className="w-full">
        Request Demo Call
      </Button>
    </form>
  )
}

const CallSchedulingTemplate = () => (
  <div className="mt-6 bg-gray-800 p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-4">Sample Call Schedule</h3>
    <ul className="space-y-2">
      <li className="flex justify-between items-center">
        <span>9:00 AM</span>
        <span>Product Introduction Call</span>
      </li>
      <li className="flex justify-between items-center">
        <span>11:00 AM</span>
        <span>Follow-up with Lead</span>
      </li>
      <li className="flex justify-between items-center">
        <span>2:00 PM</span>
        <span>Demo for Potential Client</span>
      </li>
      <li className="flex justify-between items-center">
        <span>4:00 PM</span>
        <span>Closing Call with Prospect</span>
      </li>
    </ul>
  </div>
)

export default function FeaturesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="bg-gray-900 bg-opacity-80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
          >
            <ArrowLeft className="mr-2 h-6 w-6 text-cyan-400" />
            VoiceSalesBot
          </Link>
        </nav>
      </header>

      <main>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">Our Features</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 text-center">
              Discover how VoiceSalesBot can revolutionize your sales process
            </p>
          </div>
        </section>

        <FeatureSection
          icon={Clock}
          title="Real-Time Responses"
          description="Our AI-powered system provides instant responses, ensuring your customers never have to wait. This real-time interaction significantly improves customer satisfaction and conversion rates. With VoiceSalesBot, you can engage customers instantly and provide them with the information they need, when they need it."
          imageSrc="/assets/real-time-responses.jpeg"
        />

        <FeatureSection
          icon={Mic}
          title="Natural Voice Interaction"
          description="Experience seamless communication with our advanced AI technology that provides a natural, human-like conversation experience. Customers will feel like they're talking to a real person, enhancing engagement and trust. Our voice AI understands context, tone, and intent, making interactions more meaningful and productive."
          imageSrc="/assets/natural-voice-interaction.jpeg"
        />

        <FeatureSection
          icon={Globe}
          title="Multilingual Support"
          description="Break down language barriers and expand your reach globally with our multilingual AI. Support customers in their preferred language, opening new markets and improving customer satisfaction. VoiceSalesBot can communicate fluently in multiple languages, ensuring that you can serve a diverse customer base effectively."
          imageSrc="/assets/multilingual-support2.jpeg"
        />

        <FeatureSection
          icon={Calendar}
          title="Flexible Call Scheduling"
          description="Transform your sales team's efficiency with our intelligent scheduling system. Our AI analyzes optimal time slots, manages follow-ups, and coordinates across time zones automatically."
          imageSrc="/assets/call-seheduling.jpeg"
        >
          <div id="call-scheduling" className="mt-6 bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Schedule a Demo Call</h3>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="bg-gray-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-gray-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="time">Preferred Time Slot</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-between">
                    <span>9:00 AM</span>
                    <span className="text-cyan-400">Available</span>
                  </Button>
                  <Button variant="outline" size="sm" className="justify-between">
                    <span>11:00 AM</span>
                    <span className="text-cyan-400">Available</span>
                  </Button>
                  <Button variant="outline" size="sm" className="justify-between">
                    <span>2:00 PM</span>
                    <span className="text-cyan-400">Available</span>
                  </Button>
                  <Button variant="outline" size="sm" className="justify-between">
                    <span>4:00 PM</span>
                    <span className="text-cyan-400">Available</span>
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                Schedule Demo
              </Button>
            </form>
          </div>
        </FeatureSection>
      </main>

      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
              >
                VoiceSalesBot
              </Link>
              <p className="mt-2 text-gray-400">&copy; 2023 VoiceSalesBot. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Clock, Mic, Globe, Phone, Calendar } from "lucide-react"

interface FeatureCardProps {
  icon: React.ElementType
  title: string
  description: string
  id: string
}

const FeatureCard = ({ icon: Icon, title, description, id }: FeatureCardProps) => {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col items-center text-center">
        <Icon className="w-12 h-12 mb-4 text-cyan-400" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <Link href={`/features#${id}`} className="w-full">
          <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium">
            View Details
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const Section = ({ children, className = "", id = "" }: SectionProps) => (
  <motion.section
    id={id}
    className={`py-20 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.section>
)

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [imageError, setImageError] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
          >
            VoiceSalesBot
          </Link>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <Section className="relative min-h-screen flex items-center">
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: imageError ? "none" : "url('/assets/hero-background.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              y: backgroundY,
            }}
          />
          <div className="container mx-auto px-6 relative z-10">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Revolutionize Your Sales
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                with AI-Powered Voice Technology
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Enhance customer interactions and boost sales with our cutting-edge voice AI platform.
            </motion.p>
            <motion.div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-500 text-white hover:bg-cyan-500 hover:text-white font-semibold px-8"
                  onClick={() => {
                    const featuresSection = document.getElementById('features')
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Explore Features
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Section>

        <Section id="features">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Clock}
                title="Real-Time Responses"
                description="Engage customers instantly with AI-powered real-time voice interactions."
                id="real-time"
              />
              <FeatureCard
                icon={Mic}
                title="Natural Voice Interaction"
                description="Provide a seamless and human-like conversational experience."
                id="natural-voice"
              />
              <FeatureCard
                icon={Globe}
                title="Multilingual Support"
                description="Break language barriers with support for multiple languages."
                id="multilingual"
              />
              <FeatureCard
                icon={Phone}
                title="Demo Call"
                description="Experience our AI-powered voice technology firsthand with a personalized demo."
                id="demo-call"
              />
              <FeatureCard
                icon={Calendar}
                title="Flexible Call Scheduling"
                description="Optimize your sales team&apos;s time with intelligent call scheduling."
                id="call-scheduling"
              />
            </div>
          </div>
        </Section>

        <Section className="bg-gray-800" id="real-time">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">No Latency, Real-Time Responses</h2>
                <p className="text-gray-300 mb-4">
                  Our AI-powered system provides instant responses, ensuring your customers never have to wait. This
                  real-time interaction significantly improves customer satisfaction and conversion rates.
                </p>
                <Button
                  variant="outline"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-none text-white font-medium"
                >
                  See How It Works
                </Button>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/assets/realtime.jpeg"
                    alt="Real-time responses illustration"
                    width={700}
                    height={300}
                    className="rounded-lg shadow-lg"
                    onError={() => setImageError(true)}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="natural-voice">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Natural Voice Interaction</h2>
                <p className="text-gray-300 mb-4">
                  Our advanced AI technology provides a natural, human-like conversation experience. Customers will feel
                  like they&apos;re talking to a real person, enhancing engagement and trust.
                </p>
                <Button
                  variant="outline"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-none text-white font-medium"
                >
                  Discover More
                </Button>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/assets/natural-voice.jpeg"
                    alt="Natural voice interaction illustration"
                    width={700}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="bg-gray-800" id="multilingual">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Multilingual Support</h2>
                <p className="text-gray-300 mb-4">
                  Expand your reach globally with our multilingual AI. Support customers in their preferred language,
                  breaking down communication barriers and opening new markets.
                </p>
                <Button
                  variant="outline"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-none text-white font-medium"
                >
                  View Languages
                </Button>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/assets/multilingual-support.jpeg"
                    alt="Multilingual support illustration"
                    width={700}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Call Scheduling</h2>
                <p className="text-gray-300 mb-4">
                  Optimize your sales team&apos;s time with our intelligent call scheduling system. Automate follow-ups and
                  ensure no opportunity slips through the cracks.
                </p>
                <Button
                  variant="outline"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-none"
                >
                  Schedule a Demo
                </Button>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/assets/call-seheduling.jpeg"
                    alt="Flexible call scheduling illustration"
                    width={700}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </Section>
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


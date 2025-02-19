"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaHome } from "react-icons/fa"

export default function Signup() {
  const [phone, setPhone] = useState("")
  const [phoneError, setPhoneError] = useState("")

  const validatePhone = (value: string) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/
    if (!value) {
      setPhoneError("Phone number is required")
      return false
    }
    if (!phoneRegex.test(value)) {
      setPhoneError("Please enter a valid phone number")
      return false
    }
    setPhoneError("")
    return true
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPhone(value)
    validatePhone(value)
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <Link href="/">
            <Button variant="ghost" size="icon">
              <FaHome className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-white">
              Name
            </Label>
            <Input id="name" placeholder="Enter your name" className="bg-gray-700 text-white" />
          </div>
          <div>
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input id="email" type="email" placeholder="Enter your email" className="bg-gray-700 text-white" />
          </div>
          <div>
            <Label htmlFor="phone" className="text-white">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1234567890"
              value={phone}
              onChange={handlePhoneChange}
              className="bg-gray-700 text-white"
            />
            {phoneError && <p className="text-red-400 text-sm mt-1">{phoneError}</p>}
          </div>
          <div>
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input id="password" type="password" placeholder="Create a password" className="bg-gray-700 text-white" />
          </div>
          <Button className="w-full text-white">Sign Up</Button>
        </div>
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-400 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
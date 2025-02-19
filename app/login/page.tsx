"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaGoogle, FaHome } from "react-icons/fa"

export default function Login() {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email")

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Login</h1>
          <Link href="/">
            <Button variant="ghost" size="icon">
              <FaHome className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="space-y-4">
          <Button variant="outline" className="w-full flex items-center justify-center text-white">
            <FaGoogle className="mr-2" />
            Login with Google
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
            </div>
          </div>
          <div className="flex space-x-4 mb-4">
            <Button
              variant={loginMethod === "email" ? "default" : "outline"}
              className="w-full text-white"
              onClick={() => setLoginMethod("email")}
            >
              Email
            </Button>
            <Button
              variant={loginMethod === "phone" ? "default" : "outline"}
              className="w-full text-white"
              onClick={() => setLoginMethod("phone")}
            >
              Phone
            </Button>
          </div>
          {loginMethod === "email" ? (
            <>
              <div>
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="Enter your email" className="bg-gray-700 text-white" />
              </div>
              <div>
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="bg-gray-700 text-white"
                />
              </div>
            </>
          ) : (
            <div>
              <Label htmlFor="phone" className="text-white">
                Phone Number
              </Label>
              <Input id="phone" type="tel" placeholder="Enter your phone number" className="bg-gray-700 text-white" />
            </div>
          )}
          <Button className="w-full text-white">Login</Button>
        </div>
        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{" "}
          <Link href="/signup" className="text-cyan-400 hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
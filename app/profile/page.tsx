"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Profile() {
  // Mock user data - replace with actual user data in a real application
  const user = {
    email: "user@example.com",
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (555) 123-4567",
    linkedin: "https://www.linkedin.com/in/johndoe",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={user.email} readOnly className="bg-gray-700 text-white" />
            </div>
            <div>
              <Label htmlFor="FullName">Full Name</Label>
              <Input id="Name" value={user.firstName} className="bg-gray-700 text-white" />
            </div>
           
            <div>
              <Label htmlFor="phone">Contact Information</Label>
              <Input id="phone" value={user.phone} className="bg-gray-700 text-white" />
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input id="linkedin" value={user.linkedin} className="bg-gray-700 text-white" />
            </div>
            <Button className="w-full">Save Changes</Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}


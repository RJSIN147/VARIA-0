"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import {
  Home,
  Inbox,
  Settings,
  User,
  ChevronLeft,
  LayoutDashboard,
  Briefcase,
  Award,
  Activity,
  Check,
  Camera,
} from "lucide-react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { toast } from "@/components/ui/use-toast"

export default function ProfilePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("profile")
  const [isSaving, setIsSaving] = useState(false)
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    role: "",
    department: "",
    company: "",
    bio: "",
  })

  const handleSave = async (section: string) => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    toast({
      title: "Profile updated",
      description: `Your ${section} information has been updated successfully.`,
      className: "bg-green-50 border-green-200",
    })
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-100 w-screen h-screen">
        <AnimatePresence mode="wait">
          {isSidebarOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                opacity: { duration: 0.2 },
              }}
              className="overflow-hidden border-r bg-blue-900 h-full"
            >
              <Sidebar className="p-4">
                <SidebarContent className="bg-blue-900">
                  <SidebarGroup>
                    <SidebarGroupContent className="space-y-4">
                      <SidebarMenu>
                        <SidebarMenuItem className="mb-3">
                          <Link href="/">
                            <SidebarMenuButton className="p-2 text-white hover:bg-blue-800 transition-colors">
                              <Home className="mr-3 h-4 w-4" />
                              <span>Home</span>
                            </SidebarMenuButton>
                          </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="mb-3">
                          <Link href="/dashboard">
                            <SidebarMenuButton className="p-2 text-white hover:bg-blue-800 transition-colors">
                              <LayoutDashboard className="mr-3 h-4 w-4" />
                              <span>Dashboard</span>
                            </SidebarMenuButton>
                          </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="mb-3">
                          <Link href="/analytics">
                            <SidebarMenuButton className="p-2 text-white hover:bg-blue-800 transition-colors">
                              <Inbox className="mr-3 h-4 w-4" />
                              <span>Analytics</span>
                            </SidebarMenuButton>
                          </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="mb-3">
                          <Link href="/settings">
                            <SidebarMenuButton className="p-2 text-white hover:bg-blue-800 transition-colors">
                              <Settings className="mr-3 h-4 w-4" />
                              <span>Settings</span>
                            </SidebarMenuButton>
                          </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="mb-3">
                          <Link href="/profile">
                            <SidebarMenuButton className="p-2 text-white bg-blue-800">
                              <User className="mr-3 h-4 w-4" />
                              <span>Profile</span>
                            </SidebarMenuButton>
                          </Link>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex-1 overflow-auto p-8">
          <div className="flex items-center mb-6">
            <Button
              variant="outline"
              size="icon"
              className="mr-4 hover:bg-gray-100 transition-colors"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <motion.div
                animate={{ rotate: isSidebarOpen ? 0 : 180 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronLeft className="h-4 w-4" />
              </motion.div>
            </Button>
            <h1 className="text-3xl font-bold">Profile</h1>
          </div>

          <Tabs
            defaultValue="profile"
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="space-y-4"
          >
            <TabsList className="bg-white p-1">
              <TabsTrigger value="profile" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
                <User className="mr-2 h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="activity" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
                <Activity className="mr-2 h-4 w-4" />
                Activity
              </TabsTrigger>
              <TabsTrigger value="performance" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
                <Award className="mr-2 h-4 w-4" />
                Performance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <User className="mr-2 h-5 w-5 text-blue-600" />
                        Personal Information
                      </CardTitle>
                      <CardDescription>
                        Update your personal details
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-center mb-4">
                        <div className="relative">
                          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                            <User className="w-12 h-12 text-blue-600" />
                          </div>
                          <Button
                            size="icon"
                            className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                          >
                            <Camera className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Enter your full name"
                          value={profile.name}
                          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                          className="focus:ring-2 focus:ring-blue-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter your email"
                          value={profile.email}
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                          className="focus:ring-2 focus:ring-blue-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="Enter your phone number"
                          value={profile.phone}
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                          className="focus:ring-2 focus:ring-blue-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input 
                          id="location" 
                          placeholder="Enter your location"
                          value={profile.location}
                          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                          className="focus:ring-2 focus:ring-blue-200"
                        />
                      </div>
                      <Button 
                        onClick={() => handleSave("personal")}
                        disabled={isSaving}
                        className="bg-blue-600 hover:bg-blue-700 text-white transition-colors w-full"
                      >
                        {isSaving ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </motion.div>
                        ) : (
                          <>
                            <Check className="mr-2 h-4 w-4" />
                            Save Changes
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Card className="border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Briefcase className="mr-2 h-5 w-5 text-blue-600" />
                        Professional Information
                      </CardTitle>
                      <CardDescription>
                        Update your professional details
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Input 
                          id="role" 
                          placeholder="Enter your role"
                          value={profile.role}
                          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                          className="focus:ring-2 focus:ring-blue-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Input 
                          id="department" 
                          placeholder="Enter your department"
                          value={profile.department}
                          onChange={(e) => setProfile({ ...profile, department: e.target.value })}
                          className="focus:ring-2 focus:ring-blue-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input 
                          id="company" 
                          placeholder="Enter your company"
                          value={profile.company}
                          onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                          className="focus:ring-2 focus:ring-blue-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Input 
                          id="bio" 
                          placeholder="Enter a brief bio"
                          value={profile.bio}
                          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                          className="focus:ring-2 focus:ring-blue-200"
                        />
                      </div>
                      <Button 
                        onClick={() => handleSave("professional")}
                        disabled={isSaving}
                        className="bg-blue-600 hover:bg-blue-700 text-white transition-colors w-full"
                      >
                        {isSaving ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </motion.div>
                        ) : (
                          <>
                            <Check className="mr-2 h-4 w-4" />
                            Update Professional Info
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-2 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="mr-2 h-5 w-5 text-blue-600" />
                      Recent Activity
                    </CardTitle>
                    <CardDescription>
                      Your recent actions and interactions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: item * 0.1 }}
                          className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="p-2 bg-blue-100 rounded-full">
                            <Activity className="h-4 w-4 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Completed call with John Doe</p>
                            <p className="text-sm text-gray-500">2 hours ago</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="mr-2 h-5 w-5 text-blue-600" />
                        Performance Metrics
                      </CardTitle>
                      <CardDescription>
                        Your key performance indicators
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Total Calls</p>
                            <p className="text-sm text-gray-500">Last 30 days</p>
                          </div>
                          <div className="text-2xl font-bold text-blue-600">156</div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Success Rate</p>
                            <p className="text-sm text-gray-500">Last 30 days</p>
                          </div>
                          <div className="text-2xl font-bold text-green-600">85%</div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Average Duration</p>
                            <p className="text-sm text-gray-500">Last 30 days</p>
                          </div>
                          <div className="text-2xl font-bold text-blue-600">4.5m</div>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Card className="border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="mr-2 h-5 w-5 text-blue-600" />
                        Achievements
                      </CardTitle>
                      <CardDescription>
                        Your recent achievements and milestones
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: item * 0.1 }}
                            className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="p-2 bg-green-100 rounded-full">
                              <Award className="h-4 w-4 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">Top Performer</p>
                              <p className="text-sm text-gray-500">Achieved in last month</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SidebarProvider>
  )
}


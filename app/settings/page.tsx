"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
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
  Bell,
  Lock,
  Globe,
  Mail,
  Database,
  Shield,
  Check,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { toast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("general")
  const [isSaving, setIsSaving] = useState(false)
  const [settings, setSettings] = useState({
    company: "",
    timezone: "",
    language: "",
    emailNotifications: true,
    pushNotifications: true,
    callAlerts: true,
    twoFactorAuth: false,
    slackIntegration: false,
    googleCalendar: false,
    crmIntegration: false,
  })

  const handleSave = async (section: string) => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    toast({
      title: "Settings saved",
      description: `Your ${section} settings have been updated successfully.`,
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
                            <SidebarMenuButton className="p-2 text-white bg-blue-800">
                              <Settings className="mr-3 h-4 w-4" />
                              <span>Settings</span>
                            </SidebarMenuButton>
                          </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="mb-3">
                          <Link href="/profile">
                            <SidebarMenuButton className="p-2 text-white hover:bg-blue-800 transition-colors">
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
            <h1 className="text-3xl font-bold">Settings</h1>
          </div>

          <Tabs
            defaultValue="general"
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="space-y-4"
          >
            <TabsList className="bg-white p-1">
              <TabsTrigger value="general" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
                <Globe className="mr-2 h-4 w-4" />
                General
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
                <Shield className="mr-2 h-4 w-4" />
                Security
              </TabsTrigger>
              <TabsTrigger value="integrations" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
                <Database className="mr-2 h-4 w-4" />
                Integrations
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-2 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="mr-2 h-5 w-5 text-blue-600" />
                      General Settings
                    </CardTitle>
                    <CardDescription>
                      Manage your general account settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input 
                        id="company" 
                        placeholder="Enter company name"
                        value={settings.company}
                        onChange={(e) => setSettings({ ...settings, company: e.target.value })}
                        className="focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Input 
                        id="timezone" 
                        placeholder="Select timezone"
                        value={settings.timezone}
                        onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                        className="focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Input 
                        id="language" 
                        placeholder="Select language"
                        value={settings.language}
                        onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                        className="focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                    <Button 
                      onClick={() => handleSave("general")}
                      disabled={isSaving}
                      className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
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
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-2 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Bell className="mr-2 h-5 w-5 text-blue-600" />
                      Notification Settings
                    </CardTitle>
                    <CardDescription>
                      Configure how you receive notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-0.5">
                        <Label>Email Notifications</Label>
                        <CardDescription>
                          Receive notifications via email
                        </CardDescription>
                      </div>
                      <Switch 
                        checked={settings.emailNotifications}
                        onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-0.5">
                        <Label>Push Notifications</Label>
                        <CardDescription>
                          Receive push notifications
                        </CardDescription>
                      </div>
                      <Switch 
                        checked={settings.pushNotifications}
                        onCheckedChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-0.5">
                        <Label>Call Alerts</Label>
                        <CardDescription>
                          Get notified about new calls
                        </CardDescription>
                      </div>
                      <Switch 
                        checked={settings.callAlerts}
                        onCheckedChange={(checked) => setSettings({ ...settings, callAlerts: checked })}
                      />
                    </div>
                    <Button 
                      onClick={() => handleSave("notification")}
                      disabled={isSaving}
                      className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
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
                          Save Preferences
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-2 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="mr-2 h-5 w-5 text-blue-600" />
                      Security Settings
                    </CardTitle>
                    <CardDescription>
                      Manage your account security
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input 
                        id="current-password" 
                        type="password"
                        className="focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input 
                        id="new-password" 
                        type="password"
                        className="focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input 
                        id="confirm-password" 
                        type="password"
                        className="focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-0.5">
                        <Label>Two-Factor Authentication</Label>
                        <CardDescription>
                          Add an extra layer of security
                        </CardDescription>
                      </div>
                      <Switch 
                        checked={settings.twoFactorAuth}
                        onCheckedChange={(checked) => setSettings({ ...settings, twoFactorAuth: checked })}
                      />
                    </div>
                    <Button 
                      onClick={() => handleSave("security")}
                      disabled={isSaving}
                      className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
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
                          Update Security Settings
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-2 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="mr-2 h-5 w-5 text-blue-600" />
                      Integrations
                    </CardTitle>
                    <CardDescription>
                      Connect your favorite tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-0.5">
                        <Label>Slack Integration</Label>
                        <CardDescription>
                          Connect with Slack for notifications
                        </CardDescription>
                      </div>
                      <Switch 
                        checked={settings.slackIntegration}
                        onCheckedChange={(checked) => setSettings({ ...settings, slackIntegration: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-0.5">
                        <Label>Google Calendar</Label>
                        <CardDescription>
                          Sync with Google Calendar
                        </CardDescription>
                      </div>
                      <Switch 
                        checked={settings.googleCalendar}
                        onCheckedChange={(checked) => setSettings({ ...settings, googleCalendar: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-0.5">
                        <Label>CRM Integration</Label>
                        <CardDescription>
                          Connect with your CRM
                        </CardDescription>
                      </div>
                      <Switch 
                        checked={settings.crmIntegration}
                        onCheckedChange={(checked) => setSettings({ ...settings, crmIntegration: checked })}
                      />
                    </div>
                    <Button 
                      onClick={() => handleSave("integration")}
                      disabled={isSaving}
                      className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
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
                          Save Integration Settings
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SidebarProvider>
  )
}


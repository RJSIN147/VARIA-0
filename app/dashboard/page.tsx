"use client"

import { useState } from "react"
import { Calendar as BigCalendar, dateFnsLocalizer, Views } from "react-big-calendar"
import { format, parse, startOfWeek, getDay } from "date-fns"
import { enUS } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Home, Inbox, Settings, User, ChevronLeft, ChevronRight, LayoutDashboard, Building, Briefcase, Bot, Globe, Calendar } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"

import "react-big-calendar/lib/css/react-big-calendar.css"

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const voiceBots = [
  { id: "bot1", name: "Sales Assistant" },
  { id: "bot2", name: "Customer Support" },
  { id: "bot3", name: "Lead Qualifier" },
]

const languages = [
  { id: "en", name: "English" },
  { id: "hi", name: "Hindi" },
  { id: "hi-en", name: "Hinglish" },
]

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [selectedBot, setSelectedBot] = useState<string>("")
  const [selectedLanguage, setSelectedLanguage] = useState<string>("")
  const [callInfo, setCallInfo] = useState<any>(null)
  const router = useRouter()
  const [date, setDate] = useState(new Date())
  const [view, setView] = useState(Views.WEEK)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleSelectSlot = ({ start }: { start: Date }) => {
    setSelectedDate(start)
    setTimeout(() => setShowForm(true), 300)
  }

  const handleBackToCalendar = () => {
    setShowForm(false)
    setCallInfo(null)
  }

  const handleMakeCall = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const callData = Object.fromEntries(formData.entries())
    setCallInfo(callData)
    setShowForm(false)
  }

  const handleNavigate = (newDate: Date) => {
    setDate(newDate)
  }

  const handleViewChange = (newView: string) => {
    setView(newView as keyof typeof Views)
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-100 w-screen">
        <AnimatePresence mode="wait">
          {isSidebarOpen && (
             <motion.div
             initial={{ width: 0, opacity: 0 }}
             animate={{ width: 240, opacity: 1 }}
             exit={{ width: 0, opacity: 0 }}
             transition={{ 
               duration: 0.3, 
               ease: "easeInOut",
               opacity: { duration: 0.2 }
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
                            <SidebarMenuButton className="p-2 text-white">
                              <Home className="mr-3 h-4 w-4" />
                              <span>Home</span>
                            </SidebarMenuButton>
                          </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="mb-3">
                          <Link href="/dashboard">
                            <SidebarMenuButton className="p-2 text-white">
                              <LayoutDashboard className="mr-3 h-4 w-4" />
                              <span>Dashboard</span>
                            </SidebarMenuButton>
                          </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="mb-3">
                          <Link href="/inbox">
                            <SidebarMenuButton className="p-2 text-white">
                              <Inbox className="mr-3 h-4 w-4" />
                              <span>Inbox</span>
                            </SidebarMenuButton>
                          </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="mb-3">
                          <Link href="/settings">
                            <SidebarMenuButton className="p-2 text-white">
                              <Settings className="mr-3 h-4 w-4" />
                              <span>Settings</span>
                            </SidebarMenuButton>
                          </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="mb-3">
                          <Link href="/profile">
                            <SidebarMenuButton className="p-2 text-white">
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
        <div className="flex-1 overflow-auto p-8 h-screen">
          <div className="flex items-center gap-4 mb-6">
            <Button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              variant="outline"
              size="icon"
            >
              {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
            </Button>
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          <AnimatePresence mode="wait">
            {!showForm && !callInfo ? (
              <motion.div
                key="calendar"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-lg shadow-md p-6 h-full"
              >
                <BigCalendar
                  localizer={localizer}
                  events={[]}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: "calc(100vh - 120px)" }}
                  onSelectSlot={handleSelectSlot}
                  selectable
                  views={['month', 'week', 'day']}
                  defaultView="month"
                  date={date}
                  onNavigate={handleNavigate}
                  view={view}
                  onView={handleViewChange}
                  className="calendar-override"
                />
              </motion.div>
            ) : showForm ? (
              <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex justify-center items-center"
              style={{ width: '100%' }}
            >
              <Card className="mt-6 w-[400px]">
                <CardHeader className="border-b bg-gradient-to-r from-blue-50 via-blue-50 to-white px-4 py-3.5 shadow-sm">
                  <CardTitle className="text-base font-medium text-gray-800 flex items-center gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-gray-600">
                        Schedule a Call
                      </span>
                      <span className="text-base font-medium text-blue-600">
                        {selectedDate?.toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleMakeCall} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" placeholder="Your company" required />
                    </div>
                    <div>
                      <Label htmlFor="business">Your Business with Us</Label>
                      <Input id="business" name="business" placeholder="Describe your business" required />
                    </div>
                    <div>
                      <Label htmlFor="voicebot">Voice Bot Selection</Label>
                      <Select name="voicebot" value={selectedBot} onValueChange={setSelectedBot} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a voice bot" />
                        </SelectTrigger>
                        <SelectContent>
                          {voiceBots.map((bot) => (
                            <SelectItem key={bot.id} value={bot.id}>
                              {bot.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="language">Language Selection</Label>
                      <Select name="language" value={selectedLanguage} onValueChange={setSelectedLanguage} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a language" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map((lang) => (
                            <SelectItem key={lang.id} value={lang.id}>
                              {lang.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-between">
                      <Button onClick={handleBackToCalendar} type="button" variant="outline">
                        Back to Calendar
                      </Button>
                      <Button type="submit" className="hover:bg-blue-600 transition-colors">
                        Make a Call
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            ) : (
              <motion.div
              key="callInfo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex justify-center items-center"
            >
                <Card className="mt-6 w-[400px] h-[400px] shadow-md hover:shadow-lg transition-all duration-100 border border-gray-200">
                  <CardHeader className="border-b bg-gradient-to-r from-gray-50 to-gray-100 py-3">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      Call Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 bg-white h-[calc(400px-4rem)] overflow-y-auto">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-md transition-colors">
                        <User className="h-4 w-4 text-blue-600" />
                        <span className="text-base font-medium text-gray-600">Name:</span>
                        <span className="text-base text-gray-800">{callInfo.name}</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-md transition-colors">
                        <Building className="h-4 w-4 text-blue-600" />
                        <span className="text-base font-medium text-gray-600">Company:</span>
                        <span className="text-base text-gray-800">{callInfo.company}</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-md transition-colors">
                        <Briefcase className="h-4 w-4 text-blue-600" />
                        <span className="text-base font-medium text-gray-600">Business:</span>
                        <span className="text-base text-gray-800">{callInfo.business}</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-md transition-colors">
                        <Bot className="h-4 w-4 text-blue-600" />
                        <span className="text-base font-medium text-gray-600">Bot:</span>
                        <span className="text-base text-gray-800">{voiceBots.find((bot) => bot.id === callInfo.voicebot)?.name}</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-md transition-colors">
                        <Globe className="h-4 w-4 text-blue-600" />
                        <span className="text-base font-medium text-gray-600">Language:</span>
                        <span className="text-base text-gray-800">{languages.find((lang) => lang.id === callInfo.language)?.name}</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-3 border-t border-gray-100">
                      <Button 
                        onClick={handleBackToCalendar} 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base flex items-center justify-center gap-2 py-2"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Back to Calendar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SidebarProvider>
  )
}


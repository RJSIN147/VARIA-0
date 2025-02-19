"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
import { Home, Inbox, Settings, User, ChevronLeft, LayoutDashboard } from "lucide-react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Mock data for call recordings and chats
const mockData = [
  { id: 1, type: "recording", title: "Call with John Doe", date: "2023-06-01" },
  { id: 2, type: "chat", title: "Chat with Jane Smith", date: "2023-06-02" },
  // Add more mock data as needed
]

export default function InboxPage() {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedType, setSelectedType] = useState<string>("all")

  const filteredData = selectedType === "all" 
    ? mockData 
    : mockData.filter(item => item.type === selectedType)

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
        <div className="flex-1 overflow-auto p-8">
          <div className="flex items-center mb-6">
            <Button
              variant="outline"
              size="icon"
              className="mr-4"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <motion.div
                animate={{ rotate: isSidebarOpen ? 0 : 180 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronLeft className="h-4 w-4" />
              </motion.div>
            </Button>
            <h1 className="text-3xl font-bold">Inbox</h1>
            <div className="ml-auto">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="chat">Chat</SelectItem>
                  <SelectItem value="recording">Recording</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Vertical list of items */}
          <div className="space-y-4">
            {filteredData.map((item) => (
              <Card
                key={item.id}
                className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
                onClick={() => setSelectedItem(item)}
              >
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Type: {item.type}</p>
                  <p>Date: {item.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dialog for showing details */}
          <Dialog open={selectedItem !== null} onOpenChange={() => setSelectedItem(null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedItem?.title}</DialogTitle>
              </DialogHeader>
              
              {/* New Summary Section */}
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-2">Summary</h3>
                <div className="text-sm text-blue-800">
                  {selectedItem?.type === 'recording' ? (
                    <p>
                      This is a {selectedItem?.type} from {new Date(selectedItem?.date).toLocaleDateString()}. 
                      The call lasted 30 minutes with 2 participants and was successfully completed.
                    </p>
                  ) : (
                    <p>
                      This chat conversation from {new Date(selectedItem?.date).toLocaleDateString()} 
                      includes 24 messages between 2 participants and is currently active.
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold">Type:</p>
                    <p className="capitalize">{selectedItem?.type}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold">Date:</p>
                    <p>{new Date(selectedItem?.date).toLocaleDateString()}</p>
                  </div>
                </div>
                
                {selectedItem?.type === 'recording' && (
                  <div className="space-y-2">
                    <p className="font-semibold">Recording Details:</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p>Duration: 30:00 minutes</p>
                      <p>Participants: 2</p>
                      <p>Status: Completed</p>
                    </div>
                  </div>
                )}

                {selectedItem?.type === 'chat' && (
                  <div className="space-y-2">
                    <p className="font-semibold">Chat Details:</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p>Messages: 24</p>
                      <p>Participants: 2</p>
                      <p>Status: Active</p>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <p className="font-semibold">Notes:</p>
                  <textarea 
                    className="w-full h-32 p-2 border rounded-md" 
                    placeholder="Add notes here..."
                    defaultValue={selectedItem?.notes}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <Button variant="outline" onClick={() => setSelectedItem(null)}>
                  Close
                </Button>
                <Button>Save Changes</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </SidebarProvider>
  )
}
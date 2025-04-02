"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "@/components/overview"
import { CallsBreakdown } from "@/components/calls-breakdown"
import { RecentCalls } from "@/components/recent-calls"
import { CallsTimeline } from "@/components/calls-timeline"
import { CallsPerformance } from "@/components/calls-performance"

import {
  Home,
  Inbox,
  Settings,
  User,
  ChevronLeft,
  LayoutDashboard,
  ArrowDown,
  ArrowUp,
  CheckCircle,
  Phone,
  PhoneOff,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function InboxPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("overview");

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
                          <Link href="/analytics">
                            <SidebarMenuButton className="p-2 text-white">
                              <Inbox className="mr-3 h-4 w-4" />
                              <span>Analytics</span>
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
          <div className=" flex items-center justify-between">
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
              <h1 className="text-3xl font-bold">Salesbot Analytics</h1>
            </div>
            <div className="flex items-center  space-x-2">
              <CalendarDateRangePicker />
              <Button>Download Report</Button>
            </div>
          </div>
          <Tabs
            defaultValue="overview"
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="space-y-4"
          >
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="calls">Calls</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="agents">Agents</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Calls
                    </CardTitle>
                    <Phone className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,853</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-500 flex items-center">
                        <ArrowUp className="mr-1 h-4 w-4" />
                        +12.5%
                      </span>{" "}
                      from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Positive Calls
                    </CardTitle>
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,257</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-500 flex items-center">
                        <ArrowUp className="mr-1 h-4 w-4" />
                        +18.2%
                      </span>{" "}
                      from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Negative Calls
                    </CardTitle>
                    <XCircle className="h-4 w-4 text-rose-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">845</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-rose-500 flex items-center">
                        <ArrowUp className="mr-1 h-4 w-4" />
                        +4.3%
                      </span>{" "}
                      from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Rejected Calls
                    </CardTitle>
                    <PhoneOff className="h-4 w-4 text-amber-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">751</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-rose-500 flex items-center">
                        <ArrowDown className="mr-1 h-4 w-4" />
                        -2.5%
                      </span>{" "}
                      from last month
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Call Overview</CardTitle>
                    <CardDescription>
                      Call performance over the last 30 days
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>

                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Call Breakdown</CardTitle>
                    <CardDescription>
                      Distribution of call outcomes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CallsBreakdown />
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Calls</CardTitle>
                    <CardDescription>
                      Latest call activities and outcomes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentCalls />
                  </CardContent>
                </Card>

                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Daily Call Timeline</CardTitle>
                    <CardDescription>
                      Call volume by time of day
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CallsTimeline />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="calls" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Call Details</CardTitle>
                  <CardDescription>
                    Detailed breakdown of all calls
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Detailed call logs and analytics would appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="performance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>
                    Detailed performance analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CallsPerformance />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="agents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Agent Performance</CardTitle>
                  <CardDescription>
                    Individual agent metrics and comparison
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Agent performance metrics would appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SidebarProvider>
  );
}
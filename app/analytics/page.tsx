"use client";

import { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "@/components/overview"
import { CallsBreakdown } from "@/components/calls-breakdown"
import { RecentCalls } from "@/components/recent-calls"
import { CallsPerformance } from "@/components/calls-performance"

import {
  Settings,
  User,
  LayoutDashboard,
  ArrowUp,
} from "lucide-react";
import Link from "next/link";

export default function Analytics() {
  const [selectedTab, setSelectedTab] = useState("overview")

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuButton>
                    <Link href="/dashboard" className="flex items-center gap-2">
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuItem>
                    <Link href="/analytics" className="flex items-center gap-2">
                      <ArrowUp className="h-4 w-4" />
                      Analytics
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link href="/profile" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link href="/settings" className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Settings
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 overflow-auto">
          <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
              <div className="flex items-center space-x-2">
                <CalendarDateRangePicker />
                <Button>Download Report</Button>
              </div>
            </div>

            <Tabs defaultValue="overview" value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="calls">Calls</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="agents">Agents</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Overview />
              </TabsContent>

              <TabsContent value="calls" className="space-y-4">
                <CallsBreakdown />
              </TabsContent>

              <TabsContent value="performance" className="space-y-4">
                <CallsPerformance />
              </TabsContent>

              <TabsContent value="agents" className="space-y-4">
                <RecentCalls />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

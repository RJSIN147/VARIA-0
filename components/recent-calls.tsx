"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, PhoneOff, XCircle } from "lucide-react"

export function RecentCalls() {
  return (
    <div className="space-y-8">
      {recentCalls.map((call) => (
        <div key={call.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={call.avatar} alt="Avatar" />
            <AvatarFallback>{call.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{call.name}</p>
            <p className="text-sm text-muted-foreground">
              {call.phone} • {call.time}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Badge variant={getVariantForStatus(call.status)} className="ml-auto">
              {getIconForStatus(call.status)}
              {call.status}
            </Badge>
            <span className="text-sm text-muted-foreground">{call.duration}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function getVariantForStatus(status: string) {
  switch (status) {
    case "Positive":
      return "success"
    case "Negative":
      return "destructive"
    case "Rejected":
      return "warning"
    default:
      return "secondary"
  }
}

function getIconForStatus(status: string) {
  switch (status) {
    case "Positive":
      return <CheckCircle className="mr-1 h-3 w-3" />
    case "Negative":
      return <XCircle className="mr-1 h-3 w-3" />
    case "Rejected":
      return <PhoneOff className="mr-1 h-3 w-3" />
    default:
      return <Clock className="mr-1 h-3 w-3" />
  }
}

const recentCalls = [
  {
    id: "1",
    name: "John Smith",
    phone: "(123) 456-7890",
    time: "10:32 AM",
    status: "Positive",
    duration: "4:25",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    phone: "(234) 567-8901",
    time: "10:28 AM",
    status: "Negative",
    duration: "2:15",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "3",
    name: "Michael Brown",
    phone: "(345) 678-9012",
    time: "10:15 AM",
    status: "Rejected",
    duration: "0:45",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "4",
    name: "Emily Davis",
    phone: "(456) 789-0123",
    time: "10:02 AM",
    status: "Positive",
    duration: "5:10",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "5",
    name: "Robert Wilson",
    phone: "(567) 890-1234",
    time: "9:48 AM",
    status: "Negative",
    duration: "1:35",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]


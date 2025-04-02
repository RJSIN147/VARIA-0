"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge, badgeVariants } from "@/components/ui/badge"
import { CheckCircle, Clock, PhoneOff, XCircle } from "lucide-react"
import { CallStatus } from "@/types/call"
import { recentCalls } from "@/lib/mock-data"

function getVariantForStatus(status: CallStatus) {
  switch (status) {
    case "Positive":
      return "default"
    case "Negative":
      return "destructive"
    case "Rejected":
      return "secondary"
    default:
      return "outline"
  }
}

function getIconForStatus(status: CallStatus) {
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

function getInitials(name: string) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

function getAvatarColor(name: string) {
  const colors = [
    'bg-blue-100 text-blue-700',
    'bg-green-100 text-green-700',
    'bg-purple-100 text-purple-700',
    'bg-pink-100 text-pink-700',
    'bg-yellow-100 text-yellow-700',
    'bg-red-100 text-red-700',
    'bg-indigo-100 text-indigo-700',
    'bg-teal-100 text-teal-700',
  ]
  
  // Use the name to consistently select a color
  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
  return colors[index]
}

export function RecentCalls() {
  return (
    <div className="space-y-8">
      {recentCalls.map((call) => (
        <div key={call.id} className="flex items-center">
          <Avatar className={`h-9 w-9 ${getAvatarColor(call.name)}`}>
            <AvatarFallback className="bg-transparent">
              {getInitials(call.name)}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{call.name}</p>
            <p className="text-sm text-muted-foreground">
              {call.phone} • {call.time}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Badge className={badgeVariants({ variant: getVariantForStatus(call.status) })}>
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


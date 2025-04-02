"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

export function RecentCalls() {
  return (
    <div className="space-y-8">
      {recentCalls.map((call) => (
        <div key={call.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={call.avatar} alt={`${call.name}'s avatar`} />
            <AvatarFallback>{call.name.charAt(0)}</AvatarFallback>
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


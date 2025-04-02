export type CallStatus = "Positive" | "Negative" | "Rejected" | "Pending"

export interface Call {
  id: string
  name: string
  phone: string
  time: string
  status: CallStatus
  duration: string
  avatar: string
} 
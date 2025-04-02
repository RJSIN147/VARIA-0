"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { time: "8 AM", calls: 18 },
  { time: "9 AM", calls: 35 },
  { time: "10 AM", calls: 52 },
  { time: "11 AM", calls: 78 },
  { time: "12 PM", calls: 94 },
  { time: "1 PM", calls: 76 },
  { time: "2 PM", calls: 85 },
  { time: "3 PM", calls: 101 },
  { time: "4 PM", calls: 98 },
  { time: "5 PM", calls: 87 },
  { time: "6 PM", calls: 62 },
  { time: "7 PM", calls: 45 },
]

export function CallsTimeline() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Area type="monotone" dataKey="calls" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}


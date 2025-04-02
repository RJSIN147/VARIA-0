"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Week 1",
    "Conversion Rate": 42,
    "Call Duration": 3.2,
    "Response Time": 1.8,
  },
  {
    name: "Week 2",
    "Conversion Rate": 45,
    "Call Duration": 3.5,
    "Response Time": 1.7,
  },
  {
    name: "Week 3",
    "Conversion Rate": 48,
    "Call Duration": 3.3,
    "Response Time": 1.5,
  },
  {
    name: "Week 4",
    "Conversion Rate": 51,
    "Call Duration": 3.1,
    "Response Time": 1.4,
  },
]

export function CallsPerformance() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Conversion Rate" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Call Duration" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Response Time" fill="#ec4899" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}


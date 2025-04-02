"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan 1",
    "Total Calls": 120,
    Positive: 65,
    Negative: 28,
    Rejected: 27,
  },
  {
    name: "Jan 2",
    "Total Calls": 132,
    Positive: 59,
    Negative: 40,
    Rejected: 33,
  },
  {
    name: "Jan 3",
    "Total Calls": 101,
    Positive: 45,
    Negative: 30,
    Rejected: 26,
  },
  {
    name: "Jan 4",
    "Total Calls": 134,
    Positive: 70,
    Negative: 35,
    Rejected: 29,
  },
  {
    name: "Jan 5",
    "Total Calls": 90,
    Positive: 40,
    Negative: 30,
    Rejected: 20,
  },
  {
    name: "Jan 6",
    "Total Calls": 85,
    Positive: 45,
    Negative: 20,
    Rejected: 20,
  },
  {
    name: "Jan 7",
    "Total Calls": 120,
    Positive: 65,
    Negative: 30,
    Rejected: 25,
  },
  {
    name: "Jan 8",
    "Total Calls": 132,
    Positive: 59,
    Negative: 40,
    Rejected: 33,
  },
  {
    name: "Jan 9",
    "Total Calls": 101,
    Positive: 45,
    Negative: 30,
    Rejected: 26,
  },
  {
    name: "Jan 10",
    "Total Calls": 134,
    Positive: 70,
    Negative: 35,
    Rejected: 29,
  },
  {
    name: "Jan 11",
    "Total Calls": 90,
    Positive: 40,
    Negative: 30,
    Rejected: 20,
  },
  {
    name: "Jan 12",
    "Total Calls": 85,
    Positive: 45,
    Negative: 20,
    Rejected: 20,
  },
  {
    name: "Jan 13",
    "Total Calls": 120,
    Positive: 65,
    Negative: 30,
    Rejected: 25,
  },
  {
    name: "Jan 14",
    "Total Calls": 132,
    Positive: 59,
    Negative: 40,
    Rejected: 33,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Positive" fill="#10b981" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Negative" fill="#ef4444" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Rejected" fill="#f59e0b" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}


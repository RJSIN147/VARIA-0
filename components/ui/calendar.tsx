"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export type CalendarProps = React.HTMLAttributes<HTMLDivElement> & {
  showOutsideDays?: boolean
  selectedDate?: Date
  onSelect?: (date: Date) => void
}

function Calendar({ className, showOutsideDays = true, selectedDate, onSelect, ...props }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())

  const handleMonthChange = (offset: number) => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + offset, 1))
  }

  const isSelectedDate = (date: number, isCurrentMonth: boolean) => {
    return (
      selectedDate &&
      isCurrentMonth &&
      date === selectedDate.getDate() &&
      currentMonth.getMonth() === selectedDate.getMonth() &&
      currentMonth.getFullYear() === selectedDate.getFullYear()
    )
  }

  const isToday = (date: number, isCurrentMonth: boolean) => {
    const today = new Date()
    return (
      isCurrentMonth &&
      date === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    )
  }

  const handleDateClick = (date: number, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date)
    onSelect?.(newDate) // Call the parent's onSelect function
  }

  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const lastDay = new Date(year, month + 1, 0).getDate()
    const prevMonthDays = new Date(year, month, 0).getDate()

    let days: { date: number; currentMonth: boolean }[] = []

    if (showOutsideDays) {
      for (let i = firstDay - 1; i >= 0; i--) {
        days.push({ date: prevMonthDays - i, currentMonth: false })
      }
    } else {
      days = Array(firstDay).fill({ date: 0, currentMonth: false })
    }

    for (let day = 1; day <= lastDay; day++) {
      days.push({ date: day, currentMonth: true })
    }

    while (days.length % 7 !== 0) {
      days.push({ date: days.length % 7 + 1, currentMonth: false })
    }

    return days
  }

  const days = getDaysInMonth()
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

  return (
    <div className={cn("border border-gray-200 rounded-md p-4", className)} {...props}>
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={() => handleMonthChange(-1)}
          className="p-2 rounded-md hover:bg-gray-100"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="text-lg font-medium">
          {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
        </div>
        <button 
          onClick={() => handleMonthChange(1)}
          className="p-2 rounded-md hover:bg-gray-100"
          aria-label="Next month"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-7 text-center font-medium mb-2">
        {weekdays.map(day => (
          <div key={day} className="py-1">{day}</div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((cell, index) => (
          <div
            key={index}
            className={cn(
              "py-2 text-center cursor-pointer rounded-md",
              cell.currentMonth ? "hover:bg-gray-100" : "text-gray-400",
              isSelectedDate(cell.date, cell.currentMonth) && "bg-black text-white",
              isToday(cell.date, cell.currentMonth) && "font-bold"
            )}
            onClick={() => handleDateClick(cell.date, cell.currentMonth)}
            aria-selected={isSelectedDate(cell.date, cell.currentMonth)}
          >
            {cell.date > 0 ? cell.date : ""}
          </div>
        ))}
      </div>
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }

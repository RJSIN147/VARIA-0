"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface CalendarDateRangePickerProps {
  className?: string
  onDateRangeChange?: (range: { from: Date | undefined; to: Date | undefined }) => void
}

export function CalendarDateRangePicker({ className, onDateRangeChange }: CalendarDateRangePickerProps) {
  const [dateRange, setDateRange] = React.useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: undefined,
    to: undefined
  })

  const handleSelect = React.useCallback((dateOrEvent: Date | React.SyntheticEvent<HTMLDivElement>) => {
    if (dateOrEvent instanceof Date) {
      const newRange = {
        from: dateRange.from || dateOrEvent,
        to: dateRange.from && !dateRange.to ? dateOrEvent : undefined
      }
      setDateRange(newRange)
      onDateRangeChange?.(newRange)
    }
  }, [dateRange.from, dateRange.to, onDateRangeChange])

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            id="date" 
            variant="outline" 
            className="w-[240px] justify-start text-left font-normal"
            type="button"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} -{" "}
                  {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar 
            selectedDate={dateRange.from}
            onSelect={handleSelect}
            showOutsideDays={true}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

  
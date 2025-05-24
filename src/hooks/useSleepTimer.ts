import { useEffect, useState } from "react"

export function useSleepTimer(isTracking: boolean, startTime: Date | null) {
  const [durationInSeconds, setDurationInSeconds] = useState(0)

  useEffect(() => {
    if (!isTracking || !startTime) return

    const interval = setInterval(() => {
      const now = new Date()
      const diff = Math.floor((now.getTime() - startTime.getTime()) / 1000)
      setDurationInSeconds(diff)
    }, 1000)

    return () => clearInterval(interval)
  }, [isTracking, startTime])

  return durationInSeconds
}

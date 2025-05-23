import { Glass } from "../../components/Glass";
import logo from "../../assets/logo.svg";
import { Icon } from "../../components/Icon";
import { Button } from "../../components/Button";
import { toast } from "@pheralb/toast";
import { useState } from "react";
import { useSleepTimer } from "../../hooks/useSleepTimer";
import time from "../../assets/time.svg";
import styles from "./SleepTracker.module.css";

type sleepRecords = {
  start: Date;
  end: Date;
  durationHours: number;
};

export const SleepTracker = () => {
  // Estado para el seguimiento del sueño
  const [isTracking, setIsTracking] = useState(false);

  // Estado para la hora de inicio y fin del sueño
  const [startTime, setStartTime] = useState<Date | null>(null);

  // Estado para almacenar los registros de sueño
  const [sleepRecords, setSleepRecords] = useState<sleepRecords[]>([]);

  // Estado para almacenar la duración del sueño
  const duration = useSleepTimer(isTracking, startTime);

  console.log(sleepRecords);

  const formatTime = (seconds: number) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  const handleStart = () => {
    const now = new Date();
    setStartTime(now);
    setIsTracking(true);
    toast.success({
      text: "Tracking started!",
      description: `Sleep time started at ${now.toLocaleTimeString()}`,
    });
  };


  const handleStop = () => {
    if (!startTime) return;

    const endTime = new Date();
    const diff = (endTime.getTime() - startTime.getTime()) / 1000; // en segundos

    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = Math.floor(diff % 60);

    const formattedDuration = `${hours}h ${minutes}min ${seconds}s`;

    setSleepRecords((prevRecords) => [
      ...prevRecords,
      {
        start: startTime,
        end: endTime,
        durationHours: hours,
      },
    ]);

    setIsTracking(false);
    setStartTime(null);

    toast.success({
      text: "Tracking stopped!",
      description: `You slept ${formattedDuration}.`,
    });
  };

  return (
    <>
      <Glass>
        <div className={styles.container}>
          <Icon icon={logo} alt="logo" />
          <article className={styles.article}>
            <h2>Track your sleep</h2>
            <div>
              {isTracking && (
                <span className={styles.counter}>
                  <span>{formatTime(duration)}</span>
                  {startTime && (
                    <span className={styles.atTime}>
                      <div>
                          <img src={time} alt="icon stats" />
                      </div>
                      Started at {startTime.toLocaleTimeString()}
                    </span>
                  )}
                </span>
              )}
            </div>
            <Button
              text={isTracking ? "Stop Tracking" : "Start Tracking"}
              onClick={isTracking ? handleStop : handleStart}
            />
          </article>
        </div>
      </Glass>
    </>
  );
};

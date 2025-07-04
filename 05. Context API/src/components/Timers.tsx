import { useTimerContext } from "../store/timer-context";
import Timer from "./Timer";

export default function Timers() {
  const { timers } = useTimerContext();
  return <ul>
    {timers.map((timer) => <li key={timer.name}> <Timer name={timer.name} duration={timer.duration} /></li>)}
  </ul>;
}

import Button from './UI/Button.tsx';
import { useTimerContext } from '../store/timer-context.tsx';

export default function Header() {
  const ctx = useTimerContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={ctx.isRunning ? ctx.stopTimer : ctx.startTimer}>{ctx.isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}

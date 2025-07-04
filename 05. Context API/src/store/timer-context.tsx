import { createContext, useContext, useReducer } from "react";

export type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
};

const intialState: TimersState = {
    isRunning: false,
    timers: []
};

type TimerContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimer: () => void;
    stopTimer: () => void;
};

const TimerContext = createContext<TimerContextValue | null>(null);

const useTimerContext = () => {
    const ctxTimer = useContext(TimerContext);

    if (!ctxTimer) {
        throw new Error("useTimerContext must be used within a TimerContextProvider");
    }

    return ctxTimer;
}

type TimerContextProviderProps = {
    children: React.ReactNode;
};

type StartTimerAction = {
    type: 'START_TIMER';
};

type StopTimerAction = {
    type: 'STOP_TIMER';
};

type AddTimerAction = {
    type: 'ADD_TIMER';
    payload: Timer;
};

type Action = StartTimerAction | StopTimerAction | AddTimerAction;

const timerReducer = (state: TimersState, action: Action): TimersState => {
    if (action.type === 'START_TIMER') {
        return {
            ...state,
            isRunning: true
        };
    }

    if (action.type === 'STOP_TIMER') {
        return {
            ...state,
            isRunning: false
        };
    }

    if (action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers: [...state.timers, { name: action.payload.name, duration: action.payload.duration }]
        }
    }

    return state;
};

const TimerContextProvider = ({ children }: TimerContextProviderProps) => {
    const [timersState, dispatch] = useReducer(timerReducer, intialState);

    const ctx: TimerContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer: (timerData) => {
            dispatch({ type: 'ADD_TIMER', payload: timerData });
        },
        startTimer: () => {
            dispatch({ type: 'START_TIMER' });
        },
        stopTimer: () => {
            dispatch({ type: 'STOP_TIMER' });
        }
    };

    return <TimerContext.Provider value={ctx}>{children}</TimerContext.Provider>
};

export { useTimerContext, TimerContext, TimerContextProvider};
export default TimerContextProvider;
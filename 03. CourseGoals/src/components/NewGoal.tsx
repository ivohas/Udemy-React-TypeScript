import { useRef, FormEvent } from "react";

type NewGoalProps = {
    onAddGoal: (title: string, description: string) => void;
};
const NewGoal = ({ onAddGoal }: NewGoalProps) => {
    const title = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        onAddGoal(title.current?.value || "", description.current?.value || "");
        event.currentTarget.reset();
    };

    return (
        <form onSubmit={onSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" type="text" ref={title} />
            </p>
            <p>
                <label htmlFor="description">Short Summary</label>
                <input id="description" type="text" ref={description} />
            </p>
            <p>
                <button>Add goal button</button>
            </p>
        </form>
    );
};

export default NewGoal;
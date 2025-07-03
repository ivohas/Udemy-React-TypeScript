type CourseGoalProps = {
    id: number;
    title: string;
    description: string;
    onDelete: (id: number) => void;
};

const CourseGoal = ({ id, title, description, onDelete }: CourseGoalProps) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    );
}

export default CourseGoal;
import React from "react";
import { ReactNode } from "react";
import { type CourseGoal as CourseGoalProp } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
    goals: CourseGoalProp[];
    onDelete: (id: number) => void;
};

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
    let warningBox: ReactNode; 

    if (goals.length > 5) {
        warningBox = <InfoBox mode="warning" severity="medium">You have more than 5 goals!</InfoBox>;
    } else if (goals.length === 0){
        warningBox = <InfoBox mode="hint">You have {goals.length} goals.</InfoBox>;
    }

    return (
        <>
            {warningBox}
            <ul>
                {goals.map((goal) => (<li key={goal.id}><CourseGoal id={goal.id} title={goal.title} description={goal.description} onDelete={(onDelete)} /> </li>))}
            </ul>
        </>
    );
}

export default CourseGoalList;
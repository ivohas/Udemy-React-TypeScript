import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import goalImage from "./assets/goals.jpg";
import NewGoal from "./components/NewGoal";


export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (title : string, description : string) => {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: title,
      description: description
    };

    setGoals((prevGoals) => [
      ...prevGoals,
      newGoal,
    ]);
  }


  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter(goal => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalImage, alt: "A list of goals" }} >
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
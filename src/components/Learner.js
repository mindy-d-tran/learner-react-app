import { learnerData } from "../data/learnerData";
import Score from "./Score";

export default function Learner() {
  return (
    <main>
      {learnerData.map((learner, i) => (
        <section key={i}>
          <h2> {learner.name}</h2>
          <p>Bio: {learner.bio}</p>
          <Score scores={learner.scores}/>
        </section>
      ))}
    </main>
  );
}

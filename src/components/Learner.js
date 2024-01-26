import Score from "./Score";

export default function Learner({learners}) {
  return (
    <main>
      {learners.map((learner, i) => (
        <section key={i} className="leaner">
          <h2> {learner.name}</h2>
          <p><span className="bold">Bio: </span>{learner.bio}</p>
          <h3>Scores: </h3>
          <Score scores={learner.scores} id={i}/>
        </section>
      ))}
    </main>
  );
}

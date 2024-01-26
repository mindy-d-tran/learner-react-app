import Score from "./Score";

export default function Learner({learners}) {
  return (
    <main>
      {learners.map((learner, i) => (
        <section key={i} className="leaner">
          <h2> {learner.name}</h2>
          <p><span className="bold">Bio: </span>{learner.bio}</p>
          <Score scores={learner.scores}/>
        </section>
      ))}
    </main>
  );
}

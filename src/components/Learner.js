import Score from "./Score";

export default function Learner({ learners }) {
  return (
    <main>
      {learners.map((learner, i) => (
        <section key={i} className="learner">
          <h2> {learner.name}</h2>
          <section className="bio">
            <h3 className="bold">Bio: </h3>
            <p>{learner.bio}</p>
          </section>
          <section className="score">
            <h3>Scores: </h3>
            <Score scores={learner.scores} id={i} />
          </section>
        </section>
      ))}
    </main>
  );
}

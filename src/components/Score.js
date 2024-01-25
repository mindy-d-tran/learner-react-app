export default function Score(prop) {
  return (
    <section>
      <h3>Scores</h3>
      {prop.scores.map((score, i) => (
        <ul key={i}>
          <li>Date: {score.date}</li>
          <li>Score: {score.score}</li>
        </ul>
      ))}
    </section>
  );
}

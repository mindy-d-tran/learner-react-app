export default function Score(prop) {
  return (
    <section className="score">
      <h3>Scores: </h3>
      {prop.scores.map((score, i) => (
        <div>
          <ul key={i}>
            <li>
              <span className="bold">Date: </span>
              {score.date}
            </li>
            <li>
              <span className="bold">Score: </span>
              {score.score}
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
}

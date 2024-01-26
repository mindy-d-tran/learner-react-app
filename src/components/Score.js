export default function Score(prop) {
  return (
    <section className="score">

      <div>
        {prop.scores.map((score, i) => (
          <ul key={`${prop.id}${i}`}>
            <li>
              <span className="bold">Date: </span>
              {score.date}
            </li>
            <li>
              <span className="bold">Score: </span>
              {score.score}
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}

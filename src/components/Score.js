export default function Score(prop) {
  return (
    <ul>
      {prop.scores.map((score, i) => (
        <ul key={i}>
          <li>{score.date}</li>
          <li>{score.score}</li>
        </ul>
      ))}
    </ul>
  );
}

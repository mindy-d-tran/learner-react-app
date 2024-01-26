import { learnerData } from "./data/learnerData";
import { useState } from "react";

import "./App.css";
import Learner from "./components/Learner";

function App() {
  //create a new state passing the learnerData
  const [learners, setLearners] = useState(learnerData);
  return (
    <div className="App">
      <h1>Learner App</h1>
      <Learner learners={learners}/>
    </div>
  );
}

export default App;

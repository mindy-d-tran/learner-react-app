// import {learnerData} from './data/learnerData';
// import useState

import './App.css';
import Learner from './components/Learner';

function App() {
  //create a new state passing the learnerData
  // userState(learnerData)
  return (
    <div className="App">
      <h1>Learner App</h1>
      <Learner />
    </div>
  );
}

export default App;
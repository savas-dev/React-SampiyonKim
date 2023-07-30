import { useState } from "react";
import Teams from "./teams";
import "./App.css";

function getRandomTeam(){
  const teamArray = ['GS', 'FB', 'BJK', 'TS']
  return teamArray[Math.floor(Math.random() * teamArray.length)]
}

function App() {
  const [teams, setTeams] = useState([]);

  const getTeam = () => {
    setTeams([...teams, getRandomTeam()])
  }

  const getTeamsName = teams.map((teams, index) => {
    return <Teams key={index} teamName={teams} />;
  });

  return (
    <div className="App">
      <button className="appButton" onClick={getTeam}>Kim Şampiyon Olur?</button>
      <div className="teamList">
        {getTeamsName}
      </div>
    </div>
  );
}

export default App;

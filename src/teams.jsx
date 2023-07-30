import './team.css';

import GS from "./assets/images/gs.png";
import FB from "./assets/images/fb.png";
import BJK from "./assets/images/bjk.png";
import TS from "./assets/images/ts.png";

const teamMap = {
  GS:GS,
  FB:FB,
  BJK:BJK,
  TS:TS
}

function Teams({teamName}) {
  return <div className='teamDiv'>
    <img className="team" src={teamMap[teamName]} />
  </div>;
}

export default Teams;

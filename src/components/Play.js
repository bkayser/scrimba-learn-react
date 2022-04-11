
import Question from './Question'

function Play() {

  [qdata, setQdata] = React.useState({})
  
  return (
    <div className="Play">
      <Question/>
    </div>
  );
}

export default Play;

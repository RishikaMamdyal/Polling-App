import { usePoll } from "../context/PollContext";

const PollCard = () => {
  const { votes, dispatch } = usePoll();

  const handleVote = (option) => {
    dispatch({ type: "VOTE", option });
  };

  const resetVotes = () => {
    dispatch({ type: "RESET" });
  };

  const totalVotes = votes.OptionA + votes.OptionB || 1;

  return (
    <div className="poll-card">
      <h2>Vote for Your Preferred Option</h2>

      <div className="options">
        <button className="vote-btn" onClick={() => handleVote("OptionA")}>
          ✅ Option A
        </button>
        <button className="vote-btn" onClick={() => handleVote("OptionB")}>
          ✅ Option B
        </button>
      </div>

      <div className="results">
        <h3>Live Results:</h3>
        <div className="result-bar">
          <div
            className="bar"
            style={{ width: `${(votes.OptionA / totalVotes) * 100}%` }}
          ></div>
        </div>
        <p>Option A: <strong>{votes.OptionA}</strong> votes</p>
        <p>Option B: <strong>{votes.OptionB}</strong> votes</p>
      </div>

      <button className="reset-btn" onClick={resetVotes}>🔄 Reset Poll</button>
    </div>
  );
};

export default PollCard;

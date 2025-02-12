import { PollProvider } from "../src/assets/context/PollContext";
import Navbar from "../src/assets/components/Navbar";
import PollCard from "../src/assets/components/PollCard";
import './App.css'

const App = () => {
  return (
    <PollProvider>
      <div className="container">
        <Navbar />
        <PollCard />
      </div>
    </PollProvider>
  );
};

export default App;

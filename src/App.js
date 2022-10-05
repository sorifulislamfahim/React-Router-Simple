import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar/Navbar';
import Pricing from './componants/Pricing/Pricing';
import AssignmentMark from './componants/AssignmentMark/AssignmentMark';
import PhoneBar from './componants/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <h1 className="text-5xl font-bold underline">This is Big part</h1>
    <p className='text-3xl font-serif '>This is paragraph part</p>
    <Pricing></Pricing>
    <AssignmentMark></AssignmentMark>
    <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;

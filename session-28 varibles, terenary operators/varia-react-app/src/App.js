import logo from './logo.svg';
import './App.css';
import MarkSheet from './component/MarkSheet';

function App() {
  return (
    <div className="App">
    <MarkSheet  studentName="Lakshmi priya" engMarks="76" telMarks="85" hinMarks="75" matMarks="92" sciMarks="90" socMarks="89"/>
    <MarkSheet studentName="Rushanth" engMarks="96" telMarks="95" hinMarks="95" matMarks="99" sciMarks="97" socMarks="99" />
    <MarkSheet studentName="HariPriya" engMarks="34" telMarks="95" hinMarks="95" matMarks="99" sciMarks="97" socMarks="99"/>
    <MarkSheet studentName="Teja" engMarks="96" telMarks="95" hinMarks="15" matMarks="99" sciMarks="97" socMarks="99"/>

    </div>
  );
}

export default App;

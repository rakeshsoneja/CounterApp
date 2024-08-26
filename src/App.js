import './App.css';
// import CounterApp from './counterComponents/counterScreen.js';
import ChatBox from './chatbox/chatbox.js';
import CounterApp from './counterComponents/counterScreen.js';
import SearchDisplayContainer from './searchCriteriaForm/searchForm.js'
import MainView from './MainScreen/MainView.js';

function App() {
  return (
    <div>
      {/* <header className="App-header"> */}
        {/* <h3>Counter App</h3> */}
        {/* <ChatBox /> */}
        {/* <CounterApp /> */}
        {/* <SearchDisplayContainer /> */}
        <MainView />

      {/* </header> */}
    </div>
  );
}

export default App;


import './App.css';
import List from './components/list/List';

import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Principal from './components/shared/Principal';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Principal>
        <List></List>
      </Principal>
      <Footer></Footer>
    </div>
  );
}

export default App;

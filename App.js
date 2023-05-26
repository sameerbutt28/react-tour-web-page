import logo from './logo.svg';
import './App.css';
import Navbar from "./components/nav"
import Main from "./components/main"
import Data from "./components/data"



function App() {
  const containerelements = Data.map(items => {
    return (
      <Main  
      key={items.id}
      items={items}


      />
    )
  })
  return (
    <div className="App">
    <Navbar/>
    <div className='maincontainer'>
 {containerelements}

    </div>
   
    </div>
  );
}

export default App;

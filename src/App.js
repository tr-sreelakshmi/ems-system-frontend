import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Add from './Pages/Add';
import Admin from './Pages/Admin';
import Edit from './Pages/Edit';
import View from './Pages/View';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
            <Header/>
      <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;

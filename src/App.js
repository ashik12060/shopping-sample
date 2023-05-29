import './App.css';
import Container from './pages/Container/Container';
import Cover from './pages/Cover/Cover';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import NavBar from './pages/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Cover></Cover>
      <Container></Container>
      <Home></Home>

      
    </div>
  );
}

export default App;

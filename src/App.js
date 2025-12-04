import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ContentArea from './components/ContentArea/ContentArea';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ContentArea />
      <Footer />
    </div>
  );
}

export default App;

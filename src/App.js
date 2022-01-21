import './App.scss';
import Header from './components/header';
import Footer from './components/footer';
import MainContent from './components/mainContent';

function App() {
  return (
    <div className='container'>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;

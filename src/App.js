import './App.css';
import Wrapper from './components/Helpers/Wrapper';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/UI/Navbar';

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <HeroSection />
    </Wrapper>
  );
}

export default App;

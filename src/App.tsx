import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import RiskMap from './sections/RiskMap';
import AIPartner from './sections/AIPartner';
import FutureSkills from './sections/FutureSkills';
import RobotTest from './sections/RobotTest';
import Practicum from './sections/Practicum';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        
        <div id="risk-map">
          <RiskMap />
        </div>
        
        <div id="ai-partner">
          <AIPartner />
        </div>
        
        <div id="skills">
          <FutureSkills />
        </div>
        
        <div id="test">
          <RobotTest />
        </div>
        
        <div id="practicum">
          <Practicum />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

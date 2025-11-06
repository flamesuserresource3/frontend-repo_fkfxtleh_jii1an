import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import USSDLikeActions from './components/USSDLikeActions';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <Header />
      <main>
        <Hero />
        <USSDLikeActions />
        <Features />
      </main>
    </div>
  );
}

export default App;

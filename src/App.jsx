import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { WhatsAppButton } from './components/common';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

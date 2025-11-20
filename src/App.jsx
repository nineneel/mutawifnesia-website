import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

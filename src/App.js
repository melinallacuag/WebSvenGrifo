import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componentes/login';
import Dashboard from './componentes/dashboard';


function App() {
  return (
    
    <Router>
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/dashboard" element={ <Dashboard /> } />
    </Routes>
  </Router>
  );
}

export default App;

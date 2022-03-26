import { useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context/Auth/AuthContext/authcontext';
import { RequireAuth } from './context/Auth/RequireAuth/requireauth';
import Home  from './pages/Home/home'
import Private from './pages/Private/private'

function App() {

  const auth = useContext(AuthContext);

  const handleLogout =  () => {
    auth.signout();
    window.location.href = window.location.href;
  }

  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página Privada</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;

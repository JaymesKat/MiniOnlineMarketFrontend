import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter
} from "react-router-dom";
import AppRoutes from './router/routes';
import NavBar from './components/shared/navbar/NavBar'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <AppRoutes />
        </BrowserRouter>
    </div>
  );
}

export default App;

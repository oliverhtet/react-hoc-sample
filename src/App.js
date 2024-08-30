import logo from './logo.svg';
import './App.css';
import AuthMiddleware from './components/AuthMiddleware';
import Dashboard from './components/Dashboard';

const ProtectedDashboard = AuthMiddleware(Dashboard);
function App() {
  return (
    <div>
      <h1>My Application</h1>
      <ProtectedDashboard userName="John Doe" />
    </div>
  );
}

export default App;
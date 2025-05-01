import './App.css';
import UsercontextProvider from './context/UserContextProvider';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <UsercontextProvider>
      <h1 className="text-white">This is Very nice</h1>
      <Login />
      <Profile />
    </UsercontextProvider>
  );
}

export default App;

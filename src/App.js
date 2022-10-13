
import './App.css';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from './firebase.init';

const auth = getAuth(app)
function App() {
  const provider = new GoogleAuthProvider();
  const handleSingIn =()=>{
    console.log("sing in")
  }
  return (
    <div className="App">
      <button onClick={handleSingIn}>Google Sing In</button>
    </div>
  );
}

export default App;

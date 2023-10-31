import React , {useState , createContext , useEffect} from "react";
import Header from "./components/Header";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Shooping from "./routes/Shooping";
import toast, {Toaster} from "react-hot-toast";
import { messaging , tokeen } from "./firebase/index";
import { getToken } from "firebase/messaging";
import { onMessage } from "firebase/messaging"; 

export const AppContext = createContext(null);
function App() {
 const [route , setRoute] = useState("home");
const [user , setUser] = useState(null);

  onMessage(messaging , payload =>{
    console.log("Nueva notificacion ", payload)
    toast(payload.notification.body);
  });
 
    useEffect(() => {
      console.log("Por el useeffect del toekn en appjs. ")
    tokeen()
    },
     []);
  return (
    <AppContext.Provider value={{route, setUser , user ,  setRoute}} >
    	  <div className="h-screen">
        <Toaster/>
      <Header/>
      <main className= "p-6">
      
          {route ==="home" && <Home/>}

          {route ==="login" && <Login/>}
          {route === "register" && <Register/>}
          {route === "shooping" && <Shooping/>}
          {user && <p>Usuario logueado : {user.email}</p>}
      </main>
      <footer className="fixed h-16  bg-blue-400 bottom-0">
        <h2>Hola</h2>
      </footer>
    </div>
   </AppContext.Provider>
  );
}

export default App;

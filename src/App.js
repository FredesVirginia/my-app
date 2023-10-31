import React , {useState , createContext , useEffect} from "react";
import Header from "./components/Header";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
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
    	  <div>
        <Toaster/>
      <Header/>
      <main className= "p-6">
      
          {route ==="home" && <Home/>}

          {route ==="login" && <Login/>}
          {route === "register" && <Register/>}
          {user && <p>Usuario logueado : {user.email}</p>}
      </main>
    </div>
   </AppContext.Provider>
  );
}

export default App;

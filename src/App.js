import React , {useState , createContext , useEffect} from "react";
import Header from "./components/Header";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import {Toaster} from "react-hot-toast";
import { messaging } from "./firebase/index";
import { getToken } from "firebase/messaging";
import { onMessage } from "firebase/messaging"; 

export const AppContext = createContext(null);
function App() {
 const [route , setRoute] = useState("home");
const [user , setUser] = useState(null);

  onMessage(messaging , payload =>{
    console.log("Nueva notificacion ", payload)
  });
  async function requestPermission(){
    console.log("LLAMANDO A L A FUNCION")
    const permission = await Notification.requestPermission();
    if(permission === "granted"){
      console.log("POR EL PERMITIDO")
          //Generate Token
      const token = await getToken(messaging , {vapidKey : "BETlaoi-RhzF7UspHOJl2sUvah9xQh_hWJtulY9x8mleV_Kgmh8pQkg6HxoOUZLXFTF_qqVgh7ko6NGd0TWGUhc"})
        console.log("EL TOKEN ES " , token)
    
    }else if(permission === "denied"){
      alert("YOU DENIED FOR THE NOTIFICATION")
    }
  }
    useEffect(() => {
      requestPermission()
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

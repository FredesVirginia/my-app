import React , {useState , createContext} from "react";
import Header from "./components/Header";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import {Toaster} from "react-hot-toast";

 export const AppContext = createContext(null);
function App() {
 const [route , setRoute] = useState("home");
const [user , setUser] = useState(null);
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

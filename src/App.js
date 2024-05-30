import React, {useState} from "react";
import "./Form.css";

function App() {

  const [username, setUsername] = useState(""); //create username and set it to an empty string, setUsername can update it.
  const [password, setPassword] = useState(""); //create password and set it to an empty string, setPassword can update it.
  const [isLoggedIn, setIsLoggedIn] = useState(false); //the usestate is boolean and can be toggled
  const [loginFailed, setLoginFailed] = useState(false); //the usestate is boolean and will change on a failed login
  
  const handleLogin = (event) => {
    event.preventDefault();
    if(username=== "admin" && password ==="admin"){
      setIsLoggedIn(true);
     
    }
    else{
      setLoginFailed(true)
    }
  };



  const clearFields = () => {
      document.getElementById('username').value ='';
      document.getElementById('password').value ='';
  };

  if(isLoggedIn){
    return(<WelcomePage username={username}/>);
  }

  else{
   
      return (<>
      {loginFailed && <p id="loginFailed">Login Failed</p>}
    

        

  <div className="container">
        <h1 id="formName">Login</h1>

        <form onSubmit={handleLogin}>
            <input type="text" id="username" name="username" placeholder="Username" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" id="password" name="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
            <input type="submit" id="login" value="Login"/>
            <input type="button" value="Cancel" id="cancel_button" onClick={clearFields} />
        </form>

</div>
           
     </>  
    );
}
}

function WelcomePage({ username }) {
  return <h1>Welcome, {username}!</h1>;
}

export default App;

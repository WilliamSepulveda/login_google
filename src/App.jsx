import './App.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function App() {
  const clientID = '401053425502-1dj22q7auik9d0vtamtb5j8o087ckd9r.apps.googleusercontent.com';

  const onSuccess = (response) => {
    console.log("Login exitoso:", response);
  };

  const onError = (error) => {
    console.error("Error en el login:", error);
  };

  return (
    <div className="App">
      <h1>Autenticación con Google</h1>
      <GoogleOAuthProvider clientId={clientID}>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
          cookiePolicy={'single_host_origin'}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;

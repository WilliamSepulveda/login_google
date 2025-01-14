import '../styles/App.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import balon from '../assets/soccer-balon.svg';
import { useNavigate } from 'react-router-dom';

function App() {
  const clientID = '401053425502-1dj22q7auik9d0vtamtb5j8o087ckd9r.apps.googleusercontent.com';
  const navigate = useNavigate(); // Hook para redirigir

  const onSuccess = (response) => {
    console.log("Login exitoso:", response);
    // Redirigir a otra página después del login
    navigate('/Productos');
  };

  const onError = (error) => {
    console.error("Error en el login:", error);
  };

  return (
    <div className="App">
      <div className="blurred-box">
        <h2 className="title">Ingresa para empezar tu cambio</h2>
        <div className="user-login-box">
          <div className="user-icon">
            <img src={balon} className='balon' alt="Balón de fútbol" />
          </div>
        </div>
        <GoogleOAuthProvider clientId={clientID}>
          <div className="login-container">
            <GoogleLogin
              onSuccess={onSuccess}
              onError={onError}
              cookiePolicy={'single_host_origin'}
              useOneTap
              theme="filled_blue"
              shape="pill"
            />
          </div>
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}

export default App;

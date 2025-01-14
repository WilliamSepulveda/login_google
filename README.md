# Autenticación con Google en React

Este proyecto implementa la autenticación con Google en una aplicación React utilizando la librería `@react-oauth/google`.

## Instalación

### 1. Clonar el repositorio  
Si aún no has clonado el repositorio, puedes hacerlo con el siguiente comando:

```bash
git clone https://github.com/WilliamSepulveda/login_google
```

### 2. Instalar dependencias  
Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina. Luego, instala las dependencias del proyecto ejecutando:

```bash
npm install
```

### 3. Instalar la librería `@react-oauth/google`  
Si aún no has instalado la librería necesaria para la autenticación con Google, puedes hacerlo ejecutando:

```bash
npm install @react-oauth/google
```

## Configurar la clave del cliente de Google

Necesitarás un `clientID` de Google OAuth. Para obtenerlo:

1. **Ve a la Consola de Desarrolladores de Google**:  
   [Google Developer Console](https://console.developers.google.com/)

2. **Crea un proyecto si no tienes uno**.

3. **En la sección de "Credenciales"**, crea una nueva credencial OAuth 2.0 y obtiene tu `clientID`.

4. **Sustituye el valor de `clientID` en el código de ejemplo de la siguiente manera:**

```javascript
const clientID = 'tu-client-id-aqui';
```

## Descripción del Código

La aplicación usa `@react-oauth/google` para integrar el inicio de sesión con Google. A continuación se describe cada parte del código:

### 1. Componentes Importados

1. **`GoogleOAuthProvider`**  
   Este componente proporciona el contexto necesario para la autenticación de Google en la aplicación. Debe envolver la parte de la aplicación donde se va a realizar el inicio de sesión. 

   Ejemplo de uso:

   ```javascript
   import { GoogleOAuthProvider } from '@react-oauth/google';

   function App() {
     return (
       <GoogleOAuthProvider clientId={clientID}>
         {/* El resto de tu aplicación */}
       </GoogleOAuthProvider>
     );
   }
   ```

2. **`GoogleLogin`**  
   Este componente muestra el botón de inicio de sesión de Google y maneja el flujo de autenticación. Al hacer clic en el botón, se abrirá la ventana emergente de inicio de sesión de Google y, al autorizar, se ejecutará la función que definas en el atributo `onSuccess` o `onFailure`.

   Ejemplo de uso:

   ```javascript
   import { GoogleLogin } from '@react-oauth/google';

   function Login() {
     const handleSuccess = (response) => {
       console.log('Inicio de sesión exitoso:', response);
     };

     const handleFailure = (error) => {
       console.error('Error en el inicio de sesión:', error);
     };

     return (
       <GoogleLogin
         onSuccess={handleSuccess}
         onError={handleFailure}
       />
     );
   }
   ```

## Notas

- **`GoogleOAuthProvider`** debe envolver tu componente principal para que la autenticación funcione correctamente.
- **`GoogleLogin`** maneja la autenticación de forma automática, pasando el token de autenticación a la función `onSuccess` si el inicio de sesión es exitoso.

## Recursos adicionales

- [Documentación oficial de Google OAuth](https://developers.google.com/identity)
- [@react-oauth/google en GitHub](https://github.com/React-OAuth/google)

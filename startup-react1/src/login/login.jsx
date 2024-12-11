// import React, { useState } from 'react';
// import { Unauthenticated } from './unauthenticated';
// import { Authenticated } from './authenticated';
// import { AuthState } from './authState';
// import { useNavigate } from 'react-router-dom';

import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        {authState !== AuthState.Unknown && <h1>Welcome to Simon</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}


// const Login = ({ userName, authState, onAuthChange }) => {
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (username, password) => {
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         onAuthChange(data.userName, AuthState.Authenticated);
//         setError('');
//         navigate('/home'); // Redirect after successful login
//       } else {
//         setError('Invalid login credentials');
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <main className="container-fluid bg-secondary text-center">
//       <div>
//         {authState === AuthState.Authenticated ? (
//           <Authenticated
//             userName={userName}
//             onLogout={() => onAuthChange('', AuthState.Unauthenticated)}
//           />
//         ) : (
//           <Unauthenticated onLogin={handleLogin} error={error} />
//         )}
//       </div>
//     </main>
//   );
// };
  
//   return (
//     <main className='container-fluid bg-secondary text-center'>
//       <div>
//         {authState !== AuthState.Unknown && <h1>Welcome to PNW Plant Pedia</h1>}
//         {authState === AuthState.Authenticated && (
//           <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
//         )}
//         {authState === AuthState.Unauthenticated && (
//           <Unauthenticated
//             userName={userName}
//             onLogin={(loginUserName) => {
//               onAuthChange(loginUserName, AuthState.Authenticated);
//             }}
//           />
//         )}
//       </div>
//     </main>
//   );
// }

export default Login;
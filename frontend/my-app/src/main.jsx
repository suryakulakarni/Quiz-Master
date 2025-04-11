import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Signup from './signup.jsx'
//import Signin from './Signin.jsx'
//import Leaderboard from './Leaderboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import Signin from './Signin'
import Leaderboard from './Leaderboard'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {


  return (
    <div>
      {/* <Signup /> */}
      {/* <Signin /> */}
      <Leaderboard />
    </div>
    
  )
}

export default App

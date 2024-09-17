
import './App.css'
import UserContext from '../context/UserContext.js'
import Login from '../components/login.jsx'
import Profile from '../components/Profile.jsx'
import UserContextProvider from '../context/UserContextProvider.jsx'
function App() {

  return (
     <UserContextProvider>
      <Login/>
      <Profile/>
     </UserContextProvider>
  )
}

export default App

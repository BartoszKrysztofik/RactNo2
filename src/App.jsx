import { useState } from 'react'
import './App.css'
import GreetingCard from './components/GreetingCard'
import UserProfile from './components/UserProfile'
import ProfileDetails from './components/ProfileDetails'
import ProfilePicture from './components/ProfilePicture'
import Outcome from '../../../../ReactNo1/React1/src/components/Outcome'
import LikeButton from './components/LikeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
      <div className='profile'><h2>Your profile</h2>
        <UserProfile/>
      </div>
      <div>
        <div className="like">
          <LikeButton setCount={setCount} />
          <Outcome count={count}/>
        </div>
          </div>
          


    {/* ////* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */} 
        </div>
    </>
  )
}

export default App

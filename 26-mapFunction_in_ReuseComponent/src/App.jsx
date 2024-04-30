// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import User from './User'

function App() {
  const users = [
    { name: "Dhanush", email: "dhanush@test.com", contact: "111" },
    { name: "Kumar", email: "kumar@test.com", contact: "222" },
    { name: "Sam", email: "sam@test.com", contact: "333" },
  ]

  return (
    <div className='App'>
      {

        users.map((item) => {
          return (
            <User data={item} />
          )
        })


      }
    </div>
  )
}

export default App

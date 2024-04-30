// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Table} from 'react-bootstrap'

function App() {

  // const users = ["cat","Dog","Cow","Goat"];
  const users = [
    { name: "Dhanush", email: "dhanush@test.com", contact: "111" },
    { name: "Kumar", email: "kumar@test.com", contact: "222" },
    { name: "Sam", email: "sam@test.com", contact: "333" },
  ]

  return (
    <div className='App'>
      <h1>Employee Details</h1>
      <Table striped border={1}>
      <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
        
          {
            users.map((item,i) => {
              return(
              <tr key= {i}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
              </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default App
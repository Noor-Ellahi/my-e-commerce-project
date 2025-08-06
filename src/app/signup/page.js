// Note : signup Component

"use client"

import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import "@/styles/app-modules.css"



const Signup = () => {

  // Usestate:
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [users, setUsers] = useState([])


  // clear Formstate
  const clearForm = () => {
    setFormState({
      name: "",
      email: "",
      password: ""
    })
  }

  // Check Duplicate Users

  const duplicateUsers = (email) => {
    let duplicate = false;

    let userClone = [...users]

    for (let items of userClone) {
      // console.log(items)
      if (items.email == email) {
        duplicate = true
        break;
      }
    }
    return duplicate;
  }




  // function to register Data

  const saveData = () => {
    // console.log(formState)

    let isDuplicate = duplicateUsers(formState.email)
    // console.log("DUPLICATE FOUND :", isDuplicate)

    if (isDuplicate == true) {
      alert(`The email ${formState.email} u just entered is already been used`)
    }

    else {
      let fetchUsers = [...users]
      fetchUsers.push(formState)

      setUsers(fetchUsers)
      console.log(users)
      localStorage.setItem("UsersList", JSON.stringify(fetchUsers))
      clearForm()
      alert("USER HAS BEEN SAVED WOW")
    }

  }


  // Mounted Hook:

  useEffect(() => { // For UsersList
    if (localStorage.getItem("UsersList") != null) {
      let fetchUser = localStorage.getItem("UsersList")
      let JsonData = JSON.parse(fetchUser)
      setUsers(JsonData)

      // console.log("UsersList :" , fetchUser)
    }
    else {
      localStorage.setItem("UsersList", JSON.stringify([]))
    }
  }, [])




  // useEffect(() => {

  //   console.log("USERS : ", users)

  // }, [users])





  return (
    <div>

      

      {/* <label>
        Name:
        <input
          type="text"
          placeholder="Enter your name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />
      </label> <br />

      <label>
        Email:
        <input
          type="email"
          placeholder="ABC@Gmail.com"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
        />
      </label> <br />

      <label>
        password:
        <input
          type="password"
          placeholder="Enter your name"
          value={formState.password}
          onChange={(e) => setFormState({ ...formState, password: e.target.value })}
        />
      </label> <br />

      <button onClick={saveData}>
        Register
      </button> */}





      <MDBContainer fluid className="">

        <MDBCard className='text-black m-5 main-SignCont' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg' />
                  <MDBInput
                    label='Your Name'
                    id='form1'
                    type='text'
                    className='w-100'
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg' />
                  <MDBInput
                    label='Your Email'
                    id='form2'
                    type='email'
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg' />
                  <MDBInput
                    label='Password'
                    id='form3'
                    type='password'
                    value={formState.password}
                    onChange={(e) => setFormState({ ...formState, password: e.target.value })}
                  />
                </div>

                

                <MDBBtn 
                className='mb-4' 
                size='lg'
                onClick={saveData}
                >Register</MDBBtn>

              </MDBCol>

              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
              </MDBCol>

            </MDBRow>
          </MDBCardBody>
        </MDBCard>

      </MDBContainer>






    </div>
  )
}

export default Signup
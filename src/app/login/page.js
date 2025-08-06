// Note : login component

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
import { useRouter } from "next/navigation";

const Login = () => {

  // Usestate:
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [users, setUsers] = useState([])

  let router = useRouter()

  // clear Formstate
  const clearForm = () => {
    setFormState({
      email: "",
      password: ""
    })
  }


  const logInUser = () => {

    // console.log("Users :" , users)

    let userClone = [...users]
    let userFound = false
    let user = null;

    // Finding Users :
    for (let items of userClone) {
      console.log(items)
      if (items.email == formState.email) {
        userFound = true
        user = items
        break;
      }
    }


    // Note : User Found :

    if (!userFound) alert("User DID NOT FOUND")

    else if (user.password != formState.password) {
      alert("Password Didnot Matched")
    }
    else {
      console.log("User Found :", user)

      // Added to to solve issue while deploying 
      if (typeof window !== "undefined") {
        localStorage.setItem("authenticatedUser", JSON.stringify(user));
      }
      // localStorage.setItem("authenticatedUser", JSON.stringify(user))
      router.push("/")
      alert("You have logged in succesfully")
      clearForm()
    }



  }


  useEffect(() => {
    let fetchUser = localStorage.getItem("UsersList")
    let JsonData = JSON.parse(fetchUser)
    setUsers(JsonData)
  }, [])







  return (
    <div>




      {/* <label>
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

      <button onClick={logInUser}>
        Register
      </button> */}


      <MDBContainer fluid>

        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>



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
                  onClick={logInUser}
                >Login</MDBBtn>

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

export default Login
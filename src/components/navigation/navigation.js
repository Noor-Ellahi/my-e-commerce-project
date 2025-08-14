// Note : Navigation Component
"use client"

import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBBtn,
  MDBInputGroup,
  MDBCollapse
} from 'mdb-react-ui-kit';

import "@/components/navigation/navbar-modules.css"

import Link from 'next/link';

const Navbar = () => {
  // useStates :
  const [openNavSecond, setOpenNavSecond] = useState(false);
  const [authUser, setAuthUser] = useState(null)


  // Logout btn:
  const logOutUser = () => {
    localStorage.setItem("authenticatedUser", JSON.stringify(null))

    window.location.reload()
    location = "/"
    alert("You have logged Out successfully")
  }



  // Mounted Hook:

  useEffect(() => {
    if (localStorage.getItem("authenticatedUser") != null) {
      let fetchUser = localStorage.getItem("authenticatedUser")
      // console.log("User :", fetchUser)
      let actData = JSON.parse(fetchUser)
      if (fetchUser) setAuthUser(actData)
    }

  }, [])


  return (
    <MDBNavbar expand='lg' light bgColor='light' className='Nav-Main'>
      <MDBContainer fluid className='Nav-Cont'>
        <MDBNavbarBrand href='#' className='headText'>Bazaar</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavSecond}>
          <MDBNavbarNav>

            <MDBNavbarLink >
              <Link href={"/"} className='headLi'>
                Home
              </Link>
            </MDBNavbarLink>

            {
              (authUser && authUser?.email == "admin@gmail.com")
                ?
                (
                  <MDBNavbarLink>
                    <Link href={"/add-products"} className='headLi'>
                      Add Product
                    </Link>
                  </MDBNavbarLink>
                )
                :
                (null)
            }

            <MDBNavbarLink
              disabled={authUser == null}
            >
              <Link
                className='headLi'
                href={"./cart"}
              >
                Your cart
              </Link>
            </MDBNavbarLink>

            <MDBNavbarLink
              
            >
              <Link
                className='headLi'
                href={"/orders"}
              >
                Orders
              </Link>

            </MDBNavbarLink>
            {
              authUser
                ?
                (null)
                :
                (<MDBNavbarLink
                  disabled={authUser != null}
                >
                  <Link href={"./signup"} className='headLi'>
                    SignUp
                  </Link>
                </MDBNavbarLink>)
            }
            {
              authUser
                ?

                <button
                  onClick={logOutUser}
                  className='logOutBtn'
                >
                  LogOut
                </button>
                :
                (
                  <MDBNavbarLink>
                    <Link href={"./login"} className='headLi'>
                      Login
                    </Link>
                  </MDBNavbarLink>
                )

            }
          </MDBNavbarNav>
        </MDBCollapse>

        <MDBInputGroup
          tag="form"
          className='d-flex w-auto mb-3 authName'
          style={{
            paddingTop: "20px",
            textTransform: "capitalize",
            fontSize: "20px",
            fontWeight: "400",
            color: "17171C"
          }}
        >
          {authUser ? authUser.name : "No User Found"}
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar
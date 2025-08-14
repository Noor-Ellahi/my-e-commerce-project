// product component

"use client"
import React, { useEffect, useState, useRef } from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';



import "@/styles/app-modules.css"


const Product = () => {

  // states :

  let [collectProduct, setCollectProduct] = useState([])
  let [authUser, setAuthUser] = useState(null)
  let [bucket, setBucket] = useState([])
  let [saveEarly, setSaveEarly] = useState([])

  // For tool section
  let [tool , setTool] = useState([])
  // For clothes section
  let [cloth , setCloth] = useState([])


  // ref : 
  // for groceries
  let inputRef = useRef(null)
  // for clothes
  let inputRef1 = useRef(null)

  // for tools
  let inputRef2 = useRef(null)



  // Add item To cart :

  const addItemToCart = (item) => {

    if (!authUser) alert("You are not authenticated Login FIrst")
    else if (authUser.email == "admin@gmail.com") alert("you can not add item")
    else {
      // console.log(item)


      let checkRepeatProducts = false
      let productClone = [...bucket]



      for (let i = 0; i < productClone.length; i++) {

        if (item.productName == productClone[i].productName) {
          checkRepeatProducts = true
          break;
        }
      }

      if (checkRepeatProducts) alert(item.productName + "Is already added in the cart")

      else {

        productClone.push(item)
        setBucket(productClone)
        // Setting data in DB 
        localStorage.setItem("YourCart", JSON.stringify(productClone))
        alert(item.productName + "ADDED")
      }

    }
  }



  // Button to scroll func For groceries

  const scrollLefty = () => {
    inputRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  }

  const scrollRighty = () => {
    inputRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  }

  // For clothes

  const scrollLefty1 = () => {
    inputRef1.current.scrollBy({ left: -300, behavior: 'smooth' });
  }

  const scrollRighty1 = () => {
    inputRef1.current.scrollBy({ left: 300, behavior: 'smooth' });
  }

  // For tool
  const scrollLefty2 = () => {
    inputRef1.current.scrollBy({ left: -300, behavior: 'smooth' });
  }

  const scrollRighty2 = () => {
    inputRef1.current.scrollBy({ left: 300, behavior: 'smooth' });
  }








  // Mounted Hook:

  useEffect(() => { // For Users 
    if (localStorage.getItem("authenticatedUser") != null) {
      let fetchUser = localStorage.getItem("authenticatedUser")
      let jsonData = JSON.parse(fetchUser)
      setAuthUser(jsonData)
      // console.log("User :" ,fetchUser)
    }
    else {
      localStorage.setItem("authenticatedUser", JSON.stringify(null))
    }
  }, [])

  useEffect(() => { // For Products
    if (localStorage.getItem("ProductList") != null) {
      let fetchProductList = localStorage.getItem("ProductList")
      let jsonData = JSON.parse(fetchProductList)
      setCollectProduct(jsonData)
      // console.log("UserProducts :", jsonData)
    }
    else {
      localStorage.setItem("ProductList", JSON.stringify([]))
    }
  }, [])



  useEffect(() => { // for cart
    const storedCart = localStorage.getItem("YourCart")
    if (storedCart) {
      setBucket(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => { // for tool section
    const storedCart = localStorage.getItem("ToolList")
    if (storedCart) {
      setTool(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => { // for cloth secion
    const storedCart = localStorage.getItem("ClothesList")
    if (storedCart) {
      setCloth(JSON.parse(storedCart))
    }
  }, [])






  return (
    <div className="back-page">
      {/* <h1>
        Product screen
      </h1> */}

      <div className="Front-page">
        <div>
          <h1>Bazaar</h1>
          <p>Bazaar is Pakistans leading e-commerce and financial services platform.
            Our mobile app provides homes and businesses everyday low pricing on all essentials.</p>
          <button >
            <a href = "#category">
              Start Looting
            </a>
            
          </button>
        </div>
      </div>





        <div className="main-container">
          <div className="inner-main">


            <div className="firstheading" id="category">
              <h1>
                Categories
              </h1>
            </div>

            <div className="secondheading" >
              <h1 >Grocery Store</h1>
            </div>

            <div className="container" ref={inputRef}  >

              {
                (collectProduct && collectProduct.length > 0)
                  ?
                  (
                    collectProduct.map((item, index) => {
                      return (


                        <MDBCard key={index} className="child">
                          <MDBCardImage

                            src={item.productURL}
                            position='top'
                            alt='product IMG'
                            className="childImg"
                          />

                          <MDBCardBody>
                            <MDBCardTitle>{item.productName}</MDBCardTitle>
                            <MDBCardText>
                              {item.productDescription}
                            </MDBCardText>
                            <MDBBtn
                              onClick={() => addItemToCart(item)}
                              className="cardBtn"
                            >Add to Cart</MDBBtn>
                          </MDBCardBody>
                        </MDBCard>

                      )
                    })
                  )
                  :
                  (<h1> NO Data Found</h1>)
              }
            </div>
            <div className="BTNCont">
              <button className="btn" onClick={scrollLefty}>←</button>
              <button className="btn" onClick={scrollRighty}>→</button>
            </div>
          </div>
          





           <div className="inner-main">

            <div className="secondheading" >
              <h1 >Cloth Wears</h1>
            </div>

            <div className="container" ref={inputRef1}  >

              {
                (cloth && cloth.length > 0)
                  ?
                  (
                    cloth.map((item, index) => {
                      return (


                        <MDBCard key={index} className="child">
                          <MDBCardImage

                            src={item.productURL}
                            position='top'
                            alt='product IMG'
                            className="childImg"
                            // style={{
                            //   height: 120,
                            //   width: 160,

                            // }}
                          />

                          <MDBCardBody>
                            <MDBCardTitle>{item.productName}</MDBCardTitle>
                            <MDBCardText>
                              {item.productDescription}
                            </MDBCardText>
                            <MDBBtn
                              onClick={() => addItemToCart(item)}
                              className="cardBtn"
                            >Add to Cart</MDBBtn>
                          </MDBCardBody>
                        </MDBCard>

                      )
                    })
                  )
                  :
                  (<h1> NO Data Found</h1>)
              }
            </div>
            <div className="BTNCont">
              <button className="btn" onClick={scrollLefty1}>←</button>
              <button className="btn" onClick={scrollRighty1}>→</button>
            </div>
          </div>





          <div className="inner-main">

            <div className="secondheading">
              <h1 >Tools Equipment</h1>
            </div>

            <div className="container" ref={inputRef2}  >

              {
                (tool &&  tool.length > 0)
                  ?
                  (
                    tool.map((item, index) => {
                      return (


                        <MDBCard key={index} className="child">
                          <MDBCardImage

                            src={item.productURL}
                            position='top'
                            alt='product IMG'
                            className="childImg"
                            // style={{
                            //   height: 120,
                            //   width: 160,

                            // }}
                          />

                          <MDBCardBody>
                            <MDBCardTitle>{item.productName}</MDBCardTitle>
                            <MDBCardText>
                              {item.productDescription}
                            </MDBCardText>
                            <MDBBtn
                              onClick={() => addItemToCart(item)}
                              className="cardBtn"
                            >Add to Cart</MDBBtn>
                          </MDBCardBody>
                        </MDBCard>

                      )
                    })
                  )
                  :
                  (<h1> NO Data Found</h1>)
              }
            </div>
            <div className="BTNCont">
              <button className="btn" onClick={scrollLefty2}>←</button>
              <button className="btn" onClick={scrollRighty2}>→</button>
            </div>
          </div>

        </div>
      </div>

  )
}

export default Product
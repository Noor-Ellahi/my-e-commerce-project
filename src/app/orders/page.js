// Note : Order Component....
"use client"

import React, { useEffect, useState } from "react";



import "@/app/cart/cart-modules.css"

const Order = () => {

  // usestates
  const [order, setOrder] = useState([])


  useEffect(() => { // For Orders


    if (localStorage.getItem("OrderList") != null) {
      let fetchYourCart = localStorage.getItem("OrderList")
      let jsonData = JSON.parse(fetchYourCart)
      setOrder(jsonData)
      // console.log("OrderList :", jsonData)

    }
    else {
      localStorage.setItem("OrderList", JSON.stringify([]))
    }

    // const otherStored = localStorage.getItem("OrderList")
    // if (otherStored) {
    //   let jsonData = JSON.parse(otherStored)
    //   console.log(jsonData)
    // }
    // else {
    //   setOrder([])
    // }
  }, [])

  return (
    <>
      
      {/* {order && (
        <div className="OrderCont">
          {
            order.map((item, index) => {
              return (
                <div 
                key={index}
                >
                  <h1>Order : {index + 1 }</h1>
                  <h2>User ID:  {item.userId}</h2>
                  <p>Total Price:  {item.totalOrderPrice}</p>

                  <h3>Other Details</h3>

                  <p>Address: {item.otherDetails?.address}</p>
                  <p>Phone: {item.otherDetails?.number}</p>

                  <h3>Bucket Items</h3>
                  <ul>
                    {item.bucket?.map((item, index) => (
                      <li key={index}>{item.productName}</li>
                    ))}
                  </ul>
                </div>
              )
            })
          }



        </div>
      )} */}


      <div className="main-cart">
        <div className="cart-container">
          {order && (
            <ul className="cart-list">
              {
                order.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="cart-item"
                    >
                      <h1>Order : {index + 1}</h1>
                      <h2>User ID:  {item.userId}</h2>
                      <p>Total Price:  {item.totalOrderPrice}</p>

                      <h3>Other Details</h3>

                      <p>Address: {item.otherDetails?.address}</p>
                      <p>Phone: {item.otherDetails?.number}</p>

                      <h3>Bucket Items</h3>
                      <ul>
                        {item.bucket?.map((item, index) => (
                          <li key={index}>{item.productName}</li>
                        ))}
                      </ul>
                    </li>
                  )
                })
              }



            </ul>
          )}
        </div>
      </div>

    </>






  )
}

export default Order




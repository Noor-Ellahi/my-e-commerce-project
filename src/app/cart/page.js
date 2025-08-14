// cart Screen

"use client"
import React, { useState, useEffect } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import { useRouter } from "next/navigation";

import "@/app/cart/cart-modules.css"

const Cart = () => {

    const router = useRouter()


    // Usestates :
    const [check , setCheck] = useState([])
    const [yourCart, setYourCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(null)
    const [users, setUsers] = useState([])
    const [otherDetails, setOtherDetails] = useState({
        address : "",
        number : "" , 
    })

    // clear states

    const clearStates = () => {
        setYourCart([])
        setTotalPrice(0)
        setOtherDetails('')
        localStorage.setItem("YourCart" , JSON.stringify([]))
    }



    // Collecting user data

    const placeOrder = () => {
        let fetchData = localStorage.getItem("OrderList")
        let jsonData = JSON.parse(fetchData)
        console.log(jsonData)

        let orderOBJ = {
            bucket: yourCart,
            totalOrderPrice: totalPrice,
            otherDetails: otherDetails,
            userId: users.email
        }
        // console.log(orderOBJ)

        jsonData.push(orderOBJ)

        localStorage.setItem("OrderList", JSON.stringify(jsonData))
        alert("Order Placed Successfully")

        setTimeout(() => {
            router.push("/orders")
            clearStates()

        }, (1000));
    }


    // Deleting cart Items

    const delCartItem = (key) => {

        let itemClone = [...yourCart]
        itemClone.splice(key, 1)
        setYourCart(itemClone)
        localStorage.setItem("YourCart", JSON.stringify(itemClone))
    }



    // incresing Quantity

    const increaseQuantity = (item2, index) => {




        let objClone = { ...item2 }
        objClone.quantity = objClone.quantity + 1



        let fetchCartData = [...yourCart]
        fetchCartData.splice(index, 1, objClone)
        setYourCart(fetchCartData)
        console.log(objClone.quantity)
    }


    const decreaseQuantity = (item1, index) => {


        let objClone = { ...item1 }
        objClone.quantity = objClone.quantity - 1



        let fetchCartData = [...yourCart]
        fetchCartData.splice(index, 1, objClone)
        setYourCart(fetchCartData)
    }

    useEffect(() => {
        let fetchCartData = [...yourCart]
        let total = 0
        for (let items of fetchCartData) {
            total = total + (items.productPrice * items.quantity)
        }
        // console.log("Total :", total)
        setTotalPrice(total)
    }, [yourCart])


    useEffect(() => { // for cart product
        const storedCart = localStorage.getItem("YourCart")
        if (storedCart) {
            setYourCart(JSON.parse(storedCart))
        } else {
            setYourCart([]) // don’t overwrite unless you need to
        }

        const user = localStorage.getItem("authenticatedUser")
        if (user) {
            setUsers(JSON.parse(user))
        }
    }, [])

    useEffect(() =>{
        if(localStorage.getItem("OrderList" != null)){
            let fetch = localStorage.getItem("OrderList")
            let jsonData = JSON.parse(fetch)
            setCheck(jsonData)
        }
        // else{
        //     localStorage.setItem("OrderList" , JSON.stringify([]))
        // }
    } , [])



    // useEffect(() => { // For cart Products
    //     if (localStorage.getItem("YourCart") != null) {
    //         let fetchYourCart = localStorage.getItem("YourCart")
    //         let jsonData = JSON.parse(fetchYourCart)
    //         setYourCart(jsonData)
    //         console.log("UserProducts :", jsonData)
    //     }
    //     else {
    //         localStorage.setItem("YourCart", JSON.stringify([]))
    //     }

    //     // for fetching User for order details

    //     let fetchUser = localStorage.getItem('authenticatedUser')
    //     let jsonData = JSON.parse(fetchUser)
    //     setUsers(jsonData)
    // }, [])



    return (
        <div className="main-cart">



            <div className="cart-container">
                <h1>Your Cart 🛒</h1>
                {users && <p>Welcome, {users.name || users.email}</p>}
                {
                    (yourCart && yourCart.length > 0)
                        ?
                        (
                            <>
                                <ul className="cart-list">
                                    {yourCart.map((item, index) => (
                                        <li
                                            key={index}
                                            className="cart-item"
                                        >
                                            <h3>{item.productName}</h3>
                                            <p>Price: ${item.quantity * (Number(item.productPrice))}</p>
                                            <p>Quantity: {item.quantity}</p>
                                            <div className="cart-buttons">
                                                <button onClick={() => increaseQuantity(item, index)}>+</button>
                                                <button onClick={() => decreaseQuantity(item, index)}>-</button>
                                                <button onClick={() => delCartItem(index)}>Remove</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="total-price">Total: ${totalPrice.toFixed(2)}</div>
                            </>







                            // yourCart.map((item, index) => {
                            //     return (
                            //         <MDBCard key={index} className="child cart-child">
                            //             <MDBCardImage
                            //                 src={item.productURL}
                            //                 position='top'
                            //                 alt='product IMG'
                            //                 style={{
                            //                     height: 120,
                            //                     width: 160,

                            //                 }}
                            //             />

                            //             <MDBCardBody>
                            //                 <MDBCardTitle>{item.productName}</MDBCardTitle>
                            //                 <MDBCardText>
                            //                     {item.productDescription}
                            //                 </MDBCardText>
                            //                 <MDBCardText>
                            //                     Price : {item.quantity * (Number(item.productPrice))}
                            //                 </MDBCardText>

                            //                 <div>
                            //                     <MDBCardText>
                            //                         Quantity : {item.quantity}
                            //                         <br />
                            //                         <MDBBtn
                            //                             onClick={() => increaseQuantity(item, index)}

                            //                         >+</MDBBtn>
                            //                         <MDBBtn
                            //                             onClick={() => decreaseQuantity(item, index)}
                            //                             disabled={item.quantity <= 1}
                            //                         >-</MDBBtn>

                            //                     </MDBCardText>
                            //                 </div>
                            //                 <br />
                            //                 <MDBBtn
                            //                     onClick={() => delCartItem(index)}
                            //                 >Del Item</MDBBtn>
                            //             </MDBCardBody>
                            //         </MDBCard>
                            //     )
                            // })
                        )
                        :
                        (<h1> NO item added To cart</h1>)
                }
            </div>





            {/* <div className="total-area">
                <div className="inner">
                    <div className="total1">
                        <h1> :</h1>
                        <h2>
                            Total RS : {totalPrice}$
                        </h2>
                    </div>
                    <div className="total2">
                        <h3>Enter other details</h3>
                        <textarea
                            cols={50}
                            placeholder="Enter other details"
                            rows={5}
                            value={otherDetails}
                            onChange={(e) => setOtherDetails(e.target.value)}
                        ></textarea>

                        <hr />
                        <button
                            disabled={otherDetails.length <= 1}
                            onClick={placeOrder}
                        >
                            Place an order
                        </button>
                    </div>
                </div>
            </div> */}


            {/* Other Details Section */}
            <div className="main-otherSection">

                <div className="other-details">
                    <h2>Other Details</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="address">Shipping Address:</label>
                            <textarea
                                type = "text"
                                id="address"
                                rows="3"
                                placeholder="Enter your full address"
                                required
                                value={otherDetails.email}
                                onChange={(e) => setOtherDetails({...otherDetails , address : e.target.value})}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                type="number"
                                id="phone"
                                placeholder="03xx-xxxxxxx"
                                required
                                value={otherDetails.number}
                                onChange={(e) => setOtherDetails({...otherDetails , number : e.target.value})}
                            />
                        </div>
                    </form>
                </div>

                {/* Place Order Section */}
                <div className="place-order">
                    <button
                        className="place-order-btn"
                        onClick={placeOrder}
                    >
                        Place Order
                    </button>
                </div>
            </div>











        </div>
    )
}

export default Cart
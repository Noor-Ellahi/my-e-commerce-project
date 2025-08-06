// Add product screen

"use client"

import React, { useState, useEffect } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

const AddProduct = () => {

    // Usestate:

    // For Clothes section
    const [category, setCategory] = useState("")
    const [cloth, setCloth] = useState([])


    const [formState, setFormState] = useState({
        productName: "",
        productURL: "",
        productDescription: "",
        productPrice: '',
        // quantity : 1
    })
    // For product section
    const [productData, setProductData] = useState([])

    // For tool section
    const [tool, setTool] = useState([])



    // clear Formstate
    const clearForm = () => {
        setFormState({
            productName: "",
            productURL: "",
            productDescription: "",
            productPrice: ''
        })
    }






    // function to register Data

    const addProductList = () => {
        // console.log(formState)
        // formState.quantity = 1
        // let userClone = [...productData]
        // userClone.push(formState)
        // setProductData(userClone)

        // localStorage.setItem("ProductList", JSON.stringify(userClone))
        // alert("Product ADDED")
        // clearForm()



        if (category == "clothes") {
            formState.quantity = 1
            let userClone = [...cloth]
            userClone.push(formState)
            setCloth(userClone)

            localStorage.setItem("ClothesList", JSON.stringify(userClone))
            alert("Product ADDED")
            clearForm()
        }
        else if (category == "tool") {
            formState.quantity = 1
            let userClone = [...tool]
            userClone.push(formState)
            setTool(userClone)

            localStorage.setItem("ToolList", JSON.stringify(userClone))
            alert("Product ADDED")
            clearForm()
        }
        else {
            formState.quantity = 1
            let userClone = [...productData]
            userClone.push(formState)
            setProductData(userClone)

            localStorage.setItem("ProductList", JSON.stringify(userClone))
            alert("Product ADDED")
            clearForm()
        }
    }







    useEffect(() => { // for groceries
        let fetchUser = localStorage.getItem("ProductList")
        let jsonData = JSON.parse(fetchUser)
        setProductData(jsonData)
    }, [])


    useEffect(() =>{// For tool
        const storedCart = localStorage.getItem("ToolList")
        if (storedCart) {
            setTool(JSON.parse(storedCart))
        } else {
            setTool([]) // don’t overwrite unless you need to
        }
    } , [])



    useEffect(() => { // For Clothes Categroies

        // This is not working IDK

        // if(localStorage.getItem("ClothesList" != null)){
        //     let fetchItem = localStorage.getItem("ClothesList")
        //     let jsonData = JSON.parse(fetchItem)
        //     setCloth(jsonData)
        //     console.log(jsonData)
        // }
        // else{
        //     localStorage.setItem("ClothesList" , JSON.stringify([]))
        // }

        // This one is working idk why

        const storedCart = localStorage.getItem("ClothesList")
        if (storedCart) {
            setCloth(JSON.parse(storedCart))
        } else {
            setCloth([]) // don’t overwrite unless you need to
        }
    }, [])



    return (
        <div>



            {/* <label>
                product Name:
                <input
                    type="text"
                    placeholder="Enter product name"
                    value={formState.productName}
                    onChange={(e) => setFormState({ ...formState, productName: e.target.value })}
                />
            </label> <br />

            <label>
                product URL:
                <input
                    type="text"
                    placeholder="product URL"
                    value={formState.productURL}
                    onChange={(e) => setFormState({ ...formState, productURL: e.target.value })}
                />
            </label> <br />

            <label>
                product description:
                <input
                    type="text"
                    placeholder="Enter product description"
                    value={formState.productDescription}
                    onChange={(e) => setFormState({ ...formState, productDescription: e.target.value })}
                />
            </label> <br />

            <label>
                product price:
                <input
                    type="text"
                    placeholder="Enter product price"
                    value={formState.productPrice}
                    onChange={(e) => setFormState({ ...formState, productPrice: e.target.value })}
                />
            </label> <br />

            <button onClick={addProductList}>
                Register
            </button> */}







            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'
            // style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}
            >
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <MDBCardBody className='px-5'>
                        <h2 className="text-uppercase text-center mb-5">Create Product To show in home</h2>
                        <MDBInput
                            wrapperClass='mb-4'
                            label='Product Name'
                            size='lg'
                            id='form1'
                            type='text'
                            value={formState.productName}
                            onChange={(e) => setFormState({ ...formState, productName: e.target.value })}
                        />
                        <MDBInput
                            wrapperClass='mb-4'
                            label='Product Category'
                            size='lg'
                            id='form1'
                            type='text'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                        <MDBInput
                            wrapperClass='mb-4'
                            label='Your Product URL'
                            size='lg' id='form2'
                            type='text'
                            value={formState.productURL}
                            onChange={(e) => setFormState({ ...formState, productURL: e.target.value })}
                        />
                        <MDBInput
                            wrapperClass='mb-4'
                            label='Product Description'
                            size='lg' id='form3'
                            type='text'
                            value={formState.productDescription}
                            onChange={(e) => setFormState({ ...formState, productDescription: e.target.value })}
                        />
                        <MDBInput
                            wrapperClass='mb-4'
                            label='Product price'
                            size='lg' id='form4'
                            type='text'
                            value={formState.productPrice}
                            onChange={(e) => setFormState({ ...formState, productPrice: e.target.value })}
                        />

                        <MDBBtn
                            className='mb-4 w-100 gradient-custom-4'
                            size='lg'
                            onClick={addProductList}
                        >Add Product</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>







        </div>
    )
}

export default AddProduct
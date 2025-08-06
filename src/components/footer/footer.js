
"use client"
import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

import "@/styles/app-modules.css"

const Footer = () => {


    return (
        <div className='footerMain'>
            <MDBFooter className='bg-light text-center text-white footerInner'>
                <MDBContainer className='p-4 pb-0 footerChild'>
                    <section className='mb-4 footerSection'>
                        <MDBBtn
                            floating
                            className='m-1 footerBtn'
                            style={{ backgroundColor: '#3b5998' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1 footerBtn'
                            style={{ backgroundColor: '#55acee' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1 footerBtn'
                            style={{ backgroundColor: '#dd4b39' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='google' />
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='m-1 footerBtn'
                            style={{ backgroundColor: '#ac2bac' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1 footerBtn'
                            style={{ backgroundColor: '#0082ca' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1 footerBtn'
                            style={{ backgroundColor: '#333333' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                    </section>
                </MDBContainer>

                <div className='text-center p-3 footerText' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright :   
                    <a className='text-white' >
                        Bazaar.pk
                    </a>
                </div>
            </MDBFooter>
        </div>
    );
}


export default Footer
import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import {Outlet} from 'react-router-dom';
import {Container} from "react-bootstrap";

const Layout = () => {
    return (
        <>
            <Header/>
            <section className='home'>
                <Container>
                    <h1 className='home__title'>Meal shop</h1>
                    <Outlet/>
                </Container>
            </section>

            <Footer/>
        </>
    );
};

export default Layout;
import React from 'react'
import {BrowserRouter ,Routes, Route, Link} from 'react-router-dom';
import {Login, Home, SignUp} from './templates';

const Router = () => {
    return (
        <BrowserRouter>
        <div>
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />

        </Routes>
        </div>
        </BrowserRouter>
    )
}

export default Router
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddBooks from '../src/pages/AddBooks'
import Nav from '../src/components/nav'
import Banner from './pages/Banner';
import FeaturedBooks from './pages/FeaturedBooks'
import BookList from './pages/BookList';


function App() {

    return (<>
            <Nav/>
            <Banner/>
            <BookList/>
            <FeaturedBooks/> 
            <AddBooks/>
        </>
    );
}

export default App;
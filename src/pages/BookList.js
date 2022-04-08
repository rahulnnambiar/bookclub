import React from 'react';
import "./BookList.css";
import { useState,useEffect } from 'react';
import axios from "axios";

const  BookList = props =>{
    const [booklists,setBooklist] =useState([]);
    useEffect(()=>{
        axios.get('/api/book')
        .then(results=>{
            setBooklist(results.data);
            props.setBooklistAdded(false);                        
        })
        .catch(error=>console.log(error));
    },[props.booklistsAdded]);

    
    return(
        <div className='featured_books'>
            <h3>List of All the Books</h3>
            <div className='book_list'>
            {booklists.map((booklist,i)=>{return <div key={i}>
                <div className='book1'>
    
                    <div className='book_title'>
                        <p>{booklist.title}</p>
                    </div>
                    <div className='book_author'>
                        <p>by {booklist.author}</p>
                    </div>
                    <div className='book_des'>
                        <p>{booklist.des}</p>
                    </div>
                    <div className='book_rating'>
                        <p>Rating: {booklist.rating}/5</p>
                    </div>
                </div>
                </div>
                })}
    

            </div>
            
        </div>
    );
}

export default BookList;

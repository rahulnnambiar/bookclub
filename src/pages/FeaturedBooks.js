import React from 'react';
import "./FeaturedBooks.css";
import axios from 'axios';
import {useEffect,useState} from 'react';

const FeaturedBooks = props =>{
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
            <h3>Featured Books</h3>
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
export default FeaturedBooks;
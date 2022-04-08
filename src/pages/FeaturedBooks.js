import React from 'react';
import "./FeaturedBooks.css";
import axios from 'axios';
import {useEffect,useState} from 'react';

function FeaturedBooks(){
    
    return(
        <div className='featured_books'>
            <h3>Featured Books</h3>
            <div className='book_list'>
                <div className='book1'>
                    <div className='book_img'>
                        <img src="https://www.pexels.com/photo/white-notebook-on-pink-shaggy-carpet-6373294/" alt='' width="200px" height="200px"></img>
                    </div>
                    <div className='book_title'>
                        <p>Title</p>
                    </div>
                    <div className='book_author'>
                        <p>Author</p>
                    </div>
                    <div className='book_des'>
                        <p>Description</p>
                    </div>
                    <div className='book_rating'>
                        <p>Rating</p>
                    </div>
                </div>

            </div>
            
    
          
        </div>
    );

}
export default FeaturedBooks;
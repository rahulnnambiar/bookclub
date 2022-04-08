import React from 'react';
import { refreshAllBook } from "../rendering";
import "./AddBooks.css";

const AddBooks = props =>{   

    return(
        <div className='addbook'>
            <h2>Add New Book to listing</h2>

            <div className='addlisting_form'>
                <form action='/api/book' method='POST' id="form">   
            
                    <label>
                        Book Title
                        <input type="text" id="title" name="title" placeholder="" ></input>
                    </label>
                    <label>
                        Author
                        <input type="text" id="author" name="author" placeholder=""></input>
                    </label>
                    <label>
                        Category
                        <input type="text" id="category" name="category" placeholder=""></input>
                    </label>
                    <label>
                        Description
                        <input type="text" id="des" name="des" placeholder=""></input>
                    </label>
                    <label>
                        Rating
                        <input type="number" id="rating" name="rating" placeholder=""></input>
                    </label>

                    <input type="submit" value="Submit"/>

                </form>
        
            </div>
        </div>
    )
}
export default AddBooks
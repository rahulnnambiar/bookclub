import axios from "axios";
const refreshAllBook = ()=>{
    let container = document.getElementById('all-books');
    container.innerHTML = "";
    
    axios.get('/api/book')
    .then(results=>{
        results.data.forEach(book=>{
            container.innerHTML += `
                <li>
                    <h3>${book.title}<h3> 
                    <p>${book.des}</p>
                    <p>${book.rating}</p>
                </li>`;
        })

    })
    .catch(error=>console.log(error));
}
const refreshFeaturedBook = ()=>{
    let container = document.getElementById('featured-book');
    container.innerHTML = "";

     axios.get('/api/films')
        .then(results=>{
            results.data.forEach(film=>{
                container.innerHTML = `
                    <li>
                        <h3>Featured Film: ${film.title}</h3>
                        <p>${film.summary}</p>
                    </li>`;
            })
        })
        
        .catch(error=>console.log(error));
        
}

export {refreshAllBook, refreshFeaturedBook};
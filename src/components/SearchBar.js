import { useState } from 'react';
import './searchbar.css';


export default function SearchBar(){

    const[input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return(
        <div>
            <form class = "search">
                <input placeholder = "Search for a movie..." value={input} onChange={handleChange} />
            </form>
        </div>
    );
}
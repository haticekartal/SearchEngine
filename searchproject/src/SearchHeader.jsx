import './App.css'
import { useState } from 'react';

function SearchHeader ({search}) {
    const [valueInput, setvalueInput] = useState('')
    const handleFormSubmit= (event) =>{
        event.preventDefault();
        debugger;
        search(valueInput);

    };
    const handleChange = (event)=>{
        setvalueInput (event.target.value);

    }
    return ( <div className='searchDiv'> 
        <form onSubmit={handleFormSubmit}>
            <label>Ne Arıyorsunuz?</label>
            <input value={valueInput} onChange={handleChange} />
            <div>{valueInput}</div>
        </form>
    </div> );

}

export default SearchHeader;
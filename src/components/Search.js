import {useState} from 'react';

function SearchFood(props){
    const [searchText, setSearchText] = useState('');
    
    const handleSearch = (e) => {
        setSearchText(e.target.value);
        props.searchFood(e.target.value);
    }

    return(
        <div>
            <input type="text" onChange={handleSearch} />
        </div>
    )
}

export default SearchFood;
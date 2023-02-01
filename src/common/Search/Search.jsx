import React from "react";
import { useProductActions } from "../../Components/ProductProvider/ProductProvider";
import searchStyle from "../Search/search.module.css";

const Search = ({filter, sort}) => {

    const dispatch = useProductActions();

    const [search, setSearch] = React.useState("");

    const searchHandler = (e) => {
        console.log(search);
        dispatch({type: "filter", filteredOption: filter});
        dispatch({type: "search", searched: e.target.value});
        dispatch({type: "sort", sortedOption: sort});
        setSearch(e.target.value);
    }
    
    return ( 
        <div className={searchStyle.searchBox}>
            <input type="text" placeholder="search for ..." onChange={searchHandler} value={search} />
        </div>
     );
}
 
export default Search;
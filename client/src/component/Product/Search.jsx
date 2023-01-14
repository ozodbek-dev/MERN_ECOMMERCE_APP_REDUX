import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MetaData } from "../layout/MetaData";
import { SearchContainer } from "./Search.element";
const Search = () => {

  const [keyword , setKeyword] = useState('');
  const navigate = useNavigate()

  const searchSubmitHandler = (e)=>{
  e.preventDefault();
  if(keyword.trim()){
    navigate(`/products/${keyword}`)
  }
  else{
    navigate("/products")
  }
  }
  

  return (
    <Fragment>
        <MetaData title="Search a product"/>
      <SearchContainer onSubmit={searchSubmitHandler}>
        <input type="text" placeholder="Search a Product ..." onChange={e=>setKeyword(e.target.value)} />
        <input type="submit" value="Search" />
      </SearchContainer>
    </Fragment>
  );
}

export default Search;
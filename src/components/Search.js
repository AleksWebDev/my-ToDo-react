import React from "react";


function Search(props) {
  return ( 
          <input
            type="text"
            placeholder="введите фразу для поиска"
            className="form-control me-2"
            value={props.term}
            onChange={(e) => {props.changeTerm(e.target.value)}}
          />
   );
}

export default Search
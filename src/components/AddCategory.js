import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  
  const [inputValue, setstate] = useState('');

  const handlerInputChange=(e)=>{
    setstate(e.target.value);
  }

  const handlerSubmitForm=(e)=>{
    e.preventDefault();
    
    setCategories( (categories) => [...categories, inputValue]);
    setstate('');
  }

  return (
    <form onSubmit={handlerSubmitForm}>
      <input 
        type='text'
        value={inputValue}
        onChange={handlerInputChange}
      />  
    </form>
  )
}

AddCategory.propTypes ={
  setCategories: PropTypes.func.isRequired
}
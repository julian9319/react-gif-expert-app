import React, {useState} from 'react'

export const AddCategory = () => {

  const [inputValue, setstate] = useState('');

  const handlerInputChange=(e)=>{
    setstate(e.target.value);
  }

  const handlerSubmitForm=(e)=>{
    e.preventDefault();
    console.log('send form');
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

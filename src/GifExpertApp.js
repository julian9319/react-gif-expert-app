import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setstate] = useState(['Categoria 1', 'Cat 2', 'Cat 3']);
  const addCategory=()=>{
    setstate([...categories, 'New cat']);
  }

  return (
    <>
      <h2>Gif expert component</h2>
      <AddCategory />
      <hr />
      <ol>
        {
          categories.map(category=>{
            return <li key={category} >{category}</li>
          })
        }
      </ol>
    </>
  )
}


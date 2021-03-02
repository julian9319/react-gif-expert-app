import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Category 1']);
  // const addCategory=()=>{
  //   setCategories([...categories, 'New cat']);
  // }

  return (
    <>
      <h2>Gif expert component</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {
          categories.map(category=>{
          
            return <GifGrid 
              key={category}
              category={category}
            />
          })
        }
      </ol>
    </>
  )
}


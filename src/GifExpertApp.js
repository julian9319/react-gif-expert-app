import React, {useState} from 'react'

export const GifExpertApp = () => {

  const [categories, setstate] = useState(['Categoria 1', 'Cat 2', 'Cat 3']);
  const addCategory=()=>{
    setstate([...categories, 'New cat']);
  }

  return (
    <>
      <h2>Gif expert component</h2>
      <button onClick={addCategory}>Add Category</button>
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


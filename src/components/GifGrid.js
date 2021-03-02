import React from 'react';
import PropTypes from 'prop-types';

export const GifGrid=({category})=>{
  return(
    <>
    <h1>{category}</h1>
    </>
  );
}

GifGrid.propTypes ={
  category: PropTypes.string.isRequired
}
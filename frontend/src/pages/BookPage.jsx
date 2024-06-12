import React, { useState, useEffect } from 'react';
import { BlockBooks } from '../components/ui/BlockBooks';



function BookPage({isHome=false}) {
  return (
    <>
      <BlockBooks isHome={isHome?true:false}/>
    </>
  );
}

export default BookPage;

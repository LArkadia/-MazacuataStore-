import React from 'react';
import { SingleBook } from '../components/ui/SingleBook';
import { useLocation } from 'react-router-dom';
function BookFormPage() {
  let query=useLocation().search;
  query=query.substring(1);
  const parameters= new URLSearchParams(query);
  return (
   <SingleBook params={parameters}/>
  );
}

export default BookFormPage;

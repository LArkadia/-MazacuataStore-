import React from 'react'

export function Label({children, htmlFor}) {
  return (
    <label htmlFor={htmlFor} className='block text-sm font-medium text-gray-400'>
      {children}
    </label>
  );
}
//className='block text-sm font-medium text-gray-400'
//htmlFor={htmlFor}
/*<label>
{children}
</label>*/
export default Label
// import React from 'react'


// const Button = (props) => {
//   return (
//     <button className="flex gap-2 items-center min-w-56 min-h-10 justify-center text-base bg-black text-white rounded">
//         {props.icon}
//         {props.text}
//     </button>
//   )
// }

// export default Button
import React from 'react';

const Button = ({variant,text,icon, ...rest}) => {
  const variantClass = variant ? "bg-gray-100 text-black w-full rounded border-2 border-black" : "bg-black text-xl text-white rounded"; // CSS properties based on variant prop
  return (
    <button {...rest} className={`flex gap-2 items-center min-w-56 min-h-10 justify-center text-base ${variantClass}`}>
      {icon}
      {text}
    </button>
  );
};

export default Button;


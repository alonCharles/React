import { useState } from "react"

export default function Counter()  {
    const [num, setNum] = useState(0)
//     const increase = () => {
//         setNum(num + 1)
//         console.log(num)
//     }
//     const decrease = () => {
//         setNum(num - 1)
//         console.log(num)
//     }
//     const reset = () => {
//         setNum(0)
//     }
// return (
// <>
// <h1> {num} </h1>
// <button onClick={increase}>Add</button>
// <button onClick={decrease}>Sub</button>
// <button onClick={reset}>Reset</button>
// </>
//)
const handleClick = () => {
	setTimeout(() => {
  	setNum(num + 1)
    console.log("set timeout working")
	}, 5);
	setNum(num + 1)
  };

 
	return (
  	<div>
    	<h1>Count: {num}</h1>
 	   <button onClick={handleClick}>Click me!</button>
  	</div>
	);
  
}
 




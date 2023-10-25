
import { useState} from 'react'


function NameList() {
  const [list, setList] = useState(["jack, Jill, John"])
  const [name, setName] = useState("") //initial state can also be a function, this funtion will only run on first render
  let [count, setCount] = useState(10)

  function addOne() {
    setCount(count +1)
  }
  const addName = ()=> {
    setList([...list, name])
    setName("")
  }

  return (
    <div>
      <ul>
        {list.map((name)=> (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={addName}>Add Name</button>
    </div>
  )
}

export default NameList
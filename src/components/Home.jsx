import "./Home.css"

export default function Home({name,age}){   //props bhi likh skte the pr yaha ye destructure hogya to dirct only name for clean code

  let id = 3453566

  return(
    <>
    {/* <h2>Hello {props.name} whose age is {props.age}</h2> */}
   <h1 style={{backgroundColor:"orange",color:"blue"}}>Hello {name} whose age is {age}</h1> 
    <h2 className="App-Home-Header">Your student id is {id}</h2>
    <p>This is paragraph</p>
    </>
  ) 
}


import Chai from "./chai" // ./chai ---> is a file name 
function App() {

  return (

//     <p>hii</p>
// <Chai/>     --> this multiple  tag cause the error so we can wrap into a one div or in fragment (<>  </>)
    

// wrap in div

//   <div>
// <Chai/>
// <p>hii</p>

// <h3>hello </h3>
// </div>

// wrap in fragment
<>
<Chai/>
<p>hii</p>
<h3>hello </h3>
</>

)
}

export default App;


import './App.css';
import { useState } from 'react';

function App() {

   const [firstname, setFirstName] = useState("");
   const [lastname, setLastName] = useState("");
   const [Mobile, setMobile] = useState("");
   const [data, setData] = useState("data");

   const getFirstName = (e)=>{
     setFirstName(e.target.value)
            
   }

   const getLastName = (e) =>{
     setLastName(e.target.value)
         
   }

   const getMobile = (e) =>{
          setMobile(e.target.value);
   }

    const getData = (e)=>{
       e.preventDefault();
       setData(firstname +' '+ lastname+' '+Mobile);

    }
  
  return (
    <div className="App">
     
        <input type = "text" name = "firstname" placeholder = "First Name"  onChange = {getFirstName}/>    <br/>

        <input  type = "text" name = "lastname" placeholder = "Last Name"  onChange= {getLastName}/>      <br/>

        <input type = "text" name = "mobile" placeholder = "Mobile Number" onChange= {getMobile}/>    <br/>

        <input type = "submit" onClick = {getData}/> 

        <div> {data}</div>
     
   </div>
  );
}

export default App;

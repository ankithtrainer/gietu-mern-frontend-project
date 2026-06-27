import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(
          {
            name:"",
            emailid:"",
            password:"",
            mobileno:"",
            workstatus:""
          }     
        
        );
  
  // Step-3
  
    const changeHandler =(e) =>{
        const {name, value} = e.target;
        //alert("name" + name + " Value " + value)
        setFormData({...formData,[name]:value})   // ...formData  here ... is called spread operator
    };
    

     const onSubmitHandler =(e) => {
        e.preventDefault();
        alert('Form submitted successfully');
       // console.log(formData);
       navigate('/login');
    }  

    
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
            Full Name : <input type='text' name='name' value={formData.name} onChange={changeHandler}/>
        </div>
          <div>
            Email ID : <input type='text' name='emailid' value={formData.emailid} onChange={changeHandler}/>
        </div>
        <div>
            Password : <input type='password' name='password' value={formData.password} onChange={changeHandler} />
        </div>
          <div>
            Mobile Number: <input type='number' name='mobileno' value={formData.mobileno} onChange={changeHandler} />
        </div>
        <div>
            Work Status:<br/>
            Experienced <input type='radio' name='workstatus' value={"Experienced"} onChange={changeHandler}/>
            Fresher <input type='radio' name='workstatus' value={"Fresher"} onChange={changeHandler} />
        </div>
       <div>
          <input type='submit' name='submit' />
          <input type='reset' name='reset' />
       </div>
      </form>

    </div>
  )
}

export default Register
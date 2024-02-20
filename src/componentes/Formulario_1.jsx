//https://www.w3schools.com/react/react_forms.asp

import { useState } from 'react';

const Formulario_1 = () => {
    const [inputs, setInputs] = useState({});
    
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    //setInputs(values =>({...values,[`${name}`]:value}))
    console.log('os inputs: ',inputs)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    
  }

  
  return (<>
  <form onSubmit={handleSubmit}>
      <label>Introduce o teu nome:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Introduce a túa idade:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  </>
    
  )
  };
  
  export default Formulario_1;
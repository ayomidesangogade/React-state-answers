import React from "react"
import "../normal.css"

function Form() {
  const [object, setObject] = React.useState({firstname: "", lastname: "", email: "", password: ""});

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleChange(event) {
    const {name, value} = event.target
    setObject(prev => (
      {...prev, [name]:value}
    ));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">First Name: </label>
      <input type="text" name="firstname" value={object.firstname} onChange={handleChange} placeholder="Doe" />

      <label htmlFor="lastname">Last Name: </label>
      <input type="text" name="lastname" value={object.lastname} onChange={handleChange} placeholder="John" />

      <label htmlFor="email">Email: </label>
      <input type="email" name="email" value={object.email} onChange={handleChange} placeholder="example@gmail.com" />

      <label htmlFor="password">Password: </label>
      <input type="password" name="password" value={object.password} onChange={handleChange} placeholder="Enter your password" />

      <button type="submit">Submit</button>
      <div>{JSON.stringify(object, null, 2)}</div>
    </form>
  );
}

export default Form;

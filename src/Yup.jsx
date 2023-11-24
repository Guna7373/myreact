import React, { useState } from 'react';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    validationSchema.validate(formData, { abortEarly: false })
      .then(() => {
        // Form is valid, you can submit the data or perform any desired action.
        console.log('Form data submitted:', formData);
        setErrors({});
      })
      .catch((err) => {
        const validationErrors = {};
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };

  return (
    <form className='f1' onSubmit={handleSubmit}>
        <h1>Yup Form</h1>
        <br/>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div>{errors.name}</div>}
      </div><br/>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        /><br/>
        {errors.email && <div>{errors.email}</div>}
      </div><br/>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <div>{errors.password}</div>}
      </div><br/>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;

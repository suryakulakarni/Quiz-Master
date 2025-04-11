import {useState} from "react";
function Signin(){
    return (
        <div className="d-flex justify-content-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" placeholder="Enter Name"  name="email" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email" placeholder="Enter Email"  name="email" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password" placeholder="Enter Password" name="password" className="form-control rounded-0" />
                    </div>
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label" htmlFor="adminCheck">
                        Login as Admin
                        </label>
                    </div>
                    
                    
                    
                    <button type="submit" className="btn btn-success w-100 rounded-0 text-decoration-none">Login</button>
                </form>
            </div>
        </div>
    );
}
export default Signin;





// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signin() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '', isAdmin: false });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
//     if (!formData.password) newErrors.password = "Password is required";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       console.log("Login data:", formData);
//       // Do login logic here
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label><strong>Name</strong></label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" className="form-control rounded-0" />
//             {errors.name && <div className="text-danger">{errors.name}</div>}
//           </div>
//           <div className="mb-3">
//             <label><strong>Email</strong></label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" className="form-control rounded-0" />
//             {errors.email && <div className="text-danger">{errors.email}</div>}
//           </div>
//           <div className="mb-3">
//             <label><strong>Password</strong></label>
//             <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password" className="form-control rounded-0" />
//             {errors.password && <div className="text-danger">{errors.password}</div>}
//           </div>
//           <div className="form-check mb-3">
//             <input type="checkbox" name="isAdmin" checked={formData.isAdmin} onChange={handleChange} className="form-check-input" id="adminCheck" />
//             <label className="form-check-label" htmlFor="adminCheck">Login as Admin</label>
//           </div>
//           <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
//           <p className="mt-2">Don't have an account?</p>
//           <button type="button" onClick={() => navigate('/')} className="btn btn-outline-primary w-100 rounded-0">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signin;

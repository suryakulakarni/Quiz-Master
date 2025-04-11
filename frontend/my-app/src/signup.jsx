import {useState} from "react";
function Signup(){
    
    return (
        <div className="d-flex justify-content-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
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
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Confirm Password</strong>
                        </label>
                        <input type="password" placeholder="Re-Enter Password" name="password" className="form-control rounded-0" />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
                    <p>Already have an Account</p>
                    <button className="btn btn-success w-100 rounded-0 text-decoration-none" onclick={cb}>Login</button>
                </form>
            </div>
        </div>
    );
}
export default Signup;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
//     if (!formData.password) newErrors.password = "Password is required";
//     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       console.log("Signup data:", formData);
//       // Do signup logic here
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>Register</h2>
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
//           <div className="mb-3">
//             <label><strong>Confirm Password</strong></label>
//             <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Re-Enter Password" className="form-control rounded-0" />
//             {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
//           </div>
//           <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
//           <p className="mt-2">Already have an account?</p>
//           <button type="button" onClick={() => navigate('/login')} className="btn btn-outline-primary w-100 rounded-0">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;


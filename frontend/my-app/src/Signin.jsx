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
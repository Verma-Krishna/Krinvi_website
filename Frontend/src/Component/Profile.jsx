import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupRequest } from "../Redux/Actions/Signupaction";
import {loginRequest} from '../Redux/Actions/Loginaction'
import { useNavigate } from "react-router-dom";

const Profile = () => {



  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.signup);
  const {loginloading,loginuser,loginerror} = useSelector((state) => state.login );
  
  const navigate = useNavigate()

    const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    dispatch(loginRequest({ email, password }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(signupRequest(formData));
  };

  useEffect(() =>{
    if(loginuser){
      navigate('/innerhome')
    }
  },[loginuser,navigate])

  return (
    <>
      <div className="bg-[#F7F7F7] py-10 sm:py-16">
        <div className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 py-6 max-w-7xl mx-auto mt-10">
          <h1 className="text-3xl sm:text-4xl font-medium mb-4">My Account</h1>
          <div className="flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <h1 className="text-2xl sm:text-3xl font-medium mb-4">Login</h1>
              <div className="border border-gray-300 p-4 sm:pl-8 rounded-md">
                <h1 className="font-medium mt-1">
                  Email
                  <span className="text-red-600">*</span>
                </h1>
                <input
                  type="email"
                  className="mt-1 focus:outline-none border border-gray-300 w-full py-2"
                  name="loginemail"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
                <h1 className="mt-4 font-medium">
                  Password <span className="text-red-600">*</span>
                </h1>
                <input
                  type="password"
                  className="mt-1 focus:outline-none border border-gray-300 w-full py-2"
                  name="loginpassword"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                />
                <div className="flex items-center gap-2 mt-4">
                  <input type="checkbox" />
                  <h1 className="font-medium">Remember me</h1>
                </div>
                <button onClick={handleLogin} disabled={loginloading} type="submit" className="w-full sm:w-auto mt-4 px-4 py-2 bg-[#18D9E4] text-lg hover:bg-black hover:text-white font-medium">
                  {loginloading ? 'Logging in...' : 'LOG IN'}
                </button>
                <h1 className="text-gray-600 mt-3">Lost your Password?</h1>
                {loginerror && <div className="text-red-500">{loginerror}</div>}

              </div>
            </div>

            <div className="w-full xl:w-1/2">
              <h1 className="text-2xl sm:text-3xl font-medium mb-4">
                Register
              </h1>
              {loading && <p>Loading...</p>}
              {error && <p className="text-red-500">{error}</p>}
              {user && (
                <p className="text-green-500">
                  Signup Successfully !! Login Now
                </p>
              )}
              <div className="border border-gray-300 p-4 sm:pl-8 rounded-md">
                  <h1 className="font-medium">
                    Username <span className="text-red-600">*</span>
                  </h1>
                  <input
                    type="text"
                    className="mt-1 focus:outline-none border border-gray-300 w-full py-2"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                  <h1 className="font-medium">
                    Email <span className="text-red-600">*</span>{" "}
                  </h1>
                  <input
                    type="email"
                    className="mt-1 focus:outline-none border border-gray-300 w-full py-2"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <h1 className="mt-4 font-medium">
                    Password <span className="text-red-600">*</span>
                  </h1>
                  <input
                    type="password"
                    className="mt-1 focus:outline-none border border-gray-300 w-full py-2"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <p className="text-gray-600 mt-2">
                    A link to set a new password will be sent to your email
                    address.
                  </p>
                  <p className="text-gray-600 mt-2">
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our privacy policy.
                  </p>
                  <button onClick={handlesubmit}
                    type="submit"
                    className="w-full sm:w-auto mt-4 px-4 py-2 bg-[#18D9E4] text-lg hover:bg-black hover:text-white font-medium"
                  >
                    REGISTER
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;


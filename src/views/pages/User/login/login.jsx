import React, { useState } from "react";
import "./login.css";
import { onPostData } from "../../../apicalling";

export default function UserLogin() {
  const [page, setPage] = useState("login");

  // all form values

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [licenseId, setLicenseId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changePage = (e) => {
    e.preventDefault();
    if (page === "login") {
      setPage("signup");
    } else {
      setPage("login");
    }
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleRoleChange = (e) => {
    e.preventDefault();
    setRole(e.target.value);
  };

  const handlePhoneChange = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const handleLicenseIdChange = (e) => {
    e.preventDefault();
    setLicenseId(e.target.value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    console.log(user);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const user = {
      name: name,
      role: role,
      phone: phone,
      address: address,
      licenseId: licenseId,
      email: email,
      password: password,
    };

    console.log(user);
  };

  return (
    <section className="home">
      <div className="form_container">
        {page === "signup" && (
          <div className="form login_form">
            <form onSubmit={handleRegister}>
              <h2>User Signup</h2>

              {/* name */}

              <div className="input_box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  onChange={handleNameChange}
                />
                <i className="uil uil-user"></i>
              </div>

              {/* role - (drop down with options "user" and "no_garage") */}

              <div className="input_box">
                <select
                  name="role"
                  id="role"
                  required
                  onChange={handleRoleChange}
                >
                  <option value="" disabled selected>
                    Select your role
                  </option>
                  <option value="user">User</option>
                  <option value="no_garage">No Garage</option>
                </select>
                <i className="uil uil-user"></i>
              </div>

              {/* phone */}

              <div className="input_box">
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  onChange={handlePhoneChange}
                />
                <i className="uil uil-phone"></i>
              </div>

              {/* address */}

              <div className="input_box">
                <input
                  type="text"
                  placeholder="Enter your address"
                  required
                  onChange={handleAddressChange}
                />
                <i className="uil uil-map-marker"></i>
              </div>

              {/* licenseId */}

              <div className="input_box">
                <input
                  type="text"
                  placeholder="Enter your license ID"
                  required
                  onChange={handleLicenseIdChange}
                />
                <i className="uil uil-id-card"></i>
              </div>

              {/* email */}

              <div className="input_box">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  onChange={handleEmailChange}
                />
                <i className="uil uil-envelope-alt email"></i>
              </div>

              {/* password */}

              <div className="input_box">
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  onChange={handlePasswordChange}
                />
                <i className="uil uil-lock password"></i>
                <i className="uil uil-eye-slash pw_hide"></i>
              </div>

              <button className="button">Login Now</button>

              <div className="login_signup">
                Don't have an account?{" "}
                <a onClick={changePage} id="signup">
                  Signup
                </a>
              </div>
            </form>
          </div>
        )}

        {page === "login" && (
          <div className="form login_form">
            <form onSubmit={handleLogin}>
              <h2>User Login</h2>

              {/* email */}

              <div className="input_box">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  onChange={handleEmailChange}
                />
                <i className="uil uil-envelope-alt email"></i>
              </div>

              {/* password */}

              <div className="input_box">
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  onChange={handlePasswordChange}
                />
                <i className="uil uil-lock password"></i>
                <i className="uil uil-eye-slash pw_hide"></i>
              </div>

              <button className="button">Signup Now</button>

              <div className="login_signup">
                Already have an account?{" "}
                <a onClick={changePage} id="login">
                  Login
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

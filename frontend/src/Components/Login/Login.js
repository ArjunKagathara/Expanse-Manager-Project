import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import your Firebase configuration
import styles from "./styles.module.css";
import {
  get,
  getDatabase,
  orderByChild,
  equalTo,
  ref,
  child,
} from "firebase/database";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const { email, password } = data;
  //       console.log(email, password);
  //       localStorage.setItem("user", "true");
  //     } catch (error) {
  //       console.log(error);
  //       setError(error.message);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = data;

      // Check if email exists in the database
      const db = getDatabase();
      const usersRef = ref(db, "users");
      const usersSnapshot = await get(child(usersRef, "/"));

      let emailExists = false;
      usersSnapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();
        if (userData.email === email) {
          emailExists = true;
          return;
        }
      });

      if (emailExists) {
        // Email found in database, proceed with login
        console.log("Email exists in the database. Proceeding with login...");
        localStorage.setItem("user", email);
        // Optionally, redirect the user after successful login
        window.location = "/";
      } else {
        // Email not found in database
        throw new Error("Email not found in the database");
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

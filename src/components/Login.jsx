/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  // Step 1
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Step 2
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://carwashingserver.vercel.app/api/auth/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      console.log(response.data.data.token)

      if (response.status === 200 && response.data.success) {
        localStorage.setItem('token',response.data.data.token)
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome back, ${response.data.data.user.name.firstName}!`,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
      } else {
        throw new Error("Unsuccessful login");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Unauthorized",
        text: "Please Try Again!!!",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } finally {
      setLoading(false);
      navigate("/list");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            {...register("email", { required: true })}
            id="email"
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
          {errors.email && <p style={{ color: "red" }}>Email is required</p>}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            {...register("password", { required: true })}
            id="password"
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
          {errors.password && (
            <p style={{ color: "red" }}>Password is required</p>
          )}
        </div>
        <button
          type="submit"
          style={{ padding: "10px 20px" }}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;

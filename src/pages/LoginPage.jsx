import React from "react";

export const LoginPage = ({ history }) => {
  const handleLogin = () => {
    history.replace("/");
  };

  return (
    <div className="container mt-5">
      <h2>Login Page</h2>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Ingresar
      </button>
    </div>
  );
};

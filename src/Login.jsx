import { useState } from "react";

const Login = ({ onLogin }) => {
  const initialState = {
    username: "",
    password: "",
    remember: false,
  };

  const [data, setData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(data);
  };
  const handleReset = () => {
    setData(initialState);
  };

  const isFormValid = data.username && data.password;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Remember me:
          <input
            type="checkbox"
            name="remember"
            checked={data.remember}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" disabled={!isFormValid}>
        Login
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default Login;

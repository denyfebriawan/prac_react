import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState([]);

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product";
      } else {
        setLoginFailed(res.response.data);
        console.log(res);
      }
    });
    // console.log("Login berhasil");
    // localStorage.setItem("email", event.target.email1.value);
    // localStorage.setItem("password", event.target.password.value);
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="JohnDoe"
        id="username"
        name="username"
        ref={usernameRef}
      ></InputForm>
      <InputForm
        label="password"
        type="password"
        placeholder="example@mail.com"
        id="password"
        name="password"
      ></InputForm>
      <Button variant="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 flex justify-center"> {loginFailed} </p>
      )}
    </form>
  );
};

export default FormLogin;

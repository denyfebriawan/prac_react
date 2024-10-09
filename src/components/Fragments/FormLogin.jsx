import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Button";
import { useEffect, useRef } from "react";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login berhasil");
    localStorage.setItem("email", event.target.email1.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/product";
  };

  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="email"
        type="email"
        placeholder="example@mail.com"
        id="email1"
        name="email1"
        ref={emailRef}
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
    </form>
  );
};

export default FormLogin;

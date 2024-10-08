import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Button";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="email"
        type="email"
        placeholder="example@mail.com"
        id="email1"
        name="email1"
      ></InputForm>
      <InputForm
        label="password"
        type="password"
        placeholder="example@mail.com"
        id="password"
        name="password"
      ></InputForm>
      <Button variant="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;

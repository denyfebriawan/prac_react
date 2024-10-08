import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="Insert your fullname here"
        id="fullname"
        name="fullname"
      ></InputForm>
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
        placeholder="*****"
        id="password"
        name="password"
      ></InputForm>
      <InputForm
        label="Confirm password"
        type="password"
        placeholder="*****"
        id="confirm_password"
        name="confirm_password"
      ></InputForm>
      <Button variant="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;

import Button from "./components/Elements/Button/Button";
import InputForm from "./components/Elements/Input/Index";

const App = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
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
      </div>
    </div>
  );
};

export default App;

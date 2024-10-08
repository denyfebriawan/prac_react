import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout>
      <FormLogin title="login" />
    </AuthLayout>
  );
};

export default LoginPage;

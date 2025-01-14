
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginApi} from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/rmv logo-01.png"
export const LoginForm = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: Yup.object({
      login: Yup.string().required("Usuário é obrigatório"),
      password: Yup.string().required("Senha é obrigatória"),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {

      try {
        await loginApi(values.login, values.password);
        navigate("/dashboard")
      } catch (error) {
        setFieldError("username", "Usuário ou senha inválidos");
        console.log(error)
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <img src={logo} alt="" className="w-full p-4" />
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {formik.errors.login && formik.touched.login && (
          <div className="bg-rose-100 text-rose-700 p-2 rounded mb-4">
            {formik.errors.login}
          </div>
        )}
        {formik.errors.password && formik.touched.password && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
            {formik.errors.password}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Usuário
          </label>
          <input
            type="text"
            name="login"
            placeholder="Digite seu usuário"
            value={formik.values.login}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border ${
              formik.touched.login && formik.errors.login
                ? "border-red-500"
                : "border-gray-300"
            } rounded focus:outline-none focus:ring ${
              formik.touched.login && formik.errors.login
                ? "focus:ring-red-300"
                : "focus:ring-blue-200"
            }`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Senha
          </label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : "border-gray-300"
            } rounded focus:outline-none focus:ring ${
              formik.touched.password && formik.errors.password
                ? "focus:ring-red-300"
                : "focus:ring-blue-200"
            }`}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary-green text-white py-2 rounded hover:bg-secondary-green focus:outline-none focus:ring focus:ring-secondary-green"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Carregando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
};



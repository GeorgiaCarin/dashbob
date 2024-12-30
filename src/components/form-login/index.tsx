import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../services/AuthService";

const LoginForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Usuário é obrigatório"),
      password: Yup.string().required("Senha é obrigatória"),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        await login(values.username, values.password);
        alert("Login realizado com sucesso!");
      } catch (error) {
        setFieldError("username", "Usuário ou senha inválidos");
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
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {formik.errors.username && formik.touched.username && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
            {formik.errors.username}
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
            name="username"
            placeholder="Digite seu usuário"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border ${
              formik.touched.username && formik.errors.username
                ? "border-red-500"
                : "border-gray-300"
            } rounded focus:outline-none focus:ring ${
              formik.touched.username && formik.errors.username
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
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Carregando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

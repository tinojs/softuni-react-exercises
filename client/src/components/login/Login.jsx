import useForm from "../../hooks/useForm";

const LoginFromKeys = {
  Email: "email",
  Password: "password",
};

export default function Login({ loginSubmitHandler }) {
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFromKeys.Email]: "",
    [LoginFromKeys.Password]: "",
  });

  return (
    <section id="login-page" className="auth">
      <form id="login" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo" />
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name={LoginFromKeys.Email}
            placeholder="Sokka@gmail.com"
            onChange={onChange}
            value={values[LoginFromKeys.Email]}
          />
          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="login-password"
            name={LoginFromKeys.Password}
            onChange={onChange}
            value={values[LoginFromKeys.Password]}
          />
          <input type="submit" className="btn submit" defaultValue="Login" />
          <p className="field">
            <span>
              If you don't have profile click <a href="/register">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}

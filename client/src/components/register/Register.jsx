import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirm-password",
};
export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.ConfirmPassword]: "",
  });

  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo" />
          <h1>Register</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="maria@email.com"
            onChange={onChange}
            values={values[RegisterFormKeys.Email]}
          />
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="password"
            id="register-password"
            onChange={onChange}
            values={values[RegisterFormKeys.Password]}
          />
          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            onChange={onChange}
            values={values[RegisterFormKeys.ConfirmPassword]}
          />
          <input className="btn submit" type="submit" defaultValue="Register" />
          <p className="field">
            <span>
              If you already have profile click <a href="/login">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}

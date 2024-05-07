import styles from "./Login.module.css";

import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.containerLogin}>
      <div className={styles.login}>
        <h1>Entrar</h1>
        <p>Faça o login para usar o sistema!</p>
      </div>
      <div className={styles.containerFormPrincipal}>
        <form className={styles.containerForm} onSubmit={handleSubmit}>
          <label>
            <span>E-mail:</span>
            <input
              type="email"
              name="email"
              required
              placeholder="Digite um e-mail válido!"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Senha:</span>
            <input
              type="password"
              name="password"
              required
              placeholder="Digite uma senha válida!"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {!loading && <button className="btn">Entrar</button>}
          {loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
          {error && <p className="error">{error}</p>}
        </form>
      </div>
      <div className={styles.registrarLogin}>
        <p>
          Não tem um acesso?{" "}
          <span>
            <Link to={`/Registro`} className="btnRegister">
              Registre-se
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

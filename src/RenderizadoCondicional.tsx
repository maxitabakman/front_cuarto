import React, { useState } from 'react';

interface LogInFormProps {
  name: string;
  password: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onLogin: (e: React.FormEvent) => void;
}

interface LoggedInProps {
  name: string;
  handleLogout: () => void;
}

// 2. Componente LogInForm
export function LogInForm({
  name,
  password,
  setName,
  setPassword,
  onLogin,
}: LogInFormProps) {
  return (
    <form onSubmit={onLogin} className="card">
      <h2>Iniciar Sesión</h2>
      <div>
        <label htmlFor="user">Usuario:</label>
        <input
          id="user"
          type="text"
          value={name}
          onChange={(e) => {
            // TODO: Actualizar el estado 'name' usando setName
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="pass">Contraseña:</label>
        <input
          id="pass"
          type="password"
          value={password}
          onChange={(e) => {
            // TODO: Actualizar el estado 'password' usando setPassword
            setPassword(e.target.value);
          }}
        />
      </div>
      <button type="submit">Ingresar</button>
    </form>
  );
}

// 3. Componente LoggedIn
export function LoggedIn({ name, handleLogout }: LoggedInProps) {
  return (
    <div className="card">
      <h2>¡Bienvenido/a, {name}!</h2>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}

// 4. Componente Principal
export default function RenderizadoCondicional() {
  // Estados iniciales
  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // TODO: Completar la lógica de Login (Punto 3 de la consigna)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogged(name !== "" && password !== "")

  };

  // TODO: Completar la lógica de Logout (Punto 3 de la consigna)
  const handleLogout = () => {
    setIsLogged(true)
    setName("")
    setPassword("")
  return (
    <div className="card-container">
      {/* TODO: Evaluar el estado isLogged para hacer el renderizado condicional (Punto 4) */}
      {isLogged ? (
        <LoggedIn name={name} handleLogout={handleLogout} />
      ) : (
        <LogInForm
          name={name}
          password={password}
          setName={setName}
          setPassword={setPassword}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}}
import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import "./Login.css";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <FaUser className="icon" />
                    <input type="email" placeholder="E-mail" required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-field"> 
                    <FaLock className="icon" />
                    <input type="password" placeholder="Senha" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button>Entrar</button>
                <div className="signup-link">
                    <p>Não tem uma conta? <a href="#">Registrar</a></p>
                </div>
            </form>
        </div>
    )
}
export default Login
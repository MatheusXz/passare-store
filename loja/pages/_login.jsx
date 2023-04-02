import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';




function Login() {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  function cadastro(e) {
    e.preventDefault()
    console.log(`Email: ${email}`)
    console.log(`Senha: ${senha}`)
  }
  return (
    <>
      <form onSubmit={cadastro}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email"
          className="mb-3"
          onChange={(e) => setEmail(e.target.value)}
        >
          <Form.Control type="email" placeholder="nome@exemplo.com" />

        </FloatingLabel>

        <FloatingLabel controlId="SenhaFloat" label="Senha">
          <Form.Control
            type="password"
            placeholder="********"
            onChange={(e) => setSenha(e.target.value)}
          />
        </FloatingLabel>

        <div>
          <input type="submit" value='Cadastrar' />
        </div>
      </form>
    </>
  );
}

export default Login;
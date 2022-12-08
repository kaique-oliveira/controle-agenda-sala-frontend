import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function HomePage() {

  const auth = useAuth();
  const navigate = useNavigate();

  const sair = () => {
    auth.logout();
    navigate('/');
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={sair}>Sair</button>
    </div>
  )
}

export default HomePage;

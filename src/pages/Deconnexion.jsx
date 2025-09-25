
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Deconnexion() {

  const { logout }=useContext()
  const navigate=useNavigate()

  return (
    <div className="d-grid gap-2"  >
      <Button variant="primary" size="lg" onClick={()=>{ logout() ;  navigate("/welcome")}} >
        Se Déconnecter
      </Button>
    </div> 
  );
}

export default Deconnexion;

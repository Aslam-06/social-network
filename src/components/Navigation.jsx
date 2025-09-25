import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaReact } from "react-icons/fa"; 

function Navigation() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", paddingTop: "10px" }}>
      <div style={{
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{
          backgroundColor: "white",
          borderRadius: "50%",
          padding: "15px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}>
          <FaReact size={40} color="#61DBFB" />
        </div>
      </div>

      <Nav fill variant="tabs" defaultActiveKey="/home" style={{ display: "flex" }}>

      <Nav.Item style={{ flex: 1, textAlign: "left" }}>
          <Nav.Link onClick={() => navigate("/welcome")}>
            <FaReact size={20} style={{ marginRight: "5px" }} />
    
          </Nav.Link>
        </Nav.Item>

        <Nav.Item style={{ flex: 1, textAlign: "left" }}>
          <Nav.Link onClick={() => navigate("/")}>
            <FaHome size={20} style={{ marginRight: "25px" }} />
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ flex: 1, textAlign: "center" }}>
          <Nav.Link onClick={() => navigate("/profile")}>Profil</Nav.Link>
        </Nav.Item>

        <Nav.Item style={{ flex: 1, textAlign: "right" }}>
          <Nav.Link onClick={() => {
            navigate("/deconnexion");
          }}>
            Déconnexion
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navigation;
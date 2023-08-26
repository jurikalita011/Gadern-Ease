import { Link } from "react-router-dom";
const mystyle = {
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center",
  fontSize: "15px",
  fontWeight: "bold",
  backgroundColor: "#F5F5F5",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  fontFamily: " Roboto, sans-serif ",
  color: "#404040",
  position: "sticky",
  top: "0",
};
const allname = {
  margin: "24px",
  textAlign: "center",
  fontSize: "15px",
  fontWeight: "bold",
  backgroundColor: "#F5F5F5",
  fontFamily: " Roboto, sans-serif ",
  color: "#404040",
};

export const Navbar = () => {
  return (
    <div style={mystyle}>
      <div>
        {" "}
        <img src="logo.jpeg" alt="" style={{ width: "250px" }} />
      </div>

      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <h3 data-testid="home-link" style={allname}>
          Home{" "}
        </h3>
      </Link>
      <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
        <h3 data-testid="home-link" style={allname}>
          Gardening Practice
        </h3>
      </Link>
      <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
        <h3 data-testid="home-link" style={allname}>
          Plants
        </h3>
      </Link>
      <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
        <h3 data-testid="home-link" style={allname}>
          Perennials
        </h3>
      </Link>
      <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
        <h3 data-testid="home-link" style={allname}>
          Trees & Shrubs
        </h3>
      </Link>

      <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
        <h3 data-testid="home-link" style={allname}>
          Topics
        </h3>
      </Link>

      <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
        <h3 data-testid="home-link" style={allname}>
          SignUp
        </h3>
      </Link>
    </div>
  );
};

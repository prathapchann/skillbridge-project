import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const cardStyle = {
    background: "rgba(255,255,255,0.08)",
    padding: "25px",
    borderRadius: "15px",
    width: "250px",
    textAlign: "center"
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #0f172a, #1e293b)",
        color: "white",
        fontFamily: "Arial"
      }}
    >

      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px"
        }}
      >
        <h2>SkillBridge</h2>

        <div>
          <button
            onClick={() => navigate("/login")}
            style={{
              marginRight: "10px",
              padding: "10px 18px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Login
          </button>

          <button
            onClick={() => navigate("/matches")}
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Matches
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          paddingTop: "100px"
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px"
          }}
        >
          SkillBridge
        </h1>

        <h2>
          Learn. Teach. Grow Together.
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto"
          }}
        >
          Connect with people who have the skills you need
          and teach the skills you already know.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "14px 28px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Get Started
        </button>
      </div>

      {/* Features */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "100px"
        }}
      >

        <div style={cardStyle}>
          <h3>Skill Exchange</h3>
          <p>Learn from experienced people and share your own knowledge.</p>
        </div>

        <div style={cardStyle}>
          <h3>Smart Matching</h3>
          <p>Find people based on skills offered and skills wanted.</p>
        </div>

        <div style={cardStyle}>
          <h3>Secure Login</h3>
          <p>Protected with JWT Authentication and MongoDB.</p>
        </div>

      </div>

      {/* How It Works */}
      <div
        style={{
          textAlign: "center",
          marginTop: "100px"
        }}
      >
        <h2>How It Works</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px"
          }}
        >
          <div style={cardStyle}>1. Register</div>
          <div style={cardStyle}>2. Add Skills</div>
          <div style={cardStyle}>3. Find Matches</div>
          <div style={cardStyle}>4. Connect & Learn</div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
          padding: "30px",
          color: "#cbd5e1"
        }}
      >
        SkillBridge © 2026 | Built with MERN Stack
      </div>

    </div>
  );
}

export default Home;
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"linear-gradient(to right, #0f172a, #1e293b)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontFamily:"Arial",
        color:"white"
      }}
    >

      <div
        style={{
          background:"rgba(255,255,255,0.08)",
          backdropFilter:"blur(10px)",
          padding:"50px",
          borderRadius:"20px",
          textAlign:"center",
          width:"400px",
          boxShadow:"0 8px 30px rgba(0,0,0,0.3)"
        }}
      >

        <h1
          style={{
            fontSize:"48px",
            marginBottom:"15px"
          }}
        >
          SkillBridge
        </h1>

        <p
          style={{
            color:"#cbd5e1",
            marginBottom:"30px",
            lineHeight:"1.6"
          }}
        >
          Connect learners and mentors through skill sharing.
        </p>

        <button
          onClick={()=>navigate("/login")}
          style={{
            background:"#2563eb",
            color:"white",
            border:"none",
            padding:"14px 28px",
            borderRadius:"10px",
            fontSize:"16px",
            cursor:"pointer",
            fontWeight:"bold"
          }}
        >
          Get Started
        </button>

      </div>

    </div>
  );
}

export default Home;
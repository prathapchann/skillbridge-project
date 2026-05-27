import { useState, useEffect } from "react";

import axios from "axios";

function Dashboard() {

  const [name, setName] = useState("");

  const [skillOffered, setSkillOffered] = useState("");

  const [skillWanted, setSkillWanted] = useState("");

  const [location, setLocation] = useState("");

  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");

const [password, setPassword] = useState("");
useEffect(() => {

  const userData = JSON.parse(
    localStorage.getItem("skillbridgeUser")
  );

  if(userData){

    setEmail(userData.email);

    setPassword(userData.password);
  }

}, []);


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:3000/api/users/register",
        {
          name,
          email,
          password,
          skillOffered,
          skillWanted,
          location,
          bio 
        }
      );

      alert("Profile Saved");

      setName("");
      setSkillOffered("");
      setSkillWanted("");
      setLocation("");
      setBio("");

    } catch (error) {

      console.log(error);
    }
  };


  return (

    <div
      style={{
        minHeight:"100vh",
        background:"linear-gradient(to right, #0f172a, #1e293b)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"30px",
        fontFamily:"Arial"
      }}
    >

      <form
        onSubmit={handleSubmit}
        style={{
          width:"500px",
          background:"rgba(255,255,255,0.08)",
          backdropFilter:"blur(10px)",
          padding:"40px",
          borderRadius:"20px",
          display:"flex",
          flexDirection:"column",
          gap:"18px",
          boxShadow:"0 8px 30px rgba(0,0,0,0.3)"
        }}
      >

        <h2
          style={{
            color:"white",
            textAlign:"center"
          }}
        >
          SkillBridge Dashboard
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Skill Offered"
          value={skillOffered}
          onChange={(e)=>setSkillOffered(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Skill Wanted"
          value={skillWanted}
          onChange={(e)=>setSkillWanted(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e)=>setBio(e.target.value)}
          style={{
            ...inputStyle,
            minHeight:"100px"
          }}
        />

        <button
          type="submit"
          style={{
            background:"#2563eb",
            color:"white",
            border:"none",
            padding:"14px",
            borderRadius:"10px",
            fontWeight:"bold",
            cursor:"pointer"
          }}
        >
          Save Profile
        </button>

      </form>

    </div>
  );
}

const inputStyle = {

  padding:"14px",

  borderRadius:"10px",

  border:"none",

  outline:"none",

  fontSize:"15px"
};

export default Dashboard;
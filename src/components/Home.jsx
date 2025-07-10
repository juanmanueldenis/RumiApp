import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext"; // O dejá esto si usás contexto

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // user?.loggedIn === true/false

  const goToMapa = () => {
    navigate("/buscar");
  };

  const protectedNavigate = (ruta) => {
    if (user?.loggedIn) {
      navigate(ruta);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] px-6">
      <div className="w-full max-w-md flex flex-col items-center gap-6 bg-white shadow-2xl rounded-3xl px-8 py-12">
        <span className="text-3xl font-bold text-[#333] mb-2">RumiAR</span>
        <span className="text-md text-[#555] mb-8 text-center">
          Tu próxima casa empieza con una buena compañía.
        </span>

        <button
          className="w-full bg-[#4A90E2] text-white rounded-xl py-4 font-semibold text-lg shadow hover:bg-[#317acc] transition mb-2"
          onClick={goToMapa}
        >
          Buscar habitación
        </button>

        <button
          className="w-full border border-[#4A90E2] bg-white text-[#4A90E2] rounded-xl py-4 font-semibold text-lg shadow hover:bg-[#eaf4fd] transition mb-2"
          onClick={() => protectedNavigate("/publicar")}
        >
          Publicar habitación
        </button>

        <button
          className="w-full border border-[#4A90E2] bg-white text-[#4A90E2] rounded-xl py-4 font-semibold text-lg shadow hover:bg-[#eaf4fd] transition"
          onClick={() => protectedNavigate("/mis-publicaciones")}
        >
          Mis publicaciones
        </button>
      </div>
    </div>
  );
};

export default Home;

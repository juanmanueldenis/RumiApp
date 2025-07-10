import { Routes, Route, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import logo from '../src/assets/logo.png';
import Login from './components/login';
// import Home from "./components/Home";


// Icono custom (opcional)
const customIcon = new L.Icon({
  iconUrl: logo,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
  className: 'leaflet-custom-icon'
});

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#d0cae8]">
      <div className="bg-white shadow-2xl rounded-3xl px-8 py-12 flex flex-col gap-8 items-center w-full max-w-md">
        <img src={logo} alt="RumiAR logo" className="w-70 h-20 mb-2 rounded-2xl shadow" />
        <h1 className="text-3xl font-bold text-[#6c63ff] mb-2 tracking-tight">
          RumiAR
        </h1>
        <p className="text-md text-[#332e35] mb-4 text-center">
          Tu próxima casa empieza con una buena compañía.
        </p>
        <div className="flex flex-col gap-4 w-full">
          <button
            className="w-full bg-[#7669fa] text-white rounded-2xl px-6 py-4 font-semibold text-lg shadow hover:bg-[#574fba] transition"
            onClick={() => navigate('/buscar')}
          >
            Buscar Habitación
          </button>
          <button
            className="w-full bg-[#96e6b3] text-[#332e35] rounded-2xl px-6 py-4 font-semibold text-lg shadow hover:bg-[#79d8a1] transition"
            onClick={() => navigate('/alquiler')}
          >
            Buscar Alquiler
          </button>
          <button
            className="w-full bg-[#ffd6e0] text-[#332e35] rounded-2xl px-6 py-4 font-semibold text-lg shadow hover:bg-[#ffb6c1] transition"
            onClick={() => navigate('/publicar')}
          >
            Publicar
          </button>
          <button
            className="w-full bg-[#e0d3fc] text-[#6c63ff] rounded-2xl px-6 py-4 font-semibold text-lg shadow hover:bg-[#d3c0f7] transition"
            onClick={() => navigate('/favoritos')}
          >
            Favoritos
          </button>
        </div>
        {/* Links login/registro debajo, bien chill */}
        <div className="flex flex-row gap-3 mt-6 text-[#6c63ff] text-md font-semibold">
          <span
            className="cursor-pointer hover:underline"
            onClick={() => navigate('/login')}
          >
            Loguearse
          </span>
          <span>|</span>
          <span
            className="cursor-pointer hover:underline"
            onClick={() => navigate('/register')}
          >
            Registrarse
          </span>
        </div>
      </div>
      <footer className="mt-10 text-[#332e35] text-sm opacity-40">
        © 2025 RumiAR
      </footer>
    </div>
  );
}

// El resto de las funciones igual...

function BuscarHabitacion() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#d0cae8]">
      <div className="bg-white shadow-2xl rounded-3xl px-8 py-10 flex flex-col gap-6 items-center w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-[#6c63ff]">Buscar Habitación</h2>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {/* Filtros simples */}
          <input
            type="text"
            placeholder="Ciudad o zona"
            className="rounded-xl border px-4 py-2 w-full md:w-40"
          />
          <select className="rounded-xl border px-4 py-2 w-full md:w-40">
            <option>Precio máx.</option>
            <option>$50.000</option>
            <option>$100.000</option>
            <option>$200.000</option>
          </select>
          <select className="rounded-xl border px-4 py-2 w-full md:w-40">
            <option>Tipo de convivencia</option>
            <option>Tranqui</option>
            <option>Fiestero/a</option>
            <option>No importa</option>
          </select>
        </div>
        {/* Mapa */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden mt-4 shadow">
          <MapContainer center={[-34.6037, -58.3816]} zoom={12} scrollWheelZoom={true} className="h-full w-full">
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Ejemplo de marcador (Obelisco, CABA) */}
            <Marker position={[-34.6037, -58.3816]} icon={customIcon}>
              <Popup>
                Habitación disponible en Microcentro<br />
                $80.000/mes
              </Popup>
            </Marker>
            {/* Más marcadores después */}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}


function BuscarAlquiler() {
  // ...sin cambios por ahora
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#d0cae8]">
      {/* ... */}
    </div>
  );
}

function Publicar() {
  // ...sin cambios por ahora
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#d0cae8]">
      {/* ... */}
    </div>
  );
}

// Pantalla Favoritos (vacía de momento)
function Favoritos() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#d0cae8]">
      <div className="bg-white shadow-2xl rounded-3xl px-8 py-12 flex flex-col items-center w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#6c63ff] mb-2">Favoritos</h2>
        <p className="text-md text-gray-600 text-center">
          Acá aparecerán tus habitaciones o alquileres favoritos.
        </p>
      </div>
    </div>
  );
}



function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#d0cae8]">
      <div className="bg-white shadow-2xl rounded-3xl px-8 py-12 flex flex-col items-center w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#6c63ff] mb-2">Registrarse</h2>
        <p className="text-md text-gray-600 text-center">
          Pronto vas a poder registrarte con Google o tu celular.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buscar" element={<BuscarHabitacion />} />
      <Route path="/alquiler" element={<BuscarAlquiler />} />
      <Route path="/publicar" element={<Publicar />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Login />} />

    </Routes>
  );
}

export default App;

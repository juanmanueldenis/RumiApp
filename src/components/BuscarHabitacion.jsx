import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import logo from '../assets/logo.png';

const customIcon = new L.Icon({
  iconUrl: logo,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
  className: 'leaflet-custom-icon'
});

function BuscarHabitacion() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#d0cae8]">
      <div className="bg-white shadow-2xl rounded-3xl px-8 py-10 flex flex-col gap-6 items-center w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-[#6c63ff]">Buscar Habitación</h2>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <input type="text" placeholder="Ciudad o zona" className="rounded-xl border px-4 py-2 w-full md:w-40" />
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
        <div className="w-full h-[400px] rounded-2xl overflow-hidden mt-4 shadow">
          <MapContainer center={[-34.6037, -58.3816]} zoom={12} scrollWheelZoom={true} className="h-full w-full">
            <TileLayer attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-34.6037, -58.3816]} icon={customIcon}>
              <Popup>
                Habitación disponible en Microcentro<br />$80.000/mes
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default BuscarHabitacion;

'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { mountainData } from '@/data/mountain-data';

// Fix untuk marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const getMountainIcon = (difficulty: string) => {
  return L.divIcon({
    className: 'custom-mountain-icon',
    html: `🏔️`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
  });
};

export default function HikingMap() {
  return (
    <div className="relative h-screen w-screen m-0 p-0">
      {/* Filter Panel */}
      <div className="absolute top-3 left-3 z-[1000] bg-white p-4 rounded-lg shadow-lg min-w-[200px]">
        <h3 className="m-0 mb-2">🏔️ Filter Gunung</h3>
        <div className="mb-3">
          <strong className="block mb-2">Tingkat Kesulitan:</strong>
          <div className="space-y-1">
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" /> Mudah
            </label>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" /> Sedang
            </label>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" /> Sulit
            </label>
          </div>
        </div>
        <div>
          <strong className="block mb-1">Pulau:</strong>
          <select className="w-full mt-1 p-1 border rounded">
            <option>Semua Pulau</option>
            <option>Jawa</option>
            <option>Sumatera</option>
            <option>Bali & Nusa Tenggara</option>
            <option>Sulawesi</option>
          </select>
        </div>
      </div>

      <MapContainer 
        center={[-2.5489, 118.0149]} 
        zoom={5} 
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {mountainData.map((mountain) => (
          <Marker 
            key={mountain.id} 
            position={[mountain.lat, mountain.lng]}
            icon={getMountainIcon(mountain.difficulty)}
          >
            <Popup>
              <div className="min-w-[250px]">
                <h3 className="mt-0 mb-2 text-[#2c5530]">
                  🏔️ {mountain.name}
                </h3>
                
                <div className="mb-2">
                  <strong>📍 Provinsi:</strong> {mountain.province}
                </div>
                
                <div className="mb-2">
                  <strong>📏 Ketinggian:</strong> {mountain.elevation} mdpl
                </div>
                
                <div className="mb-2">
                  <strong>⚡ Kesulitan:</strong> 
                  <span className={`font-bold ml-1 ${
                    mountain.difficulty === 'Mudah' ? 'text-green-600' : 
                    mountain.difficulty === 'Sedang' ? 'text-orange-600' : 'text-red-600'
                  }`}>
                    {mountain.difficulty}
                  </span>
                </div>
                
                <div className="mb-2">
                  <strong>📅 Musim Terbaik:</strong> {mountain.bestSeason}
                </div>
                
                <div className="mb-2">
                  <strong>🗺️ Jalur Pendakian:</strong>
                  <ul className="my-1 pl-5 list-disc">
                    {mountain.trails.map(trail => (
                      <li key={trail}>{trail}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-3">
                  <strong>✨ Fitur:</strong> {mountain.features.join(', ')}
                </div>
                
                <p className="italic text-gray-600 border-t border-gray-200 pt-2 mt-0">
                  {mountain.description}
                </p>
                
                <button 
                  onClick={() => window.open(
                    `https://www.google.com/maps/search/?api=1&query=${mountain.lat},${mountain.lng}`,
                    '_blank'
                  )}
                  className="w-full mt-3 py-2 bg-[#2c5530] text-white border-none rounded cursor-pointer hover:bg-[#1e3a24] transition-colors"
                >
                  📍 Buka di Google Maps
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="absolute bottom-3 right-3 z-[1000] bg-white p-4 rounded-lg shadow-lg">
        <h4 className="m-0 mb-2">Legend</h4>
        <div className="flex items-center mb-1">
          <span className="text-green-600 font-bold mr-2">Mudah</span>
        </div>
        <div className="flex items-center mb-1">
          <span className="text-orange-600 font-bold mr-2">Sedang</span>
        </div>
        <div className="flex items-center">
          <span className="text-red-600 font-bold mr-2">Sulit</span>
        </div>
      </div>
    </div>
  );
}
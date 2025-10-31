'use client';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { mountainData } from '@/data/mountain-data';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const getMountainIcon = (difficulty: string) => {
  const colors = {
    'Mudah': '#10B981',
    'Sedang': '#F59E0B', 
    'Sulit': '#EF4444'
  };

  return L.divIcon({
    className: 'custom-mountain-icon',
    html: `
      <div class="relative">
        <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/30 animate-pulse">
          ⛰
        </div>
        <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-purple-500 to-blue-500 rotate-45"></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
};

export default function HikingMap() {
  return (
    <div className="relative h-screen w-screen m-0 p-0 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#0a0a0a] to-blue-900/20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      {/* Web3 Header */}
      <div className="absolute top-6 left-6 right-6 z-[1000]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30">
                ⛰
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl blur-sm opacity-50 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-white font-bold text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                MOUNTAIN NFT
              </h1>
              <p className="text-gray-400 text-xs">Explore Digital Peaks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Filter Panel */}
      <div className="absolute top-24 left-6 z-[1000] bg-[#1a1a1a]/80 backdrop-blur-xl border border-[#333] rounded-2xl p-6 shadow-2xl min-w-[280px]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm">⚡</span>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">FILTER MOUNTAINS</h3>
            <p className="text-gray-400 text-xs">Curate your adventure</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <strong className="text-white text-sm font-semibold">DIFFICULTY LEVEL</strong>
              <span className="text-purple-400 text-xs">✦</span>
            </div>
            <div className="space-y-3">
              {['Mudah', 'Sedang', 'Sulit'].map((level) => (
                <label key={level} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        defaultChecked 
                        className="w-4 h-4 bg-[#2a2a2a] border-2 border-[#444] rounded checked:bg-gradient-to-br checked:from-purple-500 checked:to-blue-500 checked:border-transparent transition-all duration-300"
                      />
                    </div>
                    <span className={`text-sm font-medium ${
                      level === 'Mudah' ? 'text-green-400' : 
                      level === 'Sedang' ? 'text-orange-400' : 'text-red-400'
                    } group-hover:scale-105 transition-transform`}>
                      {level}
                    </span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
                </label>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t border-[#333]">
            <div className="flex items-center justify-between mb-3">
              <strong className="text-white text-sm font-semibold">ISLAND REGION</strong>
              <span className="text-blue-400 text-xs">✦</span>
            </div>
            <select className="w-full p-3 bg-[#2a2a2a] border border-[#444] rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 appearance-none cursor-pointer">
              <option className="bg-[#2a2a2a]">All Islands</option>
              <option className="bg-[#2a2a2a]">Java</option>
              <option className="bg-[#2a2a2a]">Sumatra</option>
              <option className="bg-[#2a2a2a]">Bali & Nusa Tenggara</option>
              <option className="bg-[#2a2a2a]">Sulawesi</option>
            </select>
          </div>

          {/* Web3 Stats Enhanced */}
          <div className="pt-4 border-t border-[#333]">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-[#2a2a2a] rounded-lg p-3 border border-[#333] hover:border-purple-500/50 transition-all duration-300">
                <div className="text-2xl font-bold text-white">{mountainData.length}</div>
                <div className="text-gray-400 text-xs">TOTAL</div>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg p-3 border border-[#333] hover:border-blue-500/50 transition-all duration-300">
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-gray-400 text-xs">REGIONS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MapContainer 
        center={[-2.5489, 118.0149]} 
        zoom={5} 
        className="h-full w-full"
        scrollWheelZoom={true}
        zoomControl={false} 
      >

        {/* Enhanced Dark Theme Tile Layer */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <ZoomControl position="topright" />
        
        {mountainData.map((mountain) => (
          <Marker 
            key={mountain.id} 
            position={[mountain.lat, mountain.lng]}
            icon={getMountainIcon(mountain.difficulty)}
          >
            <Popup>
              <div className="min-w-[280px] bg-[#1a1a1a] border border-[#333] rounded-2xl overflow-hidden shadow-2xl">
                {/* Header dengan gradient */}
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-4 border-b border-[#333]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold">
                      ⛰
                    </div>
                    <div>
                      <h3 className="mt-0 mb-1 text-lg font-bold text-white">
                        {mountain.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-xs">NFT #00{mountain.id}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          mountain.difficulty === 'Mudah' ? 'bg-green-500/20 text-green-400' : 
                          mountain.difficulty === 'Sedang' ? 'bg-orange-500/20 text-orange-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {mountain.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 space-y-3 text-sm">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#2a2a2a] rounded-lg p-3 border border-[#333]">
                      <div className="text-gray-400 text-xs">ELEVATION</div>
                      <div className="text-white font-semibold">{mountain.elevation} MASL</div>
                    </div>
                    <div className="bg-[#2a2a2a] rounded-lg p-3 border border-[#333]">
                      <div className="text-gray-400 text-xs">PROVINCE</div>
                      <div className="text-white font-semibold">{mountain.province}</div>
                    </div>
                  </div>
                  
                  <div className="bg-[#2a2a2a] rounded-lg p-3 border border-[#333]">
                    <div className="text-gray-400 text-xs mb-2">BEST SEASON</div>
                    <div className="text-white font-semibold">{mountain.bestSeason}</div>
                  </div>
                  
                  <div>
                    <div className="text-gray-400 text-xs mb-2">TRAIL ROUTES</div>
                    <div className="space-y-1">
                      {mountain.trails.map(trail => (
                        <div key={trail} className="text-white text-sm flex items-center gap-2">
                          <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                          {trail}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-gray-400 text-xs mb-2">FEATURES</div>
                    <div className="flex flex-wrap gap-2">
                      {mountain.features.map(feature => (
                        <span key={feature} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs border border-purple-500/30">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm italic border-t border-[#333] pt-3 mt-3">
                    {mountain.description}
                  </p>
                </div>
                
                <div className="p-4 border-t border-[#333]">
                  <button 
                    onClick={() => window.open(
                      `https://www.google.com/maps/search/?api=1&query=${mountain.lat},${mountain.lng}`,
                      '_blank'
                    )}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-none rounded-xl cursor-pointer font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 flex items-center justify-center gap-2"
                  >
                    <span>📍</span>
                    EXPLORE ON CHAIN
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
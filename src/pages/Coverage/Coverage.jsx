import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import branches from "../../../public/seviceCenter.json";

// Fix missing marker icon in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Component to handle map movement
const FlyToDistrict = ({ selected }) => {
  const map = useMap();

  useEffect(() => {
    if (selected) {
      map.flyTo([selected.latitude, selected.longitude], 11, {
        duration: 1.5,
      });
    }
  }, [selected, map]);

  return null;
};

const Coverage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const markerRefs = useRef([]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const match = branches.find((b) =>
        b.district.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (match) {
        setSelectedDistrict(match);

        // Find marker index and open popup
        const index = branches.findIndex((b) => b.district === match.district);
        if (markerRefs.current[index]) {
          markerRefs.current[index].openPopup();
        }
      } else {
        alert("District not found!");
      }
    }
  };

  return (
    <div className="px-6 py-12 text-center">
      <h1 className="text-3xl font-bold text-primary mb-4">
        We are available in 64 districts
      </h1>

      {/* Search option */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search district..."
          className="input input-bordered w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
        <p className="text-sm text-gray-500 mt-1">
          Type a district name and press <b>Enter</b>
        </p>
      </div>

      {/* Map section */}
      <div className="h-[600px] w-full rounded-2xl overflow-hidden shadow-lg">
        <MapContainer
          center={[23.685, 90.3563]} // Bangladesh center
          zoom={7}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />

          <FlyToDistrict selected={selectedDistrict} />

          {branches.map((branch, index) => (
            <Marker
              key={index}
              position={[branch.latitude, branch.longitude]}
              ref={(el) => (markerRefs.current[index] = el)}
            >
              <Popup>
                <div className="text-sm">
                  <h3 className="font-bold text-lg">{branch.district}</h3>
                  <p className="text-gray-600">
                    <strong>Region:</strong> {branch.region}
                    <br />
                    <strong>City:</strong> {branch.city}
                    <br />
                    <strong>Covered Areas:</strong>{" "}
                    {branch.covered_area.join(", ")}
                  </p>
                  <a
                    href={branch.flowchart}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary mt-2 block"
                  >
                    View Flowchart
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;

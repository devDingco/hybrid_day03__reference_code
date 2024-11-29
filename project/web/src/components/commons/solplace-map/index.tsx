import { ICONS } from "@/commons/constants/images";
import { Map, MapMarker } from "react-kakao-maps-sdk";

interface ISolplaceMap {
  center: { lat: number; lng: number };
  onCenterChanged: (map: kakao.maps.Map) => void;
}

export default function SolplaceMap({ center, onCenterChanged }: ISolplaceMap) {
  return (
    <Map
      id="map"
      center={center}
      style={{
        width: "100%",
        height: "160px",
        borderRadius: "12px",
      }}
      level={2}
      onCenterChanged={onCenterChanged}
    >
      <MapMarker image={{ src: `${ICONS.mapMarker.src}`, size: { width: 17.61, height: 24.5 } }} position={center} />
    </Map>
  );
}

import { NamsanLatitude, NamsanLongitude } from "common/WeddingInformation";
import React, { useEffect, useRef } from "react";

const NaverMapComponent: React.FC = () => {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const { naver } = window;

  useEffect(() => {
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(NamsanLatitude, NamsanLongitude);
    const mapOptions = {
      center: location,
      zoom: 18,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    mapRef.current = map;

    // Create a marker and add it to the map.
    const marker = new naver.maps.Marker({
      position: location,
      map: map,
    });
  }, []);

  return (
    <div
      ref={mapElement}
      style={{
        position: "relative",
        height: "40vh",
        width: "100%",
      }}
    ></div>
  );
};

export default NaverMapComponent;

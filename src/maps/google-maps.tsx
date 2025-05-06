import React, { useState, useEffect } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!apiKey) {
  throw new Error("Google Maps API key not found in environment variables.");
}

export default function GoogleMap() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const fallbackCenter = { lat: 43.077161, lng: -89.382748 };

  useEffect(() => {
    setIsClient(true);
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        setError(`Geolocation error: ${err.message}`);
      }
    );
  }, []);

  if (!isClient) return null;

  return (
    <>
      <APIProvider apiKey={apiKey!} region="US">
        <Map
          id="google-maps-container"
          style={{ width: "90vw", height: "90vh" }}
          defaultCenter={location ?? fallbackCenter}
          zoom={15}
          defaultZoom={10}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          colorScheme="FOLLOW_SYSTEM"
          styles={[
            {
              featureType: "poi",
              elementType: "all",
              stylers: [{ visibility: "off" }],
            },
          ]}
        />
      </APIProvider>
      {error && <p className="error">{error}</p>}
    </>
  );
}

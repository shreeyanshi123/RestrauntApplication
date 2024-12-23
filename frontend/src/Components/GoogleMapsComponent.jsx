import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const GoogleMapsComponent = () => {
  const API_KEY = "AIzaSyCDwHGyIgq9lCsA2p8mqVxe1FII-YJ0pAE";
  const mapContainerStyle = {
    width: "100%",
    height: "600px",
  };

  const center = {
    lat: 28.7041,
    lng: 77.1025, 
  };

  return (
    <div style={{ position: "relative" }}>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>

      <div
        style={{
          position: "absolute",
          textAlign: 'center',
          top: "25%",
          left: "50%",

          transform: "translateX(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "8px",
          zIndex: 10, 
          width: "500px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3>Contact Us</h3>
        <p>No.58A East Madison Street, Baltimore, MD, USA 4508</p>

        <div className="button-wrapper" style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <Button variant="primary" as={Link}   to="#">Mail Us</Button>
          <Button variant="success" as={Link} to='#'>Contact Us on WhatsApp</Button>
        </div>

        <h3>Working Days</h3>
        <div className="timing" style={{ gap: '2px', lineHeight: '2' }}>
          <p>(Tuesday & Saturday: 12pm - 2:30pm)</p>
          <p>(Monday & Friday: 4:00pm)</p>
          <p>(Wednesday & Thursday: 3:30pm)</p>
        </div>


        <Button variant="primary" as={Link} to='#'> Make a Reservation</Button>
      </div>
    </div>
  );
};

export default GoogleMapsComponent;


// AIzaSyCDwHGyIgq9lCsA2p8mqVxe1FII-YJ0pAE
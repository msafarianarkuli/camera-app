"use client";
import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import Webcam from "react-webcam";

const Home = () => {
  const [cameraOpen, setCameraOpen] = useState(false);
  const videoConstraints = {
    facingMode: { exact: "environment" },
  };
  return (
    <Container maxWidth='sm' sx={{ p: 0, height: "100vh" }}>
      {cameraOpen && <Webcam videoConstraints={videoConstraints} />}
      <Button
        variant='contained'
        sx={{ position: "fixed", bottom: 10, right: 10 }}
        onClick={() => setCameraOpen(true)}>
        Camera
      </Button>
    </Container>
  );
};

export default Home;

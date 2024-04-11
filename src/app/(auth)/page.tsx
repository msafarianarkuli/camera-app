import React from "react";
import Home from "@/views/main/content/home";
import { Container } from "@mui/material";

const page = () => {
  return (
    <Container maxWidth='sm' sx={{ p: 0 }}>
      <Home />
    </Container>
  );
};

export default page;

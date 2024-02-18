import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "./config/particle-config";

function ParticleBg() {
  return <Particles params={particleConfig}></Particles>;
}

export default ParticleBg;

"use client"

import HikingMap from "../Components/HikingMap"; 
import ToggleAI from "../Components/Chat/ToggleAI";
import React from "react";
import ChatWidget from "../Components/Chat/ChatWidget";

export default function Map() {
  return (  
    <>
        <ChatWidget/>
        <HikingMap />
    </>
  );
}
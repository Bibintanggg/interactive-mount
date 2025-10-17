"use client"

import React from "react"
import { TileLayer, MapContainer } from "react-leaflet"

export default function MapLeaflet() {
    const [center, setCenter] = React.useState()
    return (
        <MapContainer></MapContainer>
    )
}
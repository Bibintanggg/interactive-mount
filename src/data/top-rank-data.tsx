import React from "react"

export type TopRankData = {
    id?: number
    name: string
    profile: string
    icon: React.ReactNode
    summits: number
    role: "Pendaki Akut" | "Pendaki Okelah" | "Pendaki Pemula"
    location: string
    region: number
    climbs: number
}

export const TopRank: TopRankData[] = [

]
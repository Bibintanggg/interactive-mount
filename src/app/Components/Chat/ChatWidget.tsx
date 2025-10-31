"use client"

import React from "react";
import ToggleAI from "./ToggleAI";
import ChatBot from "./ChatBot";

export default function ChatWidget() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
        {open && <ChatBot/>}
        <ToggleAI onClick={() => setOpen(!open)} />
        </>
    )
}
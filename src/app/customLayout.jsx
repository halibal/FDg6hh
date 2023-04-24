import { Header } from "@/components";
import React from "react";

export default function CustomLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

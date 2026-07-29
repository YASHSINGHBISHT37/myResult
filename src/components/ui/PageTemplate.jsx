import React from "react";

export default function PageTemplate({ children }) {
    return (
        <main className='min-h-screen pt-26 pb-40 p-4 rounded-b-4xl flex flex-col items-center bg-bg-20 backdrop-blur-[20vh] z-999 relative'>
            {children}
        </main>
    )
}
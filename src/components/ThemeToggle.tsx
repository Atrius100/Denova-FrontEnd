"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            document.documentElement.classList.add("dark");
            setDark(true);
        }
    }, []);

    const toggle = () => {
        const html = document.documentElement;

        if (dark) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }

        setDark(!dark);
    };

    return (
        <button
            onClick={toggle}
            className={`p-2 rounded-full bg-slate-200 ${dark ? "dark:bg-slate-800" : ""} transition`}
        >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}
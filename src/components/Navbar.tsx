"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) { // we give the type of classname as string or undefined
    const [active, setActive] = useState<string | null>(null); // we give the type of active as string or null
    return (
        <div 
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home"></MenuItem> 
                </Link>
                 <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/courses">All Courses</HoveredLink>
                <HoveredLink href="/interface-design">Stellar Beginnings</HoveredLink>
                <HoveredLink href="/seo">The Solar System Unlocked</HoveredLink>
                <HoveredLink href="/branding">Navigating the Night Sky</HoveredLink>
                <HoveredLink href="/branding">Cosmic Mysteries</HoveredLink>
                <HoveredLink href="/branding">AstroTech 101</HoveredLink>
                {/* Stellar Beginnings: Introduction to Astronomy
                The Solar System Unlocked: Planets, Moons & More
                Navigating the Night Sky: Stargazing & Constellations
                Cosmic Mysteries: Black Holes, Dark Matter & Beyond
                AstroTech 101: Telescopes, Tools & Observing Techniques */}

            </div>
            </MenuItem>
             <Link href={"/contact"}>
                <MenuItem setActive={setActive} active={active} item="Contact us"></MenuItem> 
                </Link>


            </Menu>

        </div>
    )
}

export default Navbar;
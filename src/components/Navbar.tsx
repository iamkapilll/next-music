//navbar
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
            className={cn(
                "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
                className
            )}
        >
            <Menu setActive={setActive}>
                {/* Home */}
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                        {/* <Link href="/">Home Page</Link> */}
                    </MenuItem>
                </Link>

                {/* Services */}
                <MenuItem setActive={setActive} active={active} item="Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses">Advance Composition</HoveredLink>
                        <HoveredLink href="/courses">Song Writing</HoveredLink>
                        <HoveredLink href="/courses">Music Procution</HoveredLink>
                    </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Contact Us">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/contact">Contact Form</HoveredLink>
                        <HoveredLink href="/support">Customer Support</HoveredLink>
                        <HoveredLink href="/faq">FAQ</HoveredLink>
                        <HoveredLink href="/locations">Our Locations</HoveredLink>
                        <HoveredLink href="/about">About Us</HoveredLink>
                    </div>
                </MenuItem>

            </Menu>
        </div>
    );
}

export default Navbar;


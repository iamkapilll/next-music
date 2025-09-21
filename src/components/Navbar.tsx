

// "use client";
// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
// import { cn } from "@/lib/utils";
// import Link from "next/link";


// function Navbar({ className }: { className?: string }) {
//     const [active, setActive] = useState<string | null>(null);
//     return (
//         <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
//             <Menu setActive={setActive}>
//                 <Link href={"/"}>
//                     <MenuItem setActive={setActive} active={active} item="Home">
//                         test

//                     </MenuItem>
//                 </Link>
//                 <Link href={"/Courses"}>
//                     <MenuItem setActive={setActive} active={active} item="Courses">

//                         <div className="flex flex-col space-y-4 text-sm">
//                             <HoveredLink href="/web-dev">Web Development</HoveredLink>
//                             <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//                             <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//                             <HoveredLink href="/branding">Branding</HoveredLink>
//                         </div>
//                         </MenuItem>
//                 </Link>
//             </ Menu>
//         </div>
//     )
// }

// export default Navbar


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
                </Menu>
            </div>
        );
    }

    export default Navbar;


//     "use client";
// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// function Navbar({ className }: { className?: string }) {
//     const [active, setActive] = useState<string | null>(null);

//     return (
//         <div
//             className={cn(
//                 "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
//                 className
//             )}
//         >
//             <Menu setActive={setActive}>
//                 {/* Home */}
//                 <Link href={"/"}>
//                     <MenuItem setActive={setActive} active={active} item="Home">
//                         {/* <Link href="/">Home Page</Link> */}
//                     </MenuItem>
//                 </Link>

//                 {/* Services - Fixed: Added gap element to prevent hover gap */}
//                 <MenuItem setActive={setActive} active={active} item="Courses">
//                     <div className="flex flex-col space-y-4 text-sm">
//                         <HoveredLink href="/courses">All Courses</HoveredLink>
//                         <HoveredLink href="/courses/basic-music-theory">Basic Music Theory</HoveredLink>
//                         <HoveredLink href="/courses/advanced-composition">Advance Composition</HoveredLink>
//                         <HoveredLink href="/courses/song-writing">Song Writing</HoveredLink>
//                         <HoveredLink href="/courses/music-production">Music Production</HoveredLink>
//                     </div>
//                 </MenuItem>
//             </Menu>
//         </div>
//     );
// }

// export default Navbar;
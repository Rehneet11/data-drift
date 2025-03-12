"use client"
import { CircleDollarSignIcon, HomeIcon, Layers3Icon, MenuIcon, ShieldPlusIcon } from "lucide-react";
import React, { useState } from "react"
import Logo from "./Logo";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const routes=[
    {
        href:"",
        label:"Home",
        icon:HomeIcon,
    },
    {
        href:"workflows",
        label:"Workflows",
        icon:Layers3Icon,
    },
    {
        href:"credentials",
        label:"Credentials",
        icon:ShieldPlusIcon,
    },
    {
        href:"billing",
        label:"Billing",
        icon:CircleDollarSignIcon,
    }
];
export function BigSidebar() {
    const pathname=usePathname();
    const activeRoute=routes.find(route => route.href.length>0 && pathname.includes(route.href) ) || routes[0];
  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:text-foreground text-muted-foreground border-r-2 border-separate">
        <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
            <Logo/>
        </div>
        <div className="p-2">CREDITS</div>
        <div className="flex flex-col p-2">
            {routes.map(route => (
                <Link key={route.href} href={route.href} className={buttonVariants({variant:activeRoute.href===route.href ? "sidebarActiveItem":"sidebarItems"})}>
                    <route.icon size={20}/>
                    {route.label}
                </Link>
            ))}
        </div>
    </div>
  )
}
export function SmallSidebar(){
    const pathname=usePathname();
    const activeRoute=routes.find(route => route.href.length>0 && pathname.includes(route.href) ) || routes[0];
    const [isOpen,setOpen]=useState(false);
    return(
        <div className="block border-separate bg-background md:hidden">
            <nav className="container flex items-center justify-start px-8">
                <Sheet open={isOpen} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant={"ghost"} size={"icon"}>
                            <MenuIcon/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="w-[400px] sm:w-[540px] space-y-4" side={"left"}>
                        <Logo/>
                        <div className="flex flex-col gap-1">
                            {routes.map(route => (
                                <Link key={route.href} href={route.href} className={buttonVariants({variant:activeRoute.href===route.href ? "sidebarActiveItem":"sidebarItems"})} onClick={()=>setOpen((prev)=>!prev)}>
                                    <route.icon size={20}/>
                                    {route.label}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    )
}

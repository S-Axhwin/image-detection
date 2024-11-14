"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

type Section = "home" | "features" | "how-it-works" | "contributors";

const navItems = [
    { title: "Home", href: "#" },
    { title: "Feature", href: "features" },
    { title: "How it works", href: "how-it-works" },
    { title: "Contributors", href: "contributors" },
]

export default function Navbar({ scrollToSection }: { scrollToSection: (section: Section) => void }) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="pr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">AI.Tech</span>
                    </Link>
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <Button variant={"ghost"} onClick={() => scrollToSection(item.href as Section)}>
                                        <NavigationMenuLink >
                                            {item.title}
                                        </NavigationMenuLink>
                                    </Button>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="mr-2 px-0 text-base md:hidden"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="h-[80vh] pr-0">
                        <SheetHeader>
                            <SheetTitle>Navigation Menu</SheetTitle>
                        </SheetHeader>
                        <MobileNav scrollToSection={scrollToSection} items={navItems} setIsOpen={setIsOpen} />
                    </SheetContent>
                </Sheet>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Link href="/ai">
                            <Button className="w-full md:w-auto" >Live</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

function MobileNav({ items, setIsOpen, scrollToSection }: { items: { title: string; href: string }[]; setIsOpen: (open: boolean) => void, scrollToSection: (section: Section) => void }) {
    return (
        <div className="grid gap-3 p-4">
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold">AI.tech</span>
                </Link>
            </div>
            <div className="grid gap-2">
                {items.map((item) => (
                    <Button
                        variant={"ghost"}
                        key={item.title}
                        className="group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        onClick={() => {
                            scrollToSection(item.href as Section)
                            setIsOpen(false)
                        }}
                    >
                        {item.title}
                    </Button>
                ))}
            </div>
        </div>
    )
}

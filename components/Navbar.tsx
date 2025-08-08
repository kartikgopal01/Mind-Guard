'use client'
import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";
import { auth } from "@clerk/nextjs/server";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/">
                            <div className="flex items-center gap-2 cursor-pointer">
                                <Image
                                    src="/images/logo.png"
                                    alt="logo"
                                    width={80}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                        </Link>

                        {/* Hamburger Menu Button */}
                        <button 
                            className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg 
                                className="w-5 h-5" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-6">
                            <NavItems />
                            <SignedOut>
                                <SignInButton>
                                    <button className="px-3 py-1.5 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                                        Sign In
                                    </button>
                                </SignInButton>
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-gray-200">
                        <div className="px-4 py-3 space-y-3">
                            <NavItems />
                            <SignedOut>
                                <SignInButton>
                                    <button className="w-full px-3 py-1.5 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                                        Sign In
                                    </button>
                                </SignInButton>
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </div>
                )}
            </nav>
            {/* Spacer to prevent content overlap */}
            <div className="h-16"></div>
        </>
    )
}

export default Navbar

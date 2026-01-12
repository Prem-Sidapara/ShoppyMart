import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSelector from './ThemeSelector';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/clerk-react";
import { ShoppingBagIcon, PlusIcon, UserIcon   } from 'lucide-react';
const Navbar=()=> {

    const {isSignedIn} = useAuth();

    return (
        <div className="navbar bg-base-200">
            <div className='max-w-4xl mx-auto w-full px-4 flex justify-between items-center py-2'>
                {/* Left side: Logo and Home link */}
                <div className='flex-1'>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <ShoppingBagIcon className="h-6 w-6 text-primary mr-2"/>
                    <span className='text-lg font-bold uppercase ' >ShoppyMart</span>
                    </Link>
                </div>

                <div className='flex items-center space-x-4'>
                    <ThemeSelector/>
                    {isSignedIn ? (
                        <>
                        <Link to="/create" className="btn btn-primary btn-sm">
                            <PlusIcon className="h-4 w-4 mr-1"/>
                            <span className='hidden md:inline'>New Product</span>
                        </Link>
                        <Link to="/profile" className="btn btn-primary btn-sm">
                            <UserIcon className="h-4 w-4 mr-1"/>
                            <span className='hidden md:inline'>Profile</span>
                        </Link>
                        <UserButton/>
                        </>
                    ) : (
                        <>
                        <SignInButton mode='modal'>
                            <button className="btn btn-primary btn-sm">
                                Sign In
                            </button>
                        </SignInButton>
                        <SignUpButton mode='modal'>
                            <button className="btn btn-secondary btn-sm ml-2">
                                Sign Up
                            </button>
                        </SignUpButton>
                        </>
                    )}
                </div>
                
            </div>
    
        </div>
    );
}

export default Navbar;
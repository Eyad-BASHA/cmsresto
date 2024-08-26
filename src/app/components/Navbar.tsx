import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/auth";
import Image from "next/image";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModale";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();



   useEffect(() => {
     const storedUser = localStorage.getItem("user");
    //  console.log("Stored user:", storedUser);
    //  console.log("Current user in context:", user);
     if (storedUser && !user) {
       setUser(JSON.parse(storedUser));
     }
   }, [user, setUser]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    router.push("/");
  };

  const linkClasses = (path: string) =>
    pathname === path
      ? "py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
      : "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300";

  const mobileLinkClasses = (path: string) =>
    pathname === path
      ? "block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
      : "block text-sm px-2 py-4 hover:bg-green-500 transition duration-300";

  return (
    <nav className="bg-white shadow-lg w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
                <span className="font-semibold text-gray-500 text-lg">
                  CMS Restaurant
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/menu" className={linkClasses("/menu")}>
                Notre Menu
              </Link>
              <Link href="/about" className={linkClasses("/about")}>
                Qui sommes nous
              </Link>
              <Link href="/locations" className={linkClasses("/about")}>
                Adresse
              </Link>
              <Link href="/order" className={linkClasses("/about")}>
                Commander en ligne
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
              {user.username}
                <Link href="/profile" className={linkClasses("/profile")}>
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">
                  Logout
                </button>
              </>
            ) : (
              <>
                <LoginModal />
                {/* <Link
                  href="/auth/register"
                  className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">
                  Sign Up
                </Link> */}
                <RegisterModal />
              </>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}>
              <svg
                className="w-6 h-6 text-gray-500 hover:text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} mobile-menu`}>
        <ul className="">
          <li>
            <Link href="/" className={mobileLinkClasses("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className={mobileLinkClasses("/menu")}>
              Menu
            </Link>
          </li>
          <li>
            <Link href="/about" className={mobileLinkClasses("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={mobileLinkClasses("/contact")}>
              Contact
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/profile" className={mobileLinkClasses("/profile")}>
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <LoginModal />
              </li>
              <li>
                <RegisterModal />
              </li>
              {/* <li>
                <Link
                  href="/auth/register"
                  className={mobileLinkClasses("/auth/register")}>
                  Register
                </Link>
              </li> */}
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

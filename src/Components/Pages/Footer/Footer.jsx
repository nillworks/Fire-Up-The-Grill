import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import footerLogo from '../../../../public/assets/logo.png';

const Footer = () => {
  return (
    <footer className="mx-auto py-10 px-4">
      <div className="mx-auto grid items-center grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">
            <img src={footerLogo} alt="logo" />
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Taste the Craftsmanship Behind Every Culinary Creation
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <div className="w-8 h-8 flex p-2 items-center justify-center bg-orange-500 text-white rounded-full cursor-pointer">
              <Facebook />
            </div>
            <div className="w-8 h-8 p-2 flex items-center justify-center bg-[#FFE8DE] rounded-full cursor-pointer">
              <Instagram />
            </div>
            <div className="w-8 h-8 p-2 flex items-center justify-center bg-[#FFE8DE] rounded-full cursor-pointer">
              <Twitter />
            </div>
            <div className="w-8 h-8 p-2 flex items-center justify-center bg-[#FFE8DE] rounded-full cursor-pointer">
              <Youtube />
            </div>
          </div>
        </div>

        {/* Links You Need */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-semibold mb-4">Links You Need</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Main Menu */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-semibold mb-4">Main Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Offers</li>
            <li>Menus</li>
            <li>Reservation</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-right">
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>example@email.com</li>
            <li>+64 958 248 966</li>
            <li>Social media</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-left text-sm mt-10  pt-4">
        Copyright © 2026 Rohit Rafi | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

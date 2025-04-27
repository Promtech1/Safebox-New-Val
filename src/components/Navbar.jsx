import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useClickAway } from '@uidotdev/usehooks';
import logo from "../assets/Logo.png"
import btnImg from "../assets/btnImg.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useClickAway(() => setIsMenuOpen(false));

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Our Innovations', href: '#' },
    { name: 'Case Studies', href: '/impact' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const animateMenuButton = () => {
    gsap.to('.menu-button', {
      scale: 0.9,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
    });
  };

  return (
    <nav className="sticky top-0 bg-[#0C1B18] shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src={logo} alt="" />
        
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            animateMenuButton();
          }}
          className="menu-button gap-2 hover:scale-105 active:scale-95 text-black font-semibold flex px-4 py-2 items-end justify-end rounded-3xl w-[10rem] bg-[#B7DC38] hover:bg-[#dff88e] transition-colors"
          aria-label="Navigation menu"
        >
            <img src={btnImg} alt="" />
          Menu
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              />

              <motion.div
                ref={menuRef}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 w-full max-w-xs h-screen bg-[#B7DC38] shadow-xl p-6"
                role="dialog"
                aria-modal="true"
              >
                <nav>
                  <ul className="space-y-6 mt-12">
                    {navItems.map((item) => (
                      <motion.li
                        key={item.name}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="group"
                      >
                        <a
                          href={item.href}
                          className="text-xl text-black font-semibold  transition-colors flex items-center gap-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="group-hover:underline p-2 rounded-full transition">
                            {item.name}
                          </span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
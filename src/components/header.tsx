import { motion } from "framer-motion";

import { User, Home, UserRoundPlus } from "lucide-react";

import { Link } from "react-router-dom";

export default function Header() {

  return (

    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950 backdrop-blur-xl"
    >

        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">

          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3"
            >

              <motion.div
                whileHover={{ rotate: 10 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-300"
              >
                <User size={22} />
              </motion.div>

              <div>
                <h1 className="text-base font-bold text-white sm:text-lg">
                  UserManager
                </h1>

                <p className="text-[10px] text-white/40 sm:text-xs">
                  User Management
                </p>
              </div>

            </motion.div>
          </Link>

          {/* Navigation */}

            <nav className="flex w-full items-center justify-end gap-1 sm:w-auto sm:gap-2">
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >

                      <Link
                        to="/"
                        className="flex items-center gap-1 rounded-xl border border-white/40 bg-white/10   px-3 py-2 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20 text-sm"
                      >

                        <Home size={16} />
                        <span>Home</span>
                      </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >

                      <Link
                        to="/user"
                        className="flex items-center gap-1 rounded-xl border border-white/40 bg-white/10  px-3 py-2 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20 text-sm"
                      >

                        <User size={16} />
                        <span>Users</span>
                      </Link>
                  </motion.div>


                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >

                      <Link
                        to="/register"
                        className="flex items-center gap-1 rounded-xl bg-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition-all hover:bg-cyan-300 sm:gap-2 sm:px-4 sm:text-sm"
                      >

                        <UserRoundPlus size={16} />
                        <span>Register</span>
                      </Link>
                  </motion.div>
            </nav>
        </div>
    </motion.header>

  );

}
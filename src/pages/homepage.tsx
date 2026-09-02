
import { motion } from "framer-motion";
import { User, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {

  const homwpagetitle = [
    {heading:"User Management System"},
    {para:<>Create, manage and view your users through a simple, modern<br />
     and responsive user management application.</>}
  ]

  return (

    <div
      className="  min-h-screen bg-[linear-gradient(90deg,rgba(2,0,36,1)_0%,rgba(9,9,121,1)_35%,rgba(0,212,255,1)_100%)]
       text-white " >

        {/* Hero */}
        <main className="mx-auto flex min-h-[calc(100vh-130px)] max-w-6xl items-center justify-center  p-6 ">
            <div className="flex w-full items-center justify-center gap-10 ">

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                  className="max-w-xl ">

                    <div className="mb-5 flex items-center gap-3 ">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/20 text-cyan-300">
                        <User size={25} />
                      </div>

                      <span className="text-sm font-medium text-cyan-300">
                          {homwpagetitle.map((title,index) => (
                            <div key={index}>
                                <h1>{title.heading}</h1>
                            </div>
                          ))}
                      </span>
                    </div>

                    <h1 className="text-4xl font-bold leading-tight">
                        Manage Your Users
                        <span className="block text-cyan-300">
                          Easily & Securely
                        </span>
                    </h1>

                    
                    <span className="mt-6 max-w-lg text-base leading-7 text-white/60">
                        {homwpagetitle.map((title,index) => (
                          <div key={index}>
                                <h1>{title.para}</h1>
                            </div>
                          ))}
                    </span>
                    

                    <div className="mt-8 flex items-center gap-3 ">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          to="/register"
                          className="
                            flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition  hover:bg-cyan-300  text-[12px] sm:text-[15px]">
                          <User size={18} />
                              Register User
                          <ArrowRight size={18} />
                        </Link>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          to="/user"
                          className="
                            flex items-center gap-2 rounded-xl border border-white/40 bg-white/10   px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20 text-[12px] sm:text-[15px]">
                          <Users size={18} />
                          View Users
                        </Link>
                      </motion.div>

                    </div>
                </motion.div>

            </div>
        </main>
    </div>
  );
}

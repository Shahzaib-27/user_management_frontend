import axios from "axios";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import { User, ArrowLeft, RefreshCw, Trash2,Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";


type UserDataType = {
  id: number;
  name: string;
  email: string;
};


export default function UserData() {
  const navigate = useNavigate();

  const [users, setUsers] = useState<UserDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  // GET ALL USERS
  const getUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/login`
      );

      setUsers(response.data.data);
    } catch (error) {
      console.log("Error fetching users:", error);

      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "Failed to fetch users!"
        );
      } else {
        setError("Failed to fetch users!");
      }
    } finally {
      setLoading(false);
    }
  };

  
  // DELETE USER
  const deluser = async (id: number) => {
    try {
      setError("");

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/user/del/${id}`
      );

      // Refresh users after deletion
      await getUsers();
    } catch (error) {
      console.log("Error deleting user:", error);

      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "Failed to delete user!"
        );
      } else {
        setError("Failed to delete user!");
      }
    }
  };

  
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div
      className="min-h-screen bg-[linear-gradient(90deg,rgba(2,0,36,1)_0%,rgba(9,9,121,1)_35%,rgba(0,212,255,1)_100%)] px-4 py-10 text-white">

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay:0.2, duration: 0.4 }}
        className="mx-auto max-w-6xl">


            {/* ================= HEADER ================= */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              {/* Title */}
              <div className="flex items-center gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/20 text-cyan-300"
                >
                  <User size={28} />
                </div>

                <div>
                  <h1 className="text-3xl font-bold">
                    All Users
                  </h1>

                  <p className="mt-1 text-sm text-white/50">
                    All registered users
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">


                {/* Refresh */}
                <button
                  type="button"
                  onClick={getUsers}
                  disabled={loading}
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/20 px-4 py-3 
                  text-sm font-medium hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-150 ease-in hover:scale-105"
                >
                  <RefreshCw
                    size={17}
                    className={loading ? "animate-spin" : ""}
                  />

                  Refresh
                </button>

                {/* Register User */}
                <button
                  type="button"
                  onClick={() => navigate("/register")}
                  className="flex cursor-pointer items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300 transition-all duration-150 ease-in hover:scale-105"
                >
                  <ArrowLeft size={17} />
                  Register User
                </button>

              </div>
            </div>


            {/* ================= ERROR ================= */}
            {error && (
              <div
                className="mb-6 rounded-2xl border border-red-400/20 bg-red-400/20 px-5 py-4 text-red-500 grid 
                justify-center items-center "
              >
                {error}
              </div>
            )}


          {/* ================= LOADING ================= */}
          {loading ? (
            <div
              className="flex min-h-60 items-center justify-center rounded-3xl border border-white/10
              bg-black/20 backdrop-blur-xl"
            >
              <div className="text-center">
                <RefreshCw
                  size={35}
                  className="mx-auto animate-spin text-cyan-300"
                />

                <p className="mt-4 text-white/50">
                  Loading users...
                </p>
              </div>
            </div>
          ) : users.length === 0 ? (


            /* ================= NO USERS ================= */
            <div
              className="flex min-h-60 items-center justify-center rounded-3xl border border-white/10
              bg-black/20 p-8 text-center backdrop-blur-xl"
            >
              <div>

                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5
                 text-cyan-400"
                >
                  <User size={30} />
                </div>

                <h2 className="text-xl font-semibold ">
                  No Users Found
                </h2>

                <p className="mt-2 text-sm text-white/40">
                  Register a user to see them here.
                </p>

              </div>
            </div>

          ) : (


            /* ================= USERS TABLE ================= */
            <div
              className="overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-2xl backdrop-blur-xl"
            >


              {/* Table Header */}
              <div
                className="flex items-center justify-between border-b border-white/10 px-6 py-5"
              >
                <div>

                  <h2 className="text-lg font-semibold">
                    Registered Users
                  </h2>

                  <p className="mt-1 text-sm text-white/40">
                    {users.length}{" "}
                    {users.length === 1 ? "user" : "users"}{" "}
                    found
                  </p>

                </div>

                <div
                  className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
                >
                  {users.length} Users
                </div>

              </div>

              {/* Table */}
              <div className="overflow-x-auto">

                <table className="w-full min-w-175 text-left">

                  {/* Columns */}
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">

                      <th
                        className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/40"
                      >
                        ID
                      </th>

                      <th
                        className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/40"
                      >
                        Name
                      </th>

                      <th
                        className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/40"
                      >
                        Email
                      </th>

                      <th
                        className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/40"
                      >
                        Actions
                      </th>

                    </tr>
                  </thead>


                  {/* Rows */}
                  <tbody>

                    {users.map((user) => (

                      <tr
                        key={user.id}
                        className="border-b border-white/5 transition hover:bg-white/5"
                      >

                        {/* ID */}
                        <td className="px-6 py-5">

                          <span
                            className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg
                            bg-cyan-400/10 px-3 text-sm font-semibold text-cyan-300"
                          >
                            {user.id}
                          </span>

                        </td>

                        {/* Name */}
                        <td className="px-6 py-5">

                          <div className="flex items-center gap-1.5">

                            <div
                              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-300"
                            >
                              <User size={18} />
                            </div>

                            <span className="font-medium">
                              {user.name}
                            </span>

                          </div>

                        </td>

                        {/* Email */}
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-1.5">
                              <div
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-300"
                              >
                                <Mail size={18} />
                              </div>

                            <span className="text-white">
                              {user.email}
                            </span>
                          </div>
                        </td>


                        {/* Delete */}
                        <td className="px-6 py-5">
                          <button
                            type="button"
                            onClick={() => deluser(user.id)}
                            className="flex cursor-pointer items-center gap-2 rounded-lg bg-red-500/20 px-4 
                            py-2 text-sm font-medium text-red-400 transition-all duration-300 ease-initial hover:bg-red-900 hover:text-white/90"
                          >
                            <Trash2 size={16} />
                            Delete
                          </button>

                        </td>

                      </tr>

                    ))}

                  </tbody>
                </table>
              </div>
            </div>
          )}
        </motion.div>

    </div>
  );
}
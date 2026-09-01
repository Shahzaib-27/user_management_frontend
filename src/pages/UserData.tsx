import axios from "axios";
import { useEffect, useState } from "react";
import { User, ArrowLeft, RefreshCw } from "lucide-react";
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

  const getUsers = async () => {[

  ]
    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "http://localhost:4000/user/login   "
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


  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div
      className=" min-h-screen bg-[linear-gradient(90deg,rgba(2,0,36,1)_0%,rgba(9,9,121,1)_35%,rgba(0,212,255,1)_100%)] px-4 py-10 text-white " >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-4">

            <div
              className=" flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/20 text-cyan-300 ">
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

            <button
              onClick={getUsers}
              disabled={loading}
              className=" flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4
                py-3 text-sm font-medium transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50 ">
              <RefreshCw
                size={17}
                className={loading ? "animate-spin" : ""}
              />
              Refresh
            </button>

            <button
              onClick={() => navigate("/")}
              className=" flex cursor-pointer items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 ">
              <ArrowLeft size={17} />
              Register User
            </button>

          </div>
        </div>

        {/* Error */}
        {error && (
          <div
            className="mb-6 rounded-2xl border border-red-400/20 bg-red-400/10 px-5 py-4 text-red-300">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div
            className=" flex min-h-60 items-center justify-center rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl ">
            <div className="text-center">

              <RefreshCw size={35} className="mx-auto animate-spin text-cyan-300" />
              <p className="mt-4 text-white/50">
                Loading users...
              </p>

            </div>
          </div>
        ) : users.length === 0 ? (

          /* No users */
          <div
            className=" flex min-h-60  items-center justify-center rounded-3xl border border-white/10
              bg-black/20  p-8text-center backdrop-blur-xl ">
            <div>

              <div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-white/40 ">
                <User size={30} />
              </div>

              <h2 className="text-xl font-semibold">
                No Users Found
              </h2>

              <p className="mt-2 text-sm text-white/40">
                Register a user to see them here.
              </p>

            </div>
          </div>

        ) : (

          /* Users Table */
          <div
            className="overflow-hidden rounded-3xl border border-white/10  bg-black/20 shadow-2xl backdrop-blur-xl">

            {/* Table Header */}
            <div
              className="flex items-center justify-between border-b border-white/10 px-6 py-5" >

              <div>
                <h2 className="text-lg font-semibold">
                  Registered Users
                </h2>

                <p className="mt-1 text-sm text-white/40">
                  {users.length}{" "}
                  {users.length === 1
                    ? "user"
                    : "users"}{" "}
                  found
                </p>
              </div>

              <div
                className="
                  rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300" >
                {users.length} Users
              </div>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">

              <table className="w-full min-w-150 text-left">

                {/* Columns */}
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                      ID
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                      Name
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                      Email
                    </th>

                  </tr>

                </thead>

                {/* Rows */}
                <tbody>

                  {users.map((user) => (

                    <tr
                      key={user.id}
                      className=" border-b  border-white/5 transition hover:bg-white/5 " >

                      {/* ID */}
                      <td className="px-6 py-5">

                        <span
                          className="
                            inline-flex h-9 min-w-9 items-center justify-center rounded-lg bg-cyan-400/10 px-3 text-sm font-semibold text-cyan-300 ">
                          {user.id}
                        </span>

                      </td>

                      {/* Name */}
                      <td className="px-6 py-5">

                        <div className="flex items-center gap-3">

                          <div
                            className="  flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/60 " >
                            <User size={18} />
                          </div>

                          <span className="font-medium">
                            {user.name}
                          </span>

                        </div>

                      </td>

                      {/* Email */}
                      <td className="px-6 py-5">

                        <span className="text-white/60">
                          {user.email}
                        </span>

                      </td>

<button>Delete</button>
                    </tr>

                  ))}
                </tbody>
              </table>
            </div>
          </div>

        )}

      </div>
    </div>
  );
}
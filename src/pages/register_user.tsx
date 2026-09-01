import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, LockOpen } from "lucide-react";

export default function FormPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // false = password hidden
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await axios.post(
        "http://localhost:4000/user/register",
        {
          name,
          email,
          password,
        }
      );

      const createdUser = response.data.data;
      
      sessionStorage.setItem(
        "user",
        JSON.stringify(createdUser)
      );

      setSuccess(response.data.message);

      setName("");
      setEmail("");
      setPassword("");

      
      navigate("/user");

    } catch (error) {
      console.log(
        "Error sending data to backend:",
        error
      );

      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "Something went wrong!"
        );
      } else {
        setError("Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(90deg,rgba(2,0,36,1)_0%,rgba(9,9,121,1)_35%,rgba(0,212,255,1)_100%)] 
    px-4 py-10 text-white">

      <div className="mx-auto max-w-md ">

        {/* Header */}
        <div className="mb-8 text-center ">
          <h1 className="text-4xl font-bold">
            Register User
          </h1>

          <p className="mt-2 text-sm text-white/60">
            Create your account
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-white/10 bg-black/20 p-8 shadow-2xl backdrop-blur-xl hover:scale-105 
        transition-all duration-200 ease-in">

          <form onSubmit={handleRequest}>

            {/* Name */}
            <div className="mb-5 ">
              <label className="mb-2 block text-sm font-medium text-white/70">
                Name
              </label>

              <input
                type="text"
                required
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Enter your name..."
                className="
                  w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/30 
                  outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20
                "
              />
            </div>


            {/* Email */}
            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-white/70">
                Email
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter your email..."
                className="  w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white
                 placeholder:text-white/30 outline-none transition focus:border-cyan-400 focus:ring-2
                  focus:ring-cyan-400/20
                "
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-white/70">
                Password
              </label>

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  required
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Enter your password..."
                  className=" w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 pr-12 text-white
                   placeholder:text-white/30 outline-none  transition-all focus:border-cyan-400 focus:ring-2
                    focus:ring-cyan-400/20" 
                   />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className=" absolute right-3 top-1/2 -translate-y-1/2 text-white/50 transition hover:text-cyan-300 
                  cursor-pointer">
                  {showPassword ? (
                    <LockOpen size={20} />
                  ) : (
                    <Lock size={20} />
                  )}
                </button>

              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 shadow-lg 
              shadow-cyan-400/20 transition-all hover:bg-cyan-500 active:scale-[0.98] disabled:opacity-50 cursor-pointer">
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          {/* Error */}
          {error && (
            <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="mt-5 rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-green-300">
              {success}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
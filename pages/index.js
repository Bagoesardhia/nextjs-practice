import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const resetInputField = () => {
    setUsername("");
    setPassword("");
  };

  function handleLogin() {
    router.push('/dashboard')
  }

  return (
    <div className={styles.center}>
      <div className="card w-96  glass bg-base-20">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-xs text-white"
            onChange={(e) => setUsername(e.target.value)}
            value={resetInputField}
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs text-white"
            onChange={(e) => setPassword(e.target.value)}
            value={resetInputField}
          />
          <div className="card-actions justify-end">
            <button id="button" className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

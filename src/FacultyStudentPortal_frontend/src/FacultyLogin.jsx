import React, { useEffect, useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import FacultyDashboard from "./FacultyDashboard";

function FacultyLogin({ setUserType }) {
  const [principal, setPrincipal] = useState(null);

  async function handleConnect() {
    const authClient = await AuthClient.create();
    authClient.login({
      maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess: async () => {
        const identity = await authClient.getIdentity();
        const principal = identity.getPrincipal().toText();
        setPrincipal(principal);
      },
    });
  }

  useEffect(() => {
    async function init() {
      const authClient = await AuthClient.create();
      if (await authClient.isAuthenticated()) {
        const identity = await authClient.getIdentity();
        const principal = identity.getPrincipal().toText();
        setPrincipal(principal);
      }
    }
    init();
  }, []);

  return (
    <div>
      <button onClick={handleConnect}>Connect as Faculty</button>
      {principal ? (
        <FacultyDashboard principal={principal} />
      ) : (
        <p>Please login to see your identity.</p>
      )}
    </div>
  );
}

export default FacultyLogin;
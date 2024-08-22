"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useState } from "react";

export default function Home() {
  const [credential, setCredential] = useState<CredentialResponse>({});

  console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
      <div className="mx-auto max-w-md break-words">
        {JSON.stringify(credential)}
      </div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          setCredential(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </main>
  );
}

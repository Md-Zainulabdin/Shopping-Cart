"use client";
import Form from "@/app/components/Form/page";
import React from "react";
import { useRouter } from "next/navigation";

const signUpPage = () => {
  const router = useRouter();
  const onSubmit = async (username, email, password) => {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        username,
      }),
    });

    if (res.ok) {
      alert("User Created");
      console.log(res);
      router.replace("/login");
    }
  };

  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <Form signIn={false} onFormSubmit={onSubmit} />
    </div>
  );
};

export default signUpPage;

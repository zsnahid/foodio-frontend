"use server";

import { cookies } from "next/headers";

export async function register(
  prevState: { success: boolean; message: string },
  formData: FormData
) {
  const name = formData.get("fullName");
  const email = formData.get("email");
  const address = formData.get("address");
  const password = formData.get("password");

  try {
    const response = await fetch("http://localhost:5000/auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, address, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Registration failed:", errorData);
      return { success: false, message: errorData.message };
    }

    const data = await response.json();
    const jwtToken = data.access_token;
    const cookieStore = await cookies();
    cookieStore.set({
      name: "access_token",
      value: jwtToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    return { success: true, message: "Registration successful" };
  } catch (error) {
    console.error("Request failed:", error);
    return { success: false, message: "An unexpected error occurred!" };
  }
}

export async function signin(
  prevState: { success: boolean; message: string },
  formData: FormData
) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch("http://localhost:5000/auth/signin/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Sign-in failed:", errorData);
      return { success: false, message: errorData.message };
    }

    const data = await response.json();
    const jwtToken = data.access_token;
    const cookieStore = await cookies();
    cookieStore.set({
      name: "access_token",
      value: jwtToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    return { success: true, message: "Sign-in successful" };
  } catch (error) {
    console.error("Request failed:", error);
    return { success: false, message: "An unexpected error occurred!" };
  }
}

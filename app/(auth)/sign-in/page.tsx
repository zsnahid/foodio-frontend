/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useActionState } from "react";
import { register, signin } from "@/lib/actions";

// Zod Schemas

const signInSchema = z.object({
  email: z.email({ message: "Invalid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

const registerSchema = z.object({
  fullName: z.string().min(1, { message: "Name is required." }),
  email: z.email({ message: "Invalid email address." }),
  address: z.string().min(1, { message: "Address is required." }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
      "Password must contain at least one special character (e.g., !@#$%^&*)."
    )
    .trim(),
});

const initialState = {
  success: false,
  message: "",
};

export default function AuthPage() {
  const [registerState, registerFormAction] = useActionState(
    register,
    initialState
  );

  const [signInState, signInFormAction] = useActionState(signin, initialState);

  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      address: "",
      password: "",
    },
  });

  // 2. Define submit handlers
  function onSignInSubmit(values: z.infer<typeof signInSchema>) {
    console.log("Sign In Values:", values);
    // Add your login logic here (e.g., API call)
  }

  function onRegisterSubmit(values: z.infer<typeof registerSchema>) {
    console.log("Register Values:", values);
    // Add your registration logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl font-body">
        {/* Header Section */}
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2">
            {/* Logo Icon */}
            <Image src="/foodio.svg" alt="Foodio logo" width={26} height={26} />

            <CardTitle className="text-2xl font-title font-semibold text-primary tracking-tighter">
              Foodio.
            </CardTitle>
          </div>
          <CardDescription className="text-muted-foreground font-medium text-[14px]">
            Premium flavors, delivered.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            {/* Toggle Switch */}
            <TabsList className="grid w-full grid-cols-2 bg-[#F2EFE9] h-9 rounded-full p-1 mb-6">
              <TabsTrigger
                value="signin"
                className="rounded-full text-[14px] font-medium data-[state=active]:bg-white data-[state=active]:text-black h-full"
              >
                Sign in
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="rounded-full text-[14px] font-medium data-[state=active]:bg-white data-[state=active]:text-black h-full"
              >
                Register
              </TabsTrigger>
            </TabsList>

            {/* Sign In View */}
            <TabsContent value="signin">
              <form
                id="signin-form"
                onSubmit={signInForm.handleSubmit(onSignInSubmit)}
                className="space-y-4"
              >
                <FieldGroup>
                  <Controller
                    name="email"
                    control={signInForm.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="signin-form-email">
                          Email
                        </FieldLabel>

                        <Input
                          {...field}
                          placeholder="name@example.com"
                          id="signin-form-email"
                          aria-invalid={fieldState.invalid}
                          className="h-9"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="password"
                    control={signInForm.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="signin-form-password">
                          Password
                        </FieldLabel>
                        <Input
                          {...field}
                          type="password"
                          placeholder="••••••••"
                          id="signin-form-password"
                          aria-invalid={fieldState.invalid}
                          className="h-9"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Field>
                    <Button
                      type="submit"
                      form="signin-form"
                      className="w-full h-9"
                    >
                      Sign In
                    </Button>
                  </Field>
                </FieldGroup>
              </form>
            </TabsContent>

            {/* Register View */}
            <TabsContent value="register">
              <form
                action={registerFormAction}
                id="register-form"
                className="space-y-4"
              >
                <FieldGroup>
                  <Controller
                    name="fullName"
                    control={registerForm.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="register-form-full-name">
                          Full Name
                        </FieldLabel>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          id="register-form-full-name"
                          aria-invalid={fieldState.invalid}
                          className="h-9"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="email"
                    control={registerForm.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="register-form-email">
                          Email
                        </FieldLabel>
                        <Input
                          {...field}
                          placeholder="name@example.com"
                          id="register-form-email"
                          aria-invalid={fieldState.invalid}
                          className="h-9"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="address"
                    control={registerForm.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="register-form-address">
                          Address
                        </FieldLabel>
                        <Input
                          {...field}
                          placeholder="e.g. House:23, Road:23, Jamaica, USA"
                          id="register-form-address"
                          aria-invalid={fieldState.invalid}
                          className="h-9"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="password"
                    control={registerForm.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="register-form-password">
                          Password
                        </FieldLabel>
                        <Input
                          {...field}
                          type="password"
                          placeholder="••••••••"
                          id="register-form-password"
                          aria-invalid={fieldState.invalid}
                          className="h-9"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Field>
                    <Button
                      type="submit"
                      form="register-form"
                      className="w-full h-9"
                    >
                      Create Account
                    </Button>
                  </Field>
                </FieldGroup>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

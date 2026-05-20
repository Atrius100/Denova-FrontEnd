import { SignupInput , AuthResponse, LoginInput,  } from "@/features/auth/types";


function delay(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

export async function mockLogin(input: LoginInput): Promise<AuthResponse> {
  await delay(1200);
  if (!input.email || !input.password) {
    throw new Error("Please enter your email and password.");
  }
  return { ok: true, message: "Login successful." };
}

export async function mockSignup(input: SignupInput): Promise<AuthResponse> {
  await delay(1400);
  if (!input.firstName || !input.lastName || !input.email || !input.password) {
    throw new Error("Please complete all required fields.");
  }
  if (input.password.length < 8) {
    throw new Error("Password must be at least 8 characters.");
  }
  return { ok: true, message: "Account created." };
}

export async function mockVerify(): Promise<AuthResponse> {
  await delay(2600);
  return { ok: true, message: "Account verified." };
}

import Cookies from "js-cookie";

const TOKEN_KEY = "denova-token";
const STUDENT_ID_KEY = "denova-student-id";
const UNIVERSITY_ID_KEY = "denova-university-id";

export type AuthSession = {
  token: string;
  studentId?: string;
  universityId?: string;
};

export function readAuthToken(): string | null {
  return Cookies.get(TOKEN_KEY) ?? null;
}

export function isLoggedIn(): boolean {
  return Boolean(readAuthToken());
}

export function readAuthSession(): AuthSession | null {
  const token = readAuthToken();

  if (!token) return null;

  return {
    token,
    studentId: Cookies.get(STUDENT_ID_KEY),
    universityId: Cookies.get(UNIVERSITY_ID_KEY),
  };
}

export function saveAuthToken(token: string) {
  Cookies.set(TOKEN_KEY, token, {
    expires: 7,
    sameSite: "Lax",
    path: "/",
  });
}

export function saveAuthProfile(ids: {
  studentId?: string;
  universityId?: string;
}) {
  if (ids.studentId) {
    Cookies.set(STUDENT_ID_KEY, ids.studentId, {
      expires: 7,
      sameSite: "Lax",
      path: "/",
    });
  }

  if (ids.universityId) {
    Cookies.set(UNIVERSITY_ID_KEY, ids.universityId, {
      expires: 7,
      sameSite: "Lax",
      path: "/",
    });
  }
}

export function clearAuthSession() {
  Cookies.remove(TOKEN_KEY);
  Cookies.remove(STUDENT_ID_KEY);
  Cookies.remove(UNIVERSITY_ID_KEY);
}
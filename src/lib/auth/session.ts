const TOKEN_KEY = "denova-token";
const LEGACY_TOKEN_KEY = "token";
const STUDENT_ID_KEY = "denova-student-id";
const UNIVERSITY_ID_KEY = "denova-university-id";

export type AuthSession = {
  token: string;
  studentId?: string;
  universityId?: string;
};

export function readAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return (
    localStorage.getItem(TOKEN_KEY) ??
    localStorage.getItem(LEGACY_TOKEN_KEY)
  );
}

export function isLoggedIn(): boolean {
  return Boolean(readAuthToken());
}

export function readAuthSession(): AuthSession | null {
  const token = readAuthToken();
  if (!token) return null;

  const studentId = localStorage.getItem(STUDENT_ID_KEY) ?? undefined;
  const universityId = localStorage.getItem(UNIVERSITY_ID_KEY) ?? undefined;

  return { token, studentId, universityId };
}

export function saveAuthToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(LEGACY_TOKEN_KEY, token);
}

export function saveAuthProfile(ids: {
  studentId?: string;
  universityId?: string;
}) {
  if (ids.studentId) {
    localStorage.setItem(STUDENT_ID_KEY, ids.studentId);
  }
  if (ids.universityId) {
    localStorage.setItem(UNIVERSITY_ID_KEY, ids.universityId);
  }
}

export function clearAuthSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(LEGACY_TOKEN_KEY);
  localStorage.removeItem(STUDENT_ID_KEY);
  localStorage.removeItem(UNIVERSITY_ID_KEY);
}

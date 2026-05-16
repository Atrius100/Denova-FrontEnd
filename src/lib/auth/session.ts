const TOKEN_KEY = "denova-token";
const STUDENT_ID_KEY = "denova-student-id";
const UNIVERSITY_ID_KEY = "denova-university-id";
const SUBSCRIPTION_KEY = "denova-subscription";

export type SubscriptionStatus = "active" | "inactive";

export type AuthSession = {
  token: string;
  studentId: string;
  universityId: string;
  subscription: SubscriptionStatus;
};

export function readAuthSession(): AuthSession | null {
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem(TOKEN_KEY);
  const studentId = localStorage.getItem(STUDENT_ID_KEY);
  const universityId = localStorage.getItem(UNIVERSITY_ID_KEY);
  const subscription = localStorage.getItem(
    SUBSCRIPTION_KEY,
  ) as SubscriptionStatus | null;

  if (!token || !studentId || !universityId) {
    return null;
  }

  return {
    token,
    studentId,
    universityId,
    subscription: subscription === "active" ? "active" : "inactive",
  };
}

export function saveAuthSession(session: AuthSession) {
  localStorage.setItem(TOKEN_KEY, session.token);
  localStorage.setItem(STUDENT_ID_KEY, session.studentId);
  localStorage.setItem(UNIVERSITY_ID_KEY, session.universityId);
  localStorage.setItem(SUBSCRIPTION_KEY, session.subscription);
}

export function clearAuthSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(STUDENT_ID_KEY);
  localStorage.removeItem(UNIVERSITY_ID_KEY);
  localStorage.removeItem(SUBSCRIPTION_KEY);
}

export function canAccessMedicalCases(session: AuthSession | null): boolean {
  return (
    session?.subscription === "active" &&
    Boolean(session.studentId) &&
    Boolean(session.universityId) &&
    Boolean(session.token)
  );
}

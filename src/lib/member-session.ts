import { createHmac, timingSafeEqual } from "node:crypto";

const MAX_AGE_MS = 12 * 60 * 60 * 1000;

function secret() {
  return process.env.SESSION_SECRET || process.env.ADMIN_PIN || "";
}

export function isSessionConfigured(): boolean {
  return secret().length > 0;
}

export function createMemberToken(nim: string): string {
  const ts = Date.now();
  const sig = createHmac("sha256", secret()).update(`${nim}.${ts}`).digest("hex");
  return `${nim}.${ts}.${sig}`;
}

export function verifyMemberToken(tok?: string | null): string | null {
  const s = secret();
  if (!s || !tok) return null;
  const idx = tok.lastIndexOf(".");
  if (idx < 0) return null;
  const sig = tok.slice(idx + 1);
  const payload = tok.slice(0, idx);
  const dot = payload.lastIndexOf(".");
  if (dot < 0) return null;
  const nim = payload.slice(0, dot);
  const ts = payload.slice(dot + 1);
  if (!nim || !ts) return null;
  const age = Date.now() - Number(ts);
  if (!Number.isFinite(age) || age < 0 || age > MAX_AGE_MS) return null;
  const expected = createHmac("sha256", s).update(`${nim}.${ts}`).digest("hex");
  if (sig.length !== expected.length) return null;
  return timingSafeEqual(Buffer.from(sig), Buffer.from(expected)) ? nim : null;
}

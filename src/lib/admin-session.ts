import { createHmac, timingSafeEqual } from "node:crypto";

const MAX_AGE_MS = 8 * 60 * 60 * 1000;

function secret() {
  return process.env.ADMIN_PIN || "";
}

export function createToken(): string {
  const ts = Date.now();
  const sig = createHmac("sha256", secret()).update(String(ts)).digest("hex");
  return `${ts}.${sig}`;
}

export function verifyToken(tok?: string | null): boolean {
  const s = secret();
  if (!s || !tok) return false;
  const [ts, sig] = tok.split(".");
  if (!ts || !sig) return false;
  const age = Date.now() - Number(ts);
  if (!Number.isFinite(age) || age < 0 || age > MAX_AGE_MS) return false;
  const expected = createHmac("sha256", s).update(ts).digest("hex");
  if (sig.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
}

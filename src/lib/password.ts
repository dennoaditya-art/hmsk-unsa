import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const N = 16384;
const KEYLEN = 64;

export function hashPassword(pw: string): string {
  const salt = randomBytes(16);
  const key = scryptSync(pw, salt, KEYLEN, { N });
  return `scrypt$${N}$${salt.toString("base64")}$${key.toString("base64")}`;
}

export function verifyPassword(pw: string, stored?: string | null): boolean {
  if (!stored) return false;
  const parts = stored.split("$");
  if (parts.length !== 4 || parts[0] !== "scrypt") return false;
  const n = Number(parts[1]);
  if (!Number.isFinite(n) || n < 2) return false;
  let salt: Buffer;
  let expected: Buffer;
  try {
    salt = Buffer.from(parts[2], "base64");
    expected = Buffer.from(parts[3], "base64");
  } catch {
    return false;
  }
  if (salt.length === 0 || expected.length === 0) return false;
  const key = scryptSync(pw, salt, expected.length, { N: n });
  if (key.length !== expected.length) return false;
  return timingSafeEqual(key, expected);
}

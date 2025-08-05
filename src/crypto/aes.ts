import * as crypto from 'crypto';

const ALGO = 'aes-256-gcm'; // 256‑bit key, authenticated
const IV_LEN = 12; // GCM standard
const TAG_LEN = 16;

/** Buffer‑form key (32‑byte hex in .env: openssl rand -hex 32) */
const KEY = Buffer.from(process.env.AES_KEY!, 'hex');

/** Encrypt → returns Base64 blob [iv][tag][cipher] */
export function aesEncrypt(plain: string): string {
    const iv = crypto.randomBytes(IV_LEN);
    const cipher = crypto.createCipheriv(ALGO, KEY, iv);

    const cipherBuf = Buffer.concat([
        cipher.update(plain, 'utf8'),
        cipher.final(),
    ]);
    const tag = cipher.getAuthTag();

    return Buffer.concat([iv, tag, cipherBuf]).toString('base64');
}

/** Decrypt Base64 blob produced by aesEncrypt */
export function aesDecrypt(base64: string): string {
    const blob = Buffer.from(base64, 'base64');
    const iv = blob.subarray(0, IV_LEN);
    const tag = blob.subarray(IV_LEN, IV_LEN + TAG_LEN);
    const data = blob.subarray(IV_LEN + TAG_LEN);

    const decipher = crypto.createDecipheriv(ALGO, KEY, iv);
    decipher.setAuthTag(tag);

    return Buffer.concat([decipher.update(data), decipher.final()]).toString(
        'utf8',
    );
}

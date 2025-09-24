// single source of truth برای منطق کلید حافظه

export const LS_MEMORY_PUBKEYS = 'MEMORY_UID_PUBLIC_KEYS';

export function normalizeUid(v: string): string {
  return (v || '').toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 36);
}

export function genMemoryPublicKey(): string {
  const seg = (n: number) =>
    Array.from({ length: n }, () => Math.floor(Math.random() * 36).toString(36)).join('');
  // 8-4-4-4-12 => 36 کاراکتر با خط‌ تیره
  return `${seg(8)}-${seg(4)}-${seg(4)}-${seg(4)}-${seg(12)}`;
}

export function getSavedPublicKeyFor(ownerUid: string): string {
  try {
    const map = JSON.parse(localStorage.getItem(LS_MEMORY_PUBKEYS) || '{}');
    return typeof map?.[ownerUid] === 'string' ? map[ownerUid] : '';
  } catch {
    return '';
  }
}

export function savePublicKeyFor(ownerUid: string, key: string): void {
  try {
    const map = JSON.parse(localStorage.getItem(LS_MEMORY_PUBKEYS) || '{}');
    map[ownerUid] = normalizeUid(key);
    localStorage.setItem(LS_MEMORY_PUBKEYS, JSON.stringify(map));
  } catch {}
}

import * as React from 'react';
import { getSavedPublicKeyFor, savePublicKeyFor } from './memoryKey.utils';

export function useMemoryPublicKey(ownerUid: string) {
  const [key, setKey] = React.useState<string>(() => getSavedPublicKeyFor(ownerUid));
  const save = (k: string) => {
    savePublicKeyFor(ownerUid, k);
    setKey(k);
  };
  return { key, save, setKey };
}

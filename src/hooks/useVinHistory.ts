import { useState } from 'react';

const STORAGE_KEY = 'vin_history';
const MAX_HISTORY = 3;

function loadHistory(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(history: string[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function useVinHistory() {
  const [history, setHistory] = useState<string[]>(loadHistory);

  const addToHistory = (vin: string) => {
    setHistory((prev) => {
      const filtered = prev.filter((v) => v !== vin);
      const updated = [vin, ...filtered].slice(0, MAX_HISTORY);
      saveHistory(updated);
      return updated;
    });
  };

  return { history, addToHistory };
}

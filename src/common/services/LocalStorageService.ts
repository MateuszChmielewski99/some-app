export function readLocalStorage<T>(key: string): T | null {
  const value = localStorage.getItem(key);
  if (value === null || value ==='')
    return null;
  else
    return JSON.parse(value);
}

export function writeLocalStorage<T>(key: string, newValue: T): void {
  localStorage.setItem(key, JSON.stringify(newValue));
}
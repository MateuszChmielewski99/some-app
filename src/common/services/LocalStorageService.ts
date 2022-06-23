export function readLocalStorage(key: string): any {
  return localStorage.getItem(key);
}

export function writeLocalStorage(key: string, newValue: string): void {
  localStorage.setItem(key, newValue);
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  
  get(key: string): any | null {
    return this.storage.getItem('login');
  }
  getT(key: string): string | null {
    return this.storage.getItem(key);
  }
  getTest(): any | null {
    return this.storage.getItem('login');
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}


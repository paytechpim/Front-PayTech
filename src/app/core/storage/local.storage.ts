import { Injectable } from '@angular/core';
import { BaseError } from '../errors';
import { StorageProvider } from './storage.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageProvider<T> implements StorageProvider<T> {
  set(key: string, value: T) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return this;
    } catch (err) {
      console.error(
        `LocalStorageProvider: localStorage.setItem: "${key}"`,
        err
      );

      throw new BaseError('Erro ao salvar no local storage', err);
    }
  }

  get(key: string): T | null {
    try {
      const item = localStorage.getItem(key);

      if (!item) return null;

      return JSON.parse(item);
    } catch (err) {
      console.error(`Erro localStorage.getItem: "${key}"`, err);

      throw new BaseError(
        `Não foi possível buscar informações no local storage.`,
        err
      );
    }
  }

  public has(key: string): boolean {
    try {
      const value = this.get(key);

      return !!value;
    } catch (err: unknown) {
      throw new BaseError(
        `Não foi possível verificar informações no local storage.`,
        err
      );
    }
  }

  public remove(key: string): this {
    try {
      localStorage.removeItem(key);

      return this;
    } catch (err) {
      console.error(
        `LocalStorageProvider: localStorage.removeItem: "${key}"`,
        err
      );

      throw new BaseError(
        'Não foi possível remover informações no banco de dados local.',
        err
      );
    }
  }

  public clear(): this {
    try {
      localStorage.clear();

      console.warn('LOCAL STORAGE LIMPO');
      return this;
    } catch (err) {
      console.error('LocalStorageProvider: localStorage.clear', err);
      throw new BaseError('Não foi possível limpar local storage', err);
    }
  }
}

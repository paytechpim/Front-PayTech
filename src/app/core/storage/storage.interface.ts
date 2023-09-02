export interface StorageProvider<T> {
  set(key: string, value: T): this;
  get(key: string): T | null;
  has(key: string): boolean;
  remove(key: string): this;
}

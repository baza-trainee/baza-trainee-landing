export const localStorageHandler = {
  getItem<T>(key: string): T | null | boolean {
    try {
      const serializedValue = localStorage.getItem(key);

      return serializedValue === null
        ? null
        : (JSON.parse(serializedValue) as T);
    } catch (e) {
      console.error(`Error while getting localStorage item: ${e}`);
      return false;
    }
  },

  setItem<T>(key: string, value: T): boolean {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);

      return true;
    } catch (e) {
      console.error(`Error while setting localStorage item: ${e}`);

      return false;
    }
  },

  removeItem(key: string): boolean {
    try {
      localStorage.removeItem(key);

      return true;
    } catch (e) {
      console.error(`Error while removing localStorage item: ${e}`);

      return false;
    }
  },
};

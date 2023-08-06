export const localStorageHandler = {
  getItem<T>(key: string, fallbackValue: T): T {
    try {
      const serializedValue = localStorage.getItem(key);

      return serializedValue
        ? (JSON.parse(serializedValue) as T)
        : fallbackValue;
    } catch (e) {
      console.error(`Error while getting localStorage item: ${e}`);
      return fallbackValue;
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

const localStorageHandler = {
  getItem<T>(key: string, fallbackValue: T) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return fallbackValue;
    }
  },
  setItem(key: string, value: string) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  },
  removeItem(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  },
};

export default localStorageHandler;

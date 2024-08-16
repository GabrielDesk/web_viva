import { EAsyncStorageState } from "@/utils/enum/EAsyncKeys";

type getProps = {
  id: EAsyncStorageState;
};

type setProps = {
  id: EAsyncStorageState;
  value: any;
};

// Hook
export const useAsyncStorage = () => {
  const getStorageData = async ({ id }: getProps) => {
    try {
      const value = await localStorage.getItem(id);
      console.log(value);

      // if (value !== null) {
      //   const parsedJson = JSON.parse(value);
      // }

      return value;
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  const setStorageData = async ({ id, value }: setProps) => {
    try {
      await localStorage.setItem(id, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  return { getStorageData, setStorageData };
};

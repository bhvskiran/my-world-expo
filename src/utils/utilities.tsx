import * as SecureStore from "expo-secure-store";

export const getItemFromStorage = async (
  key: string
): Promise<string | null> => {
  let value;
  try {
    value = await SecureStore.getItemAsync(key);
    return value;
  } catch (error) {
    return null;
  }
};

export const setItemIntoStorage = async (
  key: string,
  value: string
): Promise<void> => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    return;
  }
};

export const removeItemFromStorage = async (key: string): Promise<void> => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (err) {
    return;
  }
};

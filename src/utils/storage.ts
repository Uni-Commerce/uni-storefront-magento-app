import AsyncStorage from '@react-native-async-storage/async-storage'

export const setItem = async (
  key: string,
  value: string,
  expiryInSeconds: number
): Promise<void> => {
  const currentTime = Date.now()
  const expiryTime = currentTime + expiryInSeconds * 1000
  const dataToSave = { value, expiryTime }
  await AsyncStorage.setItem(key, JSON.stringify(dataToSave))
}

export const getItem = async (key: string): Promise<string | null> => {
  const savedData = await AsyncStorage.getItem(key)
  if (!savedData) return null

  const { value, expiryTime } = JSON.parse(savedData)
  const currentTime = Date.now()

  if (currentTime >= expiryTime) {
    await AsyncStorage.removeItem(key)
    return null
  }

  return value
}

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.error(e)
  }
}

export const clean = async () => {
  try {
    await AsyncStorage.clear()
  } catch (e) {
    console.error(e)
  }
}

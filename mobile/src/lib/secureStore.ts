import * as SecureStore from 'expo-secure-store';

/**
 * Retrieve the stored OpenAI API key (or null if none saved yet).
 */
export async function getOpenAIKey(): Promise<string | null> {
  return SecureStore.getItemAsync('OPENAI_API_KEY');
}

/**
 * Save / update the OpenAI API key.
 */
export async function setOpenAIKey(key: string): Promise<void> {
  await SecureStore.setItemAsync('OPENAI_API_KEY', key);
}

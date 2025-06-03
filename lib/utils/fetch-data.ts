import client from '@/lib/sanity/client';

/**
 * Fetches data from Sanity using the provided query and parameters
 */
export async function fetchSanityData<T>(query: string, params = {}): Promise<T> {
  try {
    return await client.fetch<T>(query, params);
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    throw new Error('Failed to fetch data');
  }
}

/**
 * Revalidates data at the specified path
 */
export async function revalidatePath(path: string): Promise<void> {
  try {
    await fetch(`/api/revalidate?path=${path}`, { method: 'POST' });
  } catch (error) {
    console.error('Error revalidating path:', error);
  }
} 
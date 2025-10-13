const BASE_URL = 'https://rickandmortyapi.com/api';

export async function fetchFromAPI<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
}


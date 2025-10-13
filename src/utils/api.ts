const BASE_URL = 'https://rickandmortyapi.com/api';

export async function fetchFromAPI<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
}

export function buildQueryString(params: Record<string, string | number | undefined>): string {
    const queryParams = Object.entries(params)
        .filter(([, value]) => value !== '' && value !== null && value !== undefined)
        .map(([key, value]) => `${key}=${encodeURIComponent(value as string | number)}`)
        .join('&');

    return queryParams ? `?${queryParams}` : '';
}


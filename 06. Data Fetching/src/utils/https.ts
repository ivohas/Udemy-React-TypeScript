export async function get(url: string) {
   const response = await fetch(url);
   
   if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};

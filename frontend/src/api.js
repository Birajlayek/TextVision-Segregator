// frontend/src/api.js
// Here you can define functions to make API calls to your backend
// For example:
export const getVendors = async () => {
    const response = await fetch('/api/vendors');
    if (!response.ok) {
        throw new Error('Failed to fetch vendors');
    }
    return response.json();
};

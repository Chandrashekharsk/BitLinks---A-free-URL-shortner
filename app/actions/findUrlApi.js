export const findUrlApi = async (query) => {
  try {
    const response = await fetch(`/api/findurl`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: query }), 
    });
    
    if (!response.ok) {
      return { success: false, message: "This URL Does Not exists" };
    }

    return await response.json();
  } catch (error) {
    console.error('Error in findUrlApi:', error);
    return { success: false, message: error.data.message }; 
  }
};

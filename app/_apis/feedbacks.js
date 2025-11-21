const { baseURL } = require("./baseUrl");

const feedbacks = async () => {
  try {
    const response = await baseURL.get("/feedback");
    return response.data; // Return only the data
  } catch (error) {
    console.error("Error fetching feedbacks:", error.message);
    return { success: false, message: error.message };
  }
};

module.exports = feedbacks ;

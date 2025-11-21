const { baseURL } = require("./baseUrl");


const statistics = async (id) => {
  try {
    const response = await baseURL.get(`/statistics`);
    return response.data;
  } catch (error) {
    console.error("Error fetching achievement:", error.message);
    return { success: false, message: error.message };
  }
};

module.exports = {
  statistics,
};

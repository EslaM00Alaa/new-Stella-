const { baseURL } = require("./baseUrl");

const getClients = async () => {
  try {
    const response = await baseURL.get(`/client`);
    return response.data;
  } catch (error) {
    console.error("Error fetching clients:", error.message);
    return { success: false, message: error.message };
  }
};

const getTeam = async () => {
  try {
    const response = await baseURL.get(`/team`);
    return response.data;
  } catch (error) {
    console.error("Error fetching team:", error.message);
    return { success: false, message: error.message };
  }
};

module.exports = {
  getClients,
  getTeam,
};

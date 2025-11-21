const { baseURL } = require("./baseUrl");

const getTop3Achievements = async () => {
  try {
    const response = await baseURL.get("/achievements/top3");
    return response.data;
  } catch (error) {
    console.error("Error fetching top 3 achievements:", error.message);
    return { success: false, message: error.message };
  }
};

const getSortedAchievements = async () => {
  try {
    const response = await baseURL.get("/achievements/sorted");
    return response.data;
  } catch (error) {
    console.error("Error fetching sorted achievements:", error.message);
    return { success: false, message: error.message };
  }
};

const getAchievementById = async (id) => {
  try {
    const response = await baseURL.get(`/achievements/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching achievement:", error.message);
    return { success: false, message: error.message };
  }
};

module.exports = {
  getTop3Achievements,
  getSortedAchievements,
  getAchievementById,
};

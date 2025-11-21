const { baseURL } = require("./baseUrl");

const getTop3Projects = async () => {
  try {
    const response = await baseURL.get("/projects/first-three");
    return response.data;
  } catch (error) {
    console.error("Error fetching top 3 projects:", error.message);
    return { success: false, message: error.message };
  }
};

const getSortedProjects = async () => {
  try {
    const response = await baseURL.get("/projects");
    return response.data;
  } catch (error) {
    console.error("Error fetching sorted projects:", error.message);
    return { success: false, message: error.message };
  }
};

const getProjectsById = async (id) => {
  try {
    const response = await baseURL.get(`/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project:", error.message);
    return { success: false, message: error.message };
  }
};





module.exports = {
  getTop3Projects,
  getSortedProjects,
  getProjectsById
};

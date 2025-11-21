const { baseURL } = require("./baseUrl");

const contact = async (name, phone, message) => {
  try {
    const response = await baseURL.post(
      "/contact/contact",
      { name, phone, message },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return response.data; // Or return true if you prefer
  } catch (error) {
    console.error("Error sending contact message:", error.message);
    return { success: false, message: error.message };
  }
};

module.exports = contact;

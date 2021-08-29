import axios from "axios";
import {
  renderMessage,
  renderErrorMessage,
  renderSpinner,
} from "../controller.js";

export const insertData = async (data, url) => {
  try {
    renderSpinner();
    const res = await axios.post(url, data);
    renderMessage();
  } catch (err) {
    // Handle Error Here
    renderErrorMessage();
    console.error(err);
  }
};

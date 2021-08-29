import axios from "axios";

import {
  renderMessage,
  renderErrorMessage,
  renderSpinner,
} from "../controller.js";

export const updateData = async (data) => {
  try {
    let params = new URLSearchParams(location.search);
    let event = params.get("name");
    let id = params.get("id");

    const updateUrl = `/update/${event}/${id}`;
    renderSpinner();
    const resp = await axios.put(updateUrl, data);
    renderMessage();
  } catch (err) {
    // Handle Error Here
    renderErrorMessage();
    console.error(err);
  }
};

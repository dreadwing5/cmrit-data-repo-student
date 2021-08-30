import axios from "axios";

export const loadCOE = async () => {
  try {
    const select = document.getElementById("select");
    const resp = await axios.get("/dropdown/coe");
    for (const { name } of resp.data) {
      let option = document.createElement("option");
      option.value = name;
      option.text = name.charAt(0).toUpperCase() + name.slice(1);
      select.appendChild(option);
    }
  } catch (err) {
    console.error(err);
  }
};

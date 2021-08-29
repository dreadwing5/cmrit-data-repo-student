import Quill from "quill";
import { quillConfig } from "./QuillConfig";
import { isInsertMode, quill } from "./Utils";

let data = document.querySelector("#variableJSON")?.textContent;

if (isInsertMode === "false") {
  for (const [key, value] of Object.entries(JSON.parse(data))) {
    if (key === "description") {
      //new instance of quill in edit page
      quill.clipboard.dangerouslyPasteHTML(0, value); //paste the description to quill editor
    }

    let field = document.getElementsByName(key)[0];
    if (field) {
      field.value = value;
    }
  }
}

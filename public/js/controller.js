import { submitForm } from "./apis/FormData";
import { isInsertMode, quill } from "./utils/Utils";
import { validateForm } from "./utils/ValidateForm";
import { scrollFunction } from "./utils/MenuWindow";

const submitBtn = document.querySelector(".submit__data--btn");

const closeBtn = document.querySelectorAll(".btn__close");

const modalFooter = document.querySelector(".modal-footer");

export const renderConfirmationModal = function () {
  const confirmationModal = new bootstrap.Modal(
    document.getElementById("confirmationModal"),
    {
      keyboard: false,
      backdrop: "static",
    }
  );
  confirmationModal.show();
  submitBtn.addEventListener("click", submitForm);
};

export const renderSpinner = function () {
  closeBtn.forEach((btn) => {
    btn.disabled = "true";
  });

  modalFooter.innerHTML = "";
  const loadingMarkup = `
    <button class="btn btn-primary" type="button" disabled>
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Uploading...
    </button>`;
  modalFooter.insertAdjacentHTML("beforeend", loadingMarkup);
};

export const renderMessage = function () {
  const modalTitle = document.querySelector(".modal-title");
  const modalBody = document.querySelector(".modal-body");
  closeBtn.forEach((btn) => {
    btn.removeAttribute("disabled");
  });
  modalTitle.innerHTML = `<i class="fas fa-check-circle"></i> Success!`;
  modalBody.innerHTML = "Your data has been successfully uploaded. Thank you!";
  modalFooter.innerHTML = `
      <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
      `;
};

export const renderErrorMessage = function () {
  const modalTitle = document.querySelector(".modal-title");
  const modalBody = document.querySelector(".modal-body");
  closeBtn.forEach((btn) => {
    btn.removeAttribute("disabled");
  });
  modalTitle.innerHTML = `<i class="fas fa-exclamation-circle"></i> Failure!`;
  modalBody.innerHTML = "Your data couldn't be uploaded. Please try again!";
  modalFooter.innerHTML = `
      <button type="button" class="btn btn-primary btn__close--msg" data-bs-dismiss="modal">Close</button>
      `;
};

const controlTextBox = function () {
  const selectBox = document.getElementById("selectBox");

  if (!selectBox) return;

  selectBox?.addEventListener("click", () => {
    const selectedValue = selectBox?.options[selectBox.selectedIndex].value;
    if (selectedValue === "others") {
      document.getElementById("textboxes").style.display = "block";
    } else {
      document.getElementById("textboxes").style.display = "none";
    }
  });
};

const controlDate = function () {
  const dateControl = document.querySelectorAll(".date__control");
  const startDate = document.querySelector(".start__date");
  const endDate = document.querySelector(".end__date");

  if (!dateControl.length) return;
  //Set Max Date on date fields

  let today = new Date().toISOString().slice(0, 10);
  dateControl.forEach((date) => {
    date.setAttribute("max", today);
  });

  //make sure that the end date is less than the start date

  startDate?.addEventListener("change", () => {
    endDate?.setAttribute("min", startDate.value);
  });
};

const autoFillForm = function () {
  if (isInsertMode === "true" || isInsertMode === undefined) return;

  let data = document.querySelector("#variableJSON")?.textContent;

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
};

// initial application setup

const init = function () {
  autoFillForm();
  validateForm();
  controlTextBox();
  controlDate();
  window.onscroll = function () {
    scrollFunction();
  };
};

init();

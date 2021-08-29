import { submitForm } from "./apis/FormData";
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

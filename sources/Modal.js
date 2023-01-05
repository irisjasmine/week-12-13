class Modal {
  htmlEl = null;
  title = "";
  submitButtonLabel = "";
  cancelButton = null;
  submitButton = null;
  inputArticleTitle = "";
  inputArticleDescription = "";
  modalEl = null;

  constructor(onSubmit, title, submitButtonLabel) {
    this.onSubmit = onSubmit;
    this.title = title;
    this.submitButtonLabel = submitButtonLabel;
  }

  init(modalEl) {
    this.modalEl = modalEl;
    this.htmlEl = document.querySelector("html");
    this.cancelButton = document.querySelector("#article-modal-cancel");
    this.cancelButton.addEventListener(
      "click",
      this._onCancelButton.bind(this)
    );
    this.submitButton = document.querySelector("#article-modal-submit");
    this.submitButton.addEventListener(
      "click",
      this._onSubmitButton.bind(this)
    );

    this.fillModalEl();
    this.clearValueEl();
    this.getValueEl();
  }

  getValueEl() {
    this.inputArticleTitle = document.querySelector(
      "#article-modal-title"
    ).value;
    this.inputArticleDescription = document.querySelector(
      "#article-modal-descr"
    ).value;
  }
  clearValueEl() {
    this.inputArticleTitle = document.querySelector(
      "#article-modal-title"
    ).value = "";
    this.inputArticleDescription = document.querySelector(
      "#article-modal-descr"
    ).value = "";
  }

  fillModalEl() {
    this.modalEl.querySelector("h3").innerText = this.title;
    this.submitButton.innerText = this.submitButtonLabel;
  }

  show() {
    this.htmlEl.classList.add("no-overflow");
    this.modalEl.classList.remove("hidden");
  }

  hide() {
    this.htmlEl.classList.remove("no-overflow");
    this.modalEl.classList.add("hidden");
  }

  _onCancelButton() {
    this.clearInputValues();
    this.hide();
  }

  _onSubmitButton() {
    this.getInputValues();
    const articleTitle = this.inputArticleTitle;
    const articleDescription = this.inputArticleDescription;
    console.log(articleTitle, articleDescription);
    // this.onSubmit(articleTitle, articleDescription);
    if ((articleTitle, articleDescription)) {
      this.clearInputValues();
    }
    this.hide();
  }
}

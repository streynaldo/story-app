const Add = {
  async init() {
    this._initialListener();
  },
  _initialListener() {
    const addForm = document.getElementById("addForm");
    addForm.addEventListener(
      "submit",
      (e) => {
        e.preventDefault();
        e.stopPropagation();

        addForm.classList.add("was-validated");
        this._sendPost();
      },
      false
    );
  },

  _sendPost() {
    const formData = this._getFormData();
    if (this._validateFormData({ ...formData })) {
      console.log("formData");
      console.log(formData);
    }
  },

  _getFormData() {
    const descriptionInput = document.querySelector("#descInput");
    const imageInput = document.querySelector("#imgInput");

    return {
      description: descriptionInput.value,
      image: imageInput.files[0],
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter(
      (item) => item === ""
    );

    return formDataFiltered.length === 0;
  },
};

export default Add;

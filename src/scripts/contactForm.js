import contactCollection from "./contactCollection"

const contactForm = {

// This module will build a form and append it to the DOM. The form will contain input fields for a user to add their contact information to the contact database.

  createAndAppendForm () {

    // Build HTML form
    let formHeader = document.createElement("h3")
    formHeader.textContent = "Add your contact information"

    let contactNameField = document.createElement("fieldset")

    let contactNameLabel = document.createElement("label")
    contactNameLabel.textContent = "Name"
    contactNameLabel.setAttribute("for", "contact__name")
    let contactNameInput = document.createElement("input")
    contactNameInput.setAttribute("id", "contact__name")
    contactNameInput.setAttribute("name", "contact__name")

    contactNameField.appendChild(contactNameLabel)
    contactNameField.appendChild(contactNameInput)

    let submitButton = document.createElement("button")
    submitButton.textContent = "Save your info"
    submitButton.setAttribute("class", "contact__save")

    // Attach event listener to button in form
    submitButton.addEventListener("click", this.handleAddContact)

    // Append the HTML form to the DOM
    let contactFormFragment = document.createDocumentFragment()
    contactFormFragment.appendChild(formHeader)
    contactFormFragment.appendChild(contactNameField)
    contactFormFragment.appendChild(submitButton)

    let formArticle = document.querySelector(".form")
    formArticle.appendChild(contactFormFragment)

  }
}

  export default contactForm
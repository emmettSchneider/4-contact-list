import contactCollection from "./contactCollection"

const contactForm = {

// This module will build a form and append it to the DOM. The form will contain input fields for a user to add their contact information to the contact database.

  createAndAppendForm () {

    // Build HTML form
    let formHeader = document.createElement("h3")
    formHeader.textContent = "Add your contact information"

    // firstName form element

    let contactFirstNameField = document.createElement("fieldset")

    let contactFirstNameLabel = document.createElement("label")
    contactFirstNameLabel.textContent = "First Name"
    contactFirstNameLabel.setAttribute("for", "contact__firstName")
    let contactFirstNameInput = document.createElement("input")
    contactFirstNameInput.setAttribute("id", "contact__firstName")
    contactFirstNameInput.setAttribute("name", "contact__firstName")

    contactFirstNameField.appendChild(contactFirstNameLabel)
    contactFirstNameField.appendChild(contactFirstNameInput)

    // lastName form element

    let contactLastNameField = document.createElement("fieldset")

    let contactLastNameLabel = document.createElement("label")
    contactLastNameLabel.textContent = "Last Name"
    contactLastNameLabel.setAttribute("for", "contact__state")
    let contactLastNameInput = document.createElement("input")
    contactLastNameInput.setAttribute("id", "contact__state")
    contactLastNameInput.setAttribute("name", "contact__state")

    contactLastNameField.appendChild(contactLastNameLabel)
    contactLastNameField.appendChild(contactLastNameInput)

    // addressLine1 form element

    let contactAddressLine1Field = document.createElement("fieldset")

    let contactAddressLine1Label = document.createElement("label")
    contactAddressLine1Label.textContent = "Address Line 1"
    contactAddressLine1Label.setAttribute("for", "contact__addressLine1")
    let contactAddressLine1Input = document.createElement("input")
    contactAddressLine1Input.setAttribute("id", "contact__addressLine1")
    contactAddressLine1Input.setAttribute("name", "contact__addressLine1")

    contactAddressLine1Field.appendChild(contactAddressLine1Label)
    contactAddressLine1Field.appendChild(contactAddressLine1Input)

    // addressLine2 form element

    let contactAddressLine2Field = document.createElement("fieldset")

    let contactAddressLine2Label = document.createElement("label")
    contactAddressLine2Label.textContent = "AddressLine2"
    contactAddressLine2Label.setAttribute("for", "contact__addressLine2")
    let contactAddressLine2Input = document.createElement("input")
    contactAddressLine2Input.setAttribute("id", "contact__addressLine2")
    contactAddressLine2Input.setAttribute("name", "contact__addressLine2")

    contactAddressLine2Field.appendChild(contactAddressLine2Label)
    contactAddressLine2Field.appendChild(contactAddressLine2Input)
 
    // city form element

    let contactCityField = document.createElement("fieldset")

    let contactCityLabel = document.createElement("label")
    contactCityLabel.textContent = "City"
    contactCityLabel.setAttribute("for", "contact__city")
    let contactCityInput = document.createElement("input")
    contactCityInput.setAttribute("id", "contact__city")
    contactCityInput.setAttribute("name", "contact__city")

    contactCityField.appendChild(contactCityLabel)
    contactCityField.appendChild(contactCityInput)

    // state form element

    let contactStateField = document.createElement("fieldset")

    let contactStateLabel = document.createElement("label")
    contactStateLabel.textContent = "State"
    contactStateLabel.setAttribute("for", "contact__state")
    let contactStateInput = document.createElement("input")
    contactStateInput.setAttribute("id", "contact__state")
    contactStateInput.setAttribute("name", "contact__state")

    contactStateField.appendChild(contactStateLabel)
    contactStateField.appendChild(contactStateInput)

    // zipCode form element

    let contactZipCodeField = document.createElement("fieldset")

    let contactZipCodeLabel = document.createElement("label")
    contactZipCodeLabel.textContent = "ZIP Code"
    contactZipCodeLabel.setAttribute("for", "contact__zipCode")
    let contactZipCodeInput = document.createElement("input")
    contactZipCodeInput.setAttribute("id", "contact__zipCode")
    contactZipCodeInput.setAttribute("name", "contact__zipCode")

    contactZipCodeField.appendChild(contactZipCodeLabel)
    contactZipCodeField.appendChild(contactZipCodeInput)

    // emailAddress form element

    let contactEmailAddressField = document.createElement("fieldset")

    let contactEmailAddressLabel = document.createElement("label")
    contactEmailAddressLabel.textContent = "Email Address"
    contactEmailAddressLabel.setAttribute("for", "contact__emailAddress")
    let contactEmailAddressInput = document.createElement("input")
    contactEmailAddressInput.setAttribute("id", "contact__emailAddress")
    contactEmailAddressInput.setAttribute("name", "contact__emailAddress")

    contactEmailAddressField.appendChild(contactEmailAddressLabel)
    contactEmailAddressField.appendChild(contactEmailAddressInput)

    // phoneNumber form element

    let contactPhoneNumberField = document.createElement("fieldset")

    let contactPhoneNumberLabel = document.createElement("label")
    contactPhoneNumberLabel.textContent = "Phone Number"
    contactPhoneNumberLabel.setAttribute("for", "contact__phoneNumber")
    let contactPhoneNumberInput = document.createElement("input")
    contactPhoneNumberInput.setAttribute("id", "contact__phoneNumber")
    contactPhoneNumberInput.setAttribute("name", "contact__phoneNumber")

    contactPhoneNumberField.appendChild(contactPhoneNumberLabel)
    contactPhoneNumberField.appendChild(contactPhoneNumberInput)

    // Submit button

    let submitButton = document.createElement("button")
    submitButton.textContent = "Save your info"
    submitButton.setAttribute("class", "contact__save")

    // Attach event listener to button in form
    submitButton.addEventListener("click", this.handleAddContact)

    // Append the HTML form to the DOM
    let contactFormFragment = document.createDocumentFragment()
    contactFormFragment.appendChild(formHeader)
    contactFormFragment.appendChild(contactFirstNameField)
    contactFormFragment.appendChild(contactLastNameField)
    contactFormFragment.appendChild(contactAddressLine1Field)
    contactFormFragment.appendChild(contactAddressLine2Field)
    contactFormFragment.appendChild(contactCityField)
    contactFormFragment.appendChild(contactStateField)
    contactFormFragment.appendChild(contactZipCodeField)
    contactFormFragment.appendChild(contactEmailAddressField)
    contactFormFragment.appendChild(contactPhoneNumberField)
    contactFormFragment.appendChild(submitButton)

    let formArticle = document.querySelector(".form")
    formArticle.appendChild(contactFormFragment)

  }
}

  export default contactForm
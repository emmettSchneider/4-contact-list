// contactCollection is a component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.

const contactCollection = {
  getContactList() {
    fetch("http://localhost:8088/contacts")
    .then(response => response.json())
    .then(post => console.log(post))
  },
  saveContact(contactToSave) {
    fetch("http://localhost:8088/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contactToSave)
    })
  }
}

export default contactCollection;
const contactsData = {
  email: {
    title: 'Email:',
    info: 'cuttythechef@gmail.com',
  },
  mainPhone: {
    title: 'Main:',
    info: '+7-999-888-7770',
  },
  secondaryPhone: {
    title: 'Secondary',
    info: '+7-888-777-6660',
  },
};

export default function renderContactPage(content) {
  const contacts = document.createElement('section');
  contacts.classList.add('contacts');

  const contactsTitle = document.createElement('h1');
  contactsTitle.classList.add('contacts__title', 'title');
  contactsTitle.textContent = 'Contact Us';

  const contactsParagraph = document.createElement('p');
  contactsParagraph.textContent = 'You can contact us via:';

  const contactsListElement = document.createElement('ul');
  contactsListElement.classList.add('contacts__list');

  for (let contact in contactsData) {
    const { title, info } = contactsData[contact];

    const contactElement = document.createElement('li');
    contactElement.classList.add('contact');

    const contactTitleElement = document.createElement('span');
    contactTitleElement.classList.add('contact__title');
    contactTitleElement.textContent = title;

    const contactInfoElement = document.createElement('span');
    contactInfoElement.classList.add('contact__info');
    contactInfoElement.textContent = info;

    contactElement.append(contactTitleElement, contactInfoElement);
    contactsListElement.append(contactElement);
  }

  contacts.append(contactsTitle, contactsParagraph, contactsListElement);
  content.append(contacts);
}

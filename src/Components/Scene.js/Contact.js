import React from 'react';
import styled from 'styled-components';
import instagram from '../../images/instagram.png';
import phone from '../../images/phone.png';
import telegram from '../../images/telegram.png';
import linkedin from '../../images/linkedin.png';

const ContactStyled = styled.div`
  max-width: 1500px;

  .contact-title {
    margin-top: 80px;
    text-align: center;
    color: #4546ecff;
    font: small-caps bold 30px/2 cursive;
  }

  .contact-item {
    list-style-type: none;
    display: flex;
    margin: 15px;
  }
  .contact-image {
    width: 50px;
    height: 50px;
    margin: 15px;
  }

  .contact-info {
    margin-top: 25px;
    font: small-caps bold 20px/2 cursive;
  }
`;

const contacts = [
  {
    image: instagram,
    linkItem: 'Моя страничка в инстаграм',
    href: 'https://instagram.com/mogilev_english_teacher?igshid=ZjE2NGZiNDQ=',
  },
  { image: phone, linkItem: '+375 29 546 6468', href: 'tel:+375295466468' },
  {
    image: telegram,
    linkItem: 'Мой телеграм',
    href: 'http://t.me/Progress_in_English_with_me',
  },
  {
    image: linkedin,
    linkItem: 'Я в LinkedIn',
    href: 'https://www.linkedin.com/in/marianna-mekhanikova-b612b7119/',
  },
];

const Contact = () => {
  const listOfContacts = contacts.map((contact) => (
    <li className="contact-item">
      <a href={contact.href}>
        <img src={contact.image} className="contact-image" />
      </a>

      <p className="contact-info">{contact.linkItem}</p>
    </li>
  ));

  return (
    <ContactStyled>
      <h3 className="contact-title">Контакты</h3>
      <ul className="contacts">{listOfContacts}</ul>
    </ContactStyled>
  );
};

export default Contact;

import React from 'react';
import styled from 'styled-components';
import instagram from '../../images/instagram.png';
import phone from '../../images/phone.png';
import telegram from '../../images/telegram.png';
import linkedin from '../../images/linkedin.png';

const ContactStyled = styled.div`
  padding-top: 80px;
  width: 100%;

  .contact-title {
    margin-top: 10px;
    text-align: center;
    color: #4546ecff;
    font: small-caps bold 34px/2 cursive;
  }

  .contact-flex {
    display: flex;
  }

  .contact-item {
    list-style-type: none;
    display: flex;
    margin: 15px;
  }
  .contact-image {
    width: 80px;
    height: 80px;
    margin: 25px;
  }

  .contact-info {
    margin-top: 25px;
    font: small-caps bold 20px/2 cursive;
  }

  .contact-image:hover {
    scale: calc(1.2);
    transition: 0.2s;
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
      <h3 className="contact-title">Мои контакты</h3>
      <div className="contact-flex">
        <ul className="contacts">{listOfContacts}</ul>
        <div className="myContatact"></div>
      </div>
    </ContactStyled>
  );
};

export default Contact;

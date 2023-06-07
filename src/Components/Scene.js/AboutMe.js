import React, { useState } from 'react';
import styled from 'styled-components';

import photoTeacher23 from '../../images/photoTeacher23.jpg';
import iconArrow from '../../images/iconArrow.png';

const StyledAboutMe = styled.div`
  display: flex;

  .img-greating {
    text-align: center;
    box-shadow: inset 0 0 30px 30px rgba(255, 255, 255, 1);
    max-width: 1450px;
  }

  .flex {
    display: flex;
    margin-bottom: -100px;
  }

  .aboutMe-photoTeacher {
    scale: calc(0.7);
    border-radius: 50% 30% 50% 10%;
    box-shadow: 0 1px 4px rgba(255, 255, 255, 1),
      -23px 0 20px -23px rgba(255, 255, 255, 0.8),
      23px 0 20px -23px rgba(255, 255, 255, 0.8),
      0 0 40px rgba(255, 255, 255, 0.1) inset;
    margin-top: -50px;
    margin-left: -80px;
  }

  .aboutMe-greating {
    color: #1c3c8dff;
    text-align: center;
    font: small-caps bold 18px/2 cursive;
    padding: 10px;
    margin-top: 210px;
    margin-left: 20px;
    margin-right: 80px;
    width: 50%;
    height: 80%;
    scale: calc(1.1);
    transition-duration: 0.6s;
  }

  .aboutMe-greating-hi {
    font: small-caps bold 26px/2 cursive;
    color: #00a08bff;
  }

  .aboutMe-greating-advantages {
    font: small-caps bold 26px/2 cursive;
    color: #00a08bff;
    margin: 0 auto;
  }

  .accordion-wrapper {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-self: stretch;
    align-items: center;
    margin-bottom: 50px;
  }

  .accordion {
    max-width: 1300px;
    margin: 0 auto;
  }

  .accordion-item {
    display: flex;
    flex-direction: column;
    background: #f0ebe1;
    margin-bottom: 5 px;
    padding: 10px 20px;
    list-style: none;
    text-align: center;
    cursor: pointer;
  }

  .aboutMe-greating-advantages-title {
    font: small-caps bold 20px/2 cursive;
    color: #fab400ff;
    text-align: center;
    display: flex;
    flex-grow: 1;
  }

  .aboutMe-greating-advantages-descriptions {
    font: small-caps bold 16px/2 cursive;
    color: #1c3c8dff;
    height: auto;

    transition: ease-in-out 0.5s cubic-bezier(1, 0, 1, 0);
  }

  .aboutMe-greating-advantages-descriptions-hidden {
    max-height: 0;
    overflow: hidden;
    transition: ease-in-out 0.5s;
  }

  .arrowDown {
    width: 1.5%;
    height: 1.5%;
    transform: rotate(0deg);
  }

  .arrowUp {
    width: 1.5%;
    height: 1.5%;
    transform: rotate(180deg);
  }
`;

const myAdvantages = [
  {
    index: 1,
    title: 'Индивидуальный подход',
    description:
      'Каждый ученик для меня уникален. У каждого свой темп обучения ,свои цели и задачи. Я всегда на связи для своих учеников, стараюсь прислушиваться к их пожеланиям, быть максимально гибкой при планировании времени занятий.',
  },
  {
    index: 2,
    title: 'Использование современных платформ',
    description:
      'В своей работе я использую не только Zoom или Skype но и такие современные приложения как Edvibe, jamboard и др..',
  },
  {
    index: 3,
    title: 'Честность и доверие',
    description:
      'Я никогда не даю прогнозов и обещаний, вроде: «Вы заговорите на немецком через два месяца» или «Вы обязательно сдадите такой-то экзамен в такой-то срок» и т.д. Вклад преподавателя в обучение составляет примерно 30%. Всё остальное целиком зависит от Вашей самостоятельной работы, целеустремленности, мотивации, а также скорости усвоения учебного материала. ',
  },
  {
    index: 4,
    title: 'Ну и конечно же мой опыт',
    description:
      'Уже 17 лет, как я преподаю английский. Новые ученики приходят ко мне по рекомендациям моих нынешних и бывших студенов. Хотя, знаете, бывших учеников, студентов не бывает:) ',
  },
];

const AboutMe = () => {
  const [toggle, setToggle] = useState(null);

  const toggleState = (index) => {
    if (toggle === index) {
      return setToggle(null);
    }
    setToggle(index);
  };

  const listAdvantages = myAdvantages.map((advantages, index) => (
    <ul>
      <li className="accordion-item" onClick={() => toggleState(index)}>
        <h6 className="aboutMe-greating-advantages-title ">
          {advantages.title}
        </h6>
        <img
          className={toggle === index ? 'arrowUp' : 'arrowDown'}
          alt="arrow"
          src={iconArrow}
        >
          {}
        </img>
        <div
          className={
            toggle === index
              ? 'aboutMe-greating-advantages-descriptions'
              : 'aboutMe-greating-advantages-descriptions-hidden'
          }
        >
          {advantages.description}
        </div>
      </li>
    </ul>
  ));

  return (
    <>
      <StyledAboutMe>
        <div className="img-greating">
          <div className="flex">
            <img
              alt="photo_teacher"
              src={photoTeacher23}
              className="aboutMe-photoTeacher"
            />
            <div className="aboutMe-greating">
              <span className="aboutMe-greating-hi">Всем привет!</span>
              <br></br> Меня зовут Марианна. Я занимаюсь преподаванием
              английского языка уже на протяжении более 17 лет.
              <br></br>Я оптимистичный,позитивный и креативный преподаватель. В
              своей работе я нахожу индивидуальный подход к каждому ученику,
              подбираю индивидуальную программу в зависимости от предпочтений и
              практической направленности. Люблю видеть результат к которому
              приходят мои ученики. Моя работа нацелена на устранение пробелов в
              знаниях, повышение уровня владения языком, подготовки к
              международным экзаменам TOEFL и IELTS и развитие разговорной речи.
            </div>
          </div>

          <dl className="aboutMe-greating-advantages">
            Преимущества работы со мной:
            <div className="accordion">{listAdvantages}</div>
          </dl>
        </div>
      </StyledAboutMe>
    </>
  );
};

export default AboutMe;

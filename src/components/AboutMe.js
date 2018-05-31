import React from 'react'
import moment from 'moment'

const age = moment().diff(moment('21-08-1987', 'DD-MM-YYYY'), 'years', false)

const AboutMe = () => (
  <div>
    <h1>Привет!</h1>
    <p>Меня зовут Лев. Иногда я делаю вид что летаю в космосе, но на самом деле я вместе с вами на Земле.</p>
    <p>Мне {age} лет и я Frontend-разработчик.</p>
    <p>Вот некоторые из слов, которые я знаю и люблю:</p>
    <ul>
      <li>React</li>
      <li>Redux</li>
      <li>GraphQL</li>
      <li>Lodash</li>
      <li>GSAP</li>
      <li>PostCSS</li>
      <li>Webpack</li>
      <li>Styled Components</li>
    </ul>
    <p>Например этот сайт работает на React, Redux и Styled-Components.</p>
  </div>
)

export default AboutMe

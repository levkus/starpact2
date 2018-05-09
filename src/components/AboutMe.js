import React from 'react'
import moment from 'moment'

const age = moment().diff(moment('21-08-1987', 'DD-MM-YYYY'), 'years')

const AboutMe = () => (
  <React.Fragment>
    <h2>Привет, меня зовут Лев.</h2>
    <p>Мне {age} лет и я Frontend-разработчик.</p>
  </React.Fragment>
)

export default AboutMe

import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import App from './components/App'
import { makeStarfield } from './starfield'

makeStarfield(document.getElementById('starfield'))

ReactDOM.render(<App />, document.getElementById('root'))

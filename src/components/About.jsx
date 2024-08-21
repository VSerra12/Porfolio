import InfiniteScroll from "./InfiniteScroll"
import htmlLogo from '../assets/img/html-logo.svg'
import cssLogo from '../assets/img/css-logo.svg'
import bootstrapLogo from '../assets/img/bootstrap-logo.svg'
import javascriptLogo from '../assets/img/javascript-logo.svg'
import nodejsLogo from '../assets/img/nodejs-logo.svg'
import postgresqlLogo from '../assets/img/postgresql-logo.svg'
import reactLogo from '../assets/img/react-logo.svg'
import typescriptLogo from '../assets/img/typescript-logo.svg'

import './About.css'

const About = () => {

    const images = [
        htmlLogo,
        cssLogo,
        bootstrapLogo,
        javascriptLogo,
        nodejsLogo,
        postgresqlLogo,
        reactLogo,
        typescriptLogo
      ]

  return (
    <InfiniteScroll images={images} speed={10000} />
  )
}

export default About
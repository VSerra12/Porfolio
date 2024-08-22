import InfiniteScroll from "./InfiniteScroll"
import { images } from "../constants/codingLenguage"


import './About.css'

const About = () => {

  return (

    <>
      <h2>Education</h2>
      <hr />
      <h2>Experience</h2>
      <hr />
      <h2>Skills</h2>
      <InfiniteScroll images={images} speed={15000} />
    </>
  )
}

export default About
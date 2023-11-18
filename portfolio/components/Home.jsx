import React  from "react";
import CV from '../src/assets/CV.pdf'

function Home()
{
    return(
      <div className="container-fluid row mt-3">
      <h2 className="">Hello I'm Danial Ahmad</h2>
 
      <h4>I'm an Aspiring Web Developer</h4>
      <p  className="col-6">Seeking a career with a profession-oriented and civic organization that
      can provide the platform for becoming a well-recognized professional
     and ultimately attaining prestige and pride for myself</p>

        <a
        href={CV}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn btn-primary">Download Resume</button>
      </a>
     <a href="https://www.linkedin.com/in/danial-ahmad12"><img className = 'linked-in-image'src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
     </a> 
      </div>
    )
}

export {Home}
import React from "react";
import {Skill} from './Skill'

function Skills()
{
    return(
        <div className="skills">
        <h2 className="mb-3">I have expertise with these technologies</h2>
    <div className="skillsGrid">
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub"/>
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/>
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS"/>
        <Skill alt = 'The logo for Express' title = 'Express' source= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"/>
        <Skill source= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
        alt = 'The logo for JavaScript' title = 'JavaScript'/>
        <Skill source= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"alt = 'The logo for BootStrap' title = 'Bootstrap'/>
        <Skill alt = 'The logo for Ruby on Rails' title= 'Ruby on Rails' source = '../src/assets/rails-plain-wordmark.svg'/>
        <Skill source = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
        alt = 'The logo for MongoDB' title = 'MongoDB'/>
        <Skill source = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" 
        alt = 'The logo for sqlite' title = 'sqlite'/>
    </div>            
</div>
    )
}
export {Skills}
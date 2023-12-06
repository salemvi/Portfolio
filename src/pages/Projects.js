import Project from '../Components/project/Project'
import { motion } from 'framer-motion';
import motionParams from '../services/motionParams.js';

import {projects} from '../helpers/projectsLists'

const Projects = () => {
    return (
        <motion.main {...motionParams} className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                {projects.map((project, index) => {
                    return  <Project 
                    key={index} 
                    title={project.title} 
                    img={project.img}
                    index={index} />

                })}
                </ul>
            </div>
        </motion.main>
    )
}
export default Projects;
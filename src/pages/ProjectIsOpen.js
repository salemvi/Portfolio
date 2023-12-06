import { useParams } from 'react-router-dom';
import {projects} from './../helpers/projectsLists';
import { motion } from "framer-motion";
import motionParams from "../services/motionParams";

import BtnGitHub from '../Components/btnGitHub/BtnGitHub';



const ProjectIsOpen = () => {
    const {id} = useParams();
    const project = projects[id];


    return ( 
        <motion.main {...motionParams} className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>
                    <img src={project.bigImg} alt={project.title} className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>

                    {project.gitHubLink ? <BtnGitHub/> : null }

                </div>
            </div>
        </motion.main>
     );
}
 
export default ProjectIsOpen;
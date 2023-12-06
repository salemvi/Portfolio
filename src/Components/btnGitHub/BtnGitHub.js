import './btnGitHub.css';
import btnGitHubIcon from './../../img/icons/gitHub-black.svg'


const btnGitHub = () => {
    return ( 
        <a href="https://github.com/salemvi" target="_blank" rel="noreferrer"  className="btn-outline">
            <img src={btnGitHubIcon} alt="icon"/>
            GitHub repo
        </a>
     );
}
 
export default btnGitHub;
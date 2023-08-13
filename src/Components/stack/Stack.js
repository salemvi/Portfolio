import './stack.css';

const Stack = () => {
    return (
        <div className="container">
            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Frontend</h2>
                    <p>JavaScript, TypeScript, ReactJS , Redux, HTML, CSS, SCSS, NPM, BootStrap, MaterialUI, StyledComponents</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Backend</h2>
                    <p> Java, MongoDB </p>
                </li>
            </ul>
        </div>
    )
}
export default Stack;
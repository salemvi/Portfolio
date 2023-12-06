import './stack.css';

const Stack = () => {
    return (
        <div className="container">
            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Frontend</h2>
                    <p>JavaScript, TypeScript, React, Redux, HTML, CSS, Storybook</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Backend</h2>
                    <p>Node.js, MongoDB</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Tests</h2>
                    <p>Integration tests, Screen tests, Unit tests</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Other</h2>
                    <p>git, npm, yarn, postman</p>
                </li>
            </ul>
        </div>
    )
}
export default Stack;
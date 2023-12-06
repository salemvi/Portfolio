import { useEffect, useRef } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';


import './btnSunMoon.css';
import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';
import detectDarkMode from '../../utils/detectDarkMode';

const BtnSunMoon = () => {

    const [darkMode, setDarkMode]  = useLocalStorage('darkMode', detectDarkMode());
    const btnRef = useRef(null);

    useEffect(() => {
        console.log('Use effect');

        if(darkMode === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');


        }
    }, [darkMode]);
    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        setDarkMode(newColorScheme)
    });
    })


    const toggleDarkMode = () => {
        setDarkMode((currentTheme) => {
            return currentTheme === 'light' ? 'dark' : 'light'
        });
    }

    const btnActive = 'dark-mode-btn--active';

    return ( 
        <button ref={btnRef} 
        className={`dark-mode-btn ${darkMode === 'dark' ? btnActive : null}`}
        onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
     );
}
 
export default BtnSunMoon;
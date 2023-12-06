import Header from "../Components/header/Header";
import Stack from "../Components/stack/Stack";
import { motion } from 'framer-motion';
import motionParams from '../services/motionParams';

const Home = () => {
    return (
        <motion.div {...motionParams}>
            <Header/>
            <main className="section">
                <Stack/>
            </main>
        </motion.div>
    )
}
export default Home ;
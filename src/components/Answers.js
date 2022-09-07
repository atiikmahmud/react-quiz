import Checkbox from '../components/Checkbox';
import classes from '../styles/Answers.module.css';

export default function Answers() {
    return(
        <div className={classes.answer}>
            <Checkbox className={classes.answer} text="Test Answer"/>
        </div>
    );
}
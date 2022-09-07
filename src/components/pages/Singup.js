import classes from '../../styles/Signup.module.css';
import Form from '../From';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

export default function Signup() {
    return(
        <>
            <h1>Create an account</h1>
            <div class="column">
                <Illustration />
                <Form className={`${classes.signup}`} />
                <TextInput type="text" placeholder="Enter name" icon="person" />
                </Form>
            </div>
        </>
    );
}
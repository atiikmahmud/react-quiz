import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from '../components/Button';
import Chackbox from '../components/Checkbox';
import Form from '../components/Form';
import TextInput from '../components/TextInput';
import { useAuth } from '../contexts/AuthContext';


export default function SignupForm() {
    
    const [username, setUsername] = useState("");
    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree]       = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { signup } = useAuth();
    const nevigateTo = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        // password matching...
        if(password !== confirmPassword) {
            return setError("Passwords don't match!");
        }

        try{
            setError("");
            setLoading(true);
            await signup(email, password, username);
            nevigateTo("/");
        } catch(err) {
            console.log(err);
            setLoading(false);
            setError("Failed to create an account!");
        }
    }
    
    return(
        <Form style={{ height: "500px" }} onSubmit={ handleSubmit }>
            <TextInput type="text" placeholder="Enter name" icon="person" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <TextInput type="email" placeholder="Enter email" icon="alternate_email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <TextInput type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <TextInput type="password" placeholder="Confirm password" icon="lock_clock" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <Chackbox  text="I agree to the Terms &amp; Conditions" value={agree} onChange={(e) => setAgree(e.target.value)} required /> 
            <Button disabled={loading} type="submit"><span>Submit Now</span></Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
}
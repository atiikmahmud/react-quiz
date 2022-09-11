import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import { useAuth } from "../contexts/AuthContext";

export default function LoginForm() {
    
    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { login } = useAuth();
    const nevigateTo = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try{
            setError("");
            setLoading(true);
            await login(email, password);
            nevigateTo("/");
        } catch(err) {
            console.log(err);
            setLoading(false);
            setError("Failed to login!");
        }
    }
    
    return(
        <Form style={{ height: "330px" }} onSubmit={ handleSubmit } >
            
            <TextInput type="email" placeholder="Enter email" icon="alternate_email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <TextInput type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <Button disabled={loading} type="submit"><span>Login</span></Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Don't have an account? <Link to="/signup">Signup</Link> instead.
            </div>
        </Form>
    );
}
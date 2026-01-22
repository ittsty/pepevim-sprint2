
import { useState } from "react";
import { contactApi } from "../services/contact.js";

export const usePost = ( ) => {

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await contactApi(form);
            setSuccess(true);
            setError(null);
        } catch (error) {
            setError(error.message);
            setSuccess(false);
        }
    };

    return {
        form,
        error,
        success,
        handleChange,
        handleSubmit
    }
}

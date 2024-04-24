import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({ Component }) => {
    const navigate = useNavigate();

    useEffect(() => {
        let storedValue = localStorage.getItem("myObject");
        storedValue = JSON.parse(storedValue);
        console.log(storedValue)
        if (!storedValue || !storedValue.email || !storedValue.password) {
            navigate('/login');
        }
    }, [navigate]);

    return <Component />;
};

export default Protected;

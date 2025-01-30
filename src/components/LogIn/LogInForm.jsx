import React, {useState} from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {Input} from '@/components/ui/Input'

const LogInForm = ({onSubmit}) => {
    const [userEmail,setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!userEmail || !userPassword) {
            setError("Both Fields Are Required")
            return;
        }
        setError("");
        onSubmit(userEmail, userPassword);

    }


    return (
        <Card className="text-center rounded-2x1 shadow-lg">
            <CardHeader >
                <CardTitle className="text-center text-2x1 font-bold">Login</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
                    {error && <p className="text-red-500">{error}</p>}

                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(userEmail)}
                        className="shadow-sm"
                    />
                </form>
            </CardContent>


        </Card>
    );
};

export default LogInForm;
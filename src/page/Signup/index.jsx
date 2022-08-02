import React, { useState } from "react";
import { Button } from "../../components/UI/Button";
import { Header, Form, Input } from "./style";
import * as authApi from "../../api/authApi";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };
    const nameChangeHandler = (e) => {
        setName(e.target.value);
    };

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await authApi.signup({ email, password: name });
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div>
                <Header>회원가입</Header>

                <Form onSubmit={formSubmitHandler}>
                    <span>이메일 주소</span>
                    <div>
                        <Input
                            type="email"
                            name="email"
                            value={email}
                            onChange={emailChangeHandler}
                            placeholder="이메일"
                            required
                        />
                    </div>

                    <span>닉네임</span>
                    <div>
                        <Input
                            type="text"
                            name="nickname"
                            value={name}
                            onChange={nameChangeHandler}
                            placeholder="닉네임"
                            required
                        />
                    </div>

                    <Button type="submit">회원가입</Button>
                </Form>
            </div>
        </>
    );
};

export default Signup;

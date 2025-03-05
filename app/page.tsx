"use client";
import { useState } from "react";

const USERS = {
    USER1: {
        username: process.env.NEXT_PUBLIC_USER1,
        password: process.env.NEXT_PUBLIC_PASS1,
        page: "User1Page",
    },
    USER2: {
        username: process.env.NEXT_PUBLIC_USER2,
        password: process.env.NEXT_PUBLIC_PASS2,
        page: "User2Page",
    },
    LINKS: {
        link1: process.env.NEXT_PUBLIC_USER1_STRING,
        link2: process.env.NEXT_PUBLIC_USER2_STRING,
    },
};

export default function Home() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState<string | null>(null);

    const encoded = "Y3RmYWRtaW46c2VjcmV0cGFzcw=="; // Base64 of "admin:"
    console.log(atob(encoded));

    const handleLogin = () => {
        if (
            username === USERS.USER1.username &&
            password === USERS.USER1.password
        ) {
            setLoggedIn(USERS.USER1.page);
        } else if (
            username === USERS.USER2.username &&
            password === USERS.USER2.password
        ) {
            setLoggedIn(USERS.USER2.page);
        } else {
            alert("Invalid credentials");
        }
        setUsername("");
        setPassword("");
    };

    if (loggedIn === "User1Page") {
        return (
            <>
                <div className="flex flex-col items-center justify-center h-screen text-2xl font-bold">
                    Welcome Participant!
                    <div>
                        Here is the link for Stage 2<br></br>
                        <p>{process.env.NEXT_PUBLIC_USER1_STRING}</p> Complete
                        all the levels and submit the password for the last
                        stage to the host!!
                    </div>
                    <br></br>
                </div>
            </>
        );
    }
    if (loggedIn === "User2Page") {
        return (
            <>
                <div className="flex flex-col items-center justify-center h-screen text-2xl font-bold">
                    Welcome User 2!
                    <div>
                        Here is the link for Stage 2 Complete this stage till
                        level4 -{">"} level5 and obtain the userID and password
                        for the next stage{" "}
                    </div>
                    <div>{process.env.NEXT_PUBLIC_USER2_STRING}</div>
                </div>
            </>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-2 border border-gray-300 rounded mb-4 w-64"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 border border-gray-300 rounded mb-4 w-64"
            />
            <button
                onClick={handleLogin}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Login
            </button>
        </div>
    );
}

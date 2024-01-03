import Cookies from "js-cookie";

export const checkAuth = async (set, token) => {
    if (token) {
        const res = await fetch("http://localhost:5000/users", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        if (res.status === 200) {
            const response = await res.json();
            set(response);
        }
    }
};

export const Login = async (input, login) => {
    const res = await fetch(`http://localhost:5000/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
    });

    if (res.status === 200) {
        const { token } = await res.json();
        Cookies.set("token", token, { expires: 30 });
        checkAuth(login, token);
    }
};

export const Register = async (input, login) => {
    const res = await fetch(`http://localhost:5000/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
    });

    if (res.status === 200) {
        const { token } = await res.json();
        Cookies.set("token", token);
        checkAuth(login, token);
    }
};

export const cart = async (set) => {
    const token = Cookies.get("token");
    if (token) {
        const res = await fetch(`http://localhost:5000/users/cart`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        if (res.status === 200) {
            const response = await res.json();
            set(response);
        }
    }
};

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

export const cart = async (set, setDone) => {
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
            setDone(false);
        }
    }
};

export const getProduct = async (id, set, setDone) => {
    const res = await fetch(`http://localhost:5000/products/${id}`);
    if (res.status === 200) {
        const response = await res.json();
        set(response);
        setDone(false);
    }
};

export const giveRating = async (data, id) => {
    const token = Cookies.get("token");
    const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });
    if (!(res.status === 200)) {
        alert("Could not give review");
    }
};

export const displayRazor = async (data, user) => {
    const token = Cookies.get("token");
    const res = await fetch(`http://localhost:5000/transaction/checkout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount: data.price }),
    });
    const response = await res.json();
    var options = {
        key: response.key,
        amount: response.amount.toString(),
        currency: "INR",
        name: "ConnectED",
        description: "",
        image: user.image,
        order_id: response.id,
        handler: async function (response1) {
            const Data = {
                orderCreationId: response.id,
                razorpayPaymentId: response1.razorpay_payment_id,
                razorpayOrderId: response1.razorpay_order_id,
                razorpaySignature: response1.razorpay_signature,
                product: data.id,
                buyer: user.id,
            };
            await fetch(
                "http://localhost:5000/transaction/paymentVerification",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(Data),
                }
            );
        },
        prefill: {
            name: user.name,
            email: user.email,
            contact: "9000090000",
        },
        notes: {
            address: "Razorpay Corporate Office",
        },
        theme: {
            color: "#3399cc",
        },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};

export const getContacts = async (set, loading) => {
    const token = Cookies.get("token");

    const res = await fetch("http://localhost:5000/conversation", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (res.status === 200) {
        const response = await res.json();
        set(response);
    }
    loading(false);
};

export const getMessage = async (id, set, loading) => {
    const token = Cookies.get("token");
    const res = await fetch(`http://localhost:5000/conversation/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (res.status === 200) {
        const response = await res.json();
        set(response);
    }
    loading(false);
};

export const sendMessage = async (
    message,
    id,
    senderId,
    userId,
    set,
    socket
) => {
    const token = Cookies.get("token");
    console.log(message);
    const res = await fetch(`http://localhost:5000/conversation/message`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            conversationId: id,
            message,
        }),
    });
    if (res.status === 200) {
        set((t) => [...t, { message, senderId: senderId }]);
        socket.emit("sendMessage", {
            message,
            senderId,
            receiverId: userId,
            conversationId: id,
        });
    } else {
        alert("Could not send message");
    }
};

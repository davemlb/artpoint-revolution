import axios from "axios";

const apiBase = 'https://localhost3001/api/'

export const createUser = async (username: string, password: string) => {
    const response = await fetch(`${apiBase}user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Failed to create user');
    }

    const user = await response.json();
    return user;
};

const getUsers = async () => {
    const response = await fetch(`${apiBase}user`);

    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }

    const users = await response.json();
    return users;
};

const getUserByUsername = async (username: string) => {
    const response = await fetch(`${apiBase}${username}`);

    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }

    const user = await response.json();
    return user;
};


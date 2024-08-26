import { useRouter } from 'next/navigation';

export async function login(emailOrUsername, password) {
    const res = await fetch('http://localhost:8000/api/user/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_or_username: emailOrUsername, password }),
    });

    if (res.ok) {
        const data = await res.json();
        // console.log('££££££££££££ : ', data); 
        localStorage.setItem('token', data.token); // Utilise `data.token` pour stocker le token
        return data;
    } else {
        throw new Error('Login failed');
    }
}

export async function register(username, email, password) {
    const res = await fetch('http://localhost:8000/api/user/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    if (res.ok) {
        return res.json();
    } else {
        throw new Error('Registration failed');
    }
}

export async function getUserProfile() {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    // console.log('Token retrieved from localStorage:', token); 

    if (!token) {
        throw new Error('No token found');
    }

    const res = await fetch('http://localhost:8000/api/user/me/', {
        method: 'GET',
        headers: {
            'Authorization': `Token ${token}`, 
        },
    });

    // console.log('Response status:', res.status); 
    // console.log('$$$$$$$$$$$$$$$$ user : ', res.json());

    if (res.ok) {
        return res.json();
    } else if (res.status === 401) {
        console.error('Unauthorized: Invalid or expired token');
        throw new Error('Unauthorized: Invalid or expired token');
    } else {
        console.error('Failed to fetch user profile');
        throw new Error('Failed to fetch user profile');
    }
}

export async function logout() {
    localStorage.removeItem('token');
}

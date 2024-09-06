export interface UserProfile {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    roles: string;
    date_joined: string;
    is_staff: string;
    is_active: string;
    is_superuser: string;
}

export interface UserRegister {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    phone_number: string;
    bio: string;
    date_of_birth: string; 
    address: Address; 
    roles: number[];  
    is_staff?: boolean;
    is_active?: boolean;
    is_superuser?: boolean;
}

export interface Address {
    address_type?: string;
    street: string;
    city: string;
    zip_code: string;
    country: string;
}


export interface UserProfile {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    profile: {
        phone_number: string;
        bio: string;
        profile_image: string;
        addresses: Address[];
    };
}
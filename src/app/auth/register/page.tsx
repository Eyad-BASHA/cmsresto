"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserRegister } from "../../../types/types";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function RegisterPage() {
  const [roles, setRoles] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    // Fetch roles from the backend
    fetch(`${siteUrl}/user/roles/`)
      .then((res) => res.json())
      .then((data) => setRoles(data))
      .catch((error) => console.error("Error fetching roles:", error));
  }, []);

  const [user, setUser] = useState<UserRegister>({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    phone_number: "",
    bio: "",
    date_of_birth: "",
    address: {
      address_type: "livraison",
      street: "",
      city: "",
      zip_code: "",
      country: "",
    },
    roles: [],
    is_staff: false,
    is_active: true,
    is_superuser: false,
  });

  const [errors, setErrors] = useState<Partial<UserRegister>>({});
  const router = useRouter();

  // Regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Min 8 chars, 1 letter, 1 number

  const validate = () => {
    const newErrors: Partial<UserRegister> = {};

    if (!user.email || !emailRegex.test(user.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!user.username) {
      newErrors.username = "Username is required";
    }
    if (!user.password || !passwordRegex.test(user.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain both letters and numbers";
    }
    if (user.password !== user.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!user.first_name) {
      newErrors.first_name = "First name is required";
    }
    if (!user.last_name) {
      newErrors.last_name = "Last name is required";
    }
    if (!user.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!user.phone_number) {
      newErrors.phone_number = "Phone number is required";
    }
    if (!user.date_of_birth) {
      newErrors.date_of_birth = "Date of birth is required";
    }

    const addressErrors: Partial<UserRegister["address"]> = {};

    if (!user.address.street) {
      addressErrors.street = "Street is required";
    }
    if (!user.address.city) {
      addressErrors.city = "City is required";
    }
    if (!user.address.zip_code) {
      addressErrors.zip_code = "ZIP code is required";
    }
    if (!user.address.country) {
      addressErrors.country = "Country is required";
    }

    if (Object.keys(addressErrors).length > 0) {
      newErrors.address = addressErrors as UserRegister["address"];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "roles" && e.target instanceof HTMLSelectElement) {
      const selectedRoles = Array.from(
        e.target.selectedOptions,
        (option: HTMLOptionElement) => parseInt(option.value),
      );
      setUser((prevUser) => ({
        ...prevUser,
        roles: selectedRoles as number[], // Assurez-vous que c'est un tableau de nombres
      }));
    } else if (name in user.address) {
      setUser((prevUser) => ({
        ...prevUser,
        address: {
          ...prevUser.address,
          [name]: value,
        },
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("$$$$$$$$$$$$$$$$$ DATA SEND :", JSON.stringify(user));

    const dataToSend = {
      ...user,
      profile: {
        gender: user.gender,
        phone_number: user.phone_number,
        bio: user.bio,
        date_of_birth: user.date_of_birth,
        addresses: [user.address],
      },
    };

    try {
      const res = await fetch(`${siteUrl}/user/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!res.ok) {
        const errorText = await res.text(); // Obtenez la réponse brute en texte
        console.error("Registration failed:", errorText);
      } else {
        console.log("User registered successfully");
        router.push("/login");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={handleChange}
          placeholder="First Name"
          className={`border ${
            errors.first_name ? "border-red-500" : "border-green-500"
          }`}
        />
        {errors.first_name && (
          <p className="text-red-500">{errors.first_name}</p>
        )}

        <input
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          className={`border ${
            errors.last_name ? "border-red-500" : "border-green-500"
          }`}
        />
        {errors.last_name && <p className="text-red-500">{errors.last_name}</p>}

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          className={`border ${
            errors.email ? "border-red-500" : "border-green-500"
          }`}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
          className={`border ${
            errors.username ? "border-red-500" : "border-green-500"
          }`}
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}

        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
          className={`border ${
            errors.password ? "border-red-500" : "border-green-500"
          }`}
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className={`border ${
            errors.confirmPassword ? "border-red-500" : "border-green-500"
          }`}
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword}</p>
        )}

        <select
          name="gender"
          value={user.gender}
          onChange={handleChange}
          className={`border ${
            errors.gender ? "border-red-500" : "border-green-500"
          }`}>
          <option value="">Select Gender</option>
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
          <option value="autre">Autre</option>
        </select>
        {errors.gender && <p className="text-red-500">{errors.gender}</p>}

        <input
          type="text"
          name="phone_number"
          value={user.phone_number}
          onChange={handleChange}
          placeholder="Phone Number"
          className={`border ${
            errors.phone_number ? "border-red-500" : "border-green-500"
          }`}
        />
        {errors.phone_number && (
          <p className="text-red-500">{errors.phone_number}</p>
        )}

        <input
          type="date"
          name="date_of_birth"
          value={user.date_of_birth}
          onChange={handleChange}
          placeholder="Date of Birth"
          className={`border ${
            errors.date_of_birth ? "border-red-500" : "border-green-500"
          }`}
        />
        {errors.date_of_birth && (
          <p className="text-red-500">{errors.date_of_birth}</p>
        )}

        <input
          type="text"
          name="bio"
          value={user.bio}
          onChange={handleChange}
          placeholder="Bio"
          className={`border ${
            errors.bio ? "border-red-500" : "border-green-500"
          }`}
        />
        {errors.bio && <p className="text-red-500">{errors.bio}</p>}

        <input
          type="text"
          name="street"
          value={user.address.street}
          onChange={handleChange}
          placeholder="Street"
          className={`border ${
            errors.address?.street ? "border-red-500" : "border-green-500"
          }`}
        />
        {errors.address?.street && (
          <p className="text-red-500">{errors.address.street}</p>
        )}

        <input
          type="text"
          name="city"
          value={user.address.city}
          onChange={handleChange}
          placeholder="City"
          className={`border ${
            errors.address?.city ? "border-red-500" : "border-green-500"
          }`}
        />
        {errors.address?.city && (
          <p className="text-red-500">{errors.address.city}</p>
        )}

        <input
          type="text"
          name="zip_code"
          value={user.address.zip_code}
          onChange={handleChange}
          placeholder="ZIP Code"
          className={`border ${
            errors.address?.zip_code ? "border-red-500" : "border-green-500"
          }`}
        />
        {errors.address?.zip_code && (
          <p className="text-red-500">{errors.address.zip_code}</p>
        )}

        <input
          type="text"
          name="country"
          value={user.address.country}
          onChange={handleChange}
          placeholder="Country"
          className={`border ${
            errors.address?.country ? "border-red-500" : "border-green-500"
          }`}
        />
        {errors.address?.country && (
          <p className="text-red-500">{errors.address.country}</p>
        )}

        <select
          name="roles"
          multiple
          value={user.roles.map(String)} // Convert number[] to string[]
          onChange={handleChange}
          className={`border ${
            errors.roles ? "border-red-500" : "border-green-500"
          }`}>
          {roles.map((role) => (
            <option key={role.id} value={role.id.toString()}>
              {role.name}
            </option>
          ))}
        </select>

        {errors.roles && <p className="text-red-500">{errors.roles}</p>}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded">
          Register
        </button>
      </form>
    </div>
  );
}

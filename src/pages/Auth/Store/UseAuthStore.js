import { create } from "zustand";
import { persist } from "zustand/middleware";

//! Dummy Data untuk Admin dan User
const MOCK_USERS = [
  {
    id: "1",
    email: "admin@test.com",
    password: "123",
    name: "Budi",
    role: "admin",
  },
  {
    id: "2",
    email: "user@test.com",
    password: "123",
    name: "Siti",
    role: "user",
  },
];

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      error: null,

      //* Action untuk Login
      login: (email, password) => {
        const foundUser = MOCK_USERS.find(
          (u) => u.email === email && u.password === password,
        );

        if (foundUser) {
          set({
            user: {
              id: foundUser.id,
              email: foundUser.email,
              name: foundUser.name,
              role: foundUser.role,
            },
            error: null,
          });
          return true;
        } else {
          set({ error: "Email atau password salah!" });
          return false;
        }
      },

      //* Action untuk Logout
      logout: () => {
        set({ user: null, error: null });
      },
    }),
    {
      name: "auth-store",
    },
  ),
);

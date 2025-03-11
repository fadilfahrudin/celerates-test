"use client"

import React, { createContext, useContext, useState } from "react";
import { UserType } from "../type/userType";


type UserContextType = {
    users: UserType[];
    setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
    userId: number;
    setUserId: React.Dispatch<React.SetStateAction<number>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children, initialUsers }: { children: React.ReactNode, initialUsers: UserType[] }) => {
    const [users, setUsers] = useState<UserType[]>(initialUsers);
    const [userId, setUserId] = useState(0);


    return <UserContext.Provider value={{ users, setUsers, userId, setUserId }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};

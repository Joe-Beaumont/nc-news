import { createContext, useState } from "react";
import React from "react";

export const CurrentUser = createContext()

export const UserProvider =({ children }) => {
    const [user, setUser] = useState("tickle122")

    return (
        <CurrentUser.Provider value={{user, setUser}}>
            {children}
        </CurrentUser.Provider>
    )
}
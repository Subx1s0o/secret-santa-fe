"use server"
import { cookies } from "next/headers"

export async function getRooms() {
    const session = cookies().get("session")?.value;

    if (!session) {
        throw new Error("Session not found");
    }

    try {
        const response = await fetch(`${process.env.API_URL}/rooms`, {
            cache: "no-cache",
            headers: {
                "Authorization": `Bearer ${session}`
            }
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        
        return { data };

    } catch (error) {
        return { error: error.message || "Something went wrong" };
    }
}

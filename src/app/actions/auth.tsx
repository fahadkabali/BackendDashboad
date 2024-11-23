"use server"
import { createClient } from "@/utils/supabase/server"

export const authenticate = async (email: string, password: string) => {
    try{

        const supabase = createClient();

        const {error} = await (await supabase).auth.signInWithPassword({
            email,
            password
        })
        if(error){
            throw error
        }
    }catch(error){
        console.log('AUTHENTICATION ERROR',error);
        throw error
    }
}
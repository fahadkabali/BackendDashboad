import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { ADMIN } from "../constants/constants";

export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const supabase = createClient();
    const { data: authData } = await (await supabase).auth.getUser();
    if(authData?.user) {
        const { data, error } = await (await supabase)
        .from('users')
        .select('*')
        .eq('id', authData.user.id)
        .single();
        if(error || !data) {
            console.log('Error fetching user data',error);
            return
        }
        if(data.type === ADMIN) {
            return redirect('/admin');
        }
    }
    return (
        <>
            {children}
        </>
    );
}
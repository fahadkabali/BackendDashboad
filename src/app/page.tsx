
export default function Home() {
  console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log('Supabase Anon Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return (
    <div>
      <h1>Welcome Page</h1>
    </div>
  );
}

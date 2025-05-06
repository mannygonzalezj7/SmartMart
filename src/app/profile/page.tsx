import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/server";
import { logout } from "./actions";
export default async function Profile() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <>
      <p>Hello {data.user.email}</p>
      <p>These are where your account details will go!</p>
      <form action={logout}>
        <button className="button-main" type="submit">
          Log Out
        </button>
      </form>
    </>
  );
}

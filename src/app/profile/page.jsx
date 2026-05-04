
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;


  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">

        {/* Image */}
        <div className="flex justify-center mb-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-teal-500">
            <img
              src={user.image?.trim() || "/user.png"}
              alt={user.name || "User"}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold text-gray-800">
          {user.name}
        </h1>

        {/* Email */}
        <p className="text-gray-500 mt-1">
          {user.email}
        </p>

        {/* Badge */}
        <div className="mt-4">
          <span className="bg-teal-100 text-teal-700 text-xs px-3 py-1 rounded-full">
            Active Member
          </span>
        </div>

        <div className="mt-5">
          <Link href={"/profileUpdate"} >

            <button className="btn">
              Edit profile
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;
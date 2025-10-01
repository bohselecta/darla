import ProfileForm from "@/components/ProfileForm";

export default async function ProfilePage() {
  // If you have auth, pull initial fields for the signed-in user here.
  const initial = {}; // placeholder
  return <ProfileForm initial={initial} />;
}

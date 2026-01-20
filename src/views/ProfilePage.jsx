import ProfileOverview from "@/components/profile/ProfileOverview";
import { useAuth } from "@/contexts/AuthContext";

export default function ProfilePage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (!user) {
    return <div className="p-6">User not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <ProfileOverview />
    </div>
  );
}

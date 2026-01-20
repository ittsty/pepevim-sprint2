import { useState } from "react";
import { updateProfile } from "@/services/user";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfileOverview() {
  const { user, checkAuth, hdlLogout } = useAuth();
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
  });
  const [saving, setSaving] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateProfile(user._id, form);
      await checkAuth(); // 🔁 sync user
      setEditMode(false);
    } catch (err) {
      console.error(err);
      alert("Update failed");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    const res = await hdlLogout();

    if (res.success) {
      navigate("/");
    } else {
      alert("Logout failed");
    }

    setLoggingOut(false);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">My Profile</h2>
        {!editMode && (
          <button
            className="text-sm px-4 py-1 border rounded"
            onClick={() => setEditMode(true)}
          >
            Edit
          </button>
        )}
      </div>

      {/* First name */}
      <div>
        <p className="text-sm text-gray-500">First name</p>
        {editMode ? (
          <input
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        ) : (
          <p>{user.first_name}</p>
        )}
      </div>

      {/* Last name */}
      <div>
        <p className="text-sm text-gray-500">Last name</p>
        {editMode ? (
          <input
            name="last_name"
            value={form.last_name}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        ) : (
          <p>{user.last_name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <p className="text-sm text-gray-500">Email</p>
        <p className="text-gray-700">{user.email}</p>
      </div>

      {/* Action buttons */}
      {editMode ? (
        <div className="flex gap-3">
          <button
            className="px-4 py-2 bg-black text-white rounded hover:cursor-pointer"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save"}
          </button>
          <button
            className="px-4 py-2 border rounded hover:cursor-pointer"
            onClick={() => setEditMode(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="pt-6 border-t flex justify-between items-center">
          <p className="text-sm text-gray-400">
            Logged in as <span className="font-medium">{user.email}</span>
          </p>

          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 hover:cursor-pointer"
          >
            {loggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>
      )}
    </div>
  );
}

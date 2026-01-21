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

  // ✅ TOAST (local state)
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success", // success | error
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });

    // auto close
    setTimeout(() => {
      setToast({ show: false, message: "", type });
    }, 2500);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateProfile(user._id, form);
      await checkAuth();
      setEditMode(false);
      showToast("Profile updated successfully ✨", "success");
    } catch (err) {
      console.error(err);
      showToast("Update failed ❌", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    const res = await hdlLogout();

    if (res.success) {
      showToast("Logged out successfully 👋", "success");
      setTimeout(() => navigate("/"), 800);
    } else {
      showToast("Logout failed ❌", "error");
    }

    setLoggingOut(false);
  };

  return (
    <>
      {/* 🔔 TOAST */}
      {toast.show && (
        <div
          className={`
            fixed bottom-6 right-6 z-50
            px-5 py-3 rounded-xl shadow-lg
            text-sm font-medium
            transition-all duration-300
            ${
              toast.type === "success"
                ? "bg-white text-primary"
                : "bg-red-500 text-white"
            }
          `}
        >
          {toast.message}
        </div>
      )}

      {/* CARD */}
      <div
        className="
          bg-white rounded-2xl p-6 sm:p-8
          shadow-sm border
          max-w-md mx-auto
          transition-all duration-300
        "
      >
        {/* Header + Avatar */}
        <div className="flex items-center gap-4 pb-4 border-b">
          <div className="
            w-14 h-14 rounded-full
            bg-gray-200
            flex items-center justify-center
            text-lg font-semibold text-gray-600
          ">
            {user.first_name?.[0]}
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold text-primary">My Profile</h2>
            <p className="text-sm text-gray-500">
              Personal information
            </p>
          </div>

          {!editMode && (
            <button
              onClick={() => setEditMode(true)}
              className="text-sm px-3 py-1.5 border rounded-full hover:bg-gray-100 hover:cursor-pointer"
            >
              Edit
            </button>
          )}
        </div>

        {/* Body */}
        <div className="mt-6 space-y-5">
          <div>
            <label className="text-xs text-gray-400 uppercase">
              First name
            </label>
            {editMode ? (
              <input
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            ) : (
              <p>{user.first_name}</p>
            )}
          </div>

          <div>
            <label className="text-xs text-gray-400 uppercase">
              Last name
            </label>
            {editMode ? (
              <input
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            ) : (
              <p>{user.last_name}</p>
            )}
          </div>

          <div>
            <label className="text-xs text-gray-400 uppercase">
              Email
            </label>
            <p className="bg-gray-50 px-4 py-2 rounded-lg">
              {user.email}
            </p>
          </div>
        </div>

        {/* Actions */}
        {editMode ? (
          <div className="flex gap-3 pt-6">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex-1 bg-primary hover:opacity-70 text-white py-2 rounded-lg hover:cursor-pointer"
            >
              {saving ? "Saving..." : "Save"}
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="flex-1 border py-2 rounded-lg hover:cursor-pointer hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="mt-8 pt-6 border-t flex justify-between items-center">
            <p className="text-sm text-gray-400">
              Logged in as {user.email}
            </p>
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="text-sm border border-red-500 text-red-600 px-4 py-2 rounded-lg
              hover:cursor-pointer hover:bg-red-50"
            >
              {loggingOut ? "Logging out..." : "Logout"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

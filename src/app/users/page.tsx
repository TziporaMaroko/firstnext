"use client";
import { useState, useEffect } from "react";
import UserCard from "@/components/UserCard/UserCard"; // Assume you create a UserCard component for displaying user data
import AddUserForm from "@/components/AddUserForm/AddUserForm"; // Assume you create a form for adding users

type User = {
  _id: string;
  agent_name: string;
  phone: string;
};

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      const data: User[] = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const addUser = async (newUser: { agent_name: string; phone: string }) => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) throw new Error("Failed to add user");
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      const response = await fetch(`/api/users/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete user");
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const updateUser = async (updatedUser: User) => {
    const userData = {
      agent_name: updatedUser.agent_name,
      phone: updatedUser.phone,
    };
    try {
      const response = await fetch(`/api/users/${updatedUser._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error("Failed to update user");
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="main-container">
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="add-button"
        >
          Add User
        </button>
      )}

      {showForm && <AddUserForm onAdd={addUser} onClose={() => setShowForm(false)} />}

      <div className="user-list">
        {users.length > 0 ? (
          users.map((user) => (
            <UserCard key={user._id} user={user} onDelete={deleteUser} onUpdate={updateUser} />
          ))
        ) : (
          <p>No users available</p>
        )}
      </div>
    </div>
  );
}

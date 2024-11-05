// components/UserCard/UserCard.tsx
import { useState } from "react";
import styles from "./UserCard.module.css"; // Import the CSS module

type User = {
  _id: string;
  agent_name: string;
  phone: string;
};

type UserCardProps = {
  user: User;
  onDelete: (id: string) => void;
  onUpdate: (user: User) => void;
};

export default function UserCard({ user, onDelete, onUpdate }: UserCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  const handleDelete = () => {
    onDelete(user._id);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setUpdatedUser({ ...user }); // Reset form to the original values on toggle
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSave = () => {
    onUpdate(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className={styles.userCard}>
      {isEditing ? (
        <>
          <input
            type="text"
            name="agent_name"
            value={updatedUser.agent_name}
            onChange={handleChange}
            placeholder="Agent Name"
            className={styles.input}
          />
          <input
            type="text"
            name="phone"
            value={updatedUser.phone}
            onChange={handleChange}
            placeholder="Phone"
            className={styles.input}
          />
          <button onClick={handleSave} className={styles.saveButton}>
            Save
          </button>
          <button onClick={handleEditToggle} className={styles.deleteButton}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <strong>Agent Name:</strong> {user.agent_name} <br />
          <strong>Phone:</strong> {user.phone} <br />
          <button onClick={handleEditToggle} className={styles.editButton}>
            Edit
          </button>
          <button onClick={handleDelete} className={styles.deleteButton}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

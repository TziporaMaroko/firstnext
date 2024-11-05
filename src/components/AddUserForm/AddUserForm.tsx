// components/AddUserForm/AddUserForm.tsx
import { useState } from "react";
import styles from "./AddUserForm.module.css"; // Import the CSS module

type AddUserFormProps = {
  onAdd: (newUser: { agent_name: string; phone: string }) => void;
  onClose: () => void;
};

export default function AddUserForm({ onAdd, onClose }: AddUserFormProps) {
  const [userDetails, setUserDetails] = useState({ agent_name: "", phone: "" });

  const handleSubmit = () => {
    onAdd(userDetails);
    onClose();
    setUserDetails({ agent_name: "", phone: "" });
  };

  return (
    <div className={styles.addUserForm}>
      <h2>Add New User</h2>
      <input
        type="text"
        placeholder="Agent Name"
        value={userDetails.agent_name}
        onChange={(e) => setUserDetails({ ...userDetails, agent_name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone"
        value={userDetails.phone}
        onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
      />
      <button onClick={handleSubmit}>Add User</button>
      <button onClick={onClose} className={styles.cancelButton}>Cancel</button>
    </div>
  );
}

import React, { useState } from "react";
import ProfileCard from "./Profile/ProfileCard";
import EditProfileCard from "./Profile/EditProfileCard";
const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      {isEdit ? (
        <EditProfileCard onCancel={() => setIsEdit(false)} />
      ) : (
        <ProfileCard onEdit={() => setIsEdit(true)} />
      )}
    </div>
  );
};

export default Profile;

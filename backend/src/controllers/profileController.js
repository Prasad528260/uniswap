import User from "../models/user.js";

// * Update Profile
export const updateProfile = async (req, res, next) => {
  try {
    const user = req.user;
    const { firstName, lastName, profilePicture } = req.body;
    const {_id} = user;
    if (!user) {
      console.log("ERROR : USER NOT FOUND");
      return res.status(400).json({ message: "User Not Found" });
    }
    // what if user wants to update some fields and not all
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        firstName: firstName || user.firstName,
        lastName: lastName || user.lastName,
        profilePicture: profilePicture || user.profilePicture,
      },
      { new: true }
    ).select("firstName lastName department profilePicture");
    console.log(updatedUser);
    
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("ERROR : UPDATE PROFILE FAILED", error.message);
    res.status(400).json({ message: "Update Profile Failed" });
  }
};

// * Get Profile
export const getProfile = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      console.log("ERROR : USER NOT FOUND");
      return res.status(400).json({ message: "User Not Found" });
    }
    const { firstName, lastName, department, profilePicture } = user;
    res.status(200).json({ firstName, lastName, department, profilePicture });
  } catch (error) {
    console.log("ERROR : GET PROFILE FAILED", error.message);
    res.status(400).json({ message: "Get Profile Failed" });
  }
};

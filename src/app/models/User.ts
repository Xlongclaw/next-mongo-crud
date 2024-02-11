import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  userNotes: [
    {
      fistTopic: String,
      subTopics: [
        {
          secondTopic: String,
          subTopics: [
            {
              thirdTopic: String,
              subTopics: [
                {
                  fourthTopic: String,
                  data: String,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;

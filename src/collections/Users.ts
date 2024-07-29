import {CollectionConfig} from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  labels: {
    plural: "Users",
    singular: "Users",
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;

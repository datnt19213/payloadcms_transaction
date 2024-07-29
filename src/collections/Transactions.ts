import {CollectionConfig} from "payload/types";

const Transactions: CollectionConfig = {
  slug: "Transactions",
  labels: {
    singular: "Transactions",
    plural: "Transactions",
  },
  access: {
    read: () => true,
    create: () => false,
    update: () => false,
    delete: () => false,
  },
  fields: [
    {
      name: "fieldName",
      label: "fieldLabel",
      type: "text",
    },
  ],
  timestamps: true,
};

export default Transactions;

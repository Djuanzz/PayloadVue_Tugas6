import { CollectionConfig } from "payload/types";

const Contact: CollectionConfig = {
  slug: "contact",
  auth: {
    disableLocalStrategy: true,
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "nama",
      type: "text",
      required: true,
    },
    {
      name: "telp",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "alamat",
      type: "text",
      required: true,
    },
  ],
};

export default Contact;

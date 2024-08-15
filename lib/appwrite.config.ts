import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('66ba30ea00022e7aa3da')
.setKey('e3c3de0230e50b8334ac26499aa091e1893d3b04aadcb03383ae5e739b10f31201c7b7c7a1d8156b1647408b99beab964ae97fb83329b590b6372d398c286bc9fc6da54d43dbc16885d178b6e6e718b7384a0d80b7a9d549afae4dcb22e876f8d098c76f0843323d600d040851144269d266685397d6a42019528802c9fa3a80');

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);

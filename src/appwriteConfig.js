import { Client,Account } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6692aed2000fcc1b71c2')

export const account = new Account(client);

export default client;  
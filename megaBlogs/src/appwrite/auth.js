import { use } from "react";
import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account = new Account(client);
  constructor() {
    this.client
      .setEndpoint(conf.appwriteURl)
      .setProject(conf.appwriteProjectId);
    this.account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (userAccount) {
        this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (err) {
      throw err;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (err) {
      throw err;
    }
    return null
  }

  async logout(){
    try {
        return await this.account.deleteSessions()
    } catch (error) {
        throw error
    }
  }
}

const authService = new AuthService();

export default authService;

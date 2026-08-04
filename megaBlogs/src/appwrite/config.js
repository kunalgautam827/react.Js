import conf from "../conf/conf.js";
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  tablseDB;
  storage;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteURl)
      .setProject(conf.appwriteProjectId);
    this.storage = new Storage(this.client);
    this.tablseDB = new TablesDB(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.tablseDB.createRow(
        conf.appwriteDatabaseId,
        conf.appwriteTableId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      );
    } catch (error) {
      console.log("appwrite :: createPost :: error ", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.tablseDB.updateRow(
        conf.appwriteDatabaseId,
        conf.appwriteTableId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        },
      );
    } catch (error) {
      console.log("appwrite :: updatePost :: error ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.tablseDB.deleteRow(
        conf.appwriteDatabaseId,
        conf.appwriteTableId,
        slug,
      );
      return true
    } catch (error) {
      console.log("appwrite :: deletePost :: error ", error);
      return false
    }
  }

  async getPost(slug){
    try {
      return await this.tablseDB.getRow(
        conf.appwriteDatabaseId,
        conf.appwriteTableId,
        slug,
      );
    } catch (error) {
      console.log("appwrite :: getPost :: error ", error);
    }
  }

  async getPosts(queries = [Query.equal("status","active")]){
    try {
      return await this.tablseDB.listRows(
        conf.appwriteDatabaseId,
        conf.appwriteTableId,
        queries
      );
    } catch (error) {
      console.log("appwrite :: getPosts :: error ", error);
    }
  }

  async uploadFile(file){
    try {
        return await this.storage.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("appwrite service :: uploadFile :: error",error);
        return false
    }
  }

  async deleteFile(fileId){
     try {
        return await this.storage.deleteFile(
           conf.appwriteBucketId,
           fileId
        )
        return true
    } catch (error) {
        console.log("appwrite service :: deleteFile :: error",error);
        return false
    }
  }

  getFilePreview(fileId){
    return this.storage.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
  }
}

export const service = new Service();
export default service;

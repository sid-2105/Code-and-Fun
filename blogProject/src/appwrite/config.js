import conf from '../config/conf';
import {Client, ID, Databases, Storage, Query} from 'appwrite';

export class Service {
    client = new Client();
    databases;
    bucket;

constructor() {
    this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
}

async createPost({title,slug,content,featuredImage,status,userId}) {
    try {
        return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,
                createdAt: Date.now()
        })
        
    } catch (error) {
       console.error(error); 
    }
}

async updatePost(slug, {title, content, featuredImage, status}) {
    try {
        return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug,
            {
                title,
                content,
                featuredImage,
                status
            })
    } catch (error) {
        console.error(error);
    }
}

async deletePost(slug){
    try {
        return await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async getPost(slug){
    try {
        return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async getPosts(queries = [Query.equals("status", "active")]){
    try {
        return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId,queries)
    } catch (error) {
        console.error(error);
    }
}

async uploadFile(file){
    try {
        return await this.bucket.createFile(conf.appwrite.BucketId,ID.unique(),file)
    } catch (error) {
        console.error(error);
        return false;
    }
}

async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(conf.appwriteBucketId,fileId)
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async getFilePreview(fileId){
    try {
        return await this.bucket.getFilePreview(conf.appwriteBucketId,fileId)
    } catch (error) {
        console.error(error);
    }
}

}

const service = new Service();
export default service;
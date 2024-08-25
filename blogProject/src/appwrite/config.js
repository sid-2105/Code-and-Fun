import conf from './config.js';
import {Client, ID, Databases, Storage, Query} from 'appwrite';

export class Service {
    client = new Client();
    databases;
    bucket;

constructor() {
    this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
    this.db = new Databases(this.client);
    this.storage = new Storage(this.client);
}

}

const service = new Service();

export default service;
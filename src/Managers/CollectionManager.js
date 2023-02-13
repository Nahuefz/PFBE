import fs from "fs";
import __dirname from "../utils.js";

export default class CollectionManager {
    constructor(){
        this.path = `${__dirname}/files/collections.json`;
        this.init();
    }

    init = async() => {
        if(!fs.existsSync(this.path)) await fs.promises.writeFile(this.path,JSON.stringify([]));
    }

    readFile = async() => {
        const data = await fs.promises.readFile(this.path,"utf-8");
        return JSON.parse(data);
    }

    getCollections = async() => {
        return this.readFile();
    }

    getCollectionById = async() => {
        const collections = await this.readFile();
        const collection = collections.find(col => col.id === id);
        return collection;
    }

    exists = async(id) => {
        const collections = await this.readFile();
        return collections.some(col => col.id === id); 
    }

    addCollection = async () => {
        const collections = await this.readFile();
        const newCollection = {
            id: collections.length === 0 ? 1 : collections[collections.length - 1]. id + 1,
            artworks: []
        }
        collections.push(newCollection);
        await fs.promises.writeFile(this.path,JSON.stringify(collections, null, "\t"))
        return newCollection;
    }
}
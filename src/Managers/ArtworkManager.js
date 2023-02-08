import fs from "fs";
import __dirname from "../utils.js";

export default class ArtoworkManager{
    constructor(){
        this.path = `${__dirname}/files/artworks.json`
        this.init();
    }

    init = async() => {
        if(!fs.existsSync(this.path)) await fs.promises.writeFile(this.path, JSON.stringify([]))
    }
    
    readArtworks = async() => {
        let data = await fs.promises.readFile(this.path, "utf-8");
        return JSON.parse(data);
    }
    getArtworks = () => {
        return this.readArtworks();
    }
    
    getArtworkById = async(id) => {
        const artworks = await this.readArtworks();
        const artwork = artworks.find(aw => aw.id === id);

        return artwork;
    }

    exists = async(id) => {
        let artworks = await this.readArtworks();
        return artworks.some(artwork => artwork.id === id);
    }

    addArtwork = async(artwork) => {
        let artworks = await this.readArtworks();
        if(artworks.length === 0) artwork.id = 1;
        else artwork.id = artworks[artworks.length -1].id + 1;
    }
}

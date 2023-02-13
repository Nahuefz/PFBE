import {Router} from "express";
import CollectionManager from "../Managers/CollectionManager.js";

const router = Router();
const collectionsService = new CollectionManager();

router.get("/", async(req, res) => {
    const collections = await collectionsService.getCollectionById();
    res.send({status: "success", payload: collections})
})

router.get("/:cid", async(req, res) => {
    const {cid} = req.params;
    const id =  parseInt(cid);
    const colection = await collectionsService.getCollectionById(id);
    res.send({status: "success", payload: collection})
})

router.post("/", async(req, res) => {
    const newCollection = await collectionsService.addCollection();
    res.send({status: "success", payload: newCollection})
})

router.post("/:cid/artworks/:aid", async(req, res) => {
    
})

export default router;
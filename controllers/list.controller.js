const itemModel = require("../models/item.model");
const { getListItems } = require("../utils/list.utils");

const getAllLists = async (req, res) => {
    try {
        const listItems = await getListItems();
        res.render('index', {listTitle: "To Do List", listItems: listItems});
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const addListItem = async (req, res) => {
    try {
        const { newItem } = req.body;
        const newListItem = await itemModel.create({item: newItem});
        // res.status(201).json(newListItem);
        const listItems = await getListItems();
        res.status(201).render('index', {listTitle: "To Do List", listItems: listItems});
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const deleteListItems =  async (req, res) => {
    console.log(req);
    try {
        const { _id } = req.body;
        console.log(req.body);
        const item = await itemModel.findById(_id);
        // if (item._id == object._id) {
            await item.deleteOne();
        // }
        res.status(200).render("index", {listTitle: "To Do List", listItems: item});
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

module.exports = {
    getAllLists,
    addListItem,
    deleteListItems
}
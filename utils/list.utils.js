const itemModel = require("../models/item.model");

const getListItems = async () => {
    const listItems = await itemModel.find();
    // console.log(listItems);
    return listItems;
}

module.exports = {
    getListItems
}
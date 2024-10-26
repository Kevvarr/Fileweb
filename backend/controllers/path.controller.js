const routePathService = require('../services/routePath.service');

// Controller
exports.getPath = async (req, res) => {
    try {
        const data = await routePathService.getPath();
        return res.json({success:true, message:"success: ", data})
    } catch (error) {
        return res.json({success:false, message:"Error with server: ", error});
    }
}

exports.createPath = async (req, res) => {
    try {
        const data = req.body;
        const path = await routePathService.createPath(data);
        return res.json({success:true, message:"Path created succesfully", data})
    } catch (error) {
        return res.json({success:false, message:"Error Creating path", error});
    }
}

exports.updatePath = async (req, res) => {
    try {
        const dataParams = req.params;
        const dataBody = req.body;
        const path = await routePathService.updatePath(dataParams, dataBody);
        return res.json({success:true, message:"Path Updated succesfully", dataParams})
    } catch (error) {
        return res.json({success:false, message:"Error Updating path", error});
    }
}

exports.deletePath = async (req, res) => {
    try {
        const dataParams = req.params;
        const path = await routePathService.deletePath(dataParams);
        return res.json({success:true, message:"Path Deleted succesfully"})
    } catch (error) {
        return res.json({success:false, message:"Error Deleting path"});
    }
}
const multer = require("multer")
const fs = require("fs")
const path = require("path")

//storage: where to store the files
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        let loc
        if(!req.user) loc="uploads"
        else loc = path.join("uploads", (req.user._id).toString())
        fs.mkdir(loc, (err)=>{})
        cb(null, loc)
    },
    filename: function(req, file, cb) {
        let name = file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        cb(null, name)
    }
})

const upload = multer({
    storage,
    //limits: limits of the uploaded data
    limits: {fileSize:1500000},
    fileFilter: function(req, file, cb) {
        cb(null, true)
    }
})


module.exports = upload
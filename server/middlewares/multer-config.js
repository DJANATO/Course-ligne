const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null,"files")
    },
    filename: (req,file,callback)=>{
        const name = file.originalname.split(" ").join("_")
        let mimeType = file.mimetype.split("/")
        let extension = mimeType[mimeType.length -1]
        callback(null, name + Date.now() + "." + extension)
    }
})

module.exports = multer({ storage }).single("video");
const dataBase = require('../middlewares/mysql')

exports.getStudentCours=(req,res)=>{
       let selectAllCoursQuery = 'SELECT * FROM Cours;'
       dataBase.query(selectAllCoursQuery,(err,result)=>{
        if(err)
        throw err
        res.status(201).json({result})
       })
}
exports.addStudentCours=(req,res)=>{
       let insertCoursQuery = 'INSERT INTO cours (Name_cours,Description_cours,Media,id_admin) VALUES (?,?,?,1);'
const mediaUrl =`${req.protocol}://${req.get('host')}/files/${req.file.filename}`
       
       dataBase.query(insertCoursQuery,[req.body.name,req.body.descrip,mediaUrl],(err,result)=>{
              if(err){throw(err)}
              res.status(201).json({ message: "insertion réussi"}) 
       })
       /* console.log(req.body.name)
       res.status(200).json({message: "success") */
}
exports.getOneStudentCours= (req,res)=>{
       let selectCoursQuery = 'SELECT * FROM cours where id_cours=?;'

       dataBase.query(selectCoursQuery,[req.body.coursId],(err,result)=>{
              console.log(req.body.coursId)
              if(err){throw(err)}
              res.status(201).json({result})
       })
}
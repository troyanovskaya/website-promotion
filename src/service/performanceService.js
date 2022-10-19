// const {User}=require('./modules/Users.js');
// const jwt=require('jsonwebtoken');
// const bcryptjs=require('bcryptjs');

// async function registerUser(req, res, next){
//     try{
//         let date= JSON.stringify(new Date());
//         console.log(date);
//         const {username, password}=req.body;
//         if(username && password){
//             const user=new User({
//                 username,
//                 password: await bcryptjs.hash(password, 10),
//                 date
//             });
//             user.save();
//             res.status(200).send({"message": "success"});
//         }else{
//             res.status(400).json({"message": "bad request"});
//         }        
//     }catch(e){
//         res.status(500).send({"message": "eternal server error"});
//     }
    
// }
// async function loginUser(req, res, next){ 
//     try{
//         const user=await User.findOne({username: req.body.username});
//         if(user && await bcryptjs.compare(String(req.body.password), String(user.password))){
//             const payload={username:user.username, userId:user._id};
//             const jwtToken=jwt.sign(payload,'secret-key');
//             res.status(200).json({"jwt_token":jwtToken, "message":"success"});
//         }else{
//             res.status(400).send({"message": "bad request"}); 
//         }
//     }catch(e){
//         res.status(500).send({"message": "eternal server error"});
//     }
// }
// async function getUsersInfo(req, res, next){
//     try{
//       const user=await User.findById(req.user.userId);
//       if(user){
//         res.status(200).json({user:{"_id": user._id, "username":user.username, "creationDate":user.date}});
//       }else{
//         res.status(400).send({"message": "bad request"});
//       }
      
//     }catch(e){
//         res.status(500).send({"message": "eternal server error"});
//     }    
// }

// async function deleteUser(req, res, next){
//     try{
//         const user=await User.findById(req.user.userId);
//         user.delete();
//         const user1=await User.findById(req.user.userId);
//         if(!await User.findById(req.user.userId)){
//           res.status(200).send({"message":"success"});
//         }else{
//           res.status(400).send({"message": "bad request"});
//         }        
//       }catch(e){
//           res.status(500).send({"message": "eternal server error"});
//       }
// }

// async function changeUsersPassword(req, res, next){
//     try{
//         const oldPassword=req.body.oldPassword;
//         const newPassword=await bcryptjs.hash(req.body.newPassword, 10);
//         const user=await User.findById(req.user.userId);
//         if(bcryptjs.compare(user.password, oldPassword)){
//             user.password=newPassword;
//             user.save();
//             res.status(200).send({"message":"success"});
//         }else{
//             res.status(400).send({"message": "bad request", "pass":oldPassword, "newPassword":newPassword}); 
//         }
//     }catch(e){
//         res.status(500).send({"message": "eternal server error"});
//     }

// }

// module.exports = {
//     registerUser,
//     loginUser,
//     getUsersInfo,
//     deleteUser,
//     changeUsersPassword
// }
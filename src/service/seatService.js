const {Seat}=require('../Schema/Seat.js');
// const jwt=require('jsonwebtoken');
// const bcryptjs=require('bcryptjs');

async function createSeat(req, res, next){
    try{
        const {hallNumber, seatNumber}=req.body;
        console.log(hallNumber);
        console.log(seatNumber);
        if(hallNumber && seatNumber){
            const seat=new Seat({
                hallNumber, 
                seatNumber
            });
            seat.save();
            res.status(200).send({"message": "success", "seat": seat});
        }else{
            res.status(400).json({"message": "bad request"});
        }        
    }catch(e){
        res.status(500).send({"message": "eternal server error"});
    }
    
}
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

async function getSeatsFromHall(req, res, next){
    try{
        const hall = req.params.hall;
        const seats=await Seat.find({hallNumber: hall});
        if(seats){
            res.status(200).send({"message":"success", "seats": seats});
        }else{
            res.status(400).send({"message": "bad request"}); 
        }
    }catch(e){
        res.status(500).send({"message": "eternal server error"});
    }

}

module.exports = {
    createSeat,
    getSeatsFromHall
}
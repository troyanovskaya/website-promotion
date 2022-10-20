const {Performance}=require('../Schema/Performance.js');
async function createPerformance(req, res, next){
    try{
        const {performanceName, performanceHall, performanceDate, performanceNumberOfSeats, performanceDuration}=req.body;
        console.log(performanceName);
        if(performanceName && performanceHall && performanceDate && performanceNumberOfSeats && performanceDuration){
            const performance=new Performance({
                performanceName, 
                performanceHall, 
                performanceDate, 
                performanceNumberOfSeats, 
                performanceDuration
            });
            performance.save();
            res.status(200).send({"message": "success", "performance": performance});
        }else{
            res.status(400).json({"message": "bad request"});
        }        
    }catch(e){
        res.status(500).send({"message": "eternal server error"});
    }
    
}
// async function deleteSeat(req, res, next){
//     try{
//         const seat=await Seat.findById(req.body.seatId);
//         seat.delete();
//         if(!await Seat.findById(req.body.seatId)){
//           res.status(200).send({"message":"success"});
//         }else{
//           res.status(400).send({"message": "bad request"});
//         }        
//       }catch(e){
//           res.status(500).send({"message": "eternal server error"});
//       }
// }

// async function getSeatsFromHall(req, res, next){
//     try{
//         const hall = req.params.hall;
//         const seats=await Seat.find({hallNumber: hall});
//         if(seats){
//             res.status(200).send({"message":"success", "seats": seats});
//         }else{
//             res.status(400).send({"message": "bad request"}); 
//         }
//     }catch(e){
//         res.status(500).send({"message": "eternal server error"});
//     }

// }

module.exports = {
    createPerformance
}
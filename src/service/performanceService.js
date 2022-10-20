const {Performance}=require('../Schema/Performance.js');
async function createPerformance(req, res, next){
    try{
        const {performanceName, performanceHall, performanceDate, performanceTime, performanceNumberOfSeats, performanceDuration}=req.body;
        console.log(performanceName);
        if(performanceName && performanceHall && performanceDate && performanceTime && performanceNumberOfSeats && performanceDuration){
            const performance=new Performance({
                performanceName, 
                performanceHall, 
                performanceDate, 
                performanceTime,
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
async function changePerformanceTime(req, res, next){
    try{
        const performance=await Performance.findById(req.body.performanceId);
        if(performance){
          performance.performanceTime = req.body.performanceTime;
          performance.save();
          res.status(200).send({"message":"success", "updatedPerformance": performance});
        }else{
          res.status(400).send({"message": "bad request"});
        }        
      }catch(e){
          res.status(500).send({"message": "eternal server error"});
      }
}

async function deletePerformance(req, res, next){
    try{
        const performance=await Performance.findById(req.body.performanceId);
        performance.delete();
        if(!await Performance.findById(req.body.seatId)){
          res.status(200).send({"message":"success"});
        }else{
          res.status(400).send({"message": "bad request"});
        }        
      }catch(e){
          res.status(500).send({"message": "eternal server error"});
      }
}

async function getPerformanceForDate(req, res, next){
    try{
        const date = req.body.date;
        const performance=await Performance.find({"performanceDate": date});
        if(performance){
          res.status(200).send({"message":"success", "updatedPerformance": performance});
        }else{
          res.status(400).send({"message": "bad request"});
        }        
      }catch(e){
          res.status(500).send({"message": "eternal server error"});
      }
}



module.exports = {
    createPerformance,
    changePerformanceTime,
    deletePerformance,
    getPerformanceForDate
}
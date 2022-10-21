const {Performance}=require('../Schema/Performance.js');
async function createPerformance(req, res, next){
    try{
        const {performanceName, performanceHall, performanceDate, performanceTime, performanceNumberOfSeats, performanceDuration}=req.body;
        const perDate = new Date(performanceDate);
        const today = new Date();
        let isOver = !(perDate>today);        
        if(performanceName && performanceHall && performanceDate && performanceTime && performanceNumberOfSeats && performanceDuration){
            const performance=new Performance({
                performanceName, 
                performanceHall, 
                performanceDate, 
                performanceTime,
                performanceNumberOfSeats, 
                performanceDuration,
                isOver
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

function formatDate(today){
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  return yyyy + '-' + mm + '-' + dd;
}

async function getFuturePerformance(req, res, next){
    try{
        let number = req.params.number;
        let today = new Date();
        let formattedDate = formatDate(today)
        let array=[];
        if (number){
            while (number>0){
                let performance=await Performance.find({"performanceDate": formattedDate});
                array = array.concat(performance);
                number--;
                let tomorrow = new Date(today);
                tomorrow.setDate(tomorrow.getDate() + 1);
                formattedDate = formatDate(tomorrow);
                today=tomorrow;
            }
            res.status(200).send({"message":"success", "performance": array});
        }else{
          res.status(400).send({"message": "bad request"});
        }      
      }catch(e){
          res.status(500).send({"message": "eternal server error"});
      }
}




async function checkIfIsOver(req, res, next){
  try{
      const {performanceId} = req.body;
      const performance = await Performance.findById(performanceId);
      console.log(performanceId);
      if (performance){
        const today = new Date();
        const perDate = performance.performanceDate;
        performance.isOver = !(perDate>today);
        res.status(200).send({"message":"success", "performance": performance});
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
    getPerformanceForDate,
    getFuturePerformance,
    checkIfIsOver
}
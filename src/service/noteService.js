const {Note}=require('../Schema/Note.js');
const {Performance}=require('../Schema/Performance.js');
const {Seat}=require('../Schema/Seat.js');

function formatDate(today){
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return yyyy + '-' + mm + '-' + dd;
}

async function createNote(req, res, next){
    try{
        const {performanceId, seatId, clientName}=req.body;
        const seat = await Seat.findById(seatId);
        const performance = await Performance.findById(performanceId);
        const booked = true;
        let today = new Date();
        let bookDate = formatDate(today)
        if(seat && performance){
            const perDate = new Date(performance.performanceDate);
            if(perDate>today){
                const note=new Note({
                    performanceId, 
                    seatId,
                    booked,
                    clientName,
                    bookDate
                });
                note.save();
                res.status(200).send({"message": "success", "note": note});
            }else{
                res.status(400).send({"message": "you can book a performance not less then 1 day before its date"});
            }

        }else{
            res.status(400).json({"message": "bad request"});
        }        
    }catch(e){
        res.status(500).send({"message": "eternal server error"});
    }
    
}

async function getNotesByname(req, res, next){
    try{
        const {clientName}=req.body;
        console.log(clientName);
        if(clientName){
            const notes = await Note.find({"clientName": clientName});
            res.status(200).send({"message": "success", "note": notes});
        }else{
            res.status(400).json({"message": "bad request"});
        }        
    }catch(e){
        res.status(500).send({"message": "eternal server error"});
    }
    
}
module.exports = {
    createNote,
    getNotesByname
}
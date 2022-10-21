const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Ann:fndt75DSk@cluster0.4skxzza.mongodb.net/website-promotion-performance?retryWrites=true&w=majority');

const noteSchema=mongoose.Schema({
  performanceId:{
    type: String,
    required:true
  },      
  seatId:{
    type:String,
    required:true
  },
  booked:{
    type:Boolean,
    required:true
  },
  clientName:{
    type:String,
    required:false
  },
  bookDate:{
    type: String,
    required:false
  }
});

const Note=mongoose.model('Note', noteSchema);
module.exports={
    Note
}
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Ann:fndt75DSk@cluster0.4skxzza.mongodb.net/website-promotion-performance?retryWrites=true&w=majority');

const seatSchema=mongoose.Schema({
  hallNumber:{
    type: Number,
    required:true
  },      
  seatNumber:{
    type:Number,
    required:true
  }
});

const Seat=mongoose.model('Seat', seatSchema);
module.exports={
    Seat
}
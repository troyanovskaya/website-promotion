const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Ann:fndt75DSk@cluster0.4skxzza.mongodb.net/website-promotion-performance?retryWrites=true&w=majority');

const performanceSchema=mongoose.Schema({
  performanceName:{
    type:String,
    required:true
  },
  performanceHall:{
    type:String,
    required:true
  },
  performanceDate:{
    type: Date,
    required:true
  },
  performanceNumberOfSeats:{
    type:Number,
    required:true
  },
  performanceDuration:{
    type:Number,
    required:true
  }
});

const Performance=mongoose.model('Performance', performanceSchema);
module.exports={
    Performance
}
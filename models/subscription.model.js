import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Subscription name is required'],
        trim: true,
        minLength:2,
        maxLength:100,   // typo fixed: maxLength not maxLenght
    },
    price:{
        type:Number,
        required:[true,'Subscription price is required'],
        min:[0,'Price must be greater than 0']
    },
    currency:{
        type:String,
        enum:['USD','EUR','GBP','RUP'], // added RUP in enum
        default:'RUP'                   // typo fixed: default not defualt
    },
    Frequency:{
        type:String,                     // typo fixed: 'String' → String
        enum:['daily','weekly','monthly','yearly']
    },
    Category:{
        type:String,
        enum:['sports','news','entertainment','lifestyle','technology','finance','politics'],
        required:true,
    },
    payementMethod:{
        type:String,
        required:true,
        trim:true,
    },
    status:{
        type:String,
        enum:['active','cancelled','expired'],
        default:'active'                 // typo fixed: default not defualt
    },
    startDate:{
        type:Date,
        required:true,
        validate:{
            validator:(value)=>value<= new Date(),
            message:'Start date must be in the past'
        }
    },
    renewalDate:{
        type:Date,
        required:true,
        validate:{
            validator:function (value){
                return value> this.startDate;
            },
            message:'Renewal date must be after the start date',
        }
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        index:true,
    }
}, {timestamps : true});

// auto calculate renewal date if missing.
// this part of the code was wrong so i rewrite the code with the help of chatgpt.
subscriptionSchema.pre("save", function (next) {
  if (!this.startDate) {
    this.startDate = new Date();
  }

  if (this.Frequency === "monthly") {
    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setMonth(this.startDate.getMonth() + 1);
  } else if (this.Frequency === "yearly") {
    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setFullYear(this.startDate.getFullYear() + 1);
  }

  next();
});


// ✅ Export a model, not just the schema
const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;

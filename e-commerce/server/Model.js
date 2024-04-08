
// DATABASE CONNECTION WITH MongoDB 
const password = encodeURIComponent("Magnussen@99");
mongoose.connect(`mongodb+srv://Lavanye:${password}@cluster0.dafbsko.mongodb.net/`,{useNewUrlParser:true,useUnifiedTopology:true});

const Schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
})

const Model=new mongoose.model("Product",Schema)
 
module.exports=Model
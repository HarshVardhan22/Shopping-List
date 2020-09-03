let express = require('express');
let app = express();
let mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/list`).then(()=>console.log('Connected to Database'))
                                                .catch(()=> console.log('Error connecting to Database'));
let Schema = mongoose.Schema;

let listSchema = new Schema({
     id : Number,
     name : String,
     price : Number
});

let List = mongoose.model('List', listSchema );
//***************Add Product******//

/*
item = new List({
     id : 1,
     name : "Wheat",
     price : 40
})

item1.save();
*/

//********** DELETE PRODUCT ***********//
/*
async function remove(){
    let result = await List.deleteMany({id:1});
    console.log(result);
}

remove();
*/

app.use(express.static('public'));
app.listen(3000,() => console.log("Connected to 3000"));
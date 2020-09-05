
/*let mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/list`).then(()=>console.log('Connected to Database'))
                                                .catch(()=> console.log('Error connecting to Database'));
let Schema = mongoose.Schema;

let listSchema = new Schema({
     id : Number,
     name : String,
     price : String
});

let List = mongoose.model('List', listSchema );
let list = [];
let id = 1;
//***************Add Product******/

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

//*******Fetching product from user **************//
let express = require('express');
const { userInfo } = require('os');
let app = express();

app.use(express.static('public'));
app.use(express.json());

let list = [];
let id = 1;

app.get ('/list', (req,resp)=> {
    resp.send(list);
})

app.post('/list', (req,resp)=> {
    let newItem = req.body;
    newItem.id = id;
    id++;
    list.push(newItem);
    console.log(list);
    resp.send('Created!'); 
})

function getItemById(idy){
    let numID = +idy;
    for( let i = 0; i<list.length ;i++)
    {
        if(list[i].id === numID)
        {
            return (list[i]);
        }
    };
    
    return (null);
    }

app.put('/list/:id', (req,resp)=> {
    
    let item = getItemById(req.params.id);
    
    if(!item){
        resp.send("No such item found");
     } 
    
    else{ 
        item.itemPrice = req.body.itemPrice;
        resp.send('Updated!');
     }
})

app.delete('/list/:id', (req, resp) => {
    let item = getItemById(req.params.id);
    
    if (!item) {
       
        resp.send("No such item found");
    }
    else{
        list.splice(list.indexOf(item),1);
        for(let i = 0; i<list.length; i++){
            list[i].id = i+1;
            id = i+2;
        }
        resp.send("removed");
    }

})
let port = process.env.PORT || 3000;
app.listen(3000,() => console.log(`Listening ${port}...`));
let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
const {isPasswordCorrect} = require('./Login')
const bcrypt = require('bcryptjs')
app.use(cors());
// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let jobs = [{'id':0,'position': 'Frontend developer','respon':'React Hooks + CSS','quantity': 2, 'salary': 25000},
   {'id':1,'position': 'Backend developer','respon':'Node','quantity': 2, 'salary': 25000},
   {'id':2,'position': 'Fullstack developer','respon':'Node','quantity': 2, 'salary': 40000}

];

const myFunction = async () => {
   const result = isPasswordCorrect(12345)
   if(!result){
    throw new Error('password is not correct please try again')
   }
   console.log('res', result)
}
router.route('/jobs').get((req, res) =>  res.json(jobs) );
app.use("*", (req,res) => res.status(404).send('404 Not found') );
app.listen(80,  () => console.log("Server is running") );
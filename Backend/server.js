// const express = require('express');
// const app = express()
// const http = require('http').Server(app)
// app.use(express.json())
// http.listen(3000,()=>{
//     console.log('server started')
// })



const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/routes');
const expenseRoutes = require('./routes/expenseRoutes');
const incomeRoutes = require('./routes/incomeRoutes');
const cors = require('cors');
const app = express();
const http =require('http').Server(app)
app.use(bodyParser.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/income', incomeRoutes);

app.get('/',(req,res)=>{
    console.log('--',req);
    res.status(200).send({message:"Api is running"})
})
const PORT = process.env.PORT || 8000;
http.listen(8000, () => console.log(`Server running on port ${PORT}`));

const express = require ("express")
const path = require ("path")
const cors = require ("cors")

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/bank", (req, res)=>{

    res.send("ping!")
});

app.use(cors())

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname+"/client/build/index.html"))
})


const port = process.env.PORT || 5000;
app.listen(port ,()=> {
    console.log(`server is up and running on port ${port}`)
})

const mongoose = require("mongoose")

async function main(){
    try{

        mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://thaismferreira42:JzBBMomPDpQ3mDHA@cluster0.kcd6izo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    } catch (error){
        console.log(`Erro: ${error}`);
    }

}

module.exports = main;


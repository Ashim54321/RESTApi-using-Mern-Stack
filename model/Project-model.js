const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  ProjectTitle: {
    type: String,
    required: true,
  },
  Project: [
    {
      image: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
  Technology: [
    {
      Frontend: {
        type: String,
        enum:['ReactJs','NextJs',"Html","AngularJS","Bootstrap"," "],
        default:""
      },
      Backend: {
        type: String,
        enum:['MERN',"php","Laravel","Django","Python","Java"," "],
        default:""
      },
      Database: {
        type: String,
        enum:['MongoDB','MySql',"Sqlite","PostgreSQL"," "],
        default:""

      },
      AddtionalOne: {
        type: String,
        enum:["MaterialUI","MantineUI","ChakraUI","TailwindUL","SASS","TailwindCSS"," "],
        default:" "

      },
      Addtionaltwo: {
        type: String,
        enum:['ReactJs','NextJs',"Html","AngularJS","Bootstrap",,"SASS","TailwindCSS",," "],
        default:" "

      },
      Extra: {
        type: String,
        enum:['NodeJS','ExpressJs',"php","Laravel","Django","Python","Java",,"SASS","TailwindCSS",," "],
        default:""

      },
    },
  ],
});

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;
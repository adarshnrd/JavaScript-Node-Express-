const chalk =require('chalk')
const { argv } = require('yargs')
const yargs =require('yargs')
const add =require('./notes')

//Customize yargs
yargs.version('1.1.0')

//Create add command
yargs.command({
    command:'Add',
    describe:'Add a new Note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body Title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(){
        console.log('Title: ',argv.title)
        console.log('Body: '+argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'remove a node',
    handler:function(){
        console.log("Removing the note");
    }
})

yargs.command({
    command:'read',
    describe:'reading the file',
    handler:function(){
        console.log("reading the file ")
    }
})

yargs.command({
    command:'list',
    describe:"list the file",
    handler:function(){
        console.log("listing the file")
    }
})


// another way to write the c.l
yargs.parse(); 
// console.log(yargs.argv)



// const commmand =process.argv[2]
// console.log(process.argv)

// if(commmand === 'add'){
//     console.log("Adding notes")
// }
// else if(commmand =='remove'){
//     console.log('Removing note!')
// }
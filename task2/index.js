const yargs = require("yargs")
const customers = require('./controllers/customers')

yargs.command({
    command:"add",
    describe:"add new client",
    builder:{
        accNum: {default: Date.now()},
        name: {type:"string", demandoption:true},
        balance: {type:"number", demandoption:true},
    },
    handler: (argv)=>customers.add(argv)
})

yargs.command({
    command:"showAll",
    describe:"show all customers",
    handler: ()=> customers.showAll()
})

yargs.command({
    command:"showCst",
    describe:"show single client",
    builder:{
        searchKey:  { type:"string", demandOption:true },
        searchVal:{type:"string", demandOption:true}
    },
    handler: (argv)=>customers.showCst(argv.searchKey, argv.searchVal)
})

yargs.command({
    command:"edit",
    describe:"edit client",
    builder:{
        searchKey:  { type:"string", demandOption:true },
        searchVal:{type:"string", demandOption:true},
        name:{type:"string"},
        balance:{type:"number"}
    },
    handler: (argv)=>customers.edit(argv)
})

yargs.command({
    command:"remove",
    describe:"remove single client",
    builder:{
        searchKey:  { type:"string", demandOption:true },
        searchVal:{type:"string", demandOption:true}
    },
    handler: (argv)=>customers.remove(argv.searchKey, argv.searchVal)
})

yargs.command({
    command:"addTrans",
    describe:"add new trans to client",
    builder:{
        transT: {type:"string", demandoption:true},
        amount: {type:"number", demandoption:true},
        searchKey:  { type:"string", demandOption:true },
        searchVal:{type:"string", demandOption:true}
    },
    handler: (argv)=>customers.addTrans(argv)
})

yargs.argv


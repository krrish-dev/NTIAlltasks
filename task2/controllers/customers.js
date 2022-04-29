const chalk = require("chalk")
const control = require("./handeljson")
const creatCst = (data) => {
    return { accNum: data.accNum, name: data.name, balance: data.balance, transactions: [{ transT: data.transT, amount: data.amount }] }
}

const printCst = (cst) => {
    console.log(`accNum: ${cst.accNum} - name: ${cst.name} - balance: ${cst.balance}

transactions:
`)
    cst.transactions.forEach(trans => printTrans(trans))
    console.log(`---------------------------------------------------`)
}

const printTrans = (trans) => {
    console.log(`trans type: ${trans.transT} - trans amount: ${trans.amount}
    `)
}

const add = (data) => {
    try {
        const allCsts = control.readJson("cstsdata.json")
        let cst = creatCst(data)
        allCsts.push(cst)
        control.writeJson("cstsdata.json", allCsts)
    }
    catch (error) {
        console.log(error.message)
    }
}

const showAll = () => {
    const allCsts = control.readJson("cstsdata.json")
    allCsts.forEach(cst => printCst(cst))
}

const showCst = (searchKey, searchVal) => {
    try {
        const allCsts = control.readJson("cstsdata.json")
        let cst = searchCsts(allCsts, searchKey, searchVal, "singleCst")
        if (!cst) throw new Error("cst not found")
        printCst(cst)
    }
    catch (e) {
        console.log(e.message)
    }
}

const searchCsts = (allCsts, searchKey, searchVal, searchType = "singleIndex") => {
    if (searchType == 'singleIndex')
        return allCsts.findIndex(Cst => Cst[searchKey] == searchVal)
    else if (searchType == 'singleCst')
        return allCsts.find(Cst => Cst[searchKey] == searchVal)
    else
        return allCsts.filter(Cst => Cst[searchKey] == searchVal)
}

const edit = (data) => {
    try {
        const allCsts = control.readJson("cstsdata.json")
        const index = searchCsts(allCsts, data.searchKey, data.searchVal)
        if (index == -1) throw new Error('not found')
        dataHeaders = ["name", "balance"]
        dataHeaders.forEach(head => {
            if (data[head]) allCsts[index][head] = data[head]
        })
        control.writeJson("cstsdata.json", allCsts)
        console.log('cst updated');
    }
    catch (e) {
        console.log(e.message)
    }
}

const addTrans = (data) => {
    try {
        const allCsts = control.readJson("cstsdata.json")
        const index = searchCsts(allCsts, data.searchKey, data.searchVal)
        if (index == -1) throw new Error('not found')
        operation = {"transT":data.transT,"amount":data.amount}
        allCsts[index].transactions.push(operation)
        if(data.transT == "add") allCsts[index].balance +=data.amount
        else if(data.transT == "withdrow") allCsts[index].balance -=data.amount
        else throw new Error(chalk.red("invalid operation"))
        control.writeJson("cstsdata.json", allCsts)
        console.log('cst updated');
    }
    catch (e) {
        console.log(e.message)
    }
}

const remove = (searchKey, searchVal) => {
    try {
        const allCsts = control.readJson("cstsdata.json")
        let Cst = searchCsts(allCsts, searchKey, searchVal)
        if (Cst == -1) throw new Error("cst not found")
        allCsts.splice(Cst, 1)
        control.writeJson("cstsdata.json", allCsts)
    }
    catch (e) {
        console.log(e.message)
    }
}

module.exports = {
    add,
    showAll,
    showCst,
    edit,
    addTrans,
    remove
}
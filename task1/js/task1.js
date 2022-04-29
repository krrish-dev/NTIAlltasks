const addClient = document.querySelector("#addclient")
const clientInputs = ["name", "initialBalance"]
const transInputs = ["transType", "amount"]
const tableData = document.querySelector("#table-data")
// read from storge
const readStorage = (storagekey = "clients") => {
    let data
    try {
        data = JSON.parse(localStorage.getItem(storagekey)) || []
        if(!Array.isArray(data)) throw new Error("not an array")
    }
    catch (error) {
        data = []
    }
    return data
}
// write to storge
const writeStorage = (data = [], storagekey = "clients") => {
    localStorage.setItem(storagekey, JSON.stringify(data))
}

const drawElement = (parent, ele, cont = null, classes = null, attributes = null) => {
    const elem = document.createElement(ele)
    parent.appendChild(elem)
    if (cont) elem.textContent = cont
    if (classes) elem.classList = classes
    if (attributes) {
        attributes.forEach(attr => {
            elem.setAttribute(attr.attrName, attr.attrVal)
        })
    }
    return elem
}

const showTrans = (mainparent, index, client) => {
    let x=client.transactions.length
    let i = 1
    console.log(x)
    client.transactions.forEach(transaction)
    function transaction() {
        if(i<x){
        const tr = drawElement(mainparent, "tr",null)
        document.querySelector(`#client${index}`).append(tr)
        drawElement(tr, "td", `Account number: ${client.account} | `)
        transInputs.forEach(head => drawElement(tr, "td", `${head}: ${client.transactions[i][head]} |`))
        i++
        }
    }
}

const clientDraw = (client, index, mainparent) => {
    const attr = [ { attrName:"id", attrVal: `client${index}` } ]
    const tr = drawElement(mainparent, "tr",null,null,attr)
    drawElement(tr, "td", index + 1)
    drawElement(tr, "td", client.account)
    clientInputs.forEach(head => drawElement(tr, "td", client[head]))
    console.log(clientInputs)
    const td = drawElement(tr, "td")
    const showBtn = drawElement(td, "button", "show", "btn btn-primary mx-2")
    showBtn.addEventListener("click", (e) => showTrans(mainparent, index, client))
    const makeTrans = drawElement(td, "button", "Make Transaction", "btn btn-primary mx-2")
    makeTrans.addEventListener("click", () => {
        localStorage.setItem("editID", index)
        window.location.href = "trans.html"
    })
}
// add client 
if (addClient) {
    addClient.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log(this.elements.name.value)
        let client = { account: Date.now(), transactions: [] }
        clientInputs.forEach(head => client[head] = this.elements[head].value)
        const allClients = readStorage()
        allClients.push(client)
        writeStorage(allClients)
        this.reset()
        window.location.href = "index.html";
    })
}

if (tableData) {
    const allClients = readStorage()
    tableData.innerHTML = ""
    if (allClients.length == 0) {
        const tr = drawElement(tableData, "tr", null, "alert alert-danger")
        const attr = [{ attrName: "colspan", attrVal: 7 }]
        drawElement(tr, "td", "no clients yet", null, attr)
    }
    else {
        allClients.forEach((client, index) => clientDraw(client, index, tableData))
    }
}
const addtrans = document.querySelector("#addTrans")
if (addtrans) {
    const index = localStorage.getItem("editID")
    console.log(index)
    if (!index) window.location.href = "index.html"
    const allClients = readStorage()
    function add(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        const value = Object.fromEntries(data.entries());
    
        allClients[index].transactions.push(value)

        if(value.transType=="add") allClients[index].initialBalance = Number(allClients[index].initialBalance) + Number(value.amount)

        else  allClients[index].initialBalance = Number(allClients[index].initialBalance) - Number(value.amount)

        writeStorage(allClients)
        window.location.href = "index.html";
    }

    const form = document.querySelector('#addTrans');
    form.addEventListener('submit', add);
  
}


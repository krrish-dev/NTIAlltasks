const fs = require("fs")
const chalk = require("chalk")
const readJson = (file) => {
    let data
    try {
        data = JSON.parse(fs.readFileSync(`db/${file}`))
        if (!Array.isArray(data)) throw new Error()
        console.log(chalk.green('customer fetched'))
    }
    catch (error) {
        console.log(error.message)
        data = []
        console.log(chalk.red('error while reading data'))
    }
    return data
}

const writeJson = (file, data) => {
    try {
        fs.writeFileSync(`db/${file}`, JSON.stringify(data))
        console.log(chalk.green(`customer write to file ${file}`))
    }
    catch (error) {
        console.log(chalk.red("data not saved"))
    }
}

module.exports = { readJson, writeJson }
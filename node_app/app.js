
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
// const log = console.log; 

// const getNotes = require('./notes.js')
// const msg = getNotes();

// console.log(process.argv);
yargs.version('1.1.0')

yargs
  .command(
    'add',
    'add a note',
    function (yargs) {
        return yargs.option('title', {
            alias: 'title',
            describe: 'Note title',
            demandOption: true,
            type: 'string'
          }).option('body', {
            alias: 'body',
            describe: 'Note body',
            demandOption: true,
            type: 'string'
          })
    },
    function (argv) {
        console.log('adding a note', argv)
    }
  )
  .command(
    'remove',
    'remove a note',
    function (yargs) {
        // console.log('yargs',yargs)
    },
    function (argv) {
        console.log('removing a note')
    }
  )
  .command(
    'list',
    'list a note',
    function (yargs) {
        
    },
    function (argv) {
        console.log('listing a note', argv)
    }
  )
  .command(
    'read',
    'read a note',
    function (yargs) {
        // console.log('yargs',yargs)
    },
    function (argv) {
        console.log('reading a note')
    }
  )
  .help()
  .argv

  yargs.parse()
  

// log(yargs.argv);

// log(chalk.blue.underline.bold(validator.isEmail('deepak@abc.com')))

// if (process.argv[2]==="add") {
//     log("Addign note")
// } else if (process.argv[2]==="remove") {
//     log("Removing note")
// } else {
//     log("Incorrect selection")
// }
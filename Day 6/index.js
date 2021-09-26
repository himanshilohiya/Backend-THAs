const { program } = require('commander');
const fs = require('fs/promises');



const x = process.argv[2];




program.command('mkdir <dirname>').action(async(dirname) => {
    try {
        await fs.mkdir(dirname);
    } catch (err) {
        console.log(err)
    }
});



program.command('mkfile <path> <content>').action(async(path, content) => {

    await fs.writeFile(path, content)
});


program.command('readfile <path>').action(async(path) => {

    await fs.readFile(path, 'utf-8')
});


program.command('renameFile <oldfile> <newfile>').action(async(oldfile, newfile) => {

    await fs.rename(oldfile, newfile)
});


program.command('appendFile <path> <content>').action(async(path, content) => {

    await fs.appendFile(path, content)
});


program.command('removefile <path>').action(async(path) => {

    await fs.unlink(path)
});


program.command('removedir <dirname>').action(async(dirname) => {
 

    await fs.rmdir(dirname);

});

program.parse(process.argv);
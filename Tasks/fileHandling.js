const fs = require('fs');


/**
 * 
 * @param {*} file file to read 
 * console the total number of word count present in the file
 */
function countWordsInFile(file)
{
    try
    {
        const data = fs.readFileSync(file,{ encoding: 'utf8', flag: 'r' });

        console.log("The data in the file:", data)

        if(data.length)
        {
            let count =  data.split(" ").length;
            return count;
        }
        return 0;
    }
    catch(e)
    {
        console.log("File missing");
        return -1;
    }
      
}
console.log(countWordsInFile("Tasks/data.text"));
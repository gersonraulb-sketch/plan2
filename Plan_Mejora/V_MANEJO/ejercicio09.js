import fs from 'fs';
if(fs.existsSync('crear3.txt')){
  fs.unlinkSync('crear3.txt');
  console.log("crear3.txt eliminado.");
}else{
  console.log("crear3.txt no existe.");
}
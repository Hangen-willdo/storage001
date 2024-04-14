const fs=require('fs');

const p=new Promise(function(resolve,reject){
    fs.readFile("aaa.txt",(err,data)=>{
        if(err)reject(err);
        resolve(data);
    });

});

p.then(function(value){
    console.log(value.toString());
},function(reason){
    console.log("读取失败！！");
});
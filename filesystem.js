var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    fs.readFile('demofile.html',function(err,data){
        if (err){
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write("Error reading the file: demofile.html");
            res.end();
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        }
    });

    fs.appendFile('appended_function_file.txt', 'This is a sample text', function (err) {
        if (err) throw err;
        res.writeHead(200,{"content-Type":"text/html"});
        console.log("saved");
      });


    
}).listen(8080)
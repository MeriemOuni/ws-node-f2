// import a local module
// const calcul = require("./localModule");
// import core module => installé avec node

// const fs = require("fs");
/// console.log(fs);
/// step 1
// console.log("startinggg ...");
/// step 2
// let data = fs.readFileSync("./file.txt");
// console.log(data.toString());
// step 3
// console.log("finishingg ..");

// const express = require("express");

const http = require("http");
http
	.createServer((request, response) => {
		response.end("hello mahdi");
	})
	.listen(1812);

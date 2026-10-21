var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);


console.log("--- LOCKET JSON DATA --- \n" + JSON.stringify(obj, null, 2));

// Hoặc in riêng User-Agent để kiểm tra
console.log("User-Agent: " + ua);
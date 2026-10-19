const info = {
  time: new Date().toISOString(),
  url: $request.url,
  method: $request.method,
  status: $response.status,
  body: $response.body
};

console.log(JSON.stringify(info));

// gửi về server của bạn để lưu file
$httpClient.post({
  url: "https://coleman-performed-fellowship-dan.trycloudflare.com//rc-log",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(info)
}, () => $done({}));   // $done({}) = trả response nguyên vẹn, app không bị ảnh hưởng
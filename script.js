/*
 * Script bắt và in cấu trúc JSON trên Shadowrocket
 */

// 1. Kiểm tra xem Request/Response có nội dung (body) hay không
if ($response && $response.body) {
    let url = $request.url;
    let body = $response.body;

    console.log("================ [BẮT ĐƯỢC API] ================");
    console.log("URL: " + url);

    try {
        // 2. Chuyển chuỗi Response sang dạng Object JSON
        let obj = JSON.parse(body);
        
        // 3. In ra toàn bộ cấu trúc JSON đã được làm đẹp (định dạng dễ đọc)
        console.log("--- NỘI DUNG JSON RESPONSE ---");
        console.log(JSON.stringify(obj, null, 2));

    } catch (e) {
        // Nếu API trả về dạng Text thường hoặc mã hóa không parse được JSON
        console.log("--- NỘI DUNG TEXT / RAW ---");
        console.log(body);
    }
    
    console.log("================================================");
}

// 4. Cho phép gói tin tiếp tục chảy về App bình thường (không làm gián đoạn App)
$done({});
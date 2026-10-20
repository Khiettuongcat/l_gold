let body = $response.body;

if (body) {
    try {
        let obj = JSON.parse(body);
        
        // Đảm bảo object subscriber tồn tại
        if (obj.subscriber) {
            obj.subscriber.entitlements = obj.subscriber.entitlements || {};
            
            // Bơm quyền Gold giả lập vào response
            obj.subscriber.entitlements["Gold"] = {
                "expires_date": "2099-12-31T23:59:59Z",
                "product_identifier": "locket_299_1m",
                "purchase_date": "2026-01-01T00:00:00Z"
            };
        }
        
        // Trả về JSON đã chỉnh sửa cho ứng dụng
        $done({ body: JSON.stringify(obj) });
    } catch (e) {
        // Nếu parse lỗi thì giữ nguyên response cũ
        $done({});
    }
} else {
    $done({});
}
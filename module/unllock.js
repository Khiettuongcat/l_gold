// 1. Nhận dữ liệu response và parse sang Object
let body = $response.body;

if (body) {
    try {
        let obj = JSON.parse(body);

        // 2. Đảm bảo các nhánh đối tượng cha luôn tồn tại
        if (!obj.subscriber) obj.subscriber = {};
        obj.subscriber.entitlements = obj.subscriber.entitlements || {};
        obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};

        // 3. Khai báo dữ liệu mẫu cho Entitlement (Quyền lợi)
        const entitlementData = {
            "expires_date": "2099-12-31T23:59:59Z",
            "grace_period_expires_date": null,
            "product_identifier": "com.tuongbeso.premium.yearly",
            "purchase_date": "2026-01-01T00:00:00Z"
        };

        // 4. Khai báo dữ liệu mẫu cho Subscription (Lịch sử giao dịch)
        const subscriptionData = {
            "billing_issues_detected_at": null,
            "expires_date": "2099-12-31T23:59:59Z",
            "grace_period_expires_date": null,
            "is_sandbox": false,
            "original_purchase_date": "2026-01-01T00:00:00Z",
            "ownership_type": "PURCHASED",
            "period_type": "normal",
            "purchase_date": "2026-01-01T00:00:00Z",
            "store": "app_store",
            "unsubscribe_detected_at": null
        };

        // 5. THÊM KEY & VALUE VÀO OBJECT
        // Cú pháp gán key động: object[ten_key] = gia_tri
        
        // Thêm Entitlement "Gold"
        obj.subscriber.entitlements["Gold"] = entitlementData;

        // Thêm Subscription tương ứng
        obj.subscriber.subscriptions["com.tuongbeso.premium.yearly"] = subscriptionData;

        // 6. Đóng gói lại thành chuỗi JSON và trả về cho Proxy
        $done({ body: JSON.stringify(obj) });

    } catch (e) {
        // Nếu parse lỗi thì giữ nguyên response ban đầu
        console.log("Error parsing JSON: " + e);
        $done({});
    }
} else {
    $done({});
}
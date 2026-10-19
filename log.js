// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
}

// =========   Phần cố định  ========= // 
// =========  @Ohoang7 ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);
obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
var tuongbeso={
    is_sandbox:!1,
    ownership_type:"PURCHASED",
    billing_issues_detected_at:null,
    period_type:"normal",
    expires_date:"2099-12-18T01:04:17Z",
    grace_period_expires_date:null,
    unsubscribe_detected_at:null,
    original_purchase_date:"2024-07-28T01:04:18Z",
    purchase_date:"2024-07-28T01:04:17Z",
    store:"app_store"},
    vuong2023={
        grace_period_expires_date:null,
        purchase_date:"2024-07-28T01:04:17Z",
        product_identifier:"com.tuongbeso.premium.yearly",
        expires_date:"2099-12-18T01:04:17Z"};
        const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];
            s?(vuong2023.product_identifier=s,obj.subscriber.subscriptions[s]=tuongbeso):
            obj.subscriber.subscriptions["com.tuongbeso.premium.yearly"]=tuongbeso,obj.subscriber.entitlements[e]=vuong2023}else obj.subscriber.subscriptions["com.tuongbeso.premium.yearly"]=tuongbeso,obj.subscriber.entitlements.pro=vuong2023;$done({body:JSON.stringify(obj)});
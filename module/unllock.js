var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);


if (ua.includes("Locket")) {
    obj.Attention = "Chúc mừng bạn! Vui lòng không sử dụng chúng dưới mục đích thương mại!";
    obj.entries = obj.entries || {};

    // ============================================================
    // 1. CẤU HÌNH GOLD, FEATURE GATES & PAYWALL
    // ============================================================
    Object.assign(obj.entries, {
        feature_gates: JSON.stringify({
            app_icon_picker: "enabled",
            camera_roll: "enabled",
            camera_theme: "enabled",
            locket_views: "enabled",
            long_captions: "enabled",
            longer_video: "enabled",
            unlimited_friends: "enabled",
            priority_support: "enabled",
            profile_badge: "enabled",
            remove_ads: "enabled",
            video: "enabled",
            custom_widget_frames: "enabled",
            streak_recovery: "enabled"
        }),
        upsell_features: JSON.stringify({
            app_icon_picker: true,
            camera_roll: true,
            camera_theme: true,
            locket_views: true,
            remove_ads: true,
            custom_widget_frames: true
        }),
        paywall_presentation_config: JSON.stringify({
            uid: "paywall_testflight",
            onboarding: false,
            after_sent_moment: false,
            on_foreground: false,
            interval: 2592000,
            profile_banner: true
        }),
        feature_discovery_popup_config: JSON.stringify({
            tag: "LOCKET GOLD ALL FEATURES",
            tag_gradient: true,
            tag_style: "gold_gradient",
            title: "Lên Locket Gold rồi đó 😎",
            feature_set: [
                {
                    title: "Nhớ follow kênh tiktok @duyvinh.09 ✨",
                    body: "Một follow của bạn, một niềm vui của mình 💛",
                }
            ],
            primary_button_title: "Xong rồi nhé!",
            campaign: "locket_gold_welcome_v3",
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59",
            use_local_time_zone: true
        }),
        android_subscribe_gold_button_enabled: "false",
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: "true",
    });
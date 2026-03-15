// كود تشغيل رادار الفزعة وزيادة نقاط النخوة
function requestService(type) {
    // 1. تنبيه المستخدم لبدء البحث
    alert("🔍 جاري البحث في 'رادار الحي' عن أقرب جار متاح...");

    // 2. محاكاة عملية الربط (تأخير لمدة ثانيتين)
    setTimeout(() => {
        alert("✅ تم الربط بنجاح! جارك 'أبو خالد' قبل طلبك وسيكون عندك خلال دقائق.");

        // 3. تحديث نقاط النخوة في الواجهة
        const pointsElement = document.getElementById('points');
        if (pointsElement) {
            let currentPoints = parseInt(pointsElement.innerText) || 0;
            pointsElement.innerText = currentPoints + 10;
        }
    }, 2000);
}
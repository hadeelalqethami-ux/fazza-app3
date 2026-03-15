// دالة إظهار خيارات الرادار عند الضغط على "محتاج غرض"
function showRadarOptions() {
    const optionsDiv = document.getElementById('radar-options');
    optionsDiv.classList.toggle('show'); // إظهار أو إخفاء القائمة
}

// دالة طلب فزعة محددة
function requestFazza(toolName) {
    alert(`🔍 جاري البحث في 'رادار الحي' عن [${toolName}]...`);
    
    // محاكاة عملية الربط (تأخير ثانيتين)
    setTimeout(() => {
        alert(`✅ تم العثور على [${toolName}] عند جارك 'أبو خالد'! جاري فتح الصندوق الذكي رقم 1.`);
        
        // تحديث مؤشر النخوة
        updateNakwaPoints(10);
    }, 2000);
}

// دالة تقديم فزعة
function offerFazza() {
    alert("🌟 كفو! تم تسجيل استعدادك للفزعة. سيتم تنبيهك عند وجود طلب قريب منك.");
    updateNakwaPoints(5); // زيادة النقاط للمبادرة
}

// دالة تحديث مؤشر النخوة
function updateNakwaPoints(pointsToAdd) {
    const pointsElement = document.getElementById('points');
    if (pointsElement) {
        let currentPoints = parseInt(pointsElement.innerText);
        pointsElement.innerText = currentPoints + pointsToAdd;
    }
}

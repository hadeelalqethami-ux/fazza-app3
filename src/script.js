// دالة اختيار الجار وبدء الرحلة
function selectNeighbor(name, tool) {
    // الانتقال للمرحلة 2
    document.getElementById('step-1').classList.remove('active');
    document.getElementById('step-2').classList.add('active');
    
    document.getElementById('target-neighbor').innerText = name;
    document.getElementById('request-detail').innerText = `جاري استعارة [${tool}] عبر الصندوق الذكي..`;

    // بعد 3 ثواني (محاكاة الربط) ننتقل للتقييم
    setTimeout(() => {
        document.getElementById('step-2').classList.remove('active');
        document.getElementById('step-3').classList.add('active');
    }, 3500);
}

// دالة الإنهاء وتحديث السكور
function finalizeExperience() {
    // تحديث السكور
    const scoreVal = document.getElementById('score-value');
    let current = parseInt(scoreVal.innerText);
    scoreVal.innerText = current + 15;
    
    alert("تم توثيق فزعتك! زاد مؤشر النخوة الخاص بك 🚀");
    
    // العودة للبداية
    setTimeout(() => {
        document.getElementById('step-3').classList.remove('active');
        document.getElementById('step-1').classList.add('active');
    }, 1000);
}

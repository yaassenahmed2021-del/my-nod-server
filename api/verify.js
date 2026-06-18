export default function handler(req, res) {
    // 1. السماح بالاتصال من أي مصدر (حل مشكلة الـ CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // 2. معالجة طلب OPTIONS (مهم جداً للمتصفحات)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
}

    // 3. التحقق من المفتاح
    let validKeys = ["PRO-12345", "PRO-67890", "PRO-55555"];

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.method === 'POST') {
        const { key } = req.body;
        const index = validKeys.indexOf(key);

        if (index !== -1) {
            // حذف الكود من القائمة ليصبح غير صالح للاستخدام مرة أخرى
            validKeys.splice(index, 1); 
            return res.status(200).json({ status: 'success', message: 'تم التفعيل بنجاح!' });
        } else {
            return res.status(401).json({ status: 'error', message: 'الكود غير موجود أو تم استخدامه بالفعل' });
        }
    }
    return res.status(405).json({ status: 'error', message: 'الطريقة غير مدعومة' });
}

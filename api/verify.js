export default async function handler(req, res) {
    // إعدادات الـ CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        const { key } = req.body;

        // قائمة المفاتيح المسموح بها فقط
        const validKeys = ["CRR-MM-2026-OLODL", "MSKLI-202678"];

        if (validKeys.includes(key)) {
            // إذا وجد المفتاح
            return res.status(200).json({ status: 'success' });
        } else {
            // إذا لم يوجد، يجب إرجاع status: error صريحة
            return res.status(401).json({ status: 'error', message: 'Invalid key' });
        }
    }

    // إذا تم استدعاء الرابط بطريقة غير POST
    return res.status(404).json({ message: 'Not Found' });
}
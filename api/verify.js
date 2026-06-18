export default function handler(req, res) {
    // 1. السماح بالاتصال من أي مصدر (حل مشكلة الـ CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // 2. معالجة طلب OPTIONS (مهم جداً للمتصفحات)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // 3. التحقق من المفتاح
    if (req.method === 'POST') {
        const { key } = req.body;
        // هنا تضع مفاتيحك الصحيحة
        if (key === "PRO-12345") {
            return res.status(200).json({ status: 'success' });
        } else {
            return res.status(401).json({ status: 'error', message: 'Invalid key' });
        }
    }

    return res.status(404).json({ message: 'Not Found' });
}
// هذا كود بسيط لـ Vercel Function
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { key, deviceId } = req.body;

    // هنا يمكنك وضع قائمة مفاتيحك (في قاعدة بيانات أو حتى مصفوفة بسيطة كبداية)
    const validKeys = ["PRO-12345", "PRO-67890"]; 

    if (validKeys.includes(key)) {
        // إذا كان المفتاح موجوداً، نعتبره مفعلاً
        return res.status(200).json({ status: 'success', message: 'مفتاح صحيح' });
    } else {
        return res.status(403).json({ status: 'error', message: 'مفتاح غير صحيح' });
    }
}
// هذا كود بسيط لـ Vercel Function
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { key, deviceId } = req.body;

    // استخدم الرابط الذي ظهر في Vercel، وتأكد من إضافة /api/verify أو /verify حسب مكان الملف
const SERVER_URL = 'https://project-qp3ee.vercel.app/api/verify'; 

async function checkKey() {
    const key = document.getElementById('licenseKey').value.trim();
    const messageEl = document.getElementById('message');
    
    try {
        messageEl.innerText = "جاري التحقق...";
        
        const response = await fetch(SERVER_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key: key })
        });

        // تحويل الرد إلى JSON
        const data = await response.json();

        if (data.status === 'success') {
            document.getElementById('activation-box').style.display = 'none';
            document.getElementById('login-card').style.display = 'block';
            messageEl.innerText = "تم التفعيل بنجاح!";
        } else {
            messageEl.innerText = "المفتاح غير صحيح!";
        }
    } catch (error) {
        // هذا الخطأ يظهر إذا كان الرابط لا يزال غير صحيح أو هناك مشكلة في الاتصال
        messageEl.innerText = "خطأ: لم يتم الوصول للسيرفر. تأكد من الرابط.";
        console.error("خطأ الاتصال:", error);
    }
}

    // هنا يمكنك وضع قائمة مفاتيحك (في قاعدة بيانات أو حتى مصفوفة بسيطة كبداية)
    const validKeys = ["PRO-12345", "PRO-67890"]; 

    if (validKeys.includes(key)) {
        // إذا كان المفتاح موجوداً، نعتبره مفعلاً
        return res.status(200).json({ status: 'success', message: 'مفتاح صحيح' });
    } else {
        return res.status(403).json({ status: 'error', message: 'مفتاح غير صحيح' });
    }
}
// روابط المتاجر: قم بتعديل الروابط حسب الحاجة
const APP_STORE_URL = "https://apps.apple.com/us/app/shilling-e-wallet/id6541754399";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.qualityconnect.alqutaibi&pcampaignid=web_share";
const DEFAULT_URL = "https://play.google.com/store/apps/details?id=com.qualityconnect.alqutaibi&pcampaignid=web_share";

// دالة تقوم بكشف نوع الجهاز وإعادة التوجيه للرابط المناسب
function redirectBasedOnDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    window.location.href = PLAY_STORE_URL;
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = APP_STORE_URL;
  } else {
    // إعادة التوجيه في حال لم يتطابق مع أي من الشروط أعلاه
    window.location.href = DEFAULT_URL;
  }
}

// تنفيذ الدالة عند تحميل الصفحة
window.onload = redirectBasedOnDevice;

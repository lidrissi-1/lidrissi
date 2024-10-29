function orderWhatsApp(productName) {
    const phoneNumber = "+212609312213";
    const message = `مرحبًا، أود طلب ${productName} من متجر الإدريسي.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function switchToArabic() {
    document.documentElement.lang = 'ar';
    document.body.style.direction = 'rtl';
}

function switchToEnglish() {
    document.documentElement.lang = 'en';
    document.body.style.direction = 'ltr';
}

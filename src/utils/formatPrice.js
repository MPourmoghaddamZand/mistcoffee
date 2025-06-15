/**
 * فرمت کردن قیمت به صورت فارسی با جداکننده سه رقمی
 * @param {number} price - قیمت به عدد
 * @returns {string} - قیمت فرمت شده به فارسی
 */
export const formatPrice = (price) => {
  if (!price || price === 0) return '۰';
  
  // تبدیل عدد به رشته با جداکننده سه رقمی
  const formattedNumber = new Intl.NumberFormat('fa-IR').format(price);
  
  return formattedNumber;
};

/**
 * تبدیل اعداد انگلیسی به فارسی
 * @param {string} str - رشته شامل اعداد انگلیسی
 * @returns {string} - رشته با اعداد فارسی
 */
export const toPersianDigits = (str) => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return str.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

/**
 * فرمت کردن قیمت با اعداد فارسی
 * @param {number} price - قیمت به عدد
 * @returns {string} - قیمت فرمت شده با اعداد فارسی
 */
export const formatPersianPrice = (price) => {
  const formatted = formatPrice(price);
  return toPersianDigits(formatted);
};

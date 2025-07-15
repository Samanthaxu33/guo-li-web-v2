// language.js

function setLanguage(lang) {
  localStorage.setItem('language', lang);
  applyLanguage();
}

function applyLanguage() {
  const lang = localStorage.getItem('language') || 'en';
  const zhElements = document.querySelectorAll('.zh');
  const enElements = document.querySelectorAll('.en');

  zhElements.forEach(el => {
    el.style.display = lang === 'zh' ? 'inline' : 'none';
  });
  enElements.forEach(el => {
    el.style.display = lang === 'zh' ? 'none' : 'inline';
  });

  // 设置 select 菜单文字（仅 contact 页面有）
  const enquirySelect = document.getElementById("enquirySelect");
  if (enquirySelect) {
    const optionsEn = [
      "Please Select",
      "Request a Quote",
      "Hauling Service Inquiry",
      "Excavation / Site Work Inquiry",
      "Material Delivery Inquiry",
      "Asphalt / Concrete Removal Inquiry",
      "Pool Digging or Removal",
      "Snow Hauling Service",
      "General Question",
      "Other"
    ];
    const optionsZh = [
      "请选择",
      "申请报价",
      "运输服务咨询",
      "挖掘 / 场地清理咨询",
      "砂石材料送货咨询",
      "沥青 / 水泥清理咨询",
      "泳池挖掘 / 填埋咨询",
      "雪堆清运服务",
      "其他问题咨询",
      "其他"
    ];
    const labels = lang === 'zh' ? optionsZh : optionsEn;
    [...enquirySelect.options].forEach((opt, i) => {
      opt.textContent = labels[i];
    });
  }

  // 设置 placeholder（仅 contact 页面有）
  const addressInput = document.getElementById('addressInput');
  const cityInput = document.getElementById('cityInput');
  const postalInput = document.getElementById('postalInput');

  if (addressInput) {
    addressInput.placeholder = lang === 'zh' ? '街道地址' : 'Street Address';
  }
  if (cityInput) {
    cityInput.placeholder = lang === 'zh' ? '城市' : 'City';
  }
  if (postalInput) {
    postalInput.placeholder = lang === 'zh' ? '邮政编码' : 'Postal Code';
  }

  // 更新按钮文字（可选）
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.textContent = lang === 'zh' ? 'English / 中文' : 'English / 中文';
  }
}

function switchLanguage() {
  const current = localStorage.getItem('language') || 'en';
  const newLang = current === 'en' ? 'zh' : 'en';
  setLanguage(newLang);
}

// 页面加载时应用语言
window.addEventListener('DOMContentLoaded', () => {
  applyLanguage();
});


// ✅ Hero 动画逻辑（原本每页内联，现在统一放在这里）
document.addEventListener("DOMContentLoaded", () => {
  const heroLines = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-tagline');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // 支持重复播放
      }
    });
  }, { threshold: 0.3 });

  heroLines.forEach(el => observer.observe(el));
});

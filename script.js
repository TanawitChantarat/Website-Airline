// Current Application State
let currentTab = 'booking';
let currentLang = 'th'; // Default language: 'th' or 'en'

// Language Translations Dictionary
const translations = {
  th: {
    navBooking: 'จองตั๋ว',
    navExplore: 'สำรวจทริป',
    navTicket: 'ตั๋วของฉัน',
    loginBtn: 'เข้าสู่ระบบ',
    heroTitle: 'ค้นหาเที่ยวบินที่ใช่ในแบบคุณ',
    heroDesc: 'YOUR FLIGHT, YOUR WAY — ค้นหาเที่ยวบินตาม Vibe หรือเช็กทิศมงคลประจำราศี',
    placeholder: 'พิมพ์สิ่งที่คุณต้องการ เช่น \'อยากไปเชียงใหม่ศุกร์นี้ บินเช้า สายมู\'',
    searchBtn: 'ค้นหาด้วย AI',
    popularTitle: 'เที่ยวบินยอดนิยม',
    bangkok: 'กรุงเทพฯ',
    chiangmai: 'เชียงใหม่',
    phuket: 'ภูเก็ต',
    khonkaen: 'ขอนแก่น',
    flight1Title: 'บินเช้า รับพลังบวกดอยสุเทพ',
    flight2Title: 'ทริปทะเลรับลมเย็นส้นเย็น',
    flight3Title: 'บินกลับบ้านสบายใจ สไตล์ไทบ้าน',
    dep: 'ออกเดินทาง',
    arr: 'ถึง',
    currency: 'บาท',
    perPerson: '/ ท่าน',
    bookBtn: 'สำรองที่นั่งนี้',
    exploreTitle: '✨ ค้นหาจุดหมายตามดวง & Vibe Travel',
    exploreDesc: 'เลือกการเดินทางที่ส่งเสริมพลังงานบวกและเข้ากับสไตล์คุณที่สุด',
    vibe1Title: 'สายมู & เสริมพลังชีวิต',
    vibe1Desc: 'เน้นไหว้พระ ขอพรโชคลาภ การงาน งานปัง เงินเข้า',
    vibe2Title: 'สายชิลล์ & ฮีลใจ',
    vibe2Desc: 'รับลมทะเล นั่งคาเฟ่ ปล่อยใจไปกับธรรมชาติ',
    passengerLbl: 'ผู้โดยสาร / Passenger',
    passengerVal: 'คุณผู้โดยสารเกียรติยศ',
    depTimeLbl: 'เวลาเดินทาง',
    seatLbl: 'ที่นั่ง / Seat',
    statusLbl: 'สถานะ',
    statusVal: 'ยืนยันแล้ว',
    gateReady: 'พร้อมสำหรับการเดินทาง (Show to Gate)',
    modalLoginTitle: 'เข้าสู่ระบบ KookKook',
    modalLoginDesc: 'จัดการเที่ยวบินและสิทธิพิเศษ FlightMate',
    loginFieldUser: 'อีเมล หรือ เบอร์โทรศัพท์',
    loginFieldPass: 'รหัสผ่าน',
    aiResultTitle: 'วิเคราะห์ทริปโดย AI',
    aiResultMatch: '✨ พบเที่ยวบินฤกษ์ดีตรงกับ Vibe ของคุณ: DMK ➔ CNX (KK-104)',
    aiResultBookBtn: 'จองเที่ยวบินนี้ทันที'
  },
  en: {
    navBooking: 'Book Flight',
    navExplore: 'Explore Trips',
    navTicket: 'My Ticket',
    loginBtn: 'Log In',
    heroTitle: 'Find the Right Flight for Your Vibe',
    heroDesc: 'YOUR FLIGHT, YOUR WAY — Search by travel vibe or auspicious horoscope directions',
    placeholder: 'Type your desire, e.g. \'Chiang Mai this Friday morning, spiritual vibe\'',
    searchBtn: 'AI Search',
    popularTitle: 'Popular Routes',
    bangkok: 'Bangkok',
    chiangmai: 'Chiang Mai',
    phuket: 'Phuket',
    khonkaen: 'Khon Kaen',
    flight1Title: 'Morning flight to absorb Doi Suthep positive energy',
    flight2Title: 'Relaxing beach getaway with evening breeze',
    flight3Title: 'Cozy flight back home, local lifestyle style',
    dep: 'Dep',
    arr: 'Arr',
    currency: 'THB',
    perPerson: '/ person',
    bookBtn: 'Book This Flight',
    exploreTitle: '✨ Explore Destinations by Vibe & Luck',
    exploreDesc: 'Choose journeys that boost positive energy and fit your lifestyle',
    vibe1Title: 'Spiritual & Prosperity Boost',
    vibe1Desc: 'Focus on temples, blessing for wealth, luck, and career success',
    vibe2Title: 'Chill & Healing Trip',
    vibe2Desc: 'Sea breeze, cozy cafes, and unwinding in nature',
    passengerLbl: 'Passenger Name',
    passengerVal: 'Honored Passenger',
    depTimeLbl: 'Departure Time',
    seatLbl: 'Seat',
    statusLbl: 'Status',
    statusVal: 'Confirmed',
    gateReady: 'Ready for Boarding (Show to Gate)',
    modalLoginTitle: 'Log in to KookKook',
    modalLoginDesc: 'Manage your flights and FlightMate privileges',
    loginFieldUser: 'Email or Phone Number',
    loginFieldPass: 'Password',
    aiResultTitle: 'AI Trip Analysis',
    aiResultMatch: '✨ Perfect flight matching your Vibe found: DMK ➔ CNX (KK-104)',
    aiResultBookBtn: 'Book This Flight Now'
  }
};

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  closeModal();
  updateLanguageUI();
});

// Toggle Language Logic (TH <-> EN)
function toggleLanguage() {
  currentLang = (currentLang === 'th') ? 'en' : 'th';
  
  // Update Language Button Text & Flag
  const langText = document.getElementById('langText');
  const langFlag = document.querySelector('.lang-flag');
  if (langText && langFlag) {
    langText.innerText = currentLang.toUpperCase();
    langFlag.innerText = currentLang === 'th' ? '🇹🇭' : '🇬🇧';
  }

  updateLanguageUI();
}

// Apply translations across all elements with [data-i18n]
function updateLanguageUI() {
  const dict = translations[currentLang];

  // Translate all text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  // Translate Search Input Placeholder
  const searchInput = document.getElementById('promptInput');
  if (searchInput && dict.placeholder) {
    searchInput.placeholder = dict.placeholder;
  }
}

// Tab Switcher
function switchTab(tabName) {
  currentTab = tabName;

  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.add('hidden'));

  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => btn.classList.remove('active'));

  const targetTab = document.getElementById(`tab-${tabName}`);
  if (targetTab) {
    targetTab.classList.remove('hidden');
  }

  const activeNavBtn = document.getElementById(`nav-${tabName}`);
  if (activeNavBtn) {
    activeNavBtn.classList.add('active');
  }
}

// Modal Popup System
function openModal(type, data = {}) {
  const modal = document.getElementById('demoModal');
  const modalContent = document.getElementById('modalContent');
  const dict = translations[currentLang];

  if (!modal || !modalContent) return;

  if (type === 'login') {
    modalContent.innerHTML = `
      <div style="text-align: center; margin-bottom: 1.5rem;">
        <i class="fa-solid fa-user-circle" style="font-size: 3rem; color: var(--kk-dark); margin-bottom: 0.5rem;"></i>
        <h3 style="font-size: 1.3rem; font-weight: 700;">${dict.modalLoginTitle}</h3>
        <p style="font-size: 0.85rem; color: #666;">${dict.modalLoginDesc}</p>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.8rem;">
        <input type="text" placeholder="${dict.loginFieldUser}" style="padding: 0.8rem; border-radius: 12px; border: 1px solid #DDD; font-family: inherit;">
        <input type="password" placeholder="${dict.loginFieldPass}" style="padding: 0.8rem; border-radius: 12px; border: 1px solid #DDD; font-family: inherit;">
        <button onclick="closeModal()" class="btn-highlight" style="width: 100%; justify-content: center; margin-top: 0.5rem;">
          ${dict.loginBtn}
        </button>
      </div>
    `;
  } else if (type === 'searchResult') {
    modalContent.innerHTML = `
      <div style="text-align: center;">
        <i class="fa-solid fa-wand-magic-sparkles" style="font-size: 2.5rem; color: var(--kk-highlight); margin-bottom: 0.8rem;"></i>
        <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">${dict.aiResultTitle}</h3>
        <p style="font-size: 0.9rem; color: #444; background: #F8FAFC; padding: 1rem; border-radius: 14px; margin: 1rem 0;">
          "${data.prompt}"
        </p>
        <p style="font-size: 0.85rem; color: var(--kk-green); font-weight: 600; margin-bottom: 1.2rem;">
          ${dict.aiResultMatch}
        </p>
        <button onclick="bookFlight('KK-104', 'DMK-CNX', 1250)" class="btn-primary" style="width: 100%; justify-content: center;">
          ${dict.aiResultBookBtn}
        </button>
      </div>
    `;
  }

  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('demoModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Modal Click & Key Listeners
window.addEventListener('click', function(event) {
  const modal = document.getElementById('demoModal');
  if (event.target === modal) {
    closeModal();
  }
});

window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Search Handlers
function handleAIPromptSearch() {
  const input = document.getElementById('promptInput');
  const value = input ? input.value.trim() : '';

  if (!value) {
    alert(currentLang === 'th' ? 'กรุณาพิมพ์ความต้องการของคุณก่อนครับ' : 'Please enter your travel preference');
    return;
  }

  openModal('searchResult', { prompt: value });
}

function quickSearchVibe(vibeType) {
  const input = document.getElementById('promptInput');
  const dict = translations[currentLang];
  
  if (input) {
    input.value = vibeType === 'spiritual' ? dict.vibe1Title : dict.vibe2Title;
  }
  switchTab('booking');
  handleAIPromptSearch();
}

// Booking Logic
function bookFlight(flightCode, routeCode, price) {
  closeModal();

  const dict = translations[currentLang];
  let destName = dict.chiangmai;

  if (routeCode.includes('HKT')) destName = dict.phuket;
  if (routeCode.includes('KKC')) destName = dict.khonkaen;

  document.getElementById('ticketFlightCode').innerText = flightCode;
  document.getElementById('destName').innerText = destName;
  document.getElementById('destCode').innerText = routeCode.split('-')[1];
  document.getElementById('ticketBadge').classList.remove('hidden');

  switchTab('ticket');
}
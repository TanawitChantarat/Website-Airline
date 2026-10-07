// Application State
let currentTab = 'booking';
let currentLang = 'th'; 
let isDisrupted = false;

// Mock Destinations Dataset for Autocomplete
const destinationsData = [
  {
    nameTh: 'เชียงใหม่',
    nameEn: 'Chiang Mai',
    subTh: 'Chiang Mai — เมืองท่องเที่ยวนิยมในไทย',
    subEn: 'Chiang Mai — City in Thailand',
    icon: 'fa-mountain-sun',
    code: 'CNX',
    price: 1250,
    flight: 'KK-104'
  },
  {
    nameTh: 'เชียงคาน',
    nameEn: 'Chiang Khan',
    subTh: 'Chiang Khan — อำเภอริมฝั่งแม่น้ำโขง',
    subEn: 'Chiang Khan District',
    icon: 'fa-water',
    code: 'LPT',
    price: 1450,
    flight: 'KK-112'
  },
  {
    nameTh: 'เชียงดาว',
    nameEn: 'Chiang Dao',
    subTh: 'Chiang Dao — หมู่บ้านท่ามกลางขุนเขา',
    subEn: 'Chiang Dao — Village in Thailand',
    icon: 'fa-tree',
    code: 'CNX',
    price: 1350,
    flight: 'KK-106'
  },
  {
    nameTh: 'ภูเก็ต',
    nameEn: 'Phuket',
    subTh: 'Phuket — เกาะสวรรค์แห่งทะเลอันดามัน',
    subEn: 'Phuket — Tropical Island in Thailand',
    icon: 'fa-umbrella-beach',
    code: 'HKT',
    price: 1690,
    flight: 'KK-208'
  },
  {
    nameTh: 'ขอนแก่น',
    nameEn: 'Khon Kaen',
    subTh: 'Khon Kaen — ศูนย์กลางภาคอีสาน',
    subEn: 'Khon Kaen — City in Isan',
    icon: 'fa-city',
    code: 'KKC',
    price: 990,
    flight: 'KK-305'
  },
  {
    nameTh: 'สายมู & เสริมดวง',
    nameEn: 'Spiritual & Luck',
    subTh: 'ขอพรโชคลาภ ไหว้พระปังๆ',
    subEn: 'Blessings & Temple tours',
    icon: 'fa-hands-praying',
    code: 'CNX',
    price: 1250,
    flight: 'KK-104'
  }
];

// Language Translations Dictionary
const translations = {
  th: {
    navBooking: 'จองตั๋ว',
    navExplore: 'สำรวจทริป',
    navServices: 'บริการสมาร์ท',
    navTicket: 'ตั๋วของฉัน',
    loginBtn: 'เข้าสู่ระบบ',
    heroTitle: 'ค้นหาเที่ยวบินที่ใช่ในแบบคุณ',
    heroDesc: 'YOUR FLIGHT, YOUR WAY — ค้นหาเที่ยวบินตาม Vibe หรือเช็กทิศมงคลประจำราศี',
    placeholder: 'พิมพ์สิ่งที่คุณต้องการ เช่น \'เชียงใหม่\', \'ภูเก็ต\', \'สายมู\'',
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
    liveGateTitle: 'Live Gate Alert & สถานะเที่ยวบิน',
    demoDelayBtn: 'จําลองเหตุการณ์ดีเลย์',
    gateLbl: 'GATE',
    statusBoarding: 'กำลังเรียกขึ้นเครื่อง (Boarding Soon)',
    statusDelayedText: 'เที่ยวบินล่าช้า (Delayed +45m)',
    boardTime: 'เวลาขึ้นเครื่อง: 06:10 น.',
    depTime: 'เวลาออก: 06:30 น.',
    disruptTitle: 'เที่ยวบินดีเลย์ 45 นาที (เหตุจากสภาพอากาศ)',
    disruptDesc: 'ระบบสมาร์ทมอบคูปองชดเชยพิเศษทานอาหาร/เครื่องดื่ม หรือ Lounge 300 บาท ให้คุณทันที',
    claimBtn: 'กดรับคูปองชดเชย',
    preorderTitle: 'Pre-Order Meals & Special Services',
    preorderDesc: 'สั่งอาหารและบริการล่วงหน้า เลือกรสชาติที่ชอบ เสิร์ฟตรงถึงที่นั่งในเที่ยวบินของคุณ',
    selectFlightLbl: 'เลือกเที่ยวบินที่จะให้เอาอาหารไป Serve:',
    mealCategoryLbl: 'ประเภทมื้ออาหาร (Meal Type):',
    normalMealRadio: 'Normal Meal (อาหารมาตรฐาน)',
    specialMealRadio: 'Special Meal (อาหารพิเศษ)',
    meal1Name: 'ข้าวกะเพราไก่ไข่ดาว (Basil Chicken Rice)',
    meal1Sub: 'รสไทยแท้ เสิร์ฟพร้อมผลไม้สดตามฤดูกาล',
    meal2Name: 'พาสต้าซอสมะเขือเทศชีส (Tomato Cheese Pasta)',
    meal2Sub: 'สไตล์อิตาเลียนหอมชีส นุ่มกลมกล่อม',
    specialMealDropdownLbl: 'เลือกโค้ดอาหารพิเศษ (Special Meal Code : Description):',
    confirmMealBtn: 'ยืนยันการสั่งอาหารล่วงหน้า',
    ondemandTitle: 'On-Demand Help (ขอความช่วยเหลือพิเศษ)',
    ondemandDesc: 'กดเรียกรถรับ-ส่ง ขอรถเข็น หรือสอบถามเส้นทางได้ทันทีหลังจากผ่านจุดตรวจค้นสนามบิน',
    buggyTitle: 'รถบัคกี้ (Buggy Service)',
    buggyDesc: 'เรียกรถบัคกี้ไปรับที่จุดตรวจ มุ่งตรงไปยัง Gate / Lounge',
    wheelchairTitle: 'รถเข็นวีลแชร์ (Wheelchair)',
    wheelchairDesc: 'ขอพนักงานพร้อมรถเข็นดูแลตลอดการเดินทางในสนามบิน',
    loungeTitle: 'เส้นทางไป Lounge',
    loungeDesc: 'สอบถามและนำทางไปยัง KookKook Executive Lounge',
    requestBtn: 'Request Assistance',
    navLoungeBtn: 'ดูแผนที่ & เส้นทาง',
    passengerLbl: 'ผู้โดยสาร / Passenger',
    passengerVal: 'คุณผู้โดยสารเกียรติยศ',
    depTimeLbl: 'เวลาเดินทาง',
    seatLbl: 'ที่นั่ง / Seat',
    statusLbl: 'สถานะ',
    statusVal: 'ยืนยันแล้ว',
    gateReady: 'พร้อมสำหรับการเดินทาง (Gate C04)',
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
    navServices: 'Smart Services',
    navTicket: 'My Ticket',
    loginBtn: 'Log In',
    heroTitle: 'Find the Right Flight for Your Vibe',
    heroDesc: 'YOUR FLIGHT, YOUR WAY — Search by travel vibe or auspicious horoscope directions',
    placeholder: 'Type your desire, e.g. \'Chiang Mai\', \'Phuket\', \'Spiritual\'',
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
    liveGateTitle: 'Live Gate Alert & Flight Status',
    demoDelayBtn: 'Simulate Flight Delay',
    gateLbl: 'GATE',
    statusBoarding: 'Boarding Soon',
    statusDelayedText: 'Flight Delayed (+45m)',
    boardTime: 'Boarding Time: 06:10 AM',
    depTime: 'Departure: 06:30 AM',
    disruptTitle: 'Flight Delayed 45 Mins (Weather Issue)',
    disruptDesc: 'Our Smart System instantly provides you a 300 THB Dining & Lounge Compensation Voucher.',
    claimBtn: 'Claim Voucher Now',
    preorderTitle: 'Pre-Order Meals & Special Services',
    preorderDesc: 'Pre-order your favorite meal served directly to your seat on your upcoming flight.',
    selectFlightLbl: 'Select Flight to Serve Meal:',
    mealCategoryLbl: 'Meal Category:',
    normalMealRadio: 'Normal Meal (Standard)',
    specialMealRadio: 'Special Meal (Dietary Request)',
    meal1Name: 'Basil Chicken Rice with Fried Egg',
    meal1Sub: 'Authentic Thai taste served with fresh seasonal fruits',
    meal2Name: 'Tomato Cheese Pasta',
    meal2Sub: 'Italian style with rich cheese and soft pasta',
    specialMealDropdownLbl: 'Select Special Meal Code : Description:',
    confirmMealBtn: 'Confirm Meal Pre-Order',
    ondemandTitle: 'On-Demand Help (Special Assistance)',
    ondemandDesc: 'Request buggy rides, wheelchair assistance, or lounge guidance right after security checkpoint.',
    buggyTitle: 'Buggy Service',
    buggyDesc: 'Request a buggy pickup from security directly to your Gate or Lounge',
    wheelchairTitle: 'Wheelchair Service',
    wheelchairDesc: 'Request staff with wheelchair assistance throughout your airport journey',
    loungeTitle: 'Lounge Directions',
    loungeDesc: 'Navigation & directions to KookKook Executive Lounge',
    requestBtn: 'Request Assistance',
    navLoungeBtn: 'View Map & Route',
    passengerLbl: 'Passenger Name',
    passengerVal: 'Honored Passenger',
    depTimeLbl: 'Departure Time',
    seatLbl: 'Seat',
    statusLbl: 'Status',
    statusVal: 'Confirmed',
    gateReady: 'Ready for Boarding (Gate C04)',
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
  setupAutocompleteListeners();
});

// Toggle Language Logic (TH <-> EN)
function toggleLanguage() {
  currentLang = (currentLang === 'th') ? 'en' : 'th';
  
  const langText = document.getElementById('langText');
  const langFlag = document.querySelector('.lang-flag');
  if (langText && langFlag) {
    langText.innerText = currentLang.toUpperCase();
    langFlag.innerText = currentLang === 'th' ? '🇹🇭' : '🇬🇧';
  }

  updateLanguageUI();
}

// Apply translations
function updateLanguageUI() {
  const dict = translations[currentLang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  const searchInput = document.getElementById('promptInput');
  if (searchInput && dict.placeholder) {
    searchInput.placeholder = dict.placeholder;
  }
}

/* AUTOCOMPLETE DROPDOWN SYSTEM */
function setupAutocompleteListeners() {
  const input = document.getElementById('promptInput');
  const dropdown = document.getElementById('autocompleteList');

  if (!input || !dropdown) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (query.length === 0) {
      dropdown.classList.add('hidden');
      return;
    }

    const matches = destinationsData.filter(item => 
      item.nameTh.toLowerCase().includes(query) ||
      item.nameEn.toLowerCase().includes(query) ||
      item.subTh.toLowerCase().includes(query) ||
      item.subEn.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
      renderAutocompleteItems(matches, dropdown);
      dropdown.classList.remove('hidden');
    } else {
      dropdown.classList.add('hidden');
    }
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });
}

function renderAutocompleteItems(items, dropdown) {
  dropdown.innerHTML = items.map(item => {
    const title = currentLang === 'th' ? item.nameTh : item.nameEn;
    const subtitle = currentLang === 'th' ? item.subTh : item.subEn;

    return `
      <div class="suggestion-item" onclick="selectSuggestion('${item.nameTh}', '${item.flight}', '${item.code}', ${item.price})">
        <div class="suggestion-img">
          <i class="fa-solid ${item.icon}"></i>
        </div>
        <div class="suggestion-info">
          <span class="suggestion-title">${title}</span>
          <span class="suggestion-subtitle">${subtitle}</span>
        </div>
      </div>
    `;
  }).join('');
}

function selectSuggestion(nameTh, flightCode, routeCode, price) {
  const input = document.getElementById('promptInput');
  const dropdown = document.getElementById('autocompleteList');

  if (input) input.value = nameTh;
  if (dropdown) dropdown.classList.add('hidden');

  handleAIPromptSearch();
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

/* 🌟 FEATURE 1 & 3: LIVE GATE ALERT & DISRUPTION SIMULATOR */
function toggleDisruptionSim() {
  isDisrupted = !isDisrupted;

  const gateBox = document.getElementById('gateStatusBox');
  const gatePill = document.getElementById('gateStatusPill');
  const banner = document.getElementById('disruptionBanner');

  if (isDisrupted) {
    gateBox.classList.add('delayed');
    gatePill.className = 'gate-status-pill status-delayed';
    gatePill.innerText = currentLang === 'th' ? 'เที่ยวบินล่าช้า (Delayed +45m)' : 'Flight Delayed (+45m)';
    banner.classList.remove('hidden');
  } else {
    gateBox.classList.remove('delayed');
    gatePill.className = 'gate-status-pill status-boarding';
    gatePill.innerText = currentLang === 'th' ? 'กำลังเรียกขึ้นเครื่อง (Boarding Soon)' : 'Boarding Soon';
    banner.classList.add('hidden');
  }
}

function claimCompensationVoucher() {
  openModal('voucher');
}

/* 🌟 FEATURE 2: PRE-ORDER MEAL LOGIC */
function switchMealCategory(type) {
  const normalContainer = document.getElementById('normalMealContainer');
  const specialContainer = document.getElementById('specialMealContainer');

  document.querySelectorAll('.radio-card').forEach(card => card.classList.remove('active'));

  if (type === 'normal') {
    normalContainer.classList.remove('hidden');
    specialContainer.classList.add('hidden');
  } else {
    normalContainer.classList.add('hidden');
    specialContainer.classList.remove('hidden');
  }
}

function handleMealSubmit(event) {
  event.preventDefault();

  const flight = document.getElementById('mealFlightSelect').value;
  const mealTypeRadio = document.querySelector('input[name="mealType"]:checked').value;
  let selectedMealName = '';

  if (mealTypeRadio === 'normal') {
    selectedMealName = document.querySelector('input[name="normalMealSelection"]:checked').value;
  } else {
    selectedMealName = document.getElementById('specialMealSelect').value;
  }

  // Update Badge in Ticket
  const mealBadge = document.getElementById('ticketMealBadge');
  const mealText = document.getElementById('ticketMealText');
  if (mealBadge && mealText) {
    mealText.innerText = ` Meal Ordered for ${flight}: ${selectedMealName}`;
    mealBadge.classList.remove('hidden');
  }

  openModal('mealSuccess', { flight: flight, meal: selectedMealName });
}

/* 🌟 FEATURE 4: ON-DEMAND HELP ASSISTANCE */
function requestAssistance(type) {
  openModal('assistance', { helpType: type });
}

/* MODAL SYSTEM */
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
  } else if (type === 'voucher') {
    modalContent.innerHTML = `
      <div style="text-align: center;">
        <i class="fa-solid fa-gift" style="font-size: 3rem; color: var(--kk-red); margin-bottom: 0.8rem;"></i>
        <h3 style="font-size: 1.3rem; font-weight: 700;">คูปองชดเชยสมาร์ทดิสรัปชัน</h3>
        <p style="font-size: 0.85rem; color: #666; margin-top: 0.2rem;">ใช้ได้ที่ร้านอาหาร เครื่องดื่ม และ Lounge ในสนามบิน</p>

        <div style="background: #FFF5F5; border: 2px dashed var(--kk-red); border-radius: 16px; padding: 1.2rem; margin: 1.2rem 0;">
          <span style="font-size: 0.75rem; color: #888; display: block;">VOUCHER CODE</span>
          <strong style="font-size: 1.5rem; color: var(--kk-red); letter-spacing: 2px;">COMP-KK104-300THB</strong>
          <div style="font-size: 1.2rem; font-weight: 700; color: #333; margin-top: 0.5rem;">มูลค่า 300 บาท</div>
        </div>

        <button onclick="closeModal()" class="btn-primary" style="width: 100%; justify-content: center;">
          บันทึกคูปองเข้าตั๋วของฉัน
        </button>
      </div>
    `;
  } else if (type === 'mealSuccess') {
    modalContent.innerHTML = `
      <div style="text-align: center;">
        <i class="fa-solid fa-circle-check" style="font-size: 3rem; color: var(--kk-green); margin-bottom: 0.8rem;"></i>
        <h3 style="font-size: 1.3rem; font-weight: 700;">บันทึกออเดอร์อาหารเรียบร้อย!</h3>
        <p style="font-size: 0.88rem; color: #555; margin: 0.8rem 0;">
          อาหารของคุณจะถูกนำไป Serve บนเที่ยวบิน <strong>${data.flight}</strong>
        </p>
        <div style="background: var(--kk-light); padding: 0.8rem; border-radius: 12px; font-size: 0.85rem; font-weight: 600; color: var(--kk-dark); margin-bottom: 1.2rem;">
          ${data.meal}
        </div>
        <button onclick="closeModal(); switchTab('ticket');" class="btn-primary" style="width: 100%; justify-content: center;">
          ดูตั๋วโดยสารของฉัน
        </button>
      </div>
    `;
  } else if (type === 'assistance') {
    let helpTitle = 'บริการรถบัคกี้ (Buggy)';
    let helpDesc = 'เจ้าหน้าที่กำลังขับรถบัคกี้ไปรับคุณ ณ จุดตรวจค้น (Security Checkpoint) ภายใน 3 นาที';
    let iconClass = 'fa-car-side';

    if (data.helpType === 'wheelchair') {
      helpTitle = 'บริการรถเข็นวีลแชร์ (Wheelchair)';
      helpDesc = 'พนักงานพร้อมรถเข็นกำลังเดินทางไปพบคุณที่จุดตรวจค้นเพื่อพาไปยัง Gate';
      iconClass = 'fa-wheelchair';
    } else if (data.helpType === 'lounge') {
      helpTitle = 'แผนที่นำทางไป Executive Lounge';
      helpDesc = 'เดินตรงจากจุดตรวจค้น 100 เมตร เลี้ยวขวาบริเวณ Concourse C ชั้น 3 ตรงข้าม Gate C04';
      iconClass = 'fa-map-location-dot';
    }

    modalContent.innerHTML = `
      <div style="text-align: center;">
        <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(242, 151, 39, 0.15); color: var(--kk-highlight); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin: 0 auto 0.8rem auto;">
          <i class="fa-solid ${iconClass}"></i>
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 700;">${helpTitle}</h3>
        <p style="font-size: 0.88rem; color: #555; background: #F8FAFC; padding: 1rem; border-radius: 14px; margin: 1rem 0; line-height: 1.5;">
          ${helpDesc}
        </p>
        <button onclick="closeModal()" class="btn-highlight" style="width: 100%; justify-content: center;">
          ตกลง / รับทราบ
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

// Global Event Listeners
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

// เปิด Popup 1 (เมื่อกดสายมู/สายชิลล์ จากรูปที่ 1)
function openAuspiciousModal() {
  document.getElementById('auspiciousInputModal').classList.remove('hidden');
}

// ปิด Popup 1 แล้วเปิด Popup 2 (เมื่อกด Discover Your Destiny)
function discoverDestiny() {
  document.getElementById('auspiciousInputModal').classList.add('hidden');
  document.getElementById('auspiciousResultModal').classList.remove('hidden');
}

// ปิด Popup ทั้งหมด แล้วเข้าสู่หน้าบริการ/Pre-order (รูปที่ 4)
function goToServicesPage() {
  // 1. ซ่อน Popup ทั้งหมด
  document.getElementById('auspiciousResultModal').classList.add('hidden');
  
  // 2. เรียกใช้ฟังก์ชัน switchTab ของคุณเพื่อเปิดแท็บบริการ
  if (typeof switchTab === 'function') {
    switchTab('services'); // หรือเปลี่ยนเป็น 'booking' ตามชื่อแท็บรูปที่ 4 ในเว็บของคุณ
  }
}
// ============================================
// ASPIDUS — Premium Corporate Site JavaScript
// Next-Gen: Trade Route Globe, Custom Cursor,
// Text Animations, Magnetic Hover, Parallax
// ============================================

// --- Initialize everything after header/footer load ---
function initializePageScripts() {

  // ===================== CUSTOM CURSOR =====================
  (function initCursor() {
    if (window.innerWidth < 1025 || !matchMedia('(hover: hover)').matches) return;
    const dot = document.createElement('div'); dot.className = 'cursor-dot';
    const ring = document.createElement('div'); ring.className = 'cursor-ring';
    document.body.appendChild(dot); document.body.appendChild(ring);

    let mx = 0, my = 0, dx = 0, dy = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    function moveCursor() {
      dx += (mx - dx) * 0.15; dy += (my - dy) * 0.15;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
      ring.style.left = dx + 'px'; ring.style.top = dy + 'px';
      requestAnimationFrame(moveCursor);
    }
    moveCursor();

    const hoverEls = 'a, button, [role="button"], .commodity-card, .location-card, .partner-card, .commodity-grid-card, .glass-card, .btn-primary, .btn-secondary, .btn-portal, input, textarea, select';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverEls)) { dot.classList.add('hovering'); ring.classList.add('hovering'); }
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverEls)) { dot.classList.remove('hovering'); ring.classList.remove('hovering'); }
    });
  })();

  // ===================== MOBILE MENU =====================
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  function toggleMenu() {
    if (!mobileMenu || !menuIcon) return;
    const isOpen = mobileMenu.classList.toggle('open');
    menuIcon.className = isOpen ? 'ri-close-line' : 'ri-menu-3-line';
    document.body.style.overflow = isOpen ? 'hidden' : '';
    mobileMenu.querySelectorAll('a, .mobile-sub-links a').forEach((item, i) => {
      item.style.transitionDelay = isOpen ? `${i * 0.05 + 0.15}s` : '0s';
    });
  }
  if (mobileMenuButton) mobileMenuButton.addEventListener('click', toggleMenu);
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (!link.classList.contains('language-option') && mobileMenu.classList.contains('open')) toggleMenu();
      });
    });
  }

  // ===================== LANGUAGE SWITCHER =====================
  function switchLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-en-text]').forEach(el => {
      // Skip text-split elements that have been processed
      if (el.classList.contains('text-split-processed')) return;
      const key = `data-${lang}-text`;
      const text = el.getAttribute(key) || el.getAttribute('data-en-text');
      el.innerHTML = text;
    });
    document.querySelectorAll('img[data-en-alt]').forEach(img => {
      const key = `data-${lang}-alt`;
      img.alt = img.getAttribute(key) || img.getAttribute('data-en-alt');
    });
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
      const key = `data-${lang}-placeholder`;
      el.placeholder = el.getAttribute(key) || el.getAttribute('data-en-placeholder');
    });

    const display = document.getElementById('current-language-display');
    if (display) display.textContent = lang.toUpperCase();
  }

  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      switchLanguage(this.getAttribute('data-lang'));
      if (mobileMenu && mobileMenu.classList.contains('open')) toggleMenu();
    });
  });

  switchLanguage(localStorage.getItem('selectedLanguage') || 'en');

  // ===================== HEADER SCROLL =====================
  const header = document.getElementById('site-header');
  const backToTop = document.getElementById('back-to-top');
  const scrollProgress = document.getElementById('scroll-progress');

  function onScroll() {
    const scrollY = window.scrollY;
    if (header) header.classList.toggle('scrolled', scrollY > 60);
    if (backToTop) backToTop.classList.toggle('show', scrollY > 400);
    if (scrollProgress) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.style.width = docHeight > 0 ? (scrollY / docHeight * 100) + '%' : '0%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ===================== SMOOTH SCROLL =====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') { e.preventDefault(); return; }
      const target = document.getElementById(href.substring(1));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    });
  });

  // ===================== SCROLL REVEAL (Enhanced) =====================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .scroll-reveal, .text-split, .text-split-word').forEach(el => {
    revealObserver.observe(el);
  });

  // Cinematic stat blocks
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.stat-block').forEach(el => statObserver.observe(el));

  // ===================== TEXT SPLIT ANIMATION =====================
  function initTextSplit() {
    document.querySelectorAll('.hero-text h1 span:not(.text-split-processed)').forEach(el => {
      const text = el.textContent;
      el.innerHTML = '';
      el.classList.add('text-split-processed');
      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.transitionDelay = (i * 0.03) + 's';
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(60px) rotateX(-40deg)';
        span.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        el.appendChild(span);
      });
    });

    // Trigger hero text animation after small delay
    setTimeout(() => {
      document.querySelectorAll('.hero-text h1 span.text-split-processed span').forEach(charSpan => {
        charSpan.style.opacity = '1';
        charSpan.style.transform = 'translateY(0) rotateX(0)';
      });
    }, 800);
  }

  // ===================== MAGNETIC HOVER =====================
  function initMagnetic() {
    if (window.innerWidth < 1025) return;
    document.querySelectorAll('.magnetic-wrap').forEach(wrap => {
      const btn = wrap.querySelector('.btn-primary, .btn-secondary');
      if (!btn) return;
      wrap.addEventListener('mousemove', e => {
        const rect = wrap.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        btn.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100) + '%');
        btn.style.setProperty('--my', ((e.clientY - rect.top) / rect.height * 100) + '%');
      });
      wrap.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
      });
    });
  }

  // ===================== PARALLAX ON SCROLL =====================
  function initParallax() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = document.querySelectorAll('.parallax-element');
    if (!els.length) return;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      els.forEach(el => {
        const speed = parseFloat(el.dataset.speed) || 0.1;
        const rect = el.getBoundingClientRect();
        const offset = (rect.top + scrollY) - scrollY;
        el.style.transform = `translateY(${offset * speed * -0.3}px)`;
      });
    }, { passive: true });
  }

  // ===================== POLICY MODALS =====================
  const policyModal = document.getElementById('policy-modal');
  if (policyModal) {
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = policyModal.querySelector('.modal-close');

    const modalData = {
      privacy: {
        en: { title: "Privacy Policy", content: `<h3>1. Information We Collect</h3><p>We collect information you provide directly through the contact form, including your name, email address, company name, and other details. We may also collect technical information automatically to improve our services.</p><h3>2. How We Use Your Information</h3><p>Your information is used to respond to inquiries, provide support, and improve our services. We do not sell or share personal information with third parties for marketing.</p><h3>3. Data Security</h3><p>We implement appropriate security measures to protect your personal information. However, no internet-based site can be 100% secure.</p><h3>4. Your Rights</h3><p>You have the right to access, correct, or delete your personal information. Contact us at info@aspidus.co.</p>` },
        tr: { title: "Gizlilik Politikası", content: `<h3>1. Topladığımız Bilgiler</h3><p>İletişim formu aracılığıyla sağladığınız bilgileri toplarız. Hizmetlerimizi iyileştirmek için teknik bilgileri de otomatik olarak toplayabiliriz.</p><h3>2. Bilgilerinizi Nasıl Kullanıyoruz</h3><p>Bilgileriniz, sorularınıza yanıt vermek ve hizmetlerimizi iyileştirmek için kullanılır. Kişisel bilgilerinizi pazarlama amacıyla paylaşmayız.</p><h3>3. Veri Güvenliği</h3><p>Kişisel bilgilerinizi korumak için uygun güvenlik önlemleri uygularız.</p><h3>4. Haklarınız</h3><p>Kişisel bilgilerinize erişme, düzeltme veya silme hakkınız vardır. info@aspidus.co adresinden iletişime geçin.</p>` },
        ru: { title: "Политика конфиденциальности", content: `<h3>1. Собираемая информация</h3><p>Мы собираем информацию через контактную форму. Также мы можем автоматически собирать техническую информацию для улучшения наших услуг.</p><h3>2. Использование информации</h3><p>Информация используется для ответа на запросы и улучшения услуг. Мы не продаем личную информацию.</p><h3>3. Безопасность данных</h3><p>Мы принимаем меры безопасности для защиты вашей информации.</p><h3>4. Ваши права</h3><p>Вы имеете право на доступ, исправление или удаление информации. Свяжитесь: info@aspidus.co.</p>` },
        sr: { title: "Politika Privatnosti", content: `<h3>1. Informacije koje prikupljamo</h3><p>Prikupljamo informacije putem kontakt forme. Takođe možemo automatski prikupljati tehničke informacije radi poboljšanja usluga.</p><h3>2. Korišćenje informacija</h3><p>Informacije se koriste za odgovaranje na upite i poboljšanje usluga. Ne prodajemo lične informacije.</p><h3>3. Sigurnost podataka</h3><p>Primenjujemo odgovarajuće sigurnosne mere za zaštitu vaših informacija.</p><h3>4. Vaša prava</h3><p>Imate pravo pristupa, ispravke ili brisanja informacija. Kontakt: info@aspidus.co.</p>` }
      },
      terms: {
        en: { title: "Terms of Service", content: `<h3>1. Acceptance</h3><p>By accessing this website, you agree to these terms. If you do not agree, please do not use this site.</p><h3>2. Website Use</h3><p>This site is for informational purposes only.</p><h3>3. Intellectual Property</h3><p>Content is owned by Aspidus and protected by international laws.</p><h3>4. Limitation of Liability</h3><p>Aspidus shall not be liable for indirect or consequential damages.</p>` },
        tr: { title: "Hizmet Şartları", content: `<h3>1. Kabul</h3><p>Bu web sitesine erişerek bu şartları kabul etmiş olursunuz.</p><h3>2. Kullanım</h3><p>Bu site yalnızca bilgilendirme amaçlıdır.</p><h3>3. Fikri Mülkiyet</h3><p>İçerik Aspidus'a aittir.</p><h3>4. Sorumluluk Sınırı</h3><p>Aspidus dolaylı zararlardan sorumlu değildir.</p>` },
        ru: { title: "Условия использования", content: `<h3>1. Принятие</h3><p>Используя сайт, вы принимаете эти условия.</p><h3>2. Использование</h3><p>Сайт предназначен для информации.</p><h3>3. Интеллектуальная собственность</h3><p>Контент принадлежит Aspidus.</p><h3>4. Ограничение ответственности</h3><p>Aspidus не несет ответственности за косвенные убытки.</p>` },
        sr: { title: "Uslovi Korišćenja", content: `<h3>1. Prihvatanje</h3><p>Korišćenjem sajta prihvatate ove uslove.</p><h3>2. Korišćenje</h3><p>Sajt je samo u informativne svrhe.</p><h3>3. Intelektualna svojina</h3><p>Sadržaj je vlasništvo Aspidusa.</p><h3>4. Ograničenje odgovornosti</h3><p>Aspidus nije odgovoran za indirektnu štetu.</p>` }
      },
      cookie: {
        en: { title: "Cookie Policy", content: `<h3>1. What Are Cookies?</h3><p>Small text files stored on your device to remember your preferences.</p><h3>2. How We Use Cookies</h3><p>We use functionality cookies for language preference and performance cookies for analytics.</p><h3>3. Managing Cookies</h3><p>You can manage cookies in your browser settings.</p>` },
        tr: { title: "Çerez Politikası", content: `<h3>1. Çerezler Nedir?</h3><p>Tercihlerinizi hatırlamak için cihazınızda saklanan küçük dosyalardır.</p><h3>2. Kullanım</h3><p>Dil tercihi ve analitik çerezleri kullanıyoruz.</p><h3>3. Yönetim</h3><p>Tarayıcı ayarlarınızdan yönetebilirsiniz.</p>` },
        ru: { title: "Политика Cookie", content: `<h3>1. Что такое Cookie?</h3><p>Небольшие файлы для запоминания предпочтений.</p><h3>2. Использование</h3><p>Мы используем cookie для языка и аналитики.</p><h3>3. Управление</h3><p>Настройте cookie в браузере.</p>` },
        sr: { title: "Politika Kolačića", content: `<h3>1. Šta su kolačići?</h3><p>Male datoteke za pamćenje preferencija.</p><h3>2. Korišćenje</h3><p>Koristimo kolačiće za jezik i analitiku.</p><h3>3. Upravljanje</h3><p>Upravljajte u podešavanjima pretraživača.</p>` }
      },
      disclaimer: {
        en: { title: "Disclaimer", content: `<p>Information on this website is for general purposes only. We make no warranties about completeness or accuracy.</p><p><strong>Official Communication:</strong> All official communications from Aspidus use verified <strong>@aspidus.co</strong> email addresses. We are not responsible for communications from other domains. Report suspicious correspondence immediately.</p>` },
        tr: { title: "Yasal Uyarı", content: `<p>Bu web sitesindeki bilgiler yalnızca genel amaçlıdır. Bilgilerin eksiksizliği veya doğruluğu konusunda garanti vermiyoruz.</p><p><strong>Resmi İletişim:</strong> Aspidus'un tüm resmi iletişimleri doğrulanmış <strong>@aspidus.co</strong> e-posta adreslerini kullanır.</p>` },
        ru: { title: "Отказ от ответственности", content: `<p>Информация на сайте носит общий характер. Мы не даем гарантий полноты или точности.</p><p><strong>Официальные коммуникации:</strong> Все официальные сообщения Aspidus используют верифицированные адреса <strong>@aspidus.co</strong>.</p>` },
        sr: { title: "Odricanje odgovornosti", content: `<p>Informacije na ovom sajtu su opšte prirode. Ne garantujemo potpunost ili tačnost informacija.</p><p><strong>Službena komunikacija:</strong> Sva službena komunikacija od Aspidusa koristi verifikovane <strong>@aspidus.co</strong> email adrese.</p>` }
      }
    };

    function openModal(type) {
      const lang = document.documentElement.lang || 'en';
      const data = modalData[type]?.[lang] || modalData[type]?.['en'];
      if (!data) return;
      modalTitle.textContent = data.title;
      modalBody.innerHTML = data.content;
      policyModal.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }
    function closeModal() {
      policyModal.classList.remove('visible');
      document.body.style.overflow = '';
    }
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    policyModal.addEventListener('click', e => { if (e.target === policyModal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && policyModal.classList.contains('visible')) closeModal(); });
    document.querySelectorAll('[data-modal]').forEach(btn => {
      btn.addEventListener('click', e => { e.preventDefault(); openModal(btn.getAttribute('data-modal')); });
    });
  }

  // ===================== CONTACT FORM =====================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const inquiryType = contactForm.querySelector('[name="inquiry_type"]');
    const dynamicSections = {
      buy: document.getElementById('buy-sell-section'),
      sell: document.getElementById('buy-sell-section'),
      partnership: document.getElementById('partnership-section'),
      career: document.getElementById('career-section'),
      supplier: document.getElementById('supplier-section'),
    };

    if (inquiryType) {
      inquiryType.addEventListener('change', function() {
        Object.values(dynamicSections).forEach(s => { if (s) s.style.display = 'none'; });
        const section = dynamicSections[this.value];
        if (section) section.style.display = 'block';
      });
    }

    const emailField = contactForm.querySelector('input[name="email"]');
    if (emailField) {
      emailField.addEventListener('blur', function() {
        const blocked = ['gmail.com','yahoo.com','hotmail.com','outlook.com','aol.com','icloud.com','mail.com','protonmail.com','live.com','yandex.com'];
        const domain = this.value.split('@')[1]?.toLowerCase();
        const warning = document.getElementById('email-warning');
        if (domain && blocked.includes(domain)) {
          if (warning) warning.style.display = 'block';
          this.setCustomValidity('Please use corporate email');
        } else {
          if (warning) warning.style.display = 'none';
          this.setCustomValidity('');
        }
      });
    }

    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      if (!btn) return;
      const orig = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<i class="ri-loader-4-line" style="animation:spin 0.8s linear infinite"></i> Sending...';
      try {
        const resp = await fetch(contactForm.action, {
          method: 'POST', body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });
        if (resp.ok) {
          contactForm.innerHTML = '<div style="text-align:center;padding:60px 20px"><i class="ri-check-double-line" style="font-size:3rem;color:var(--gold);margin-bottom:16px;display:block"></i><h3 style="font-size:1.6rem;margin-bottom:12px;color:var(--gold)">Message Sent Successfully</h3><p style="color:var(--slate)">We will get back to you within 24 business hours.</p></div>';
        } else {
          alert('Submission failed. Please try again.');
          btn.disabled = false; btn.innerHTML = orig;
        }
      } catch {
        alert('Network error. Please try again.');
        btn.disabled = false; btn.innerHTML = orig;
      }
    });
  }

  // ===================== ACTIVE NAV =====================
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Init new features
  initTextSplit();
  initMagnetic();
  initParallax();
}

// ===================== ENHANCED THREE.JS GLOBE =====================
function initHeroGlobe() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  camera.position.z = 3.2;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // --- Globe wireframe sphere ---
  const globeGeo = new THREE.SphereGeometry(1.2, 48, 48);
  const wireframe = new THREE.WireframeGeometry(globeGeo);
  const globeWire = new THREE.LineSegments(wireframe, new THREE.LineBasicMaterial({
    color: 0xc9a84c, transparent: true, opacity: 0.06
  }));
  scene.add(globeWire);

  // --- Particle field on sphere surface ---
  const particleCount = 4000;
  const positions = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);
  for (let i = 0; i < particleCount; i++) {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * Math.PI * 2;
    const r = 1.21;
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
    sizes[i] = Math.random() * 1.5 + 0.5;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const particleMat = new THREE.PointsMaterial({
    color: 0xc9a84c, size: 0.012, transparent: true, opacity: 0.45,
    sizeAttenuation: true, blending: THREE.AdditiveBlending
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // --- City markers (glowing dots) ---
  const cities = [
    { lat: 25.2048, lng: 55.2708, name: 'Dubai' },
    { lat: -33.9249, lng: 18.4241, name: 'Cape Town' },
    { lat: 41.0082, lng: 28.9784, name: 'Istanbul' },
    { lat: 51.5074, lng: -0.1278, name: 'London' },
    { lat: 1.3521, lng: 103.8198, name: 'Singapore' },
    { lat: 35.6762, lng: 139.6503, name: 'Tokyo' },
    { lat: -23.5505, lng: -46.6333, name: 'Sao Paulo' },
    { lat: 40.7128, lng: -74.0060, name: 'New York' },
    { lat: 55.7558, lng: 37.6173, name: 'Moscow' },
    { lat: 22.3193, lng: 114.1694, name: 'Hong Kong' },
    { lat: -1.2921, lng: 36.8219, name: 'Nairobi' },
    { lat: 19.0760, lng: 72.8777, name: 'Mumbai' },
  ];

  function latLngToVec3(lat, lng, radius) {
    const phi = (90 - lat) * Math.PI / 180;
    const theta = (lng + 180) * Math.PI / 180;
    return new THREE.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  }

  const cityDots = new THREE.Group();
  cities.forEach(city => {
    const pos = latLngToVec3(city.lat, city.lng, 1.23);
    // Outer glow
    const glowGeo = new THREE.SphereGeometry(0.025, 16, 16);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xc9a84c, transparent: true, opacity: 0.3 });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.copy(pos);
    cityDots.add(glow);
    // Inner core
    const coreGeo = new THREE.SphereGeometry(0.012, 12, 12);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.copy(pos);
    cityDots.add(core);
  });
  scene.add(cityDots);

  // --- Animated trade route arcs ---
  const tradeRoutes = [
    [0, 2], // Dubai -> Istanbul
    [0, 1], // Dubai -> Cape Town
    [0, 4], // Dubai -> Singapore
    [2, 3], // Istanbul -> London
    [0, 9], // Dubai -> Hong Kong
    [7, 3], // New York -> London
    [6, 10], // Sao Paulo -> Nairobi
    [0, 11], // Dubai -> Mumbai
    [5, 9], // Tokyo -> Hong Kong
    [1, 10], // Cape Town -> Nairobi
  ];

  const arcsGroup = new THREE.Group();
  tradeRoutes.forEach(route => {
    const start = latLngToVec3(cities[route[0]].lat, cities[route[0]].lng, 1.23);
    const end = latLngToVec3(cities[route[1]].lat, cities[route[1]].lng, 1.23);

    // Create arc curve
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    const dist = start.distanceTo(end);
    mid.normalize().multiplyScalar(1.23 + dist * 0.35);

    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    const points = curve.getPoints(64);
    const arcGeo = new THREE.BufferGeometry().setFromPoints(points);
    const arcMat = new THREE.LineBasicMaterial({ color: 0xc9a84c, transparent: true, opacity: 0.15 });
    const arc = new THREE.Line(arcGeo, arcMat);
    arcsGroup.add(arc);
  });
  scene.add(arcsGroup);

  // --- Traveling particles on arcs ---
  const travelParticles = [];
  tradeRoutes.forEach(route => {
    const start = latLngToVec3(cities[route[0]].lat, cities[route[0]].lng, 1.23);
    const end = latLngToVec3(cities[route[1]].lat, cities[route[1]].lng, 1.23);
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    const dist = start.distanceTo(end);
    mid.normalize().multiplyScalar(1.23 + dist * 0.35);
    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);

    const dotGeo = new THREE.SphereGeometry(0.008, 8, 8);
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });
    const dot = new THREE.Mesh(dotGeo, dotMat);
    scene.add(dot);
    travelParticles.push({ curve, mesh: dot, t: Math.random(), speed: 0.002 + Math.random() * 0.003 });
  });

  // --- Atmospheric glow ---
  const glowGeo = new THREE.SphereGeometry(1.35, 32, 32);
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0xc9a84c, transparent: true, opacity: 0.03,
    side: THREE.BackSide
  });
  const atmosGlow = new THREE.Mesh(glowGeo, glowMat);
  scene.add(atmosGlow);

  // --- Orbit ring ---
  const ringGeo = new THREE.RingGeometry(1.6, 1.605, 120);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xc9a84c, transparent: true, opacity: 0.08, side: THREE.DoubleSide });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 2.5;
  scene.add(ring);

  const ring2 = ring.clone();
  ring2.rotation.x = Math.PI / 1.8;
  ring2.rotation.z = 0.5;
  ring2.scale.setScalar(1.1);
  ring2.material = ringMat.clone();
  ring2.material.opacity = 0.04;
  scene.add(ring2);

  // --- Mouse interaction ---
  let mouseX = 0, mouseY = 0;
  canvas.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
  });

  let time = 0;
  function animate() {
    requestAnimationFrame(animate);
    time += 0.01;

    // Rotate globe
    const rotSpeed = 0.0012;
    globeWire.rotation.y += rotSpeed;
    particles.rotation.y += rotSpeed;
    cityDots.rotation.y += rotSpeed;
    arcsGroup.rotation.y += rotSpeed;

    // Mouse tilt
    const targetRotX = mouseY * 0.3;
    const targetRotExtra = mouseX * 0.3;
    globeWire.rotation.x += (targetRotX - globeWire.rotation.x) * 0.02;
    particles.rotation.x = globeWire.rotation.x;
    cityDots.rotation.x = globeWire.rotation.x;
    arcsGroup.rotation.x = globeWire.rotation.x;

    globeWire.rotation.y += targetRotExtra * 0.005;

    // Animate traveling particles
    travelParticles.forEach(p => {
      p.t += p.speed;
      if (p.t > 1) p.t = 0;
      const pos = p.curve.getPoint(p.t);
      // Apply same rotation as globe
      const euler = new THREE.Euler(globeWire.rotation.x, globeWire.rotation.y, globeWire.rotation.z);
      pos.applyEuler(euler);
      p.mesh.position.copy(pos);
      p.mesh.material.opacity = Math.sin(p.t * Math.PI) * 0.9;
    });

    // Pulse city dots
    cityDots.children.forEach((mesh, i) => {
      if (i % 2 === 0) { // glow meshes
        mesh.material.opacity = 0.2 + Math.sin(time * 2 + i) * 0.15;
        mesh.scale.setScalar(1 + Math.sin(time * 2 + i) * 0.15);
      }
    });

    // Atmospheric pulse
    atmosGlow.material.opacity = 0.025 + Math.sin(time) * 0.01;

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
}

// ===================== HERO IMAGE CROSSFADE (for subpages) =====================
function initHeroCrossfade() {
  const layer1 = document.getElementById('bg-layer-1');
  const layer2 = document.getElementById('bg-layer-2');
  if (!layer1 || !layer2) return;
  const images = ['IMG video/Images/hero1.webp','IMG video/Images/hero2.webp','IMG video/Images/hero3.webp'];
  let idx = 0, active = layer1;
  function crossfade() {
    const next = (idx + 1) % images.length;
    const inactive = active === layer1 ? layer2 : layer1;
    inactive.style.backgroundImage = `url('${images[next]}')`;
    active.style.opacity = '0'; inactive.style.opacity = '1';
    active = inactive; idx = next;
  }
  setInterval(crossfade, 5000);
}

// ===================== ABOUT IMAGE CROSSFADE =====================
function initAboutCrossfade() {
  const layer1 = document.getElementById('about-bg-layer-1');
  const layer2 = document.getElementById('about-bg-layer-2');
  if (!layer1 || !layer2) return;
  const images = ['IMG video/Images/team1.webp','IMG video/Images/team2.webp','IMG video/Images/team.webp'];
  let idx = 0, active = layer1;
  function crossfade() {
    const next = (idx + 1) % images.length;
    const inactive = active === layer1 ? layer2 : layer1;
    inactive.style.backgroundImage = `url('${images[next]}')`;
    active.style.opacity = '0'; inactive.style.opacity = '1';
    active = inactive; idx = next;
  }
  setInterval(crossfade, 5000);
}

// ===================== COUNTER ANIMATION (eased) =====================
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const elapsed = Math.min((now - start) / duration, 1);
          const value = Math.round(easeOutExpo(elapsed) * target);
          el.textContent = value + suffix;
          if (elapsed < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ===================== DOMContentLoaded =====================
document.addEventListener('DOMContentLoaded', async function() {

  // Add film grain overlay
  const grain = document.createElement('div');
  grain.className = 'grain-overlay';
  document.body.appendChild(grain);

  async function fetchHtml(url) {
    try {
      const resp = await fetch(url);
      if (!resp.ok) return '';
      return await resp.text();
    } catch { return ''; }
  }

  // Load header and footer
  const headerPh = document.querySelector('#header-placeholder');
  const footerPh = document.querySelector('#footer-placeholder');

  const [headerHtml, footerHtml] = await Promise.all([
    headerPh ? fetchHtml('header.html') : Promise.resolve(''),
    footerPh ? fetchHtml('footer.html') : Promise.resolve('')
  ]);

  if (headerPh && headerHtml) {
    const tmp = document.createElement('div'); tmp.innerHTML = headerHtml;
    while (tmp.firstChild) headerPh.parentNode.insertBefore(tmp.firstChild, headerPh);
    headerPh.remove();
  }
  if (footerPh && footerHtml) {
    const tmp = document.createElement('div'); tmp.innerHTML = footerHtml;
    while (tmp.firstChild) footerPh.parentNode.insertBefore(tmp.firstChild, footerPh);
    footerPh.remove();
  }

  initializePageScripts();
  initHeroGlobe();
  initHeroCrossfade();
  initAboutCrossfade();
  initCounters();

  // Preloader
  window.addEventListener('load', () => {
    setTimeout(() => document.body.classList.add('loaded'), 600);
  });
  // Fallback
  setTimeout(() => document.body.classList.add('loaded'), 3500);
});

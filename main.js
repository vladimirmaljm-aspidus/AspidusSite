// main.js

function initializePageScripts() {
    
    // --- Mobile Menu ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const menuIcon = document.getElementById('menu-icon');

    function toggleMenu() {
        if (!mobileMenu || !mobileMenuOverlay || !menuIcon) return;
        const isOpen = mobileMenu.classList.toggle('open');
        mobileMenuOverlay.classList.toggle('open');
        menuIcon.className = isOpen ? 'ri-close-line text-3xl' : 'ri-menu-line text-3xl';
        
        if (isOpen) {
            menuIcon.classList.add('text-white');
        } else {
            menuIcon.classList.remove('text-white');
        }

        document.body.style.overflow = isOpen ? 'hidden' : '';
        mobileMenu.querySelectorAll('a, h4').forEach((item, index) => {
            item.style.transitionDelay = isOpen ? `${index * 0.05 + 0.1}s` : '0s';
        });
    }

    if (mobileMenuButton) mobileMenuButton.addEventListener('click', toggleMenu);
    if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', toggleMenu);
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (event) => {
                const isLanguageOption = link.classList.contains('language-option');
                const href = link.getAttribute('href');
                
                if ((href && href.startsWith('#')) || !isLanguageOption) {
                    if (mobileMenu.classList.contains('open')) {
                        toggleMenu();
                    }
                }
            });
        });
    }

    // --- Language Switcher ---
    function switchLanguage(lang) {
        localStorage.setItem('selectedLanguage', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-en-text]').forEach(el => {
            const translationKey = `data-${lang}-text`;
            const translatedText = el.getAttribute(translationKey) || el.getAttribute('data-en-text');
            el.innerHTML = translatedText;
        });

        document.querySelectorAll('img[data-en-alt]').forEach(img => {
            const altTranslationKey = `data-${lang}-alt`;
            const translatedAltText = img.getAttribute(altTranslationKey) || img.getAttribute('data-en-alt');
            img.alt = translatedAltText;
        });
         
        document.querySelectorAll('input[data-en-placeholder]').forEach(input => {
             const placeholderKey = `data-${lang}-placeholder`;
             input.placeholder = input.getAttribute(placeholderKey) || input.getAttribute('data-en-placeholder');
        });

        document.querySelectorAll('label[data-en-text], option[data-en-text]').forEach(el => {
            const key = `data-${lang}-text`;
            el.textContent = el.getAttribute(key) || el.getAttribute('data-en-text');
        });

        const langDisplay = document.getElementById('current-language-display');
        if (langDisplay) langDisplay.textContent = lang.toUpperCase();
    }

    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            switchLanguage(selectedLang);
            if (mobileMenu && mobileMenu.classList.contains('open')) {
                toggleMenu(); 
            }
        });
    });

    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    switchLanguage(savedLang); 

    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 }); 
    
    setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            if (!el.classList.contains('visible')) {
                observer.observe(el);
            }
        });
    }, 100); 

    // --- Form Placeholders ---
    document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
        input.setAttribute('placeholder', ' '); 
    });

    // --- Smooth Scroll for anchors ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault(); 
                return;
            }
            
            const targetElement = document.getElementById(href.substring(1)); 
            
            if (targetElement) {
                e.preventDefault(); 
                const headerOffset = 80; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Header Shadow & Back to Top ---
    const header = document.querySelector('header');
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (header) {
            header.classList.toggle('shadow-md', window.scrollY > 50);
        }
        if (backToTopButton) {
            backToTopButton.classList.toggle('show', window.scrollY > 300);
        }
    });

    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Info Cards Logic ---
    const infoModal = document.getElementById('info-modal');
    if (infoModal) {
        const infoModalTitle = document.getElementById('info-modal-title');
        const infoModalBody = document.getElementById('info-modal-body');
        const infoModalIconContainer = document.getElementById('info-modal-icon');
        const closeInfoModalBtn = infoModal.querySelector('.info-modal-close');
        const modalContent = infoModal.querySelector('.modal-content');

        document.querySelectorAll('.info-card').forEach(card => {
            card.addEventListener('click', () => {
                const lang = document.documentElement.lang || 'en';
                const title = card.getAttribute(`data-${lang}-title`) || card.getAttribute('data-en-title');
                const body = card.getAttribute(`data-${lang}-body`) || card.getAttribute('data-en-body');
                
                const iconElement = card.querySelector('.card-icon-source');
                if (iconElement) {
                     infoModalIconContainer.innerHTML = iconElement.outerHTML;
                     const modalIcon = infoModalIconContainer.querySelector('i');
                     modalIcon.className = modalIcon.className.replace(/text-\w+(-\d+)?/g, ''); 
                     modalIcon.classList.add('text-primary', 'text-4xl'); 
                }

                infoModalTitle.innerHTML = title;
                infoModalBody.innerHTML = body;

                infoModal.classList.add('visible');
                setTimeout(() => {
                    modalContent.classList.remove('scale-95', 'opacity-0');
                    modalContent.classList.add('scale-100', 'opacity-100');
                }, 10);
                document.body.style.overflow = 'hidden';
            });
        });

        const closeInfo = () => {
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                infoModal.classList.remove('visible');
                document.body.style.overflow = '';
            }, 300);
        };

        if (closeInfoModalBtn) closeInfoModalBtn.addEventListener('click', closeInfo);
        infoModal.addEventListener('click', (e) => {
            if (e.target === infoModal) closeInfo();
        });
    }

    // --- Policy Modal Logic ---
    const policyModal = document.getElementById('policy-modal');
    if (policyModal) {
        const modalTitle = policyModal.querySelector('#modal-title');
        const modalBody = policyModal.querySelector('#modal-body');
        const closeModalButton = policyModal.querySelector('.modal-close');

        const modalContentData = {
             privacy: {
                en: { 
                    title: "Privacy Policy", 
                    content: `<h3>1. Information We Collect</h3><p>We collect information you provide directly to us through the contact form, including your name, email address, company name, and any other information you choose to provide. We may also collect technical information automatically, such as your IP address and browser type, to improve our services.</p><h3>2. How We Use Your Information</h3><p>Your information is used to respond to your inquiries, provide customer support, and improve our website and services. We do not sell or share your personal information with third parties for marketing purposes.</p><h3>3. Data Security</h3><p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no internet-based site can be 100% secure, so we cannot guarantee absolute security.</p><h3>4. Your Rights</h3><p>You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at info@aspidus.co.</p>` 
                },
                tr: { title: "Gizlilik Politikası", content: `<h3>1. Topladığımız Bilgiler</h3> <p>İletişim formu aracılığıyla bize doğrudan sağladığınız bilgileri toplarız; adınız, e-posta adresiniz, şirket adınız ve sağlamayı seçtiğiniz diğer bilgiler dahil. Hizmetlerimizi iyileştirmek için IP adresiniz ve tarayıcı türünüz gibi teknik bilgileri de otomatik olarak toplayabiliriz.</p><h3>2. Bilgilerinizi Nasıl Kullanıyoruz</h3><p>Bilgileriniz, sorularınıza yanıt vermek, müşteri desteği sağlamak ve web sitemizi ve hizmetlerimizi iyileştirmek için kullanılır. Kişisel bilgilerinizi pazarlama amacıyla üçüncü taraflarla satmayız veya paylaşmayız.</p><h3>3. Veri Güvenliği</h3><p>Kişisel bilgilerinizi yetkisiz erişim, değişiklik veya ifşadan korumak için uygun güvenlik önlemleri uygularız. Ancak, internet tabanlı hiçbir site %100 güvenli olamaz, bu nedenle mutlak güvenliği garanti edemeyiz.</p><h3>4. Haklarınız</h3><p>Kişisel bilgilerinize erişme, düzeltme veya silme hakkınız vardır. Bu hakları kullanmak isterseniz, lütfen info@aspidus.co adresinden bizimle iletişime geçin.</p>` },
                ru: { title: "Политика конфиденциальности", content: `<h3>1. Собираемая информация</h3> <p>Мы собираем информацию, которую вы предоставляете нам напрямую через контактную форму, включая ваше имя, адрес электронной почты, название компании и любую другую информацию, которую вы решите предоставить. Мы также можем автоматически собирать техническую информацию, такую как ваш IP-адрес и тип браузера, для улучшения наших услуг.</p><h3>2. Как мы используем вашу информацию</h3><p>Ваша информация используется для ответа на ваши запросы, предоставления поддержки клиентов и улучшения нашего веб-сайта и услуг. Мы не продаем и не передаем вашу личную информацию третьим лицам в маркетинговых целях.</p><h3>3. Безопасность данных</h3><p>Мы принимаем соответствующие меры безопасности для защиты вашей личной информации от несанкционированного доступа, изменения или раскрытия. Однако ни один сайт в Интернете не может быть на 100% безопасным, поэтому мы не можем гарантировать абсолютную безопасность.</p><h3>4. Ваши права</h3><p>Вы имеете право на доступ, исправление или удаление вашей личной информации. Если вы хотите воспользоваться этими правами, пожалуйста, свяжитесь с нами по адресу info@aspidus.co.</p>` },
                sr: { 
                    title: "Politika Privatnosti", 
                    content: `<h3>1. Informacije koje prikupljamo</h3><p>Prikupljamo informacije koje nam direktno pružite putem kontakt forme, uključujući vaše ime, email adresu, ime kompanije i sve druge informacije koje odlučite da pružite. Takođe možemo automatski prikupljati tehničke informacije, kao što su vaša IP adresa i tip pretraživača, radi poboljšanja naših usluga.</p><h3>2. Kako koristimo vaše informacije</h3><p>Vaše informacije se koriste za odgovaranje na vaše upite, pružanje korisničke podrške i poboljšanje našeg veb-sajta i usluga. Ne prodajemo niti delimo vaše lične informacije sa trećim stranama u marketinške svrhe.</p><h3>3. Sigurnost podataka</h3><p>Primenjujemo odgovarajuće sigurnosne mere kako bismo zaštitili vaše lične informacije od neovlašćenog pristupa, izmene ili otkrivanja. Međutim, nijedan sajt zasnovan na internetu ne može biti 100% siguran, tako da ne možemo garantovati apsolutnu sigurnost.</p><h3>4. Vaša prava</h3><p>Imate pravo da pristupite, ispravite ili obrišete svoje lične informacije. Ako želite da ostvarite ova prava, molimo vas da nas kontaktirate na info@aspidus.co.</p>` 
                }
            },
            terms: {
                en: { 
                    title: "Terms of Service", 
                    content: `<h3>1. Acceptance of Terms</h3><p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this site.</p><h3>2. Website Use</h3><p>This site and its components are offered for informational purposes only; this site shall not be responsible or liable for the accuracy, usefulness, or availability of any information transmitted or made available via the site.</p><h3>3. Intellectual Property</h3><p>The website and its original content, features, and functionality are owned by Aspidus and are protected by international copyright, trademark, and other intellectual property laws.</p><h3>4. Limitation of Liability</h3><p>In no event shall Aspidus, nor its directors, employees, or partners, be liable for any indirect, incidental, or consequential damages arising out of your use of the site.</p>` 
                },
                tr: { title: "Hizmet Şartları", content: `<h3>1. Şartların Kabulü</h3><p>Bu web sitesine erişerek ve kullanarak, bu sözleşmenin hüküm ve koşullarına bağlı kalmayı kabul etmiş olursunuz. Bu şartlara uymayı kabul etmiyorsanız, lütfen bu siteyi kullanmayın.</p><h3>2. Web Sitesi Kullanımı</h3><p>Bu site ve bileşenleri yalnızca bilgilendirme amacıyla sunulmaktadır; bu site, site aracılığıyla iletilen veya kullanıma sunulan herhangi bir bilginin doğruluğu, kullanışlılığı veya kullanılabilirliğinden sorumlu veya yükümlü olmayacaktır.</p><h3>3. Fikri Mülkiyet</h3><p>Web sitesi ve orijinal içeriği, özellikleri ve işlevselliği Aspidus'a aittir ve uluslararası telif hakkı, ticari marka ve diğer fikri mülkiyet yasalarıyla korunmaktadır.</p><h3>4. Sorumluluğun Sınırlandırılması</h3><p>Hiçbir durumda Aspidus veya yöneticileri, çalışanları veya ortakları, siteyi kullanımınızdan kaynaklanan dolaylı, arızi veya sonuç olarak ortaya çıkan zararlardan sorumlu olmayacaktır.</p>` },
                ru: { title: "Условия использования", content: `<h3>1. Принятие условий</h3><p>Получая доступ к этому веб-сайту и используя его, вы принимаете и соглашаетесь соблюдать условия и положения настоящего соглашения. Если вы не согласны соблюдать эти условия, пожалуйста, не используйте этот сайт.</p><h3>2. Использование веб-сайта</h3><p>Этот сайт и его компоненты предлагаются только в информационных целях; данный сайт не несет ответственности за точность, полезность или доступность любой информации, передаваемой или предоставляемой через сайт.</p><h3>3. Интеллектуальная собственность</h3><p>Веб-сайт и его оригинальное содержание, функции и функциональность принадлежат Aspidus и защищены международными законами об авторском праве, товарных знаках и другими законами об интеллектуальной собственности.</p><h3>4. Ограничение ответственности</h3><p>Ни при каких обстоятельствах Aspidus, а также его директора, сотрудники или партнеры не несут ответственности за любые косвенные, случайные или последующие убытки, возникшие в результате использования вами сайта.</p>` },
                sr: { 
                    title: "Uslovi Korišćenja", 
                    content: `<h3>1. Prihvatanje uslova</h3><p>Pristupanjem i korišćenjem ovog veb-sajta, prihvatate i slažete se da budete vezani uslovima i odredbama ovog sporazuma. Ako se ne slažete da poštujete ove uslove, molimo vas da ne koristite ovaj sajt.</p><h3>2. Korišćenje veb-sajta</h3><p>Ovaj sajt i njegove komponente nude se samo u informativne svrhe; ovaj sajt neće biti odgovoran za tačnost, korisnost ili dostupnost bilo koje informacije prenete ili učinjene dostupnim putem sajta.</p><h3>3. Intelektualna svojina</h3><p>Veb-sajt i njegov originalni sadržaj, karakteristike i funkcionalnost su vlasništvo kompanije Aspidus i zaštićeni su međunarodnim zakonima o autorskim pravima, žigovima i drugim zakonima o intelektualnoj svojini.</p><h3>4. Ograničenje odgovornosti</h3><p>Ni u kom slučaju Aspidus, niti njegovi direktori, zaposleni ili partneri, neće biti odgovorni za bilo kakvu indirektnu, slučajnu ili posledičnu štetu koja proističe iz vašeg korišćenja sajta.</p>` 
                }
            },
            cookie: {
                en: { 
                    title: "Cookie Policy", 
                    content: `<h3>1. What Are Cookies?</h3><p>Cookies are small text files stored on your device (computer, tablet, mobile phone) when you visit certain websites. They are used to 'remember' you and your preferences, either for a single visit (through a 'session cookie') or for multiple repeat visits (using a 'persistent cookie').</p><h3>2. How We Use Cookies</h3><p>We use cookies for essential functions and to improve user experience. This includes:</p><ul><li><strong>Functionality Cookies:</strong> To remember your language preference.</li><li><strong>Performance Cookies:</strong> To help us analyze how visitors use the site and to monitor its performance. This allows us to provide a high-quality experience by customizing our offering and quickly identifying and fixing any issues that arise.</li></ul><h3>3. Managing Cookies</h3><p>Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies or to delete certain cookies. Please note that if you choose to block cookies, your experience on our website may be impaired.</p>` 
                },
                tr: { title: "Çerez Politikası", content: `<h3>1. Çerezler Nedir?</h3><p>Çerezler, belirli web sitelerini ziyaret ettiğinizde cihazınızda (bilgisayar, tablet, cep telefonu) saklanan küçük metin dosyalarıdır. Sizi ve tercihlerinizi 'hatırlamak' için kullanılırlar; ya tek bir ziyaret için ('oturum çerezi' aracılığıyla) ya da birden fazla tekrarlanan ziyaret için ('kalıcı çerez' kullanarak).</p><h3>2. Çerezleri Nasıl Kullanıyoruz</h3><p>Çerezleri temel işlevler ve kullanıcı deneyimini iyileştirmek için kullanıyoruz. Bu şunları içerir:</p><ul><li><strong>İşlevsellik Çerezleri:</strong> Dil tercihinizi hatırlamak için.</li><li><strong>Performans Çerezleri:</strong> Ziyaretçilerin siteyi nasıl kullandığını analiz etmemize ve performansını izlememize yardımcı olmak için. Bu, teklifimizi özelleştirerek ve ortaya çıkan sorunları hızla belirleyip düzelterek yüksek kaliteli bir deneyim sunmamızı sağlar.</li></ul><h3>3. Çerezleri Yönetme</h3><p>Çoğu web tarayıcısı çerez tercihlerinizi yönetmenize olanak tanır. Tarayıcınızı çerezleri reddedecek veya belirli çerezleri silecek şekilde ayarlayabilirsiniz. Çerezleri engellemeyi seçerseniz, web sitemizdeki deneyiminizin bozulabileceğini lütfen unutmayın.</p>` },
                ru: { title: "Политика использования файлов cookie", content: `<h3>1. Что такое файлы cookie?</h3><p>Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве (компьютере, планшете, мобильном телефоне), когда вы посещаете определенные веб-сайты. Они используются, чтобы «запомнить» вас и ваши предпочтения либо для одного посещения (с помощью «сеансового файла cookie»), либо для нескольких повторных посещений (с использованием «постоянного файла cookie»).</p><h3>2. Как мы используем файлы cookie</h3><p>Мы используем файлы cookie для основных функций и для улучшения пользовательского опыта. Это включает:</p><ul><li><strong>Функциональные файлы cookie:</strong> Чтобы запомнить ваши языковые предпочтения.</li><li><strong>Файлы cookie производительности:</strong> Чтобы помочь нам анализировать, как посетители используют сайт, и отслеживать его производительность. Это позволяет нам предоставлять высококачественный опыт, настраивая наше предложение и быстро выявляя и устраняя любые возникающие проблемы.</li></ul><h3>3. Управление файлами cookie</h3><p>Большинство веб-браузеров позволяют управлять настройками файлов cookie. Вы можете настроить свой браузер так, чтобы он отклонял файлы cookie или удалял определенные файлы cookie. Обратите внимание, что если вы решите заблокировать файлы cookie, ваш опыт работы на нашем веб-сайте может быть нарушен.</p>` },
                sr: { 
                    title: "Politika Kolačića", 
                    content: `<h3>1. Šta su kolačići?</h3><p>Kolačići su male tekstualne datoteke koje se čuvaju na vašem uređaju (računar, tablet, mobilni telefon) kada posetite određene veb-sajtove. Koriste se da bi vas 'zapamtili' i vaše preferencije, bilo za jednu posetu (putem 'kolačića sesije') ili za više ponovljenih poseta (koristeći 'trajni kolačić').</p><h3>2. Kako koristimo kolačiće</h3><p>Koristimo kolačiće za osnovne funkcije i za poboljšanje korisničkog iskustva. Ovo uključuje:</p><ul><li><strong>Funkcionalni kolačići:</strong> Da zapamtimo vašu jezičku preferenciju.</li><li><strong>Kolačići performansi:</strong> Da nam pomognu da analiziramo kako posetioci koriste sajt i da pratimo njegove performanse. Ovo nam omogućava da pružimo visokokvalitetno iskustvo prilagođavanjem naše ponude i brzim identifikovanjem i rešavanjem bilo kakvih problema koji se pojave.</li></ul><h3>3. Upravljanje kolačićima</h3><p>Većina veb pretraživača vam omogućava da upravljate preferencijama kolačića. Možete podesiti svoj pretraživač da odbije kolačiće ili da obriše određene kolačiće. Imajte na umu da ako odlučite da blokirate kolačiće, vaše iskustvo na našem veb-sajtu može biti narušeno.</p>` 
                }
            },
            disclaimer: {
                en: { 
                    title: "Disclaimer", 
                    content: `<p>The information contained on this website is for general information purposes only. While we endeavor to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability with respect to the website or the information, products, or services contained on the website.</p><p><strong>Official Communication:</strong> All official communications from Aspidus are conducted exclusively through verified company email addresses ending in <strong>@aspidus.co</strong>. Aspidus is not responsible for any communication originating from other domains. Should you receive any suspicious correspondence from individuals claiming to represent our company, we strongly advise you to contact us immediately through our official channels for verification.</p>` 
                },
                tr: { title: "Yasal Uyarı", content: `<p>Bu web sitesinde yer alan bilgiler yalnızca genel bilgilendirme amaçlıdır. Bilgileri güncel ve doğru tutmaya çalışsak da, web sitesi veya web sitesinde yer alan bilgiler, ürünler veya hizmetlerle ilgili olarak eksiksizlik, doğruluk, güvenilirlik veya kullanılabilirlik konusunda açık veya zımni hiçbir beyanda bulunmuyor veya garanti vermiyoruz.</p><p><strong>Resmi İletişim:</strong> Aspidus'tan gelen tüm resmi iletişimler yalnızca <strong>@aspidus.co</strong> ile biten doğrulanmış şirket e-posta adresleri aracılığıyla yapılır. Aspidus, diğer alan adlarından kaynaklanan hiçbir iletişimden sorumlu değildir. Şirketimizi temsil ettiğini iddia eden kişilerden şüpheli yazışmalar alırsanız, doğrulama için derhal resmi kanallarımız aracılığıyla bizimle iletişime geçmenizi şiddetle tavsiye ederiz.</p>` },
                ru: { title: "Отказ от ответственности", content: `<p>Информация, содержащаяся на этом веб-сайту, предназначена только для общих информационных целей. Хотя мы стремимся поддерживать информацию в актуальном состоянии и обеспечивать ее правильность, мы не делаем никаких заявлений и не даем никаких гарантий, явных или подразумеваемых, относительно полноты, точности, надежности или доступности в отношении веб-сайта или информации, продуктов или услуг, содержащихся на веб-сайте.</p><p><strong>Официальная коммуникация:</strong> Вся официальная коммуникация от Aspidus осуществляется исключительно через проверенные адреса электронной почты компании, заканчивающиеся на <strong>@aspidus.co</strong>. Aspidus не несет ответственности за любую коммуникацию, исходящую из других доменов. Если вы получите подозрительную корреспонденцию от лиц, утверждающих, что они представляют нашу компанию, мы настоятельно рекомендуем вам немедленно связаться с нами по нашим официальным каналам для проверки.</p>` },
                sr: { 
                    title: "Odricanje Odgovornosti", 
                    content: `<p>Informacije sadržane na ovom veb-sajtu su samo za opšte informativne svrhe. Iako nastojimo da informacije budu ažurne i tačne, ne dajemo nikakve izjave ili garancije bilo koje vrste, izričite ili podrazumevane, o potpunosti, tačnosti, pouzdanosti ili dostupnosti u vezi sa veb-sajtom ili informacijama, proizvodima ili uslugama sadržanim na veb-sajtu.</p><p><strong>Zvanična komunikacija:</strong> Sve zvanične komunikacije kompanije Aspidus sprovode se isključivo putem verifikovanih email adresa kompanije koje se završavaju sa <strong>@aspidus.co</strong>. Aspidus nije odgovoran za bilo kakvu komunikaciju koja potiče sa drugih domena. Ukoliko primite bilo kakvu sumnjivu prepisku od osoba koje tvrde da predstavljaju našu kompaniju, snažno vam savetujemo da nas odmah kontaktirate putem naših zvaničnih kanala radi provere.</p>` 
                }
            }
        };

        function openPolicyModal(targetPolicy) {
            const currentLang = document.documentElement.lang || 'en'; 
            const data = modalContentData[targetPolicy]?.[currentLang] || modalContentData[targetPolicy]?.['en']; 

            if (data && modalTitle && modalBody && policyModal) {
                modalTitle.textContent = data.title;
                modalBody.innerHTML = data.content;
                policyModal.classList.add('visible'); 
                document.body.style.overflow = 'hidden'; 
            } else {
                console.error("Modal content not found for:", targetPolicy);
            }
        }

        function closePolicyModal() {
            if (policyModal) {
                policyModal.classList.remove('visible'); 
                document.body.style.overflow = ''; 
            }
        }

        document.addEventListener('click', function(e) {
            const targetLink = e.target.closest('footer a[data-modal-target]');
            if (targetLink) {
                e.preventDefault();
                const target = targetLink.getAttribute('data-modal-target');
                openPolicyModal(target);
            }
        });

        if (closeModalButton) {
            closeModalButton.addEventListener('click', closePolicyModal);
        }
        policyModal.addEventListener('click', function(e) {
            if (e.target === policyModal) { 
                closePolicyModal();
            }
        });
    }

    // --- Contact Form Logic ---
    const mainForm = document.getElementById('contact-form');
    
    if (mainForm) {
        const inquiryTypeSelect = document.getElementById('inquiry_type');
        const businessSection = document.getElementById('business-section');
        const supplierSection = document.getElementById('supplier-vetting-section');
        const supplierTypeSelect = document.getElementById('supplier_type');
        const manufacturerFields = document.getElementById('manufacturer-fields');
        const traderFields = document.getElementById('trader-fields');
        
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const submitButton = mainForm.querySelector('button[type="submit"]');
        const successMessage = document.getElementById('form-success-message');
        const errorMessage = document.getElementById('form-error-message');

        const businessInputs = ['company_name', 'company_reg_number', 'company_address'];
        const freeEmailDomains = [
            'gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'aol.com', 
            'protonmail.com', 'mail.com', 'yandex.com', 'icloud.com'
        ];

        function handleInquiryChange() {
            const type = inquiryTypeSelect.value;
            const tradeSection = document.getElementById('trade-details-section');
            const verificationSection = document.getElementById('verification-section');

            businessSection.classList.add('hidden');
            supplierSection.classList.add('hidden');
            if(tradeSection) tradeSection.classList.add('hidden');
            if(verificationSection) verificationSection.classList.add('hidden');
            manufacturerFields.classList.add('hidden');
            traderFields.classList.add('hidden');
            
            setRequired(businessInputs, false);
            const supplierType = document.getElementById('supplier_type');
            const supplyProof = document.getElementById('supply_proof');
            if(supplierType) supplierType.required = false;
            if(supplyProof) supplyProof.required = false;

            if (type === 'buying' || type === 'selling' || type === 'partnership') {
                businessSection.classList.remove('hidden');
                if(verificationSection) verificationSection.classList.remove('hidden'); 
                setRequired(businessInputs, true); 
                
                if ((type === 'buying' || type === 'selling') && tradeSection) {
                    tradeSection.classList.remove('hidden');
                }

                if (type === 'selling') {
                    supplierSection.classList.remove('hidden');
                    if(supplierType) supplierType.required = true;
                }
            }
        }

        function handleSupplierTypeChange() {
            const type = supplierTypeSelect.value;
            manufacturerFields.classList.add('hidden');
            traderFields.classList.add('hidden');
            const supplyProof = document.getElementById('supply_proof');
            if(supplyProof) supplyProof.required = false;

            if (type === 'Manufacturer') {
                manufacturerFields.classList.remove('hidden');
            } else if (type === 'Authorized_Distributor' || type === 'Trader') {
                traderFields.classList.remove('hidden');
                if(supplyProof) supplyProof.required = true; 
            }
        }

        function setRequired(ids, isRequired) {
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.required = isRequired;
            });
        }

        if (inquiryTypeSelect) inquiryTypeSelect.addEventListener('change', handleInquiryChange);
        if (supplierTypeSelect) supplierTypeSelect.addEventListener('change', handleSupplierTypeChange);

        async function handleFormSubmit(event) {
            event.preventDefault();
            const inquiryType = inquiryTypeSelect.value;
            const isBusiness = (inquiryType === 'buying' || inquiryType === 'selling' || inquiryType === 'partnership');

            if (isBusiness) {
                const email = emailInput.value.toLowerCase();
                const domain = email.split('@')[1];
                if (domain && freeEmailDomains.some(d => domain.includes(d))) {
                    emailError.classList.remove('hidden');
                    emailInput.focus();
                    const lang = document.documentElement.lang || 'en';
                    const errorText = emailError.getAttribute(`data-${lang}-text`) || "Please use a corporate email address for business inquiries.";
                    emailError.textContent = errorText;
                    return;
                }
                emailError.classList.add('hidden');
            }

            const form = event.target;
            const data = new FormData(form);
            const lang = document.documentElement.lang || 'en';
            const sendingText = submitButton.getAttribute(`data-sending-${lang}`) || 'Processing...';

            submitButton.disabled = true;
            submitButton.innerHTML = `<i class="ri-loader-4-line animate-spin mr-2"></i> ${sendingText}`;

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    mainForm.classList.add('hidden');
                    successMessage.classList.remove('hidden');
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (error) {
                mainForm.classList.add('hidden');
                errorMessage.classList.remove('hidden');
                console.error('Form submission error:', error);
            }
        }

        mainForm.addEventListener('submit', handleFormSubmit);
    }
} 

function setActiveNavLink() {
    const currentPageName = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const pageMap = {
        'index': 'index.html',
        'commodities': 'commodities.html',
        'contact': 'contact.html',
        'aspidus-dubai': 'aspidus-dubai.html',
        'aspidus-capetown': 'aspidus-capetown.html',
        'aspidus-istanbul': 'aspidus-istanbul.html'
    };

    const targetHref = pageMap[currentPageName] || 'index.html'; 

    const navLinks = document.querySelectorAll('header nav a.nav-link');
    navLinks.forEach(link => {
        const linkHref = new URL(link.href).pathname.split('/').pop();
        
        link.classList.remove('text-primary', 'active-nav-link'); 
        link.classList.add('text-gray-700'); 
        link.style.fontWeight = '500'; 

        if (linkHref === targetHref) {
            link.classList.add('text-primary', 'active-nav-link');
            link.classList.remove('text-gray-700');
            link.style.fontWeight = '600'; 
        }
    });
}

// --- Specijalne animacije za Index stranicu ---
function initIndexAnimations() {
    // Hero Crossfade
    const bgLayer1 = document.getElementById('bg-layer-1');
    const bgLayer2 = document.getElementById('bg-layer-2');
    if (bgLayer1 && bgLayer2) {
        // Ako se imena fajlova razlikuju u tvom folderu, ovde ih ažuriraj:
        const images = [
            'IMG video/Images/hero1.webp', 
            'IMG video/Images/hero2.webp', 
            'IMG video/Images/hero3.webp'
        ];
        let currentIndex = 0;
        let activeLayer = bgLayer1;

        function setBackgroundImage(layer, imageUrl) {
            if(layer) {
                layer.style.backgroundImage = `url('${imageUrl}')`;
                layer.classList.add('hero-background-zoom');
            }
        }

        function crossfadeImages() {
            const nextImageIndex = (currentIndex + 1) % images.length;
            const nextImageUrl = images[nextImageIndex];
            let inactiveLayer = (activeLayer === bgLayer1) ? bgLayer2 : bgLayer1;

            setBackgroundImage(inactiveLayer, nextImageUrl);

            activeLayer.classList.remove('opacity-100');
            activeLayer.classList.add('opacity-0');
            inactiveLayer.classList.remove('opacity-0');
            inactiveLayer.classList.add('opacity-100');
            
            activeLayer.classList.remove('hero-background-zoom');
            inactiveLayer.classList.add('hero-background-zoom');

            activeLayer = inactiveLayer;
            currentIndex = nextImageIndex;
        }
        
        // Podesi prvu sliku da bismo bili sigurni da radi pre intervala
        setBackgroundImage(activeLayer, images[currentIndex]);
        setInterval(crossfadeImages, 5000);
    }

    // About Us Crossfade
    const aboutBgLayer1 = document.getElementById('about-bg-layer-1');
    const aboutBgLayer2 = document.getElementById('about-bg-layer-2');
    if (aboutBgLayer1 && aboutBgLayer2) {
        const aboutImages = ['IMG video/Images/team1.webp', 'IMG video/Images/team2.webp', 'IMG video/Images/team.webp'];
        let aboutCurrentIndex = 0;
        let aboutActiveLayer = aboutBgLayer1;

        function setAboutBackgroundImage(layer, imageUrl) {
            if(layer) { 
                layer.style.backgroundImage = `url('${imageUrl}')`; 
                layer.classList.remove('hero-background-zoom');
                void layer.offsetWidth; 
                layer.classList.add('hero-background-zoom');
            }
        }

        function crossfadeAboutImages() {
            const nextImageIndex = (aboutCurrentIndex + 1) % aboutImages.length;
            const nextImageUrl = aboutImages[aboutCurrentIndex];
            let inactiveLayer = (aboutActiveLayer === aboutBgLayer1) ? aboutBgLayer2 : aboutBgLayer1;

            setAboutBackgroundImage(inactiveLayer, nextImageUrl);
            aboutActiveLayer.classList.remove('opacity-100');
            aboutActiveLayer.classList.add('opacity-0');
            inactiveLayer.classList.remove('opacity-0');
            inactiveLayer.classList.add('opacity-100');

            aboutActiveLayer = inactiveLayer;
            aboutCurrentIndex = nextImageIndex;
        }
        setAboutBackgroundImage(aboutActiveLayer, aboutImages[aboutCurrentIndex]);
        setInterval(crossfadeAboutImages, 5000);
    }

    // Pocetne Hero Tekst animacije
    document.querySelectorAll('.hero-animate-on-load').forEach(el => { el.style.opacity = 0; });
    setTimeout(() => {
        const heroTitle = document.querySelector('h1.hero-animate-on-load.fade-in-up');
        const heroParagraph = document.querySelector('p.hero-animate-on-load.fade-in-up');
        const heroButtonLeft = document.querySelector('a.hero-animate-on-load.fade-in-left');
        const heroButtonRight = document.querySelector('a.hero-animate-on-load.fade-in-right');

        if (heroTitle) { heroTitle.classList.add('fade-in-up'); heroTitle.style.animationDelay = '0.3s'; }
        if (heroParagraph) { heroParagraph.classList.add('fade-in-up'); heroParagraph.style.animationDelay = '0.6s'; }
        if (heroButtonLeft) { heroButtonLeft.classList.add('fade-in-left'); heroButtonLeft.style.animationDelay = '0.9s'; }
        if (heroButtonRight) { heroButtonRight.classList.add('fade-in-right'); heroButtonRight.style.animationDelay = '1.2s'; }
        
        document.querySelectorAll('.hero-animate-on-load').forEach(el => { el.style.opacity = 1; });
    }, 300);
}

document.addEventListener("DOMContentLoaded", function() {
    const loadHtmlAndInitialize = async () => {
        const fetchHtml = async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    console.error(`Failed to load ${url}: ${response.statusText}`);
                    return ``; 
                }
                return await response.text();
            } catch (error) {
                console.error(`Error fetching ${url}:`, error);
                return ``;
            }
        };

        const headerPlaceholder = document.querySelector("#header-placeholder");
        const footerPlaceholder = document.querySelector("#footer-placeholder");

        const headerPromise = headerPlaceholder ? fetchHtml('header.html') : Promise.resolve('');
        const footerPromise = footerPlaceholder ? fetchHtml('footer.html') : Promise.resolve('');

        const [headerHtml, footerHtml] = await Promise.all([headerPromise, footerPromise]);

        if (headerPlaceholder && headerHtml) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = headerHtml;
            while (tempDiv.firstChild) {
                headerPlaceholder.parentNode.insertBefore(tempDiv.firstChild, headerPlaceholder);
            }
            headerPlaceholder.remove();
        }
        
        if (footerPlaceholder && footerHtml) {
             const tempDiv = document.createElement('div');
            tempDiv.innerHTML = footerHtml;
            while (tempDiv.firstChild) {
                footerPlaceholder.parentNode.insertBefore(tempDiv.firstChild, footerPlaceholder);
            }
            footerPlaceholder.remove();
        }

        initializePageScripts(); 
        setActiveNavLink(); 
        initIndexAnimations(); 
    }; 

    loadHtmlAndInitialize();

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 500); 
    });
});
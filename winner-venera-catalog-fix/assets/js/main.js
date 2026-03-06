(function(){
  // Mobile menu
  const burger = document.querySelector('[data-burger]');
  const panel = document.querySelector('[data-mobile]');
  if (burger && panel){
    panel.style.display = 'none';
    panel.setAttribute('data-open', '0');

    burger.addEventListener('click', () => {
      const open = panel.getAttribute('data-open') === '1';
      panel.setAttribute('data-open', open ? '0' : '1');
      panel.style.display = open ? 'none' : 'block';
      burger.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  }

  // Catalog cards + modal
  const catalogGrid = document.querySelector('#catalog-grid');
  if (catalogGrid){
    const catalogItems = [
      {
        panel: 'gading',
        title: 'Магический Гербарий Майи Толл',
        description: 'Атмосферное гадание на картах, вдохновлённых травами, растениями и природной символикой. Помогает мягко разобраться в чувствах, текущей ситуации и найти внутреннюю опору.',
        image: 'assets/img/catalog/gading-herbarium.png'
      },
      {
        panel: 'gading',
        title: 'Русские Руны',
        description: 'Практика на древних славянских символах для ясных ответов и уверенных решений. Подходит для вопросов о любви, работе, выборе пути и личной силе.',
        image: 'assets/img/catalog/gading-runes-russian.png'
      },
      {
        panel: 'gading',
        title: 'Глиняные Руны',
        description: 'Гадание на рунах из натуральной глины с глубокой земной энергетикой. Даёт спокойные, честные и интуитивные подсказки в важных жизненных вопросах.',
        image: 'assets/img/catalog/gading-runes-clay.png'
      },
      {
        panel: 'gading',
        title: 'Деревянные славянские руны',
        description: 'Руническая практика с природной и родовой энергетикой дерева. Хорошо подходит для поиска направления, внутренней устойчивости и понимания происходящего.',
        image: 'assets/img/catalog/gading-runes-wood.png'
      },
      {
        panel: 'gading',
        title: 'Карты знаков космоса',
        description: 'Гадание с астрологическим настроением, основанное на символике планет, звёзд и космических влияний. Помогает увидеть ситуацию шире и почувствовать верный вектор движения.',
        image: 'assets/img/catalog/gading-cosmos-signs.png'
      },
      {
        panel: 'gading',
        title: 'Метафорические карты «Веды Рам»',
        description: 'Мягкая и глубокая работа с образами, внутренними состояниями и подсознательными процессами. Подходит для самопознания, поиска ресурсов и проработки внутренних блоков.',
        image: 'assets/img/catalog/gading-veda-ram.png'
      },
      {
        panel: 'gading',
        title: 'Таро Странника',
        description: 'Колода для глубокого разбора ситуации, эмоций и скрытых причин событий. Показывает не только внешние обстоятельства, но и внутренние процессы, страхи и точки роста.',
        image: 'assets/img/catalog/gading-taro-strannik.png'
      },
      {
        panel: 'gading',
        title: 'Корейские карты Хато',
        description: 'Необычный формат гадания на картах с восточной эстетикой и тонкой символикой. Помогает посмотреть на вопрос под новым углом и почувствовать баланс между интуицией и логикой.',
        image: 'assets/img/catalog/gading-hato.png'
      },
      {
        panel: 'costumes',
        title: 'Платье в русском народном стиле',
        description: 'Яркий образ с национальными мотивами для славянских гаданий, тематических фотозон и атмосферных мероприятий. Усиливает подачу и создаёт цельный визуальный образ.',
        image: 'assets/img/catalog/costume-russian-dress.png'
      },
      {
        panel: 'costumes',
        title: 'Платье вампирши',
        description: 'Эффектный мистический образ для вечерних, театральных и готических событий. Подходит для яркой сценической подачи и фотогеничных форматов.',
        image: 'assets/img/catalog/costume-vampiress.png'
      },
      {
        panel: 'costumes',
        title: 'Костюм пиратки',
        description: 'Характерный костюм с настроением приключений и свободы. Отлично работает на тематических праздниках, интерактивах и шоу-программах.',
        image: 'assets/img/catalog/costume-pirate.png'
      },
      {
        panel: 'costumes',
        title: 'Костюм Гарри Поттер',
        description: 'Узнаваемый магический образ для сказочных, семейных и тематических мероприятий. Добавляет игре и подаче ощущение волшебства и фантазии.',
        image: 'assets/img/catalog/costume-harry-potter.png'
      },
      {
        panel: 'costumes',
        title: 'Костюм цыганки',
        description: 'Яркий и выразительный образ для гаданий, фотозон и событий с театральной подачей. Создаёт живую, эмоциональную и запоминающуюся атмосферу.',
        image: 'assets/img/catalog/costume-gypsy.png'
      },
      {
        panel: 'costumes',
        title: 'Халат для турецких гаданий',
        description: 'Восточный образ для стилизованных практик и загадочных тематических мероприятий. Добавляет подаче глубину, колорит и атмосферу таинственности.',
        image: 'assets/img/catalog/costume-turkish-robe.png'
      },
      {
        panel: 'costumes',
        title: 'Головные уборы',
        description: 'Подборка аксессуаров для завершения образа и точной стилизации под формат мероприятия. Помогают быстро усилить визуальное впечатление.',
        image: 'assets/img/catalog/costume-headwear.png'
      },
      {
        panel: 'costumes',
        title: 'Костюмы в корейском и китайском стиле',
        description: 'Восточные образы для культурных стилизаций, необычных мероприятий и эффектной презентации. Подходят для создания аккуратной и запоминающейся подачи.',
        image: 'assets/img/catalog/costume-asian.png'
      },
      {
        panel: 'costumes',
        title: 'Накидки',
        description: 'Универсальный элемент костюма для мистической, торжественной или сценической атмосферы. Хорошо сочетаются с разными образами и помогают быстро собрать нужный стиль.',
        image: 'assets/img/catalog/costume-capes.png'
      },
      {
        panel: 'props',
        title: 'Фата чёрная кружевная',
        description: 'Изящная деталь для загадочного, готического или мистического образа. Подходит для съёмок, гаданий и вечерних мероприятий.',
        image: 'assets/img/catalog/prop-veil-lace.png'
      },
      {
        panel: 'props',
        title: 'Рукава из фатина',
        description: 'Лёгкий декоративный элемент, который делает образ более воздушным и выразительным. Хорошо подходит для сказочных, магических и сценических стилизаций.',
        image: 'assets/img/catalog/prop-tulle-sleeves.png'
      },
      {
        panel: 'props',
        title: 'Перья',
        description: 'Яркий акцент для оформления образов, реквизита и фотозон. Добавляют подаче динамику, роскошь и декоративность.',
        image: 'assets/img/catalog/prop-feathers.png'
      },
      {
        panel: 'props',
        title: 'Сетка на лицо',
        description: 'Стильная деталь с лёгким эффектом тайны и ретро-драмы. Подходит для мистических, вечерних и театральных образов.',
        image: 'assets/img/catalog/prop-face-net.png'
      },
      {
        panel: 'props',
        title: 'Перчатки',
        description: 'Элегантный аксессуар, который завершает образ и делает его более цельным. Хорошо смотрятся в классических, винтажных и сценических подачах.',
        image: 'assets/img/catalog/prop-gloves.png'
      },
      {
        panel: 'props',
        title: 'Браслеты цветные',
        description: 'Декоративные аксессуары для ярких акцентов и живой стилизации. Подходят для восточных, этнических и праздничных образов.',
        image: 'assets/img/catalog/prop-bracelets.png'
      },
      {
        panel: 'props',
        title: 'Тибетская чаша',
        description: 'Атмосферный предмет для медитативной подачи, ритуальных практик и красивого оформления пространства. Добавляет ощущение спокойствия и глубины.',
        image: 'assets/img/catalog/prop-tibetan-bowl.png'
      },
      {
        panel: 'props',
        title: 'Паутина чёрная (декор)',
        description: 'Декоративный элемент для оформления стола, сцены, фотозоны или тематической комнаты. Отлично работает в мистической и хэллоуинской эстетике.',
        image: 'assets/img/catalog/prop-web-decor.png'
      },
      {
        panel: 'props',
        title: 'Жабо и манжеты',
        description: 'Стильный комплект для винтажных, театральных и готических образов. Делает подачу более собранной и выразительной.',
        image: 'assets/img/catalog/prop-jabot-cuffs.png'
      },
      {
        panel: 'props',
        title: 'Магический шар',
        description: 'Классический символ гадания и мистической атмосферы. Подходит как для реквизита, так и для оформления пространства и фотозоны.',
        image: 'assets/img/catalog/prop-crystal-ball.png'
      },
      {
        panel: 'props',
        title: 'Кокошник',
        description: 'Яркий элемент для народного, сказочного и славянского образа. Хорошо сочетается с русскими костюмами и тематической подачей.',
        image: 'assets/img/catalog/prop-kokoshnik.png'
      },
      {
        panel: 'fabrics',
        title: 'Скатерть красная с золотыми узорами',
        description: 'Эффектный текстиль для оформления стола, зоны гадания или фотопространства. Создаёт ощущение роскоши, выразительности и мистической атмосферы.',
        image: 'assets/img/catalog/fabric-red-tablecloth-gold.png'
      },
      {
        panel: 'fabrics',
        title: 'Дорожка «Звезды»',
        description: 'Тканевая дорожка для стола или декоративной зоны с астрологическим настроением. Хорошо подчёркивает космическую и магическую тематику.',
        image: 'assets/img/catalog/fabric-stars-runner.png'
      },
      {
        panel: 'fabrics',
        title: 'Мешковина классическая',
        description: 'Натуральная фактурная ткань для декора в природной, этнической или деревенской стилистике. Подходит для оформления столов, задников и атмосферных зон.',
        image: 'assets/img/catalog/fabric-burlap.png'
      },
      {
        panel: 'fabrics',
        title: 'Бархат зелёный',
        description: 'Плотная эффектная ткань с благородной фактурой для красивого оформления пространства. Хорошо сочетается с мистической, природной и винтажной эстетикой.',
        image: 'assets/img/catalog/fabric-velvet-green.png'
      },
      {
        panel: 'fabrics',
        title: 'Шёлк зелёный',
        description: 'Лёгкая декоративная ткань для драпировок, стола или акцентных деталей образа. Добавляет композиции мягкость, движение и изящество.',
        image: 'assets/img/catalog/fabric-silk-green.png'
      },
      {
        panel: 'fabrics',
        title: 'Ткань парашютная чёрная',
        description: 'Практичный материал для фонового оформления, затемнения пространства и создания более закрытой атмосферы. Удобно использовать для ширм, фонов и драпировок.',
        image: 'assets/img/catalog/fabric-parachute-black.png'
      },
      {
        panel: 'fabrics',
        title: 'Шерсть красная',
        description: 'Тёплая фактурная ткань для выразительных акцентов в декоре и костюмной подаче. Подходит для сезонной, народной и магической стилистики.',
        image: 'assets/img/catalog/fabric-wool-red.png'
      },
      {
        panel: 'fabrics',
        title: 'Лён чёрный',
        description: 'Сдержанный и универсальный материал для оформления столов, ритуальных зон и фонов. Смотрится аккуратно, стильно и подчёркивает реквизит.',
        image: 'assets/img/catalog/fabric-linen-black.png'
      },
      {
        panel: 'fabrics',
        title: 'Скатерть чёрная',
        description: 'Базовая текстильная основа для гадательных столов и тематического декора. Помогает визуально выделить карты, руны, магический шар и другие атрибуты.',
        image: 'assets/img/catalog/fabric-tablecloth-black.png'
      }
    ];

    const modal = document.createElement('div');
    modal.className = 'catalog-modal';
    modal.setAttribute('data-catalog-modal', '');
    modal.setAttribute('hidden', '');
    modal.innerHTML = [
      '<div class="catalog-modal__backdrop" data-catalog-close></div>',
      '<div class="catalog-modal__dialog" role="dialog" aria-modal="true" aria-label="Карточка каталога">',
      '  <button class="catalog-modal__close" type="button" data-catalog-close aria-label="Закрыть">✕</button>',
      '  <div class="catalog-modal__media">',
      '    <img data-catalog-image src="" alt="">',
      '  </div>',
      '  <div class="catalog-modal__content">',
      '    <h3 class="catalog-modal__title" data-catalog-title></h3>',
      '    <p class="catalog-modal__text" data-catalog-text></p>',
      '    <div class="catalog-modal__actions">',
      '      <a class="btn btn--navy" href="price.html">Заказать расчёт</a>',
      '      <a class="btn btn--ghost" href="contacts.html">Связаться с нами</a>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('');
    document.body.appendChild(modal);

    const modalTitle = modal.querySelector('[data-catalog-title]');
    const modalText = modal.querySelector('[data-catalog-text]');
    const modalImage = modal.querySelector('[data-catalog-image]');

    const closeModal = () => {
      modal.setAttribute('hidden', '');
      document.body.classList.remove('is-modal-open');
    };

    const openModal = (item) => {
      modalTitle.textContent = item.title;
      modalText.textContent = item.description;
      modalImage.src = item.image;
      modalImage.alt = item.title;
      modal.removeAttribute('hidden');
      document.body.classList.add('is-modal-open');
    };

    modal.addEventListener('click', (event) => {
      if (event.target.closest('[data-catalog-close]')) closeModal();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
    });

    catalogGrid.innerHTML = catalogItems.map((item, idx) => {
      return [
        `<article class="card catalog-card" data-panel="${item.panel}" data-catalog-card="${idx}" tabindex="0" role="button" aria-label="Открыть ${item.title}">`,
        `  <div class="card__media catalog-card__media"><img src="${item.image}" alt="${item.title}"></div>`,
        '  <div class="card__body">',
        `    <h3 class="card__title">${item.title}</h3>`,
        `    <p class="card__meta">${item.description}</p>`,
        '  </div>',
        '</article>'
      ].join('');
    }).join('');

    catalogGrid.addEventListener('click', (event) => {
      const card = event.target.closest('[data-catalog-card]');
      if (!card) return;
      const idx = Number(card.getAttribute('data-catalog-card'));
      const item = catalogItems[idx];
      if (item) openModal(item);
    });

    catalogGrid.addEventListener('keydown', (event) => {
      const card = event.target.closest('[data-catalog-card]');
      if (!card) return;
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      const idx = Number(card.getAttribute('data-catalog-card'));
      const item = catalogItems[idx];
      if (item) openModal(item);
    });
  }

  // Tabs (catalog page)
  const tabRoot = document.querySelector('[data-tabs]');
  if (tabRoot){
    const buttons = Array.from(tabRoot.querySelectorAll('[data-tab]'));
    const panels = Array.from(document.querySelectorAll('[data-panel]'));

    const activate = (name, withScroll) => {
      buttons.forEach((button) => button.classList.toggle('is-active', button.getAttribute('data-tab') === name));
      panels.forEach((node) => node.classList.toggle('hidden', node.getAttribute('data-panel') !== name));
      if (withScroll){
        const anchor = document.querySelector('#catalog-content');
        if (anchor) anchor.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => activate(button.getAttribute('data-tab'), true));
    });

    const initial = tabRoot.getAttribute('data-initial') || (buttons[0] && buttons[0].getAttribute('data-tab'));
    if (initial) activate(initial, false);
  }

  // Demo forms
  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (!btn) return;
      const old = btn.textContent;
      btn.textContent = 'Отправлено ✓';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = old;
        btn.disabled = false;
      }, 1800);
    });
  });

  // Scroll reveal
  const revealNodes = Array.from(document.querySelectorAll('.reveal, .card, .panel, .form'));
  revealNodes.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12, rootMargin: '0px 0px -10% 0px'});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Floating "write to us" widget
  const widget = document.createElement('div');
  widget.className = 'chat-widget';
  widget.innerHTML = `
    <div class="chat-panel" data-chat-panel>
      <div class="chat-panel__head">
        <div class="chat-panel__title">Напишите нам</div>
        <button class="chat-panel__close" type="button" aria-label="Закрыть" data-chat-close>✕</button>
      </div>
      <div class="chat-panel__body">
        <a class="chat-link" href="contacts.html">Контакты <span>→</span></a>
        <a class="chat-link" href="price.html">Заказать расчёт <span>→</span></a>
        <div class="chat-hint">Когда дашь реальные ссылки на WhatsApp / Telegram — поставим их сюда.</div>
      </div>
    </div>
    <div class="chat-bubble" data-chat-bubble role="button" aria-label="Открыть чат">
      <span class="chat-bubble__dot"></span>
      <span class="chat-bubble__text">Напишите нам</span>
    </div>
  `;
  document.body.appendChild(widget);

  const bubble = widget.querySelector('[data-chat-bubble]');
  const chatPanel = widget.querySelector('[data-chat-panel]');
  const close = widget.querySelector('[data-chat-close]');

  bubble.addEventListener('click', () => chatPanel.classList.toggle('is-open'));
  close.addEventListener('click', () => chatPanel.classList.remove('is-open'));

  let shown = false;
  const showBubble = () => bubble.classList.add('is-show');
  window.addEventListener('scroll', () => {
    if (shown) return;
    if (window.scrollY > 160){
      shown = true;
      showBubble();
    }
  }, {passive: true});
  setTimeout(() => {
    if (!shown){
      shown = true;
      showBubble();
    }
  }, 2500);
})();

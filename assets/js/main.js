(function(){
  // Mobile menu
  const burger = document.querySelector('[data-burger]');
  const panel = document.querySelector('[data-mobile]');
  if (burger && panel){
    panel.style.display = 'none';
    panel.setAttribute('data-open','0');

    burger.addEventListener('click', () => {
      const open = panel.getAttribute('data-open') === '1';
      panel.setAttribute('data-open', open ? '0' : '1');
      panel.style.display = open ? 'none' : 'block';
      burger.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  }

  // Tabs (catalog page)
  const tabRoot = document.querySelector('[data-tabs]');
  if (tabRoot){
    const buttons = Array.from(tabRoot.querySelectorAll('[data-tab]'));
    const panels = Array.from(document.querySelectorAll('[data-panel]'));

    const activate = (name) => {
      buttons.forEach(b => b.classList.toggle('is-active', b.getAttribute('data-tab') === name));
      panels.forEach(p => p.classList.toggle('hidden', p.getAttribute('data-panel') !== name));
      const anchor = document.querySelector('#catalog-content');
      if (anchor) anchor.scrollIntoView({behavior:'smooth', block:'start'});
    };

    buttons.forEach(b => b.addEventListener('click', () => activate(b.getAttribute('data-tab'))));
    const initial = tabRoot.getAttribute('data-initial') || (buttons[0] && buttons[0].getAttribute('data-tab'));
    if (initial) activate(initial);
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
  }, {threshold:0.12, rootMargin:'0px 0px -10% 0px'});
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
  }, {passive:true});
  setTimeout(() => {
    if (!shown){
      shown = true;
      showBubble();
    }
  }, 2500);
})();
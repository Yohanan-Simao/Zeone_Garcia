const video = document.getElementById('heroVideo');
const pause = document.getElementById('heroPause');

if (video && pause) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let userPaused = reduced;

  const syncButton = () => {
    pause.setAttribute('aria-pressed', String(video.paused));
    pause.setAttribute('aria-label', video.paused ? 'Reproduzir vídeo' : 'Pausar vídeo');
  };

  pause.addEventListener('click', () => {
    userPaused = !video.paused;
    userPaused ? video.pause() : video.play().catch(() => {});
    syncButton();
  });

  if (userPaused) { video.pause(); syncButton(); }

  // Pausa o vídeo assim que o topo começa a sair da tela e retoma ao voltar (se a pessoa não pausou).
  const stage = document.querySelector('.hero__media') || video;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= 0.6) {
        if (!userPaused) video.play().catch(() => {});
      } else {
        video.pause();
      }
      syncButton();
    }, { threshold: [0, 0.3, 0.6, 0.9] }).observe(stage);
  }
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) video.pause();
  });
}

// Entrada suave dos blocos ao rolar a página.
(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js');
  const groups = [
    'section > .wrap > h2',
    '.turma',
    '.dif__intro',
    '.dif li',
    '.proj',
    '.proj__more',
    '.quote',
    '.visita__grid > *',
    '.contato__grid > *',
  ];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  groups.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('rv');
      el.style.setProperty('--i', (i % 6) * 90 + 'ms');
      io.observe(el);
    });
  });
})();

// Menu hambúrguer.
(() => {
  const bar = document.querySelector('.topbar');
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');
  if (!bar || !btn || !menu) return;
  const set = (open) => {
    bar.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };
  const scrim = document.createElement('div');
  scrim.className = 'scrim';
  scrim.setAttribute('aria-hidden', 'true');
  document.body.appendChild(scrim);
  scrim.addEventListener('click', () => set(false));
  const baseSet = set;
  btn.addEventListener('click', () => set(!bar.classList.contains('menu-open')));
  new MutationObserver(() => scrim.classList.toggle('on', bar.classList.contains('menu-open')))
    .observe(bar, { attributes: true, attributeFilter: ['class'] });
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bar.classList.contains('menu-open')) { set(false); btn.focus(); }
  });
  document.addEventListener('click', (e) => { if (!bar.contains(e.target)) set(false); });
})();

// Avisa leitores de tela que os links do WhatsApp abrem em nova aba.
document.querySelectorAll('a[target="_blank"]').forEach((a) => {
  if (a.querySelector('.sr-only') || a.getAttribute('aria-label')) return;
  const s = document.createElement('span');
  s.className = 'sr-only';
  s.textContent = ' (abre em nova aba)';
  a.appendChild(s);
});

// Projetos: pontos acompanham o trilho horizontal no celular.
(() => {
  const rail = document.getElementById('rail');
  const dots = [...document.querySelectorAll('.rail__dot')];
  if (!rail || !dots.length) return;
  const items = [...rail.querySelectorAll('.proj__item')];
  const mark = () => {
    const mid = rail.scrollLeft + rail.clientWidth / 2;
    let best = 0;
    let dist = Infinity;
    items.forEach((el, i) => {
      const d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - mid);
      if (d < dist) { dist = d; best = i; }
    });
    dots.forEach((d, i) => d.setAttribute('aria-current', String(i === best)));
  };
  rail.addEventListener('scroll', () => requestAnimationFrame(mark), { passive: true });
  dots.forEach((d) => d.addEventListener('click', () => {
    const el = items[Number(d.dataset.i)];
    if (el) rail.scrollTo({ left: el.offsetLeft - (rail.clientWidth - el.offsetWidth) / 2, behavior: 'smooth' });
  }));
  mark();
})();

// Formulário de visita: valida com mensagens próprias, monta a mensagem e abre o WhatsApp em nova aba.
(() => {
  const form = document.getElementById('visitForm');
  const out = document.getElementById('visitText');
  const note = document.getElementById('visitNote');
  const btn = form && form.querySelector('button[type="submit"]');
  if (!form || !out) return;
  const get = (id) => document.getElementById(id);
  const required = ['vf-nome', 'vf-idade', 'vf-periodo'];
  const errId = { 'vf-nome': 'err-nome', 'vf-idade': 'err-idade', 'vf-periodo': 'err-periodo' };
  const idleNote = note ? note.textContent : '';

  const setError = (id, on) => {
    const el = get(id);
    const err = get(errId[id]);
    el.classList.toggle('is-invalid', on);
    el.setAttribute('aria-invalid', String(on));
    if (err) err.hidden = !on;
  };
  required.forEach((id) => {
    const el = get(id);
    const clear = () => { if (el.value.trim()) setError(id, false); };
    el.addEventListener('input', clear);
    el.addEventListener('change', clear);
  });

  form.addEventListener('submit', (ev) => {
    const missing = required.filter((id) => !get(id).value.trim());
    required.forEach((id) => setError(id, missing.includes(id)));
    if (missing.length) {
      ev.preventDefault();
      get(missing[0]).focus();
      return;
    }
    const partes = ['Vim pelo site. Quero agendar uma visita.'];
    partes.push('Responsável: ' + get('vf-nome').value.trim() + '.');
    partes.push('Idade da criança: ' + get('vf-idade').value + '.');
    if (get('vf-turma').value) partes.push('Turma de interesse: ' + get('vf-turma').value + '.');
    partes.push('Melhor período para a visita: ' + get('vf-periodo').value + '.');
    out.value = partes.join(' ');

    // evita envio duplicado e confirma o que aconteceu
    const url = 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(form.elements.phone.value) +
      '&text=' + encodeURIComponent(out.value);
    if (btn) { btn.disabled = true; setTimeout(() => { btn.disabled = false; }, 4000); }
    if (note) {
      note.classList.add('is-done');
      note.textContent = 'Abrimos o WhatsApp em outra aba. Se não abriu, ';
      const a = document.createElement('a');
      a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.textContent = 'toque aqui para abrir';
      note.appendChild(a);
      note.append('.');
      setTimeout(() => { note.classList.remove('is-done'); note.textContent = idleNote; }, 20000);
    }
  });
})();

// Links das turmas: levam ao formulário já com a turma escolhida.
document.querySelectorAll('.turma__link[data-turma]').forEach((a) => {
  a.addEventListener('click', () => {
    const sel = document.getElementById('vf-turma');
    if (sel) sel.value = a.dataset.turma;
    setTimeout(() => {
      const nome = document.getElementById('vf-nome');
      if (nome) nome.focus({ preventScroll: true });
    }, 700);
  });
});

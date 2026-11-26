(function () {
  'use strict';

  var data = window.SITE_DATA || { jobs: [], projects: [], filters: [] };

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === 'text') node.textContent = attrs[k];
        else if (k === 'className') node.className = attrs[k];
        else if (k === 'style') node.setAttribute('style', attrs[k]);
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  /* ---------- Experience tabs ---------- */
  var tabsEl = document.getElementById('job-tabs');
  var panelEl = document.getElementById('job-panel');
  var currentJob = 0;

  function renderTabs() {
    tabsEl.innerHTML = '';
    data.jobs.forEach(function (job, i) {
      var selected = i === currentJob;
      var btn = el('button', {
        type: 'button',
        role: 'tab',
        className: 'tab',
        id: 'job-tab-' + i,
        'aria-selected': String(selected),
        'aria-controls': 'job-panel',
        tabindex: selected ? '0' : '-1'
      }, [
        el('span', { className: 'tab-company', text: job.company }),
        el('span', { className: 'tab-period', text: job.period })
      ]);
      btn.addEventListener('click', function () { selectJob(i, false); });
      tabsEl.appendChild(btn);
    });
  }

  function renderPanel() {
    var job = data.jobs[currentJob];
    if (!job) return;
    panelEl.setAttribute('aria-labelledby', 'job-tab-' + currentJob);
    panelEl.innerHTML = '';

    var list = el('ul');
    job.points.forEach(function (p) { list.appendChild(el('li', { text: p })); });

    var main = el('div', { className: 'job-main' }, [
      el('div', null, [
        el('h3', { text: job.role }),
        el('p', { className: 'job-sub', text: job.company + ' · ' + job.periodFull })
      ]),
      list
    ]);

    var chips = el('dd', { className: 'chips' });
    job.stack.forEach(function (s) { chips.appendChild(el('span', { className: 'chip', text: s })); });

    var side = el('dl', { className: 'job-side' }, [
      el('div', null, [el('dt', { text: '公司' }), el('dd', { text: job.about })]),
      el('div', null, [el('dt', { text: '團隊' }), el('dd', { text: job.team })]),
      el('div', null, [el('dt', { text: '技術' }), chips])
    ]);

    panelEl.appendChild(main);
    panelEl.appendChild(side);
    panelEl.classList.remove('fade-in');
    void panelEl.offsetWidth;
    panelEl.classList.add('fade-in');
  }

  function selectJob(i, focus) {
    currentJob = i;
    renderTabs();
    renderPanel();
    if (focus) document.getElementById('job-tab-' + i).focus();
  }

  tabsEl.addEventListener('keydown', function (e) {
    var n = data.jobs.length;
    if (e.key === 'ArrowRight') { e.preventDefault(); selectJob((currentJob + 1) % n, true); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); selectJob((currentJob - 1 + n) % n, true); }
    else if (e.key === 'Home') { e.preventDefault(); selectJob(0, true); }
    else if (e.key === 'End') { e.preventDefault(); selectJob(n - 1, true); }
  });

  /* ---------- Project filters ---------- */
  var filtersEl = document.getElementById('filters');
  var gridEl = document.getElementById('projects');
  var currentFilter = data.filters[0] || '全部';

  function countFor(label) {
    if (label === data.filters[0]) return data.projects.length;
    return data.projects.filter(function (p) { return p.platform === label; }).length;
  }

  function renderFilters() {
    filtersEl.innerHTML = '';
    data.filters.forEach(function (label) {
      var btn = el('button', {
        type: 'button',
        className: 'seg',
        'aria-pressed': String(label === currentFilter)
      }, [
        document.createTextNode(label + ' '),
        el('span', { className: 'count', text: String(countFor(label)) })
      ]);
      btn.addEventListener('click', function () {
        currentFilter = label;
        renderFilters();
        renderProjects();
      });
      filtersEl.appendChild(btn);
    });
  }

  function renderProjects() {
    gridEl.innerHTML = '';
    var list = currentFilter === data.filters[0]
      ? data.projects
      : data.projects.filter(function (p) { return p.platform === currentFilter; });

    list.forEach(function (p) {
      var title = el('h3', { text: p.name });
      if (p.link) {
        title = el('h3', null, [el('a', { href: p.link, target: '_blank', rel: 'noopener', text: p.name })]);
      }
      var card = el('article', { className: 'project fade-in' }, [
        el('div', { className: 'project-head' }, [
          p.icon
            ? el('img', { className: 'app-icon app-icon-img', src: p.icon, alt: '', width: '44', height: '44', loading: 'lazy' })
            : el('span', { className: 'app-icon', 'aria-hidden': 'true', style: 'background:' + p.color, text: p.initials }),
          el('div', { className: 'project-title' }, [
            title,
            el('span', { text: p.platform + ' · ' + p.kind })
          ])
        ]),
        el('p', { text: p.desc }),
        p.stores ? el('div', { className: 'stores' }, [
          p.stores.ios && el('a', { className: 'store', href: p.stores.ios, target: '_blank', rel: 'noopener', text: 'App Store ↗' }),
          p.stores.android && el('a', { className: 'store', href: p.stores.android, target: '_blank', rel: 'noopener', text: 'Google Play ↗' })
        ]) : null,
        el('div', { className: 'project-foot' }, [
          el('span', { className: 'metric', text: p.metric }),
          el('span', { className: 'tagline', text: p.tags.join(' · ') })
        ])
      ]);
      gridEl.appendChild(card);
    });
  }

  /* ---------- Copy email ---------- */
  var copyBtn = document.getElementById('copy-email');
  var copyTimer;
  copyBtn.addEventListener('click', function () {
    var email = copyBtn.getAttribute('data-email');
    var done = function () {
      copyBtn.textContent = '已複製';
      clearTimeout(copyTimer);
      copyTimer = setTimeout(function () { copyBtn.textContent = '複製信箱'; }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(done, function () { window.location.href = 'mailto:' + email; });
    } else {
      window.location.href = 'mailto:' + email;
    }
  });

  document.getElementById('theme-toggle').addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });

  document.getElementById('year').textContent = String(new Date().getFullYear());

  renderTabs();
  renderPanel();
  renderFilters();
  renderProjects();
})();

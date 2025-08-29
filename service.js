document.addEventListener('DOMContentLoaded', () => {
  const harts = document.querySelectorAll('.harts');
  const hart_increase = document.querySelector('.increase');
  const call_track = document.querySelectorAll('.call-btn');
  const reduce_coin = document.querySelector('.coin_count');
  const add_history = document.querySelector('.Add-history');
  const increase_copy = document.querySelector('.copy-count');
  const clear_history = document.querySelector('.history-clear');

  clear_history.addEventListener('click', () => {
    add_history.innerHTML = '';
  })

  harts.forEach((icon) => {
    icon.addEventListener('click', () => {
      let count = parseInt(hart_increase.innerHTML) + 1;
      hart_increase.innerHTML = count;
    });
  });

  call_track.forEach(track => {
    track.addEventListener('click', () => {
      if (parseInt(reduce_coin.innerHTML) < 20) {
        alert('insufficient coin');
        return;
      }
      alert('📞calling ' +
        track.parentNode.parentNode.children[1].children[0].innerText +
        '-' +
        track.parentNode.parentNode.children[2].children[0].innerText + '...'
      );


      let count = parseInt(reduce_coin.innerText) - 20;
      reduce_coin.innerHTML = count;

      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: true });

      add_history.innerHTML += `
        <div class="flex md:justify-between justify-start gap-2 items-center shadow-[0px_2px_3px_0px_rgba(0,0,0,0.15)] bg-[rgba(255,255,255,1)] w-full rounded-[12px] md:p-[10px] p-[5px]">
          <div>
            <p class="font-semibold  md:text-[18px]">
              ${track.parentNode.parentNode.children[1].children[0].innerText}
            </p>
            <p class="text-[#5C5C5C] md:text-[18px] ">
              ${track.parentNode.parentNode.children[2].children[0].innerText}
            </p>
          </div>
          <p class="text-[16px]">${currentTime}</p>
        </div>
      `;
    });
  });

  document.addEventListener('click', async (e) => {
    const clicked = e.target.closest('.copy-btn');
    if (!clicked) return;

    const btnElement = (clicked.tagName === 'BUTTON') ? clicked : (clicked.closest('button') || clicked);

    
    let text = '';
    let ancestor = btnElement;
    for (let i = 0; ancestor && ancestor !== document.body && i < 8; i++, ancestor = ancestor.parentElement) {
      const ps = Array.from(ancestor.querySelectorAll('p'));
      let phoneP = ps.find(p => /^\s*[\d\-\+\s()]{2,}\s*$/.test(p.textContent));
      if (!phoneP) phoneP = ps.find(p => /\d{2,}/.test(p.textContent));
      if (phoneP) { text = phoneP.textContent.trim(); break; }
    }

    if (!text) {
      alert('No number found to copy');
      return;
    }

   
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }

   
    const originalText = btnElement.innerHTML;
    btnElement.innerHTML = "Copied";

    
    setTimeout(() => {
      btnElement.innerHTML = originalText;
    }, 1500);

  
    alert("Copied: " + text);

    
    increase_copy.innerHTML = String((parseInt(increase_copy.innerHTML || '0', 10) || 0) + 1);
  });
});

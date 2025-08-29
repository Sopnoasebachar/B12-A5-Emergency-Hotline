
const harts = document.querySelectorAll('.harts');
const hart_increase = document.querySelector('.increase');
const call_track = document.querySelectorAll('.call-btn');
const reduce_coin = document.querySelector('.coin_count');
const add_history = document.querySelector('.Add-history');

harts.forEach((icon, index) => {

  icon.addEventListener('click', () => {
    let count = parseInt(hart_increase.innerHTML) + 1;
    hart_increase.innerHTML = count;
    
  })
  
});

call_track.forEach(track => {

  track.addEventListener('click', () => {

    if (parseInt(reduce_coin.innerHTML) < 20) {
      alert('insufficient coin');
      return;
    }
    alert(track.parentNode.parentNode.children[1].children[0].innerHTML + ':' + track.parentNode.parentNode.children[2].children[0].innerHTML);
    let count = parseInt(reduce_coin.innerHTML) - 20;
    reduce_coin.innerHTML = count;
  
   const now = new Date();
   const currentTime = now.toLocaleTimeString('en-US', { hour12: true });


  add_history.innerHTML += `
    <div class="flex md:justify-between justify-start gap-2 items-center shadow-[0px_2px_3px_0px_rgba(0,0,0,0.15)] bg-[rgba(255,255,255,1)] w-full rounded-[12px] md:p-[10px] p-[5px] md:border-0 border-2 border-red-300">
      <div>
        <p class="font-semibold md:text-[18px] text-[10px]">
          ${track.parentNode.parentNode.children[1].children[0].innerHTML}
        </p>
        <p class="text-[#5C5C5C] md:text-[18px] text-[10px]">
          ${track.parentNode.parentNode.children[2].children[0].innerHTML}
        </p>
      </div>
      <p class="text-[10px] md:text-[16px]">${currentTime}</p>
    </div>
`

  })

  
})
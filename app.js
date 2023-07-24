const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");
const none = document.querySelector("#none");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);
function doTheTrick(theClickedOne) {
  if ((good.checked && cheap.checked && fast.checked &&none.checked) ) {
    if (good === theClickedOne) {
      fast.checked = false;
      none.checked =false
    }
    if (cheap === theClickedOne) {
      good.checked = false;
      none.checked =false
    }
    if (fast === theClickedOne) {
      cheap.checked = false;
      none.checked =false
    }
   
  }
//   else(!none ===theClickedOne  )
//   {
//     cheap.checked = false;
//     good.checked = false;
//     fast.checked = false;
//   }
}

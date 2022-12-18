function remplissage() {
  let t = [];
  let t1 = [];

  let i = 0;

  while (
    !(
      t.includes(1) &&
      t.includes(2) &&
      t.includes(3) &&
      t.includes(4) &&
      t.includes(5) &&
      t.includes(6) &&
      t.includes(7) &&
      t.includes(0) &&
      t1.includes(1) &&
      t1.includes(2) &&
      t1.includes(3) &&
      t1.includes(4) &&
      t1.includes(5) &&
      t1.includes(6) &&
      t1.includes(7) &&
      t1.includes(0)
    )
  ) {
    let x = Math.trunc(Math.random() * 8);
    let y = Math.trunc(Math.random() * 8);
    t.push(x);
    t1.push(y);
  }
  let tt = new Set(t);
  let tt1 = new Set(t1);
  let arr1 = Array.from(tt);
  let arr2 = Array.from(tt1);
  let arr = arr1.concat(arr2);

  for (let k = 0; k < 16; k++) {
    document.getElementById(
      `img-${k}`
    ).innerHTML = `<img src=img-${arr[k]}.png width="130px" height="160px" class=${arr[k]} id=${k}>`;
  }
}
remplissage();
const reseatvar = () => {
  click1 = null;
  click2 = null;
  u = null;
  w = null;
  x = 1;
  console.log(click2, click1, u, w);
  console.log(x);
};
$(document).ready(function () {
  $("img").addClass("hidden");
  $("button").addClass("hidden");
});
let count = 0;
let x = 1,
  click1,
  u,
  w,
  click2;
let y = 1;
const letplay = () => {
  document.addEventListener("click", function (e) {
    switch (x) {
      case 1:
        console.log(e.target.src);
        console.log(u);
        click1 = e.target.src;
        u = e.target.id;
        $(`#${u}`).removeClass("hidden");
        //e.ClassList.remove("hidden");
        x = 2;
        break;
      case 2:
        if (e.target.id != u) {
          click2 = e.target.src;

          w = e.target.id;
          console.log(click2, w);
          $(`#${w}`).removeClass("hidden");
          x = 3;
          if (count == 8) {
            $("button").removeClass("hidden");
          }
        }
        break;
      case 3:
        verifier();

        break;
    }
  });
  function verifier() {
    if (click1 != click2) {
      setTimeout(() => {
        $(`#${u}`).addClass("hidden");
        $(`#${w}`).addClass("hidden");
        reseatvar();
      }, 100);
    } else {
      reseatvar();
      ++count;
      document.getElementById("span").innerHTML = `${count}/8`;
    }
  }
};
letplay();

function repeat() {
  if (count == 8) {
    remplissage();
    $("img").addClass("hidden");
    count = 0;
    document.getElementById("span").innerHTML = "";
    $("button").addClass("hidden");
    letplay();
  }
}

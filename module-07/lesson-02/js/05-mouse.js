/**
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mouseover і mouseout
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', handleMosueEnter);
// boxRef.addEventListener('mouseleave', handleMosueEnter);

// boxRef.addEventListener('mouseover', handleMosueEnter);
// boxRef.addEventListener('mouseout', handleMosueEnter);
// boxRef.addEventListener('click', handleMosueEnter);

function handleMosueEnter(event) {
  console.log(event.target);
  console.log(event.type);
}

document.addEventListener('touchstart', handleTouch);
function handleTouch(event) {
  console.log(event);
}

// boxRef.addEventListener('mousemove', throttle(handleMouseMove, 100));
// boxRef.addEventListener('mousemove', handleMouseMove);
function handleMouseMove(event) {
  console.log(event.type);
}

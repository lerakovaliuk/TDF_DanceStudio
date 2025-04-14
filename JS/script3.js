const danceList = document.getElementById('danceStyles');

danceList.addEventListener('mouseover', function(event) {
  let target = event.target;
  if (target.classList.contains('style-item')) {
    target.classList.add('highlights');
    console.log("Навели на:", target.textContent);
    console.log("relatedTarget (звідки прийшли):", event.relatedTarget.textContent);
  }
});

danceList.addEventListener('mouseout', function(event) {
  let target = event.target;
  if (target.classList.contains('style-item')) {
    target.classList.remove('highlights');
    console.log("Пішли з:", target.textContent);
    console.log("relatedTarget (куди пішли):", event.relatedTarget.textContent);
  }
});



let dancer = document.getElementById('dancer');
let currentDroppable = null;

dancer.onmousedown = function(event) {
  let shiftX = event.clientX - dancer.getBoundingClientRect().left;
  let shiftY = event.clientY - dancer.getBoundingClientRect().top;

  dancer.style.position = 'absolute';
  dancer.style.zIndex = 1000;
  document.body.append(dancer);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    dancer.style.left = pageX - shiftX + 'px';
    dancer.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    dancer.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    dancer.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable');
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) leaveDroppable(currentDroppable);
      currentDroppable = droppableBelow;
      if (currentDroppable) enterDroppable(currentDroppable);
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  dancer.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    dancer.onmouseup = null;
  };
};

function enterDroppable(elem) {
  elem.style.background = 'lightpink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

dancer.ondragstart = function() {
  return false;
};
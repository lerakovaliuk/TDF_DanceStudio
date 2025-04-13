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
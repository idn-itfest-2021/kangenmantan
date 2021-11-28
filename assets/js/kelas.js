const btnFilter = document.getElementById('btnFilter');
const containerFilter =  document.getElementById('filterContainer');
btnFilter.addEventListener('click',function() {
   containerFilter.classList.toggle('activefilterContainer')
});

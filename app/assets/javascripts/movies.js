$(document).ready(function(e){
  // generate a list of year for the dropdown filter
  var min = new Date().getFullYear() - 300;
  max = min + 350;
  select = document.getElementById('fullyear');

  for (var i = min; i<=max; i++){
    var opt = document.createElement("a");
    opt.className = 'dropdown-item';
    opt.setAttribute('href', '#');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
  }

  select.value = new Date().getFullYear();

  // update dropdown label on select value
  $('.search-panel .dropdown-menu').find('a').click(function(e) {
      e.preventDefault();
      var param = $(this).attr("href").replace("#","");
      var concept = $(this).text();
      $('.search-panel span#search_concept').text(concept);
      $('#year').attr("value", concept);
  });

  // clean input after submition
  $('#q').val('');

  // disable submit button when input is empty
  $('#sendButton').prop('disabled',true);
  $('#q').keyup(function(){
      $('#sendButton').prop('disabled', this.value == "" ? true : false);
  });

});
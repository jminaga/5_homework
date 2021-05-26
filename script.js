$('#currentDay').text(moment().format('dddd, MMMM Do'));
   
   
   $('.saveBtn').on('click', function () {
   
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
      localStorage.setItem(time, value);
  

      $('.notification').addClass('show');
  
      setTimeout(function () {
        $('.notification').removeClass('show');
      }, 900);
    });
  
    function hrUpdate() {
      var currentTime = moment().hours();
      $('.time-block').each(function () {
        var blockTime = parseInt($(this).attr('id').split('-')[1]);
  
       
        if (blockTime < currentTime) {
          $(this).addClass('past');

        } else if (blockTime === currentTime) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    hrUpdate();
  





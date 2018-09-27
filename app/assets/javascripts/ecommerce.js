$(document).on('turbolinks:load', function () {
  $(function(){
    $('#show-limit').on('change', function(){
      $(this).closest('form').trigger('submit');
    });
  });

  $('#search_category input').keyup(function(){
    $.get($('#search_category').attr('action'), $('#search_category').serialize(), null, 'script');
    return false;
  });

  $('.rating-symbol').on('click', function() {
    var locale = I18n.locale;
    var input = $(this).closest('.rating').find('input:hidden');
    var product_id = input.data('id');
    var rate_id = input.data('rate-id');
    var current_star = input.data('star');
    var star = input.val();
    var rating_method = current_star == 0 ? 'POST' : 'PUT';
    var rating_url = current_star == 0 ? '/' + locale + '/ratings' : '/' + locale + '/ratings/' + rate_id;
    $.ajax({
      url: rating_url,
      method: rating_method,
      dataType: 'JSON',
      data: {
        rating: {
          product_id: product_id,
          stars: star
        }
      },
      success: function(data){
        input.data('rate', data.rating.id);
        input.val(data.rating.stars);
      },
      error: function(errors) {
        alert(errors.response_text);
      }
    });
  });

  $('.cart_table').on('change', '.input', function(){
    var locale = I18n.locale;
    var quantity = $(this).val();
    var product_id = $(this).data('id');
    $.ajax({
      url: '/' + locale + '/carts/' + product_id,
      method: 'PUT',
      data: {quantity: quantity}
    });
  });

  $('.import_form').click(function(){
    $('.import_product').toggle();
  });

  $('.slick_slide').slick({
    cssEase: 'linear',
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

  $('.filter').hide();
  $('select.input').change(function(){
    var sort = $('select.input-sort').val();
    $('input.value-sort').val(sort);
    $('.filter').click();
  });

  $('form').on('click', '.add_fields', function(event) {
    var regexp, time;
    time = new Date().getTime();
    regexp = new RegExp($(this).data('id'), 'g');
    $('.fields').append($(this).data('fields').replace(regexp, time));
    event.preventDefault();
  });

  $('.input-daterange').datepicker({
    format: 'yyyy-mm-dd'
  });

  $('form').on('click', '.remove_record', function(event) {
    $(this).prev('input[type=hidden]').val('1');
    $(this).closest('div.single-promotion').remove();
    event.preventDefault();
  });
});

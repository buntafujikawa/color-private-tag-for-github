$(function () {
  $('#user-repositories-list ul li').each(function () {
    // This is private repository.
    if (!($(this)).find('h3 > span.Label')[0]) {
      return true;
    }

    // If repository language is HCL or empty repository, repository language color is not exists.
    let color = (($(this)).find('.repo-language-color')).css('background-color');
    if (color) {
      ($(this)).find('h3 > span.Label').css({'background-color': color, 'color': 'white'});
    }
  });
});

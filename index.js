/*const API_URL = 'https://api.lyrics.ovh/v1/artist/title';

//click on the search 
$('button').on('click', function() {
	let artistName = $('.js-query-artist').val();
	let songName = $('.js-query-title').val();

	$.getJSON(`https://api.lyrics.ovh/v1/${artistName}/${songName}`, function(data){
        console.log(data);
        $('.js-search-results').html(`
			<div>${data.lyrics}</div>
		`);

    });

});*/

 //data.lyrics


function getDataFromApi(artist, title, callback) {
  let URL = `https://api.lyrics.ovh/v1/${artist}/${title}`;
  console.log(URL);
  $.getJSON(URL, displaySearchData);
  console.log("sent");
}

function displaySearchData(data) {
  let results = `<p>${data.lyrics}</>`;
  $(".js-search-results").html(results).prop("hidden", false);
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    let artistQueryTarget = $(event.currentTarget).find('.js-query-artist');
    let artistQuery = artistQueryTarget.val();
    // clear out the input
    artistQueryTarget.val("");
    let titleQueryTarget = $(event.currentTarget).find('.js-query-title');
    let titleQuery = titleQueryTarget.val();
    // clear out the input
    titleQueryTarget.val("");
    getDataFromApi(artistQuery, titleQuery, displaySearchData);
  });
}

$(watchSubmit);
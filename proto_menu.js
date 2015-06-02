/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * 
 * @param {type} $
 * @returns {undefined}
 */
 
 
function proto(items) {
        
	$.each(items, function( index, value ) {
		var myData = "<li><a href=" + value.url + ">" + value.name + "</a></li>";
		$('#proto .contents').append(myData);
  		console.log('Proto Init', value.name);
	});
        
        
    }
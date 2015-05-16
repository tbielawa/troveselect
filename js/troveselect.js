function build_classifier_list() {
    $.ajax({
        url: "./classifiers.json",
        'success': function( data) {
            var c = data['classifiers'];
            var trove_list = $('#trovelist');
            $(c).each(function(i, v) {
                var v_id = v.replace(/[ :()+.\/-]/g, '');
                var trove_li = $("<li id='trove_li_" + v_id + "'><div class='checkbox'><label><input type='checkbox' id='" + v_id + "' value='" + v + "'/><tt>" + v + "</tt></label></div></li>");
                $('#trovelist').append(trove_li);
            });
        }
    }).done(function(jq, ts) {
        click_handlers();
    });
}

function write_setup_classifiers() {
    var selected = $( "input:checked" );
    $('#classifytext').html('classifiers=[\n');
    $(selected).each(function(i, v) {
	$('#classifytext').append('    "' + v.value + '",\n');
    });
    $('#classifytext').append(']');
}



function click_handlers() {
    $( "input[type=checkbox]" ).click(function(obj) {
	write_setup_classifiers();
    });
}


$(document).ready(function(){
    build_classifier_list();
});

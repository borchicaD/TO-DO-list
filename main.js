var noteInput = $('.note');
var noteRow = '';

$('.add-note').on('click', function(){
	var newNote = noteInput.val();
	console.log(newNote);
	
	//adding note to the table
	if(newNote != ''){
		noteRow = '<tr>';
		noteRow +='<td>' + newNote + '</td>';
		noteRow +='<td><button class = "btn btn-info edit">Edit</button></td>';
		noteRow +='<td><button class = "btn btn-warning timer">Add timer/reminder</button></td>';
		noteRow +='<td><button class = "btn btn-success delete">Delete</button></td>';
		noteRow +='</tr>';
		$('.note-list tbody').append(noteRow);
		
    //reset input
    noteInput.val('').focus();	
	}else{
		alert("Add a note..");
	} 
});

//edit btn
$('tbody').on('click', '.edit', function(){
	alert("menjamo");
	
	//if you like back to focus on new note :)
	//itemInput.focus();
});

//delete btn
$('tbody').on('click', '.delete', function(){
	$(this).closest('tr').remove();
	
	//if you like back to focus on new note :)
	//itemInput.focus();
});

//clearAll
$('.startOver').on('click', function(){
	location.reload();
	itemInput.focus();
});























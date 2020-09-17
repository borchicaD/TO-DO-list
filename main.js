var noteInput = $('.note');
var noteRow = '';




var db = [];


$('.add-note').on('click', function(){
	var newNote = noteInput.val();
	console.log(newNote);
	db.push(newNote);
	console.log(db);
	
	//adding note to the table
	if(newNote != ''){
		noteRow = '<tr>';
		noteRow +='<td contenteditable = "true">' + newNote + '</td>';
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

//edit btn
$('tbody').on('click', '.edit', function(){
    
	console.log("clik");
});
	
//timeBtn
$('tbody').on('click', '.timer', function(){
   	console.log("clik");
});	
	
























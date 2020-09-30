var noteInput = $('.note');
var noteRow = '';
var timeInput = $('.timeInput');
var db = [];

	
	//save note to localstorage
function saveNotes(){
	localStorage.setItem("notes",JSON.stringify(db));
}
//get note
function getNotes(){
	var noteFromSt = localStorage.getItem("notes"); 
	db = JSON.parse(noteFromSt);
	//console.log(db);
	if(!db){
		db=[];
	}
}


function Note(note){
    this.note = note;
}

function removeNote(index){
	db.splice(index, 1);
	saveNotes();
}
function getNote(index){
	return db[index];
}



$('.add-note').on('click', function(note){
	var note = noteInput.val();
	//db.push(note);
	
	db.push(note);
	//console.log(db);
	var t= new Note(note);
	saveNotes();
	getNotes();
	
	
	//adding note to the table
	if(note != ''){
		noteRow = '<tr>';
		noteRow +='<td class="editNote">' + note + '</td>';
		//noteRow +='<td><button class = "btn btn-info edit">Edit</button></td>';
		
		
		//noteRow +='<td><button type="button" class="btn btn-warning">Timer/remainder</button></td>';
		noteRow +='<td><button type="button" class="btn btn-warning remainder" data-toggle="modal" data-target="#myModal">Add remainder</button></td>';
		
		
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


//edit content
	$('tbody').on('click', '.editNote', function(){
	$(this).attr("contenteditable", "true");
});
	
	
//
$('tbody').on('click', '.remainder', function(){
	
   console.log("click");
});













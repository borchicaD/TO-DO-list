var noteInput = $('.note');
var noteRow = '';
var timeInput = $('.timeInput');
var delayMilliseconds = document.getElementsByClassName('setTime');


getNotes();

	
//save note to localstorage
function saveNotes(){
	localStorage.setItem("notes",JSON.stringify(db));
}
//get note
function getNotes(){
	var note = localStorage.getItem("notes"); 
	db = JSON.parse(note);
	console.log(db);
	if(!db){
		db=[];
	}

db.forEach(drowNote);
	function drowNote(note){
		noteRow = '<tr>';
		noteRow +='<td data-target="note" class="editNote">' + note + '</td>';
		
		noteRow +='<td><button type="button" class="btn btn-warning remainder" data-toggle="modal" data-target="#myModal">Add remainder</button></td>';
		
		
		noteRow +='<td><button class = "btn btn-success delete">Delete</button></td>';
		noteRow +='</tr>';
	$('.note-list tbody').append(noteRow);
	}

}


function Note(note){
    this.note = note;
}

//function removeNote(index){
	//db.splice(index, 1);
	////saveNotes();
//}
//function getNote(index){
	//return db[index];
//}



$('.add-note').on('click', function(note){
	var note = noteInput.val();
	//db.push(note);
	
	db.push(note);
	//console.log(db);
	var t= new Note(note);
	saveNotes();
	
	
//adding note to the table
	if(note != ''){
		noteRow = '<tr>';
		noteRow +='<td class="editNote">' + note + '</td>';
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



//delete row btn

$('button.delete').on('click', function(){
	console.log("click");
	$(this).closest('tr').remove()
});



//clearAll
$('.startOver').on('click', function(){
	localStorage.clear();
	location.reload();
	itemInput.focus();
});


//edit content
	$('tbody').on('click', '.editNote', function(){
	$(this).attr("contenteditable", "true");
});

	
//adding time by user	
   function addTime () {
	  var delayMilliseconds = document.getElementById('setTime').value; 
	  //console.log(delayMilliseconds);
      setTimeout(function(){
		  alert('boo ^-^');
	  },delayMilliseconds);
	  
   }
   

//add time btn
$('tbody').on('click', '.remainder', function(){
   console.log("click");
   var saveTime = document.getElementById('saveT');
   saveTime.addEventListener('click', addTime);
   
});

// reset input because data-dismiss="modal" not working
$('#myModal').on('hidden.bs.modal', function () {
    $(this).find("input,textarea,select").val('').end();

});













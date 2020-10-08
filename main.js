var noteInput = $('.note');
var noteRow = '';
var timeInput = $('.timeInput');
var delayMilliseconds = document.getElementsByClassName('setTime');


getNotes();
	
//save note to localstorage
function saveNotes(){
	localStorage.setItem("notes",JSON.stringify(db));
}
//get notes
function getNotes(){
	var note = localStorage.getItem("notes"); 
	db = JSON.parse(note);
	//console.log(db);
	if(!db){
		db=[];
	}
	
db.forEach(drowNote);
	function drowNote(note){
		noteRow = '<tr id="execute">';
		noteRow +='<td data-target="note" class="editNote" id="noteToDel">' + note + '</td>';
		noteRow +='<td><button class = "btn btn-info edit" id="edit">Edit</button></td>';
		noteRow +='<td><button type="button" class="btn btn-warning remainder" data-toggle="modal" data-target="#myModal">Add remainder</button></td>';
		noteRow +='<td><button class="btn btn-success delete" id="del">Delete</button></td>';
		noteRow +='</tr>';
	$('.note-list tbody').append(noteRow);
	}
	
}
///////////////delete note from localStorage

	$('button.delete').on('click', function(e){
		//console.log(db);
		var val = $(e.target).closest('tr').find('#noteToDel').text();  
        //console.log(val); 
		db.splice($.inArray(val, db), 1);
		//console.log(db);
		localStorage.setItem("notes",JSON.stringify(db));
	    
	})
	////////////////////////EDIT two events

		$('button.edit').on('click', function(e){
		//console.log(db);
		$('.editNote').attr("contenteditable", "true");
		var valNote = $(e.target).closest('tr').find('.editNote').text();  
        //console.log(val); 
		var valIndex = db.indexOf(valNote);
		console.log(valIndex);
		
		          $('button.edit').on('click', function(e){
					 var noteEdited = $(e.target).closest('tr').find('.editNote').text();
					 console.log(noteEdited); 
					 console.log(valIndex);
					 db[valIndex]=noteEdited;
					 console.log(db);
					 
					  
                    localStorage.setItem("notes",JSON.stringify(db));
		})
	    
	})


function Note(note){
    this.note = note;
}


$('.add-note').on('click', function(note){
	var note = noteInput.val();

	
db.push(note);
var t= new Note(note);
saveNotes();
	
	
//adding note to the table
	if(note != ''){
		noteRow = '<tr id="execute">';
		noteRow +='<td class="editNote" id="noteToDel">' + note + '</td>';
		noteRow +='<td><button class = "btn btn-info edit" id="edit">Edit</button></td>';
	    noteRow +='<td><button type="button" class="btn btn-warning remainder" data-toggle="modal" data-target="#myModal">Add remainder</button></td>';
		noteRow +='<td><button class = "btn btn-success delete" id="del">Delete</button></td>';
		noteRow +='</tr>';
		$('.note-list tbody').append(noteRow);
		
			
		////////////////////////EDIT two events

		$('button.edit').on('click', function(e){
		//console.log(db);
		$('.editNote').attr("contenteditable", "true");
		var val = $(e.target).closest('tr').find('.editNote').text();  
        //console.log(val); 
		var valIndex = db.indexOf(val);
		console.log(valIndex);
		
		          $('button.edit').on('click', function(e){
					 var noteEdited = $(e.target).closest('tr').find('.editNote').text();
					 console.log(noteEdited); 
					 console.log(valIndex);
					 db[valIndex]=noteEdited;
					 console.log(db);
					 
					  
                    localStorage.setItem("notes",JSON.stringify(db));

	    
	});
		});
	
    //reset input
    noteInput.val('').focus();	
	}else{
		alert("Add a note..");
	}

});   

//delete row btn

$('button.delete').on('click', function(){
	$(this).closest('tr').remove();
});



//clearAll
$('.startOver').on('click', function(){
	localStorage.clear();
	location.reload();
	itemInput.focus();
});

///////////////////////////////////////////////////////


//add time btn
$('tbody').on('click', '.remainder', function(e){
   console.log("click");
   var saveTime = document.getElementById('saveT');
   saveTime.addEventListener('click', addTime);
   var noteExecute = $(e.target).closest('tr').find('.editNote').text();
   //console.log(noteExecute)
   $('#noteExecute').html(noteExecute);
   
});	
//adding time by user	
   function addTime () {
	  var delayMilliseconds = document.getElementById('setTime').value; 
	  //console.log(delayMilliseconds);
      setTimeout(function(){
		  alert("Executed!");
		  var noteExecuteLS = $('#noteExecute').text();
		  db.splice($.inArray(noteExecuteLS, db), 1);
		  console.log(db);
		  
		  localStorage.setItem("notes",JSON.stringify(db));

           ///deleteRow
		   
		   
		  
	  },delayMilliseconds);
	  
   }
   
   ////////

   
// reset input because data-dismiss="modal" not working
$('#myModal').on('hidden.bs.modal', function () {
    $(this).find("input,textarea,select").val('').end();

});













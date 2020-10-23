var addNoteBtn = document.getElementById('addNote');

//notes array from local storage-
        var notesInLocalStorage = getNotesFromLocalStorage();

        drawNotes(notesInLocalStorage);

//clearAllBtn
        $('.startOver').on('click', function(){
	         localStorage.clear();
	         location.reload();
	        itemInput.focus();
            });

//draw all notes from array
        function drawNotes(noteArray){
	         $('.note-list tbody').html("");
	            noteArray.forEach(function(note){
		           noteRow = '<tr id="execute">';
		           noteRow +='<td data-target="note" class="getNoteText">' + note + '</td>';
		           noteRow +='<td><button class = "btn btn-info edit" id="editNote">Edit</button></td>';
		           noteRow +='<td><button type="button" class="btn btn-warning remainder" data-toggle="modal" data-target="#myModal" id="addTimeBtn">Add remainder</button></td>';
		           noteRow +='<td><button class="btn btn-success delete" id="deleteNote">Delete</button></td>';
		           noteRow +='</tr>';
		        $('.note-list tbody').append(noteRow);
		
//delete btn's
	    var deleteNoteBtns = document.querySelectorAll('#deleteNote');
	    deleteNoteBtns.forEach(deleteNoteBtns=>{
		deleteNoteBtns.addEventListener('click', deleteNoteFunc)
	    });
	
//edit btn's
        var editNoteBtns = document.querySelectorAll('#editNote');
	    editNoteBtns.forEach(editNoteBtns=>{
		editNoteBtns.addEventListener('click', editNoteFunc);
	    });

//addTime btn's	
	    var addTimeBtns = document.querySelectorAll('#addTimeBtn');
	    addTimeBtns.forEach(addTimeBtns=>{
		addTimeBtns.addEventListener('click', addRemainderFunc);
	    });
		
//save time on modal btn
	    var saveTime = document.getElementById('saveT');
        saveTime.addEventListener('click', addTime);	
	    });
}

//deleteNote Function
        function deleteNoteFunc(){
	             $(this).closest('tr').remove();
	             var valNew = $(this).closest('tr').find('.getNoteText').text();  
		         noteArray.splice($.inArray(valNew, noteArray), 1);
		         localStorage.setItem("notes",JSON.stringify(noteArray));

                 drawNotes(noteArray);		   
} 

//editNote Function
        function editNoteFunc(){
		        $('.getNoteText').attr("contenteditable", "true");
		        var valNote = $(this).closest('tr').find('.getNoteText').text(); 
		        var valIndex = noteArray.indexOf(valNote);
//focusout function after note is edited
                      $('.getNoteText').focusout (function(){
					  var noteEdited = $(this).closest('tr').find('.getNoteText').text(); 
					  noteArray[valIndex]=noteEdited;
                      localStorage.setItem("notes",JSON.stringify(noteArray));
					  drawNotes(noteArray);
				       });	
}


//addRemainder / Time Function
         function addRemainderFunc(){
                var noteExecute = $(this).closest('tr').find('.getNoteText').text(); 
                $('#noteExecute').html(noteExecute);
}	

         function addTime(){
		        var delayMilliseconds = document.getElementById('setTime').value; 
                setTimeout(function(){
		            var noteExecuteLS = $('#noteExecute').text(); 
		            noteArray.splice($.inArray(noteExecuteLS, noteArray), 1);
		            alert("Your TO DO should be executed just now!");
		            localStorage.setItem("notes",JSON.stringify(noteArray));
					
                    drawNotes(noteArray);
	                },delayMilliseconds);
}	

// reset input because data-dismiss="modal" not working
         $('#myModal').on('hidden.bs.modal', function () {
         $(this).find("input,textarea,select").val('').end();
         });

//save note to localstorage
         function saveNotesToLocalStorage(noteArray){
	     localStorage.setItem("notes",JSON.stringify(noteArray));
}


//get notes from local storage
         function getNotesFromLocalStorage(){
	            var note = localStorage.getItem("notes"); 
	            noteArray = JSON.parse(note);
	            if(!noteArray){
		        noteArray=[];
	            }
	        return noteArray;
}

//add note first time
    addNoteBtn.addEventListener('click', function(event){
	var noteInput = document.querySelector('.note');
	var note = noteInput.value;
	
		if(note != ''){
				// noteRow = '<tr data-key="007">';
				// noteRow +='<td class="editNote" id="noteToDel">' + note + '</td>';
				// noteRow +='<td><button class = "btn btn-info edit" id="edit">Edit</button></td>';
				// noteRow +='<td><button type="button" class="btn btn-warning remainder" data-toggle="modal" data-target="#myModal">Add remainder</button></td>';
				// noteRow +='<td><button class = "btn btn-success delete" id="delRow">Delete</button></td>';
				// noteRow +='</tr>';
				// $('.note-list tbody').append(noteRow);
		
		notesInLocalStorage.push(note);
		saveNotesToLocalStorage(notesInLocalStorage);
		
		drawNotes(notesInLocalStorage);
//reset input
		noteInput.focus();
		noteInput.value='';
		
	}else{
		alert("Note cannot be empty..");
	}
});













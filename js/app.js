console.log('welcome');
showNotes();
// if user add a note, add it to the localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e){
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj=[]
    }
    else{
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value)
    addTxt.value= '';
    localStorage.setItem("notes", JSON.stringify(notesObj))
    console.log(notesObj)
})
showNotes();
// function to show element from localStorage
function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj=[]
    }
    else{
        notesObj = JSON.parse(notes)
    }
    let html= '';
    notesObj.forEach(function(element, index){
        html += ` <div class="noteCard my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${index + 1} </h5>
          <p class="card-text"> ${element} </p>
          <button id='${index}' onClick="delNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
      </div>`
    })
    let notesElem = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = `Nothing to show! "Add a note" section above to add note`
    }
}

// function to a delete note
function delNote(index){
    console.log('deleted', index)
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj=[]
    }
    else{
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes();
}

// search bar
// let search = document.getElementById('searchTxt');
// search.addEventListener('input', function(){
//     let inputVal = search.value;
//     console.log('input fired', inputVal)
//     let noteCards = document.getElementsByClassName('noteCard')
//     Array.from(noteCards).forEach(function(element){
//         let cardTxt = document.getElementsByTagName('p')[0].innerText
//         if(cardTxt.includes(inputVal)){
//             element.style.display = 'block';
//         }
//         else{
//             element.style.display = 'none';
//         }
//     })
// })
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})
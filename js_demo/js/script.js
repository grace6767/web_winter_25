//alert('This is a test')

function askQuestion() {
    var p = prompt('How much could a wood chuck chuck if a wood chucj chucj could chuck wood');
    if (p != null) {
        document.getElementById('question').innerHTML = 'Yikes! ' + p + ' is a lot of wood!';
    }
}
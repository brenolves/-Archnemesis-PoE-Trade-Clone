function buttonSelect(clicked_id) {
    let buttons = document.querySelectorAll('.selected');
    let button = document.getElementById(clicked_id);

    [].forEach.call(buttons, (b) => {
        b.classList.remove('selected');
    })

    if(!button.classList.contains('selected')) {
        return button.classList.add('selected');
    }
}
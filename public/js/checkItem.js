function checkListItem() {
    let listItem = document.getElementsByClassName('list-item');

    for(const i in listItem) {
        listItem[i].onclick = () => {
            listItem[i].classList.toggle('checked');
        }
    }
}

checkListItem();


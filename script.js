function OnEditButtonClick(){
    var inputElement = document.getElementById('NItem');
    var items = document.getElementById('items');
    var li = document.createElement('li');
    li.innerHTML = inputElement.value;
    inputElement.value = "";
    var closeButton = document.createElement('button');
    closeButton.appendChild(document.createTextNode('X'));
    items.appendChild(li);
    li.appendChild(closeButton);
    
    li.addEventListener("click",function(){
        this.style.backgroundColor = '#00e64d';
    });
    
    closeButton.addEventListener("click",function(){
        this.parentElement.style.display = "none";
    })
}
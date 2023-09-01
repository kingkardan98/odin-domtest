document.addEventListener('DOMContentLoaded', function () {
    // Red paragraph
    let para = document.createElement('p');
    para.style.color = 'red';
    para.textContent = "I'm red!";
    document.body.appendChild(para);

    // Blue heading
    let head = document.createElement('h3');
    head.style.color = 'blue';
    head.textContent = "I'm a blue h3!";
    document.body.appendChild(head);

    // Div with elements inside
    let containerDiv = document.createElement('div');
    containerDiv.style.cssText = 'background-color: pink; border: 1px solid black';
    containerDiv.id = 'container';
    // We append this node after having created the children.

    // div => h1
    let divHead = document.createElement('h1');
    divHead.textContent = "I'm in a div";
    containerDiv.appendChild(divHead);

    // div => p
    let divPara = document.createElement('p');
    divPara.textContent = "ME TOO!";
    containerDiv.appendChild(divPara);

    // Append the div
    document.body.appendChild(containerDiv);
});
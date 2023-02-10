const button = document.querySelector('button');
const downloadBtn = document.querySelector('#downloadBtn')
const ul = document.querySelector('#choices');

button.addEventListener('click', () => {
   ul.innerHTML = "";
   downloadBtn.classList.remove('hide');
    for(let i = 1; i <= 23; i++){
       let category = document.querySelector(`#category${i}`).innerText;
       let group = document.querySelector(`input[name="group${i}"]:checked`).value;
       let choices = `${category}: ${group}`;
       let li = document.createElement("li");
       li.innerText = choices;
       ul.appendChild(li);
    }
    const text = new Blob([ul.innerText], {type: "text/plain"});
    downloadBtn.href = URL.createObjectURL(text);
   })

   



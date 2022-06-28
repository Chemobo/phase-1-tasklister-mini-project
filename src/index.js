document.addEventListener('DOMContentLoaded',()=>{
  const card = document.querySelector('form').addEventListener('submit',(event)=>{
    event.preventDefault();

    let form = document.getElementById('new-task-description').value;
    let list = document.createElement('li');
    let button = document.createElement('button');
    button.addEventListener('click',(event)=>{
    event.target.parentNode.remove();
    });
    button.textContent = 'x'
    list.textContent = `${form}`
    list.appendChild(button);
    document.querySelector('#tasks').appendChild(list);
  })
})

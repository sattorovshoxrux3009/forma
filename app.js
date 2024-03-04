const form=document.querySelector('#form')
const nameuser=document.querySelector('#name')
const text=document.querySelector('#text')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(nameuser.value==''){
        text.classList.remove('hidden')
        nameuser.classList.add('red-border')
        setTimeout(()=>{
            text.classList.add('hidden')
            nameuser.classList.remove('red-border')
        },3000)
    }
    else{
        alert('Siz ro`yxatdan o`tdingiz!!!👌' )
        form.reset();
    }
})
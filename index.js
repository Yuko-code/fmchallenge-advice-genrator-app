const button=document.querySelector('#button');
const adviceNums=document.querySelector('#adviceNums');
const advice=document.querySelector('#advice');
const loader=document.querySelector('#loader');

const addAdvice=async()=>{
    const adviceText=await getAdvice();
    adviceNums.innerText=`Advice #${adviceText.id}`;
    advice.innerText=`"${adviceText.advice}"`;
    button.style.boxShadow='0px 0px 0px 0px var(--color-neon-green)'
}

const getAdvice=async()=>{
    button.style.boxShadow='0px 0px 40px 0px var(--color-neon-green)'
    try{
        const config={headers:{Accept:'application/json'}};
        const res = await axios.get("https://api.adviceslip.com/advice",config);

        return res.data.slip;
    }catch(e){
        advice.innerText="ERROR: Something went wrong!";
        adviceNums.innerText="";
        advice.style.color="#53FFAA";
    }
}
window.addEventListener('load',function(){
    loader.parentElement.removeChild(loader);
})
button.addEventListener('click', addAdvice);
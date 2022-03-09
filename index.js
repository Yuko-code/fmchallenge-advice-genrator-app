const button=document.querySelector('#button');

const addAdvice=async()=>{
    const adviceText=await getAdvice();
    const adviceNums=document.querySelector('#adviceNums');
    const advice=document.querySelector('#advice');
    adviceNums.innerText=`Advice #${adviceText.id}`;
    advice.innerText=`"${adviceText.advice}"`;
    button.style.boxShadow=''
}

const getAdvice=async()=>{
    button.style.boxShadow='0px 0px 40px 0px var(--color-neon-green)'
    try{
        const config={headers:{Accept:'application/json'}};
        const res = await axios.get("https://api.adviceslip.com/advice",config);
        return res.data.slip;
    }catch(e){
        return "ERROR: Something went wrong!"
    }
}

button.addEventListener('click', addAdvice);
const button=document.querySelector('#button');

const addAdvice=async()=>{
    const adviceText=await getAdvice();
    const adviceNums=document.querySelector('#adviceNums');
    const advice=document.querySelector('#advice');
    adviceNums.innerText=`Advice #${adviceText.id}`;
    advice.innerText=`"${adviceText.advice}"`;
}

const getAdvice=async()=>{
    try{
        const config={headers:{Accept:'application/json'}};
        const res = await axios.get("https://api.adviceslip.com/advice",config);
        return res.data.slip;
    }catch(e){
        return "ERROR: Something went wrong!"
    }
}

button.addEventListener('click', addAdvice);
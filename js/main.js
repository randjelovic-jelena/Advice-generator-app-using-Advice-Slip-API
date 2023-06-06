'use strict';

const adviceNumber=document.querySelector('.advice-num');
const adviceBox=document.querySelector('.advice-box');
const adviceParagraph=document.querySelector('.advice');
const newAdviceBtn=document.querySelector('.new-advice');


const getAdviceNumber=(data)=>{
	let number=data.slip.id;
	adviceNumber.innerText=number;
}

const showAdvice=(data)=>{
	let advice=data.slip.advice;
	adviceParagraph.innerText=`"${advice}"`;
}

const getData=async ()=>{
	try{
		const url='	https://api.adviceslip.com/advice';
		const fetchData=await fetch(url);
		const dataJson=await fetchData.json();
		getAdviceNumber(dataJson);
		showAdvice(dataJson);
	}catch(error){
		console.error(error);
	}
}

newAdviceBtn.addEventListener('click',getData);

window.load=getData();
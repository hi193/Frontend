const amount =document.getElementById('amount');
const currency =document.getElementById('currency');
const convert =document.getElementById('convert');
const result=document.getElementById('result');

const API_KEY="Aywg6i7X4rJIv0xEuGU+6A==Efd9eJu2UwM6eRY3ho"
const apiUrl="https://api.api-ninjas.com/v1/exchangerate?pair=USD_"
convert.addEventListener('click' ,()=> {

    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal ;

    
    fetch(url,{
        
        headers : {
            'X-API-KEY' : API_KEY
        }
    })

    .then(response =>response.json())
    .then(data =>{
        const rate =data.exchange_rate ;
        console.log('rate',rate)
        const resultprice =amountTotal *rate;
        console.log('result',resultprice)
      result.innerHTML = `${amountTotal} ${currencyTotal} =${resultprice.toFixed(2)} USD` ;
    })

     .catch(error=> {
        console.error('request failed:' , error);
        result.innerHTML ='an error occured please try later '
     })
        
    })
        
    
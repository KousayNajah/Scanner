
export function ConvertPrice(price:number){
let ch=String(price)
let NbrStr=ch.slice(1,);
let floatPrice:number =parseFloat(NbrStr);
return floatPrice;
}
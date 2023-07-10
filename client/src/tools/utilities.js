export function calculateTVA(price){
    price = price*1.2;
    return price
}

export default function allergeneSort(allergene){
    if(!allergene){
        return "Aucun";
    }
    else{
        return allergene;
    }
}
/* var str = "https://www.reddit.com/r/relationships/";
function subReddit(link) {
    let sections = link.split('/');
    console.log(sections);
    console.log(sections.length);
    let name = sections.slice(sections.length-2,sections.length-1);
    console.log(name);
    let result = name.toString();
	return result ;
}
document.write(subReddit(str)); */


/* function matchEvenNum(numStr){
    //let re =/\d*[02468]/;
    return  numStr.match(re);
}
document.write(matchEvenNum('aaa14793213aaa')); */







let profit1 = {
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
}
function profit(info) {
    let temp =(info.sellPrice - info.costPrice) * info.inventory;
    return Math.round(temp);
} 
document.write(profit(profit1));

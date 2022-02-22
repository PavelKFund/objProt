let person=[
    {
        name: "Ivan",
        age: 20,
        stat: true
    },
    {
        name: "Pavel",
        age: 22,
        stat: true
    },
    {
        name: "Jane",
        age: 23,
        stat: false
    }
]

let btn=document.querySelector("#button");
let div=document.querySelector("#div");

let ul=document.createElement("ul");

div.append(ul);

let i=0;

btn.addEventListener('click',function(){
    let li=document.createElement('li');
    ul.append(li);
    li.innerHTML=person[i].name+' '+person[i].age+' '+person[i].stat;
    i++;
    if(i==3){
        i=0;
    }
});

//for(elems in person[i]){
//    li.innerHTML=person[i][elems];
//}
console.log(people);

let personToFind = '';

$( document ).ready(onReady);

function onReady(){
    console.log('Jquery');
    appendPeople();
    let randoms = randomNumber(0, people.length - 1);
    personToFind = people[randoms].name;
    console.log(people[randoms].name);
    $('#name').text(personToFind);

}

function appendPeople(){
    console.log('In appendPeople');

    for( let person of people ){
        let div = $('<div>');
        div.addClass('inline');
        div.on('click', pictureClicked);
        div.data(`personInfo`, person)
        div.append(imgTag(person));
        $('#container').append(div);
    }

}

function imgTag(obj){
    console.log('In personUrl', obj.name);
    return `<img src="https://github.com/${obj.githubUsername}.png?size=250"
        alt="Profile image of ${obj.name}">`;
}

function pictureClicked(){
    console.log('in pictureClicked');
    const el = $(this);
    console.log( el.data().personInfo.name);
    if(personToFind === el.data().personInfo.name ){
        alert('Correct! Pick another person');
    }else{
        alert('Try again!');
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
console.log(people);

$( document ).ready(onReady);

function onReady(){
    console.log('Jquery');
    appendPeople();
}

function appendPeople(){
    console.log('In appendPeople');

    for( let person of people ){
        let div = $('<div>');
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
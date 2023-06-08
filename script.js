const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.getElementById("result");
const sound=document.getElementById("sound1");
const btn=document.getElementById("search-btn");

btn.addEventListener("click",()=>{
    let inpWrd=document.getElementById("inp-word").value;
    fetch(`${url}${inpWrd}`)
    .then((response)=>
        response.json()
    )
    .then((data)=>{
        console.log(data);
        result.innerHTML=`
        <div class="sound">
                <h3>${inpWrd}</h3>
                <button onclick="playSound()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetics[1].text}</p>
            </div>
            <div class="meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </div>
            <div class="example">
                ${data[0].meanings[1].definitions[0].example}
            </div>`;
            sound.setAttribute("src",`${data[0].phonetics[1].audio}`);
            console.log(sound);
});
})
function playSound(){
    sound.play();
}
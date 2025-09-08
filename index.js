const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(response => response.json())
    .then(json=>{
        displayLessons(json.data);
    })
}
const loadLevelWord = (level) => {
    fetch(`https://openapi.programming-hero.com/api/level/${level}`)
    .then(res => res.json())
    .then(json=>{
        displayLevelWord(json.data);
    })
}
const displayLevelWord =(words)=>{
    const wordContainer = document.getElementById("words-container");
    wordContainer.innerHTML="";
    if(words.length==0){
        wordContainer.innerHTML = `
            <div class="bg-[#f8f8f8] py-15 rounded-2xl col-span-3 text-center">
                <img class="mx-auto" src="./assets/alert-error.png" alt="">
                <p class="font-bangla text-sm">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h2 class="font-bangla font-bold text-lg md:text-2xl mt-3">নেক্সট Lesson এ যান</h2>
            </div>
        `
    }
    for(let word of words){
        const wordDiv = document.createElement("div");
        wordDiv.innerHTML = `
            <div class="bg-[#f8f8f8] word-card border text-center py-10 h-full flex flex-col gap-4 rounded-lg shadow-lg">
                <h1 class="font-bold text-lg">${word.word}</h1>
                <p class="text-sm">Meaning/Pronounciation</p>
                <h2 class="font-semibold text-lg">"${word.meaning}/${word.pronunciation}"</h2>
                <div class="word-icons flex justify-between px-10 py-5">
                    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
        `
        wordContainer.appendChild(wordDiv);
    }
}
const displayLessons =(lessons)=>{
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML ="";
    for(let lesson of lessons){
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button onclick="loadLevelWord(${lesson.level_no})" href="" class="btn btn-outline btn-primary">
                <i class="fa-brands fa-leanpub"></i>Lesson -${lesson.level_no}
            </button>
        `
        levelContainer.appendChild(btnDiv);
    }
}
loadLessons();
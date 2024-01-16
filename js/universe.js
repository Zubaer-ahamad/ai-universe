const loadData = async (value) =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools, value);
};

const displayData = (aiTools, value) => {
    const aiContainer = document.getElementById('ai-container');
    aiContainer.innerText = '';
    const showBtn = document.getElementById('show-btn');
    if(value && aiTools.length > 6) {
        aiTools = aiTools.slice(0, 6);
        showBtn.classList.remove('hidden');
    }
    else{
        showBtn.classList.add('hidde');
    };

    aiTools.forEach(aiTool => {
        // console.log(aiTool);
        const newdiv = document.createElement('div');
        newdiv.innerHTML = `
        <img src="${aiTool.image}" alt="">
        <p class="text-2xl font-medium mt-4">Feature</p>
        <p>1. ${aiTool.features[0]}</p>
        <p>2. ${aiTool.features[1]}</p>
        <p>3. ${aiTool.features[2]}</p>
        <br>
        <h3 class="text-2xl font-bold">${aiTool.name}</h3>
        <p>${aiTool.published_in}</p>
        `
        aiContainer.appendChild(newdiv);
        toggleLoader(false);
    });
};

const toggleLoader = () =>{
    const loader = document.getElementById('loader-body');
    if(toggleLoader === true){
        loader.classList.remove('hidden')
    }
    else{
        loader.classList.add('hidden')
    }
};

document.getElementById('show-btn').addEventListener('click', function(){
    toggleLoader(true);
    loadData();
})

loadData(1);
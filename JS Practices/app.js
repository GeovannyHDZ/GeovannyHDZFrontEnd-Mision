const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./src/Error-404.png", "pokeImg");
            pokeImage("./src/Error-404.png", "pokeImgBack");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;
            let pokeImgBack = data.sprites.back_default;
            let poketype = data.types.map(function(tipos){
                return tipos.type.name
            })
            let pokenumber = data.order;
            let pokeHP = data.stats[0].base_stat;
            let pokeAttack = data.stats[1].base_stat;
            let pokeDefense = data.stats[2].base_stat;
            let pokeSAttack = data.stats[3].base_stat;
            let pokeSDefense = data.stats[4].base_stat;
            let pokeSpeed = data.stats[5].base_stat;
            let pokeMoves = data.moves.map(function(movimientos){
                return movimientos.move.name
            })
            let list = document.getElementById("pokeMoves");
            pokeMoves.forEach((item)=>{
                let li = document.createElement("li");
                li.innerText = item;
                list.appendChild(li);
              })

            
            on();
            pokeImage(pokeImg, "pokeImg");
            pokeImage(pokeImgBack, "pokeImgBack");
            pokeInner(poketype, "pokeTYPE");
            pokeInner(pokeHP, "pokeHP");
            pokeInner(pokeAttack, "pokeAttack");
            pokeInner(pokeDefense, "pokeDefense");
            pokeInner(pokeSAttack, "pokeSAttack");
            pokeInner(pokeSDefense, "pokeSDefense");
            pokeInner(pokeSpeed, "pokeSpeed");
            pokeInner(pokenumber, "pokenumber");

            
        }
    });
}

const pokeImage = (url, wherePhoto) => {
    const pokePhoto = document.getElementById(wherePhoto);
    pokePhoto.src = url;
}

const pokeInner = (data, whereInner) => {
    document.getElementById(whereInner).innerHTML = data;
}
function on() {
    document.getElementById("overlay").style.display = "block";
  }

function off() {
    document.getElementById("overlay").style.display = "none";
  }

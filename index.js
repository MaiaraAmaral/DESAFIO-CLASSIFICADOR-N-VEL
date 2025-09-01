let nomeHeroi = "Cavaleiro da Lua";
let xpHeroi = 8000; 
let nivelxp = ""; 
if (xpHeroi <= 1000) { 
    nivelxp = "Ferro" 
}
else if (xpHeroi <= 2000) {
     nivelxp = "Bronze"
} else if (xpHeroi <= 5000) {
     nivelxp = "Prata" 
} else if (xpHeroi <= 7000) {
     nivelxp = "Ouro" 
} else if (xpHeroi <= 8000) {
     nivelxp = "Platina" 
} else if (xpHeroi <= 9000) {
     nivelxp = "Ascendente" 
} else if (xpHeroi <= 10000) {
     nivelxp = "Imortal" 
} else if (xpHeroi >= 10001) {
     nivelxp = "Radiante" 
}
 console.log ("O herói de nome " + nomeHeroi + " está no nível de " + nivelxp);

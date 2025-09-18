tableauValide = [1, 2, 3, 4, 5, 6];
tableauJeu = [];
tableauMelange = []
progression = 0;


function randomize(tab) {
  let i, j, tmp;
  for (i = tab.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    tmp = tab[i];
    tab[i] = tab[j];
    tab[j] = tmp;
  }
  return tab;
}
$("#refresh").click(function () {
  window.location.reload();
});

$("#shake").click(function () {
  tableauMelange = randomize(tableauValide);
  tableauValide = [1,2,3,4,5,6];
  console.log("Tu as mélangé le tableau");
  $(`#1`).attr("src", `arc${tableauMelange[0]}.png`);
  $(`#2`).attr("src", `arc${tableauMelange[1]}.png`);
  $(`#3`).attr("src", `arc${tableauMelange[2]}.png`);
  $(`#4`).attr("src", `arc${tableauMelange[3]}.png`);
  $(`#5`).attr("src", `arc${tableauMelange[4]}.png`);
  $(`#6`).attr("src", `arc${tableauMelange[5]}.png`);
});

function checkWin() {
  let score = 0;
  console.log(tableauMelange);
  console.log(tableauJeu);
  console.log(tableauValide);
  if (progression >= 6) {
    for (index of tableauJeu) {
      if (tableauJeu[index] === tableauValide[index]) {
        score += 1;
      }
    }
    if (score >= 6) {
      $("#gagne").show('slow');
    }
    else {
      $("#perdu").show('slow');
    }
  }
}
  
  
  $("#1").click(function () {
    $(`#game${progression + 1}`).attr("src",`arc${tableauMelange[0]}.png`);
    $("#1").hide("slow");
    tableauJeu[progression] = tableauMelange[0];
    progression += 1;
    console.log(`Progression = ${progression} -> item${this.id}`);
  checkWin();
});
$("#2").click(function () {
    $(`#game${progression + 1}`).attr("src", `arc${tableauMelange[1]}.png`);
    $("#2").hide("slow");
    tableauJeu[progression] = tableauMelange[1];
    progression += 1;
    console.log(`Progression = ${progression} -> item${this.id}`);
    checkWin();
  });
$("#3").click(function () {
  $(`#game${progression + 1}`).attr("src", `arc${tableauMelange[2]}.png`);
  $("#3").hide("slow");
  tableauJeu[progression] = tableauMelange[2];

  progression += 1;
  console.log(`Progression = ${progression} -> item${this.id}`);
  checkWin();
});

$("#4").click(function () {
    $(`#game${progression + 1}`).attr("src",`arc${tableauMelange[3]}.png`);
    $("#4").hide("slow");
    tableauJeu[progression] = tableauMelange[3];

    progression += 1;
    console.log(`Progression = ${progression} -> item${this.id}`);
    checkWin();
  });
  
  $("#5").click(function () {
  $(`#game${progression + 1}`).attr("src", `arc${tableauMelange[4]}.png`);
  $("#5").hide("slow");
  tableauJeu[progression] = tableauMelange[4];

  progression += 1;
  console.log(`Progression = ${progression} -> item${this.id}`);
    checkWin();
  });

  $("#6").click(function () {
    $(`#game${progression + 1}`).attr("src", `arc${tableauMelange[5]}.png`);
  $("#6").hide("slow");
  tableauJeu[progression] = tableauMelange[5];

  progression += 1;
  console.log(`Progression = ${progression} -> item${this.id}`);
checkWin();  
});

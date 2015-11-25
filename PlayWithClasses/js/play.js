$liste = document.querySelector("#liste");
$suppression = document.querySelector("#suppression");
$restauration = document.querySelector("#restauration");

function select(e) {
	e.target.classList.toggle("selected");
}

function suppression() {
    for (i = 0; i < $liste.children.length; i++) {
        if ($liste.children[i].classList.contains("selected")) {
            $liste.children[i].classList.add("hidden");
        }
    }
}

function restauration() {
    for (i = 0; i < $liste.children.length; i++) {
        $liste.children[i].classList.remove("hidden");
        $liste.children[i].classList.remove("selected");
    }
}

$liste.onclick = select;
$suppression.onclick = suppression;
$restauration.onclick = restauration;
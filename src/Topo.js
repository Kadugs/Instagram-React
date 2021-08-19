export default function Topo() {
    return (
        <div class="topo">
            <div class="conteudo-topo">
                <div class="logos">
                    <ion-icon name="logo-instagram" class="logo1"></ion-icon>
                    <hr class="hrlogos some" />
                    <img src="./assets/logo.png" alt="logo Instagram" class="logo2 some" />
                </div>
                <img src="./assets/logo.png" alt="logo Instagram" class="logo-mobile mobile" />
                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar"  class="barra-pesquisa some" />
                </div>
                <div class="opcoes-topo">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon class="some" name="compass-outline"></ion-icon>
                    <ion-icon class="some" name="heart-outline"></ion-icon>
                    <ion-icon class="some" name="person-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}
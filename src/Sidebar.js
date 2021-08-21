export default function Sidebar() {
    const itensSidebar = [
        {
            image: './assets/images/badvibesmemes.png',
            name: 'bad.vibes.memes',
            info: 'Segue você'
        },
        {
            image: './assets/images/chibirdart.png',
            name: 'chibirdart',
            info: 'Segue você'
        },
        {
            image: './assets/images/razoesparaacreditar.png',
            name: 'razoesparaacreditar',
            info: 'Novo no Instagram'
        },
        {
            image: './assets/images/adorableanimals.png',
            name: 'adorable_animals',
            info: 'Segue você'
        },
        {
            image: './assets/images/smallcutecats.png',
            name: 'smallcutecats',
            info: 'Segue você'
        }
    ];
    const usuario = {
        image: './assets/images/perfil.jpg',
        username: 'kadugs',
        name: 'Cadu'
    }

    return (
        <div class="bloco-sidebar">
            <div class="sidebar">
                <Usuario image={usuario.image} username={usuario.username} name={usuario.name} /> 
                <div class="sugestoes">
                    <div class="texto-sugestoes">
                        <p class="gray">Sugestões para você</p>
                        <p><strong>Ver tudo</strong></p>
                    </div>
                    <div class="bloco-sugestao">
                        {itensSidebar.map( (item) => (
                            <Sugestao image={item.image} name={item.name} info={item.info} />
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Sugestao (props) {
    return (
        <div class="sugestao">
            <div class="perfil-sugerido">
                <img src={props.image} alt="" />
                <div>
                    <p><strong>{props.name}</strong></p>
                    <p class="gray">{props.info}</p>
                </div>
            </div>
            <p class="seguir"><strong>Seguir</strong></p>
        </div>
    );
}

function Usuario (props) {
    return (
        <div class="perfil-usuario">
            <img src={props.image} alt="" />
            <div>
                <p><strong>{props.username}</strong></p>
                <p class="nome-perfil gray">{props.name}</p>
            </div>
        </div>
    );
}
export default function ColunaPosts() {
    const itensPosts = [
        {
            imageProfile: './assets/images/meowed.png',
            nameProfile: 'meowed',
            imagePost: './assets/images/gato-telefone.png',
            likeImage: './assets/images/respondeai.png',
            likeProfile: 'respondeai',
            numberOfLikes: '101.523',
            comments: [
                {
                    profileComment: nameProfile,
                    textComment: 'cat'
                },
                {
                    profileComment: 'respondeai',
                    textComment: 'oooownnt'
                },
                {
                    profileComment: 'Pedrinho',
                    textComment: 'gato no zap kkkk'
                },
            ]
        },
        {
            imageProfile: './assets/images/adorableanimals.png',
            nameProfile: 'adorable_animals',
            imagePost: './assets/images/src/video.ogv',
            likeImage: './assets/images/respondeai.png',
            likeProfile: 'respondeai',
            numberOfLikes: '7.000.000.000',
            comments: [
                {
                    profileComment: nameProfile,
                    textComment: 'urso é um animal'
                },
                {
                    profileComment: '9gag',
                    textComment: 'concordo'
                },
                {
                    profileComment: 'barked',
                    textComment: 'interessante'
                },
            ]
        },
        {
            imageProfile: './assets/images/barked.png',
            nameProfile: 'Barked',
            imagePost: './assets/images/dog.png',
            likeImage: './assets/images/respondeai.png',
            likeProfile: 'respondeai',
            numberOfLikes: '300',
            comments: [
                {
                    profileComment: nameProfile,
                    textComment: 'dog'
                },
                {
                    profileComment: 'respondeai',
                    textComment: 'ooownt'
                },
                {
                    profileComment: 'razoesparaacreditar',
                    textComment: 'não acredito'
                },
            ]
        },
        {
            imageProfile: './assets/images/meowed.png',
            nameProfile: 'meowed',
            imagePost: './assets/images/gato-telefone.png',
            likeImage: './assets/images/respondeai.png',
            likeProfile: 'respondeai',
            numberOfLikes: '101.523',
            comments: [
                {
                    profileComment: nameProfile,
                    textComment: 'cat'
                },
                {
                    profileComment: 'respondeai',
                    textComment: 'oooownnt'
                },
                {
                    profileComment: 'Pedrinho',
                    textComment: 'gato no zap kkkk'
                },
            ]
        },
    ];

    return (
        <div class="coluna-posts">
            
        </div>
    );
}

function Post (props) {
    return (
        <div class="post">
                <div class="infos-post">
                    <div class="perfil">
                        <img src="./assets/images/meowed.png" class="foto-perfil" />
                        <p><strong> meowed </strong></p>
                    </div>
                    <div class="reticencias">
                        <ion-icon name="ellipse"></ion-icon>
                        <ion-icon name="ellipse"></ion-icon>
                        <ion-icon name="ellipse"></ion-icon>
                    </div>
                </div>                 
                <div class="container-conteudo">
                    <img src="./assets/images/gato-telefone.png" class="img-post" />
                </div>    
                <div class="interacao-post">
                    <div class="interacoes-principais ">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="curtidas">
                    <img src="./assets/images/respondeai.png" />
                    <p>Curtido por <strong>respondeai</strong> e 
                        <strong>outras 101.523 pessoas</strong></p>
                </div>
                <div class="comentarios">
                    <p><strong> meowed </strong> cat</p>
                    <p class="ver-todos">Ver todos os comentários</p>
                    <div class="comentario">
                        <p><strong>respondeai</strong> ooownt</p>
                        <ion-icon name="heart-outline"></ion-icon>
                        </div>
                    <div class="comentario">
                        <p><strong>Pedrinho</strong> gato no zap kkkk</p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div class="adicionar-coment">
                        <div>
                            <ion-icon name="happy-outline"></ion-icon>
                            <input type="text" class="add" placeholder="Adicione um comentário..." />
                        </div>
                        <input type="button" value="Publicar" class="botao-publica" />
                    </div>
                </div>
            </div>
    );
}
export default function ColunaPosts() {
    const itensPosts = [
        {
            imageProfile: './assets/images/meowed.png',
            nameProfile: 'meowed',
            imagePost: './assets/images/gato-telefone.png',
            type: 'image',
            likeImage: './assets/images/respondeai.png',
            likeProfile: 'respondeai',
            numberOfLikes: '101.523',
            comments: [
                {
                    profileComment: 'meowed',
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
            imagePost: ['./assets/video.ogv', './assets/video.mp4'],
            type: 'video',
            likeImage: './assets/images/respondeai.png',
            likeProfile: 'respondeai',
            numberOfLikes: '7.000.000.000',
            comments: [
                {
                    profileComment: 'adorable_animals',
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
            type: 'image',
            likeImage: './assets/images/respondeai.png',
            likeProfile: 'respondeai',
            numberOfLikes: '300',
            comments: [
                {
                    profileComment: 'Barked',
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
            type: 'image',
            likeImage: './assets/images/respondeai.png',
            likeProfile: 'respondeai',
            numberOfLikes: '101.523',
            comments: [
                {
                    profileComment: 'meowed',
                    textComment: 'cat'
                },
                {
                    profileComment: 'respondeai',
                    textComment: 'oooownnt'
                },
                {
                    profileComment: 'barked',
                    textComment: 'de novo essa foto?'
                },
            ]
        },
    ];

    return (
        <div class="coluna-posts">
            {itensPosts.map( (item) => (
                <Post  
                    imageProfile={item.imageProfile}
                    nameProfile={item.nameProfile}
                    imagePost={item.imagePost}
                    type={item.type}
                    likeImage={item.likeImage}
                    likeProfile={item.likeProfile}
                    numberOfLikes={item.numberOfLikes}
                    comments={item.comments}
                />
            ))}
        </div>
    );
}

function Comentario (props) {
    if (props === 0) {
        return (
            <div>
                <p>
                <strong> {props.profileComment} </strong> {props.textComment}
                </p>
                <p class="ver-todos">Ver todos os comentários</p>
            </div> 
        );
    } 
    return (
        <div class="comentario">
            <p><strong> {props.profileComment} </strong> {props.textComment} </p>
            <ion-icon name="heart-outline"></ion-icon>
        </div> 
    )
}

function Midia(props) {
    if(props.type === 'video') {
        return (
            <video autoPlay loop class="video-post" >
                <source src={props.imagePost[0]} type="video/ogg" />
                <source src={props.imagePost[1]} type="video/mp4" />
            </video>  
        );
    }
    return (
        <div class="container-conteudo">
                <img src={props.imagePost} class="img-post" />
        </div> 
    );
}

function Post (props) {
    return (
        <div class="post">
                <div class="infos-post">
                    <div class="perfil">
                        <img src={props.imageProfile} class="foto-perfil" />
                        <p><strong> {props.nameProfile} </strong></p>
                    </div>
                    <div class="reticencias">
                        <ion-icon name="ellipse"></ion-icon>
                        <ion-icon name="ellipse"></ion-icon>
                        <ion-icon name="ellipse"></ion-icon>
                    </div>
                </div>
                <Midia 
                    imagePost={props.imagePost}
                    type={props.type}
                />                 
                <div class="interacao-post">
                    <div class="interacoes-principais ">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="curtidas">
                    <img src={props.likeImage} />
                    <p>Curtido por <strong> {props.likeProfile} </strong> e 
                        <strong> outras {props.numberOfLikes} pessoas</strong></p>
                </div>
                <div class="comentarios">
                    {props.comments.map( (item) => (
                        <Comentario 
                            profileComment={item.profileComment}
                            textComment={item.textComment}
                        />
                    ))}
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
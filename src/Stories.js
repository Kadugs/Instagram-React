export default function Conteudo() {
    const itensStories = [
        {
            image: './assets/images/9gag.png', 
            title: '9gag'
        },
        {
            image: './assets/images/meowed-stories.png', 
            title: 'meowed'
        },
        {
            image: './assets/images/barked-stories.png', 
            title: 'Barked'
        },
        {
            image: './assets/images/nathanwpylestrangeplanet.png', 
            title: 'nathanwpyle...'
        },
        {
            image: './assets/images/wawawiwacomicsa.png', 
            title: 'wawawiwac...'
        },
        {
            image: './assets/images/respondeai-stories.png', 
            title: 'respondeai'
        },
        {
            image: './assets/images/filomoderna.png', 
            title: 'filomoderna'
        },
        {
            image: './assets/images/memeriagourmet.png', 
            title: 'memeriagourmet'
        }
    ]

    return (
        <div class="stories">
            <ion-icon name="chevron-forward-circle" class="seta some"></ion-icon>
            {itensStories.map( (item) => (
                <Storie image={item.image} title={item.title} />
                ))}
        </div>
    );
}

function Storie (props) {
    return (
        <div>
            <div class="moldura">
                <img src={props.image} alt="" />
            </div>
            <p>{props.title}</p>
        </div>
    );
}
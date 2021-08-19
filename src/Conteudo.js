import Stories from './Stories';
import ColunaPosts from './ColunaPosts';
import Sidebar from './Sidebar';

export default function Conteudo() {
    return(
        <div class="conteudo">
            <div class="conteudo-meio">
            <Stories />
            <ColunaPosts />
            </div>
            <Sidebar />
        </div>
    );
}
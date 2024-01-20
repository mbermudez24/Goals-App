import './Principal.css'
import Link from './Link';
import { ReactComponent as ListSVG } from "../../img/list.svg";
import { ReactComponent as NewSVG } from "../../img/new.svg";

function Principal({ children }) {
    return (
        <div className="principal">
            <aside className='aside'>
                <Link href="/lista" text="List of goals">
                    <ListSVG className='icon' />
                </Link>
                <Link href="/create" text="New Goal">
                    <NewSVG className='icon' />
                </Link>

            </aside>
            <main className='main'>
                {children}
            </main>

        </div>
    );
}

export default Principal;

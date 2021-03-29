import React from 'react';
import './redirect.css'
import {Link} from 'react-router-dom'

const RedirectPage: React.FC = () => {
    return (
        <>
            <div className="containerRedirect">
                <div className="redirect-c">
                    <h1>
                        Conta registrada com sucesso. Por favor acesse o link em seu e-mail.
                    </h1>
                        <Link to="/">
                                <button type="submit">
                                    Click para retornar a home
                                </button>
                        </Link>
                </div>
               
            </div>
        </>
    )
}

export default RedirectPage
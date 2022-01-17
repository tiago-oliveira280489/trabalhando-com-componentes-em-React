import { useState } from "react";
import Button from "../button";

const Card = () => {

    const [valor, setValor] = useState(0)

    function Adicionar(){
        setValor(valor + 1)
    }

    function Remover(){
        setValor(valor - 1)
    }

    return (
        <div className="card">
            <div className="card-header">
                Meu primeiro card
            </div>
            <div className="card-body">
                <Button>
                className="btn btn-success" onClick={Adicionar()}
                </Button>
                <Button>
                    Adicionar
                </Button>
                <Button>
                className="btn btn-danger" onClick={Remover()}
                </Button>
                <Button>
                    Remover
                </Button>
            </div>
        </div>
    )
}

export default Card;
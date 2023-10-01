import { useContext } from "react"
import { Container, Content } from "./style"
import { ButtonContext } from "../../providers/buttonProvider"


export const CreateYourWebsite = () => {
    const {closeModal} = useContext(ButtonContext)
    return(
        <>
            <Container onClick={closeModal} id="home">
                <div className="bg">
                <Content>
                    <h1>Crie seu site hoje!</h1>
                    <p>Desenvolvimento web profissional para impulsionar seu negócio.
                        Transforme sua presença online.
                    </p>

                    <button>
                        <a href="https://wa.me/+5524974035564?text=Ol%C3%A1%2C%20eu%20venho%20do%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20de%20como%20criar%20um%20site%20para%20o%20meu%20empreendimento." target="blank">Comece agora</a>     
                    </button>

                </Content>
                </div>
                
                

            </Container>
           
        </>
    )
}
import { Container, Content } from "./style"
import { useContext } from "react"
import { ButtonContext } from "../../providers/buttonProvider"

import my_services1 from "../../assets/images/my_services1.jpg"
import my_services2 from "../../assets/images/my_services2.jpg"
import my_services3 from "../../assets/images/my_services3.jpg"

export const MyServices = () => {
    const {closeModal} = useContext(ButtonContext)

    return(
        <>
            <Container onClick={closeModal}>
                <h1 className="title">Meus serviços</h1>

                <Content>
                    <div className="box1">
                        <img src={my_services1}/>
                        <p className="tittleParagraph">Desenvolvimento Web Personalizado</p>
                        <p className="paragraph">Crio sites e aplicações web personalizados 
                        para atender às necessidades específicas de cada cliente.</p>
                        <button>
                            <a href="https://wa.me/+5524974035564?text=Ol%C3%A1%2C%20eu%20venho%20do%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20de%20como%20criar%20um%20site%20para%20o%20meu%20empreendimento." target="blank">Mais informações</a>     
                        </button>
                    </div>
                    <div className="box2">
                    <img src={my_services2}/>
                        <p className="tittleParagraph">Migração de Site</p>
                        <p className="paragraph">Transfiro seu site para uma plataforma mais avançada, 
                        mantendo a integridade do conteúdo e dos dados.</p>
                        <button>
                            <a href="https://wa.me/+5524974035564?text=Ol%C3%A1%2C%20eu%20venho%20do%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20de%20como%20migrar%20o%20site%20de%20meu%20empreendimento%20para%20uma%20plataforma%20mais%20%20avan%C3%A7ada%20e%20com%20tecnologias%20mais%20atualizadas." target="blank">Mais informações</a>     
                        </button>
                    </div>
                    <div className="box3">
                    <img src={my_services3}/>
                        <p className="tittleParagraph">SEO para Sites</p>
                        <p className="paragraph">Otimizo seu site para que ele apareça 
                        nos primeiros resultados das pesquisas dos mecanismos de busca.</p>
                        <button>
                            <a href="https://wa.me/+5524974035564?text=Ol%C3%A1%2C%20eu%20venho%20do%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20de%20como%20melhorar%20o%20desempenho%20do%20site%20do%20meu%20empreendimento%20ou%20site%20pessoal." target="blank">Mais informações</a>     
                        </button>
                    </div>
                </Content>

                
                
            </Container>
        </>
    )
}
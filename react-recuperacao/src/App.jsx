import { useState } from 'react'
import Banner from './components/Banner'
import Livro from './components/Livro'
import Footer from './components/Footer'
import Galery from './components/Galery'
import './App.css'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
     <Banner />
     <Livro
      titulo = {"Inferno"}
      ano={"2013"}
      autor={"Daw Brown"}
      sinopse={"Nas 443 páginas do livro Inferno, lançado no mercado editorial pela Editora Arqueiro, o autor Dan Brown narra a aventura do simbologista Robert Langdon, na tentativa de conter a ameaça de uma contaminação biológica proposta por um cientista que se mostra contrário à OMS, por entender que distribuição gratuita de preservativos, palestra de conscientização contra a gravidez indesejada e demais medidas de contracepção não têm surtido efeito, uma vez que a população mundial aumenta em condições desesperadoras para o meio ambiente e para a sobrevivência humana. Baseado nas ideias do matemático e demógrafo Thomas Robert Malthus, o qual afirmou que a superpopulação conduziria a um colapso, o geneticista Bertrand Zobrist desenvolve a Equação Apocalíptica Populacional, uma forma de conter o crescimento da população. Essa teoria se baseia no cálculo de que a Terra só suporta 4 bilhões de pessoas, e esse número já está quase o dobro, exigindo medidas sérias de controle de natalidade hoje, para que se possa vislumbrar um amanhã melhor. Segundo a tradição religiosa, pragas e pestes eram enviadas por um Deus vingativo, presente no velho Testamento, por causa dos pecados capitais, sobretudo. Nesse sentido, a Peste Negra é avaliada como uma vantagem para a Idade Média, pois a redução do “rebanho humano” trouxe benefícios socioeconômicos que serviram de base para a formação do Renascimento, uma vez que, antes da Peste, a superpopulação se caracterizava por fome e miséria, por causa da escassez de recursos, entretanto, depois da epidemia, abundou recurso, alimento e oportunidade. Zobrist, conhecedor da obra de Dante, A Divina Comédia, se diz disposto a evitar que a Terra se transforme na descrição infernal do poeta, a qual serve de base para o imaginário de Inferno da população religiosa. A obra, composta de 14.233 versos, apresenta três partes - Inferno, Purgatório e Paraíso - e o Inferno se mostra o mais lido, redefinindo a percepção de danação."}/>
     <Galery />
     <Footer />
    </main>
  )
}

export default App


let quotes = [ 
    'O teu trabalho é a oficina Em que podes forjar a tua própria luz. Emmanuel',
    'Roga, pois, ao Senhor a bênção da Luz Divina para o teu coração e para a tua inteligência, a fim de que te não percas no labirinto dos problemas. Emmanuel',
    'Não desanimes. Persiste mais um tanto. Não cultives pessimismo. Centraliza-te no bem a fazer. Emmanuel',
    'Resguarda-te em Deus e persevera no trabalho que Deus te confiou. Ama sempre, fazendo pelos outros o melhor que possas realizar. Emmanuel',
    'Refugia-te no templo à parte, dentro de tua alma, porque somente aí encontrarás as verdadeiras noções da paz e da justiça, do amor e da felicidade reais, a que o Senhor te destinou. Emmanuel',
    'Por mais se te fale de calamidades e crises, não permitas que o desânimo te alugue o coração para os comícios da rebeldia. Emmanuel',
    'Somos todos na Terra criaturas em crescimento espiritual, dentro da perenidade da vida. Emmanuel',
    'Haja o que houver, trabalha na edificação do bem e segue adiante. Emmanuel',
    'Dor, na maioria das vezes é o tributo que se paga ao aperfeiçoamento espiritual. Emmanuel',
    'Estejamos convencidos de que nunca é tarde para que alguém seja feliz e que o Reino de Deus está dentro de nós.Emmanuel',
    'Enquanto a vida se expressa, multiplicam-se as oportunidades de crescer e ser feliz. Joanna de Ângelis',
    'Considera o trabalho o melhor meio para progredir. Quem não trabalha, entrega-se à paralisia moral e espiritual...0 trabalho é vida. Joanna de Ângelis',
    '0 estudo liberta da ignorância e favorece a criatura com o discernimento. O estudo e o trabalho são as asas que facilitam a evolução do ser. O conhecimento é mensagem de vida. Joanna de Ângelis',
    'A paciência é a virtude que te auxiliará na conquista dos bens do corpo, da alma e da sociedade. Joanna de Ângelis',
    'A ambição desmedida enlouquece, quando já não infelicita antes. Cuida de lutar pelo necessário, repartindo o que te exceda, certamente, fazendo falta a outros. Joanna de Ângelis',
    'Num dia extenso com 24 horas, reserva alguns momentos à reflexão. Quem caminha sem meditar, perde o contato consigo mesmo. Joanna de Ângelis',
    'Incessantemente, busca a tua identidade real, isto é, descobre-te para o bem de ti mesmo. Joanna de Ângelis',
    'Canaliza o teu modo de pensar para as questões agradáveis, salutares, otimistas, e viverás sob o seu reflexo, desfrutando do bem-estar que se irradiará a outros mimetizando e produzindo paz. Joanna de Ângelis',
    'Age com calma em todas as circunstâncias. Há muita gente que está vivendo em clima de desespero e pressa exaurinte. Joanna de Ângelis',
    'Nunca te apoies no pessimismo para deixar de lutar. O que os outros conseguem através do trabalho, obterás também, se tiveres paciência e perseverança. Joanna de Ângelis',
    'Entre as sombras do mundo, acende a tua luz. Irmão José',
    'Em todas as dificuldades, trabalhe, ore e perdoe. Irmão José',
    'Em toda luta, medita. Nesta sentença formosa: Menos espinhos na haste, Menos perfume na rosa!. Irmão José ',
    'À luz da fé que te guia, Procura o abrigo da prece, Guarda silêncio e persiste No bem, que nada arrefece. Irmão José ',
    'Não exijas dos outros qualidades que ainda não possuem. Chico Xavier',
    'A felicidade não entra em portas trancadas. Chico Xavier',
    'Procure descobrir o seu caminho na vida. Ninguém é responsável por nosso destino, a não ser nós mesmos. Chico Xavier',
   'Não há problema que não possa ser solucionado pela paciência. Chico Xavier',
   'Gostaria de dizer para você que viva como quem sabe que vai morrer um dia, e que morra como quem soube viver direito. Chico Xavier',
   'Sonhos não morrem, apenas adormecem na alma da gente. Chico Xavier',
];

function generateQuote(){
    let frase = quotes[
        Math.floor(Math.random() * quotes.length)
    ]

    document.querySelector(".quote").textContent=frase;
    
}


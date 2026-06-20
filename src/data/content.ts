export interface Feeling {
  id: string
  title: string
  description: string
  videoSrc: string
  accent: 'gold' | 'rose' | 'green'
}

export interface StoryMilestone {
  id: string
  date: string
  title: string
  description: string
  imageSrc: string
  detailedText: string
}

export interface FutureDream {
  id: string
  title: string
  description: string
  icon: 'sunflower' | 'rose' | 'heart'
}

export interface FutureChapter {
  id: string
  month: number
  year: number
  title: string
  teaser: string
  pages: {
    content: string
    imageSrc: string
  }[]
}

export const introVideoSrc = '/videos/intro.mp4'

export const publicNavItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'sentimentos', label: 'O que eu sinto por você' },
] as const

export const lockedNavItems = [
  { id: 'historia', label: 'Nossa História' },
  { id: 'futuro', label: 'O Futuro' },
] as const

export const navItems = [...publicNavItems, ...lockedNavItems] as const

export const heroContent = {
  greeting: 'Para quem ilumina meus dias',
  subtitle:
    'Como girassóis voltados ao sol, meu coração sempre encontra o caminho de volta até você.',
  highlight: 'Cada momento ao seu lado é um jardim em flor.',
  cta: 'Descubra o que sinto',
}

export const feelings: Feeling[] = [
  {
    id: '1',
    title: 'Admiração',
    description: 'Você me inspira a ser melhor, todos os dias, sem esforço algum.',
    videoSrc: '/videos/sentimento-1.mp4',
    accent: 'gold',
  },
  {
    id: '2',
    title: 'Gratidão',
    description: 'Obrigado por existir e por escolher caminhar ao meu lado.',
    videoSrc: '/videos/sentimento-2.mp4',
    accent: 'rose',
  },
  {
    id: '3',
    title: 'Paixão',
    description: 'O calor que sinto por você é como o sol banhando um campo de girassóis.',
    videoSrc: '/videos/sentimento-3.mp4',
    accent: 'gold',
  },
  {
    id: '4',
    title: 'Ternura',
    description: 'Nos seus braços encontro o lugar mais aconchegante do mundo.',
    videoSrc: '/videos/sentimento-4.mp4',
    accent: 'green',
  },
  {
    id: '5',
    title: 'Esperança',
    description: 'Com você, cada amanhecer carrega a promessa de algo belo.',
    videoSrc: '/videos/sentimento-5.mp4',
    accent: 'rose',
  },
  {
    id: '6',
    title: 'Amor',
    description: 'Três palavras pequenas que cabem um universo inteiro de sentimentos.',
    videoSrc: '/videos/sentimento-6.mp4',
    accent: 'gold',
  },
]

export const storyMilestones: StoryMilestone[] = [
  {
    id: '1',
    date: 'O começo',
    title: 'Quando nossos olhares se encontraram',
    description:
      'Foi como o primeiro raio de sol atravessando as folhas — suave, inesperado e impossível de ignorar.',
    imageSrc: '/images/story/moment-1.png',
    detailedText:
      'Tudo começou em um simples jogo, onde o João estava jogando para tentar distrair um pouco a dor da cirurgia e as frustrações que estava sentindo naquela fase difícil da vida dele. Enquanto jogava, apareceu um personagem aleatório precisando de ajuda. E ele acabou ajudando, como sempre fazia, sem pensar duas vezes. Só que ele não fazia ideia de que aquele personagem mudaria completamente o rumo da vida dele. O João confessa que gostava de conversar com aquele personagem, mesmo sem saber quem estava por trás da tela. Ficava andando pelo CP esperando ele aparecer, e quando aparecia, ele ficava andando de um lado para o outro tentando chamar atenção para o personagem falar com ele kkkkkkkkk. E foi assim que começou um belo amor. Quem diria que os Pokémon fariam de tudo para juntar nós dois? ❤️',
  },
  {
    id: '2',
    date: 'Um marco',
    title: 'O dia em que tudo mudou',
    description:
      'Descobrimos que rir juntos, mesmo em silêncio, já é motivo suficiente para ser feliz.',
    imageSrc: '/images/story/moment-2.png',
    detailedText:
      'O maior marco da nossa história foi quando a Amanda me passou o Discord dela para eu conseguir ajudar ela. Lembro até hoje. Eu estava lá, digitando o código para adicionar ela como amizade. Depois que enviei o pedido, fui olhar a foto do perfil e pensei: "CARALHOOOOOOO... é mulher! Kkkkkkkkk" E eu que achava que estava conversando com um velho tarado o tempo todo kkkkkkkkk. Mas aí veio a segunda surpresa: "Tá porra... que mulher bonita!" E foi naquele momento que alguma coisa começou a mudar. Depois daquele dia, nossas conversas ficaram cada vez mais frequentes. O que antes eram apenas mensagens aleatórias foram se transformando em uma das melhores partes do meu dia. Conversar com você era fácil. Parecia que a gente se conhecia há anos. A gente falava dos nossos problemas, dos nossos sonhos, dos nossos medos e das nossas alegrias sem julgamentos. E, aos poucos, aquilo deixou de ser apenas amizade. Era uma intimidade diferente. Era querer saber se o outro estava bem. Era querer cuidar. Era sentir falta quando não conversava. Era perceber que, sem nem notar, uma pessoa tinha começado a ocupar um espaço enorme no coração da outra. E foi assim que tudo começou. ❤️',
  },
  {
    id: '3',
    date: 'Nossa trilha',
    title: 'Caminhando lado a lado',
    description:
      'Cada passo nosso construiu um jardim de memórias — algumas delicadas como pétalas, outras fortes como raízes.',
    imageSrc: '/images/story/moment-3.png',
    detailedText:
      'Nossa trilha não foi feita de caminhos fáceis. Na verdade, ela foi feita de problemas, desafios, saudades, inseguranças e momentos em que parecia que tudo estava dando errado. Mas existe uma coisa que sempre me chamou atenção na nossa história: nós nunca desistimos na primeira dificuldade. Sempre tentamos encontrar uma solução. Sempre tentamos conversar. Sempre tentamos dar mais uma chance. E foi assim que seguimos caminhando. Cada problema que superamos fortaleceu nossas raízes e mostrou que nosso amor era maior do que os obstáculos que apareciam pelo caminho. O que mais admiro em nós não é o fato de nunca termos enfrentado problemas. É o fato de termos enfrentado eles juntos. E é por isso que, quando olho para trás, não vejo apenas dificuldades. Vejo uma história de superação, força de vontade e amor.',
  },
  {
    id: '4',
    date: 'Hoje',
    title: 'Este momento, agora',
    description:
      'Olho para trás com gratidão e para frente com o coração cheio. Você é meu presente mais precioso.',
    imageSrc: '/images/story/moment-4.png',
    detailedText:
      'Quando olho para trás, vejo uma história cheia de momentos que jamais imaginei viver. Quem diria que um simples jogo mudaria tanto a minha vida? Hoje, depois de tudo que vivemos, o sentimento que fica é gratidão. Gratidão por cada conversa, cada risada, cada momento de carinho e cada desafio que enfrentamos juntos. Mas sabe o que mais me deixa feliz? É perceber que, quando penso no meu presente, não penso apenas em você. Penso em vocês. Penso no seu sorriso, nas nossas conversas, nas nossas brincadeiras e até no Tutu correndo e aprontando. Vocês se tornaram uma parte muito importante da minha vida. E quando imagino felicidade, ela não está em dinheiro ou em coisas materiais. Ela está nas coisas simples. Em estar junto. Em cuidar. Em amar. E hoje, neste momento, é exatamente isso que sinto quando penso em vocês. ❤️',
  },
]

export const futureDreams: FutureDream[] = [
  {
    id: '1',
    title: 'Viagens ao entardecer',
    description: 'Assistir o sol se pôr em lugares novos, com a sua mão na minha.',
    icon: 'sunflower',
  },
  {
    id: '2',
    title: 'Um lar cheio de flores',
    description: 'Girassóis na janela, rosas na mesa e risadas ecoando pelos corredores.',
    icon: 'rose',
  },
  {
    id: '3',
    title: 'Construir memórias',
    description: 'Colecionar momentos simples que, juntos, formam a história mais bonita.',
    icon: 'heart',
  },
  {
    id: '4',
    title: 'Envelhecer juntos',
    description: 'Com o mesmo carinho de hoje, só que com mais histórias para contar.',
    icon: 'heart',
  },
]

export const futureClosing =
  'O futuro que sonho é aquele em que acordo todos os dias ao seu lado, com o sol entrando pela janela e a certeza de que escolhi a pessoa certa. Te amo.'

export const futureChapters: FutureChapter[] = [
  {
    id: '1',
    month: 6,
    year: 2026,
    title: 'O Primeiro Passo',
    teaser: 'A jornada começa aqui...',
    pages: [
      {
        content: 'Esse é o começo do que eu quero ter e construir junto com você: uma relação baseada na sinceridade, na honestidade e no respeito aos sentimentos um do outro. Não quero uma relação construída sobre dúvidas, jogos ou brincadeiras com aquilo que sentimos. A única coisa que quero cultivar entre nós é um amor sincero.\n\nNão tenho vergonha de admitir que, anos atrás, posso ter gerado dúvidas por me deixar levar pelas emoções em situações que poderiam ter sido resolvidas com calma, diálogo e uma conversa verdadeira sobre o que cada um sentia. Hoje entendo que esconder sentimentos ou deixar coisas sem resposta apenas afasta as pessoas. A confiança cresce quando existe sinceridade, transparência e coragem para falar a verdade.\n\nTambém reconheço que algumas das minhas ações no passado podem ter causado inseguranças. Mas existe uma coisa da qual tenho certeza: eu nunca deixei de pensar em você e no Bernardo. Sempre me importei com vocês, sempre me preocupei com o bem-estar de vocês e sempre vou amar vocês.\n\nComo este é apenas o primeiro card deste site, e ainda existem muitas coisas que serão reveladas ao longo dele, quero começar abrindo meu coração. Durante muito tempo guardei surpresas que pensei com carinho para você, mas que nunca consegui entregar.\n\nUma delas foi a aliança que comprei no ano passado. Nela, gravei datas especiais que marcaram nossa história. Para mim, ela tem um significado muito maior do que um simples objeto. É como uma tatuagem: uma lembrança permanente, uma história marcada para sempre. Faz parte de quem eu sou, da minha trajetória e de tudo o que vivi ao seu lado.',
        imageSrc: '/images/chapter-1.png',
      },
      {
        content: 'A primeira aliança é a sua.\n\nNela está gravada a data 17/10/2022, o dia em que tudo mudou na minha vida. Foi o dia em que eu conheci você, e posso dizer com toda sinceridade que foi uma das coisas mais bonitas que já me aconteceram.\n\nVocê era uma mulher linda, fofa, e eu adorava conversar com você. Sua presença me fazia bem de uma forma que eu não sabia explicar.\n\nMas essa data também carrega uma das maiores dores da minha vida.\n\nFoi o período em que fiz a cirurgia no pescoço. Eu carregava um medo enorme de morrer, o medo de ter câncer.\n\nLembro do médico olhando para minha mãe e falando que era uma cirurgia complexa, mas que, entre todas, aquela era uma das mais fáceis para ele. Porém, dava para sentir que tinha algo que ele não estava falando.\n\nMinha mãe percebeu e começou a pressionar para entender a verdade. Foi quando ele explicou:\n\n"Olha, a glândula dele está doente. Em algum momento ela pode começar a produzir muitas pedras. Pode ser agora, pode ser amanhã, ou pode ser que nunca mais aconteça. Mas, se acontecer, ela pode inflamar, o caso pode ficar sério, podemos precisar intubar ele, e existe uma chance alta dele morrer."\n\nOuvir aquilo trouxe um medo que eu nunca tinha sentido antes.\n\nNunca vou esquecer daquele dia em que eu e outro rapaz fizemos a cirurgia. O resultado dele veio maligno, e o meu não.\n\nLembro até hoje de sair do hospital chorando sem parar. Chorei durante toda a viagem de volta para casa. Não era apenas tristeza. Era como se todo o medo, toda a angústia e toda a dor que eu estava guardando estivessem saindo de uma vez.\n\nEu tinha medo de morrer. Tinha medo do futuro. Tinha medo de estar pagando por algo. Tinha medo até do inferno.\n\nDepois dos exames e da retirada da glândula, veio o resultado da biópsia. Eu não lembro o nome exatamente, porque era um nome grande e diferente, mas descobri que eu tinha uma condição crônica: meu corpo produz pedras.\n\nDescobri que era algo que eu carregava comigo desde que nasci e que não tinha cura.\n\nQuando descobri isso, comecei a viver com medo. Eu pensava que a qualquer momento a outra glândula poderia adoecer também, começar a produzir pedras e minha vida poderia mudar completamente.\n\nLembro do médico falando que, se um dia precisasse retirar a outra, seria algo muito mais complicado.\n\nFoi um peso enorme carregar esse pensamento de estar aqui hoje, mas ao mesmo tempo sentir que talvez amanhã tudo pudesse mudar.\n\nEra como pensar: "Eu estou aqui, mas talvez um dia eu não esteja."\n\nMas, mesmo diante disso, existia algo dentro de mim dizendo que eu não podia desistir. Eu precisava ser forte. Eu precisava enfrentar aquilo.\n\nE foi assim que enfrentei aquele período: com medo, mas também com fé.\n\nForam meses extremamente difíceis. Meses em que a dor me acompanhava todos os dias. Eu chorava para tomar banho, chorava para levantar da cama, chorava até para fazer coisas simples.\n\nTomar um copo de água parecia uma facada no pescoço. Comer doía. Falar doía. Viver doía.\n\nFoi nesse período que eu aprendi o verdadeiro valor da vida.\n\nPassei a agradecer por coisas simples. Agradecer por conseguir beber água. Agradecer por conseguir me alimentar. Agradecer por conseguir fazer coisas que antes eu considerava normais.\n\nTambém aprendi que precisava controlar minhas emoções e não deixar que os problemas ou as atitudes das outras pessoas me consumissem, porque quem sofria as consequências era eu.\n\nEssa descoberta mudou minha forma de enxergar a vida. Me fez querer ser alguém melhor, valorizar mais quem estava comigo e aprender a ser sincero com aquilo que eu sentia.\n\nFoi um processo difícil. Nesse caminho eu sei que criei inseguranças em você, gerei dúvidas e tive momentos em que minhas emoções falaram mais alto.\n\nMas também foi nesse processo que eu fui mudando, aprendendo e me tornando uma pessoa melhor.\n\nE, em meio a tanta dor, apareceu uma luz no fim do túnel.\n\nEssa luz foi você.\n\nVocê trouxe paz para um coração que estava cansado. Trouxe calma para uma mente que estava cheia de medo. Você me ajudou a atravessar um dos períodos mais difíceis da minha vida.\n\nVocê conseguiu conhecer um João que sofria calado, que escondia suas dores e seus medos. E mesmo assim me fez sentir acolhido.\n\nNa sua presença eu encontrei confiança.\n\nNa sua presença eu encontrei paz.\n\nE, por muito tempo, você foi o meu porto seguro.\n\nE hoje eu te entrego essa aliança porque ela representa muito mais do que um objeto.\n\nEla é um pedaço de mim.\n\nEla carrega uma história que ficou marcada dentro de mim. Carrega uma fase de dor, medo, fé, aprendizado e transformação.\n\nEla é como uma tatuagem da minha história, algo que faz parte de quem eu sou.\n\nE eu quero compartilhar essa parte de mim com você.\n\nQuero que você saiba que eu te amo muito.\n\nE entre todos os anos de vida que eu ainda tiver, eu quero construir minha história ao seu lado.',
        imageSrc: '/images/chapter-2.png',
      },
    ],
  },
  {
    id: '2',
    month: 7,
    year: 2026,
    title: 'A Primeira Aliança',
    teaser: '17/10/2022 - O dia que mudou tudo',
    pages: [
      {
        content: 'Em breve...',
        imageSrc: '/images/future/chapter-2.png',
      },
    ],
  },
  {
    id: '3',
    month: 8,
    year: 2026,
    title: 'Terceiro Capítulo',
    teaser: 'A metade do caminho...',
    pages: [
      {
        content: 'Estamos chegando cada vez mais perto. Cada momento compartilhado, mesmo à distância, fortalece ainda mais nossa certeza de que vale a pena esperar.',
        imageSrc: '/images/future/chapter-3.png',
      },
    ],
  },
  {
    id: '4',
    month: 9,
    year: 2026,
    title: 'Quarto Capítulo',
    teaser: 'Preparando o futuro...',
    pages: [
      {
        content: 'Já consigo imaginar nossa rotina juntos. Os pequenos momentos do dia a dia que vão compor a nossa história.',
        imageSrc: '/images/future/chapter-4.png',
      },
    ],
  },
  {
    id: '5',
    month: 10,
    year: 2026,
    title: 'Quinto Capítulo',
    teaser: 'Cada vez mais próximos...',
    pages: [
      {
        content: 'A espera está ficando mais difícil, mas também mais doce. Porque sei que em breve não precisaremos mais esperar.',
        imageSrc: '/images/future/chapter-5.png',
      },
    ],
  },
  {
    id: '6',
    month: 11,
    year: 2026,
    title: 'Sexto Capítulo',
    teaser: 'Falta pouco agora...',
    pages: [
      {
        content: 'Os planos estão tomando forma. A realidade está cada vez mais perto do sonho que compartilhamos.',
        imageSrc: '/images/future/chapter-6.png',
      },
    ],
  },
  {
    id: '7',
    month: 12,
    year: 2026,
    title: 'Sétimo Capítulo',
    teaser: 'Preparativos finais...',
    pages: [
      {
        content: 'Estamos nos últimos meses. Logo toda a espera valerá a pena e nossa nova vida juntos começará.',
        imageSrc: '/images/future/chapter-7.png',
      },
    ],
  },
  {
    id: '8',
    month: 1,
    year: 2027,
    title: 'Penúltimo Capítulo',
    teaser: 'Quase lá...',
    pages: [
      {
        content: 'Falta apenas mais um passo. Um mês. E então nossa história ganha um novo começo.',
        imageSrc: '/images/future/chapter-8.png',
      },
    ],
  },
  {
    id: '9',
    month: 2,
    year: 2027,
    title: 'Finalmente Juntos',
    teaser: 'O dia chegou! 💕',
    pages: [
      {
        content: 'A espera acabou. Hoje começamos a viver o nosso para sempre juntos. Este não é um fim, é o começo mais lindo de todos. Te amo!',
        imageSrc: '/images/future/chapter-9.png',
      },
    ],
  },
]

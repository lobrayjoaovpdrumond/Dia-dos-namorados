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
    title?: string
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
      {
        content: 'A segunda aliança é a minha.\n\nNela está gravada a data do nascimento da pessoa mais importante da sua vida: o Bernardo.\n\nEssa data carrega um significado muito lindo, porque ele representa uma parte de você. Ele é o reflexo de quem você é, da pessoa que você foi e também da pessoa que você está se tornando.\n\nO amor que você tem por ele é algo que eu admiro muito. Eu vejo o quanto você dá valor a ele, porque só você sabe o peso que é perder uma parte sua, e mesmo assim você continua sendo forte, dando amor, cuidado e tudo que ele precisa.\n\nQuando ele nasceu, nasceu também uma nova parte da sua história.\n\nE eu lembro de quando eu vi ele ainda na sua barriga. Eu achei uma das coisas mais lindas desse mundo. Era uma sensação diferente, uma mistura de felicidade e até agonia de ver ele se mexendo ali dentro.\n\nMas, mesmo antes dele nascer, eu já sentia um amor enorme por ele.\n\nNão porque eu conhecia ele, porque ele ainda nem tinha chegado ao mundo, mas porque eu amo você. E ele é um pedaço seu.\n\nE amar você significa amar aquilo que faz parte de você.\n\nEle carrega uma parte da sua história, do seu passado, do seu presente e do futuro que ainda vamos construir.\n\nA cada dia que passa eu amo ele mais.\n\nEu lembro de quando ele nasceu, de ver você toda bobinha, feliz e animada, cuidando do Bernardo com todo amor e carinho. Foi nesse momento que nasceu em mim uma admiração ainda maior por você, vendo esse amor de mãe que existe dentro de você.\n\nE quando eu descobri que ele tinha aqueles olhinhos da mamãe, eu me apaixonei pela segunda vez.\n\nEu sou completamente apaixonado por vocês.\n\nO significado que eu carrego nessa aliança é que eu estou carregando uma das partes mais preciosas da sua vida.\n\nEu tenho consciência do tamanho disso.\n\nEssa aliança representa o amor que eu escolhi construir com você e o compromisso de cuidar, respeitar e dar todo amor e carinho ao Bernardo.\n\nEu coloquei essa data porque ela representa uma das coisas mais importantes para mim.\n\nEla representa o dia em que eu escolhi carregar vocês dois comigo.\n\nEu quero olhar para essa data no futuro e lembrar que existe o meu jabuticabinha me esperando, e que eu vou estar sempre ansioso para brincar, sorrir e viver momentos ao lado dele.\n\nEssa aliança é o símbolo do meu compromisso com a coisa mais importante da sua vida.\n\nVocê e ele.',
        imageSrc: '/images/chapter-1-page-3.png',
      },
    ],
  },
  {
    id: '2',
    month: 7,
    year: 2026,
    title: 'Por Que Eu Continuo Escolhendo Vocês',
    teaser: 'A escolha que continua todos os dias',
    pages: [
      {
        title: 'O amor deixou de ser apenas um sentimento',
        content: 'O carinho que eu sentia por você no começo não é o mesmo que sinto hoje.\n\nNo início, eu te amava e queria viver muitas coisas ao seu lado. Queria conversar com você, passar horas juntos e criar lembranças.\n\nMas, com o passar do tempo, eu percebi que o que eu sentia era muito maior do que apenas gostar de alguém.\n\nComeçou a nascer dentro de mim um desejo enorme de cuidar de você.\n\nDe proteger você.\n\nDe ver você bem.\n\nE, junto com isso, nasceu também um carinho imenso pelo Bernardo. Eu passei a enxergar vocês dois como parte do futuro que eu sonhava construir.\n\nFoi então que entendi que amar não é apenas sentir aquele frio na barriga ou ficar feliz quando a pessoa manda uma mensagem.\n\nAmar também é uma escolha.\n\nExistiram dias em que tudo parecia fácil.\n\nTambém existiram dias em que a distância parecia maior do que nunca.\n\nDias em que a saudade apertava.\n\nDias em que as dúvidas apareciam.\n\nMas, mesmo assim, quando eu fechava os olhos e imaginava meu futuro, você continuava lá.\n\nFoi nesse momento que eu percebi que meu amor por você tinha amadurecido.\n\nEle deixou de ser apenas um sentimento.\n\nE se tornou uma decisão que eu fazia todos os dias: continuar escolhendo você.',
        imageSrc: '/img/m1.png',
      },
      {
        title: 'Porque você conheceu quem eu realmente era',
        content: 'Você me conheceu em uma fase da minha vida em que eu carregava muitos medos e inseguranças.\n\nVocê acabou conhecendo um João cheio de dúvidas, que ainda estava aprendendo a lidar com as próprias emoções.\n\nVocê me viu errar.\n\nMe viu mudar.\n\nMe viu aprender.\n\nE, mesmo passando por tudo isso, nunca senti que precisava fingir ser outra pessoa quando estava com você.\n\nPorque, ao seu lado, eu me sentia confortável.\n\nEu podia relaxar.\n\nPodia abaixar a guarda.\n\nPodia simplesmente ser eu.\n\nSem precisar esconder minhas fraquezas.\n\nSem precisar parecer mais forte do que realmente era.\n\nE isso é algo muito raro.\n\nHoje eu percebo que encontrar alguém diante de quem podemos mostrar nossas qualidades, nossos defeitos, nossos medos e, ainda assim, nos sentirmos acolhidos, é um dos maiores presentes que a vida pode oferecer.\n\nFoi isso que encontrei em você.',
        imageSrc: '/img/2m.png',
      },
      {
        title: 'Porque eu vi qualidades que talvez nem você veja',
        content: 'Não foi apenas pela sua beleza ou pelo sorriso lindo que você tem que eu me apaixonei.\n\nFoi pelo jeito que você ama.\n\nPelo jeito que você tentava cuidar de mim quando estávamos juntos.\n\nPelo carinho que você fazia no meu cabelo.\n\nPela forma tímida que você encontrava para demonstrar amor, sempre tentando me agradar do seu jeitinho.\n\nPelo seu olhar.\n\nPelo seu rostinho.\n\nPor todas aquelas pequenas atitudes que, talvez para você fossem simples, mas que para mim significavam muito.\n\nTambém me apaixonei pela mãe que você é.\n\nEu admiro o quanto você luta para dar uma vida melhor ao Bernardo.\n\nAdmiro a força que você encontra para continuar mesmo quando a vida parece injusta.\n\nVejo o amor que você sente por ele em cada cuidado, em cada preocupação e em cada decisão que toma pensando no bem dele.\n\nEssas são coisas que talvez você nem perceba em si mesma.\n\nMas eu percebo.\n\nE foram justamente esses pequenos detalhes que fizeram minha admiração por você crescer cada vez mais.\n\nFoi aí que eu entendi que eu não amava apenas a mulher bonita que conheci.\n\nEu amava a mulher forte, carinhosa, dedicada e cheia de amor que existe dentro de você.\n\nE é essa mulher que eu continuo escolhendo todos os dias.',
        imageSrc: '/img/3m.png',
      },
      {
        title: 'Porque o tempo nunca diminuiu o que eu sentia',
        content: 'Muitas pessoas dizem que a distância esfria o amor.\n\nMas, com você e com o Bernardo, aconteceu exatamente o contrário.\n\nA distância me fez perceber o tamanho da falta que vocês dois fazem na minha vida.\n\nEla me fez entender que amar alguém não depende apenas da presença.\n\nDepende da importância que essa pessoa tem dentro da gente.\n\nE vocês dois se tornaram uma das partes mais importantes da minha vida.\n\nTodos os dias, quando vou dormir, abraço o travesseiro imaginando que estou abraçando minha esposa e meu filhinho.\n\nÀs vezes até fecho os olhos e imagino dando um beijo em vocês antes de dormir.\n\nPode parecer uma coisa simples, mas é nesses pequenos momentos que eu percebo o quanto sinto falta de vocês.\n\nEu não vejo a hora de isso deixar de ser apenas imaginação.\n\nPorque não é apenas um sonho.\n\nNão é apenas um desejo.\n\nÉ a vida que eu quero construir ao lado de vocês.\n\nUma vida com abraços de verdade.\n\nCom beijos de boa noite.\n\nCom risadas dentro de casa.\n\nCom o Bernardo correndo pela sala enquanto nós dois damos risada.\n\nÉ essa vida simples que eu imagino todos os dias.\n\nE espero, do fundo do meu coração, que um dia ela deixe de existir apenas na minha imaginação e se torne a nossa realidade.',
        imageSrc: '/img/4m.png',
      },
      {
        title: 'Porque eu nunca deixei de imaginar nós dois',
        content: 'Sempre que eu imaginava como seria minha vida no futuro, você, Amanda, e o Bernardo estavam presentes nela.\n\nNunca consegui imaginar meu futuro sem vocês.\n\nEu imaginava você chegando em casa cansada do trabalho. Eu iria te abraçar bem forte e dizer:\n\n"Bem-vinda de volta, amor. Estávamos morrendo de saudade de você."\n\nDepois nós dois conversaríamos sobre como foi o dia um do outro, enquanto o Bernardo estaria correndo pela casa, fazendo bagunça e enchendo nosso lar de alegria.\n\nEu imaginava nós três assistindo filmes juntinhos, vivendo momentos simples em família e criando lembranças que ficariam para sempre na cabecinha do nosso precioso Tutu.\n\nTambém imaginava um domingo qualquer.\n\nEu e o Tutu cuidando da carne do churrasco, enquanto você fazia o arroz.\n\nSó que, na verdade, a gente estaria era toda hora beliscando a carne escondido, morrendo de fome... kkkkk.\n\nClaro, sem deixar a mamãe descobrir, senão ela ia chamar nós dois de gulosos.\n\nSão cenas simples.\n\nMas são justamente essas cenas que eu mais sonho em viver.\n\nFoi então que eu percebi uma coisa.\n\nEu nunca sonhei com uma vida perfeita.\n\nÉ claro que eu quero trabalhar, crescer e dar uma vida confortável para nossa família.\n\nMas de que adiantaria conquistar tudo isso se eu não pudesse dividir com as pessoas que mais amo?\n\nPara mim, a maior riqueza nunca foi uma casa grande ou muito dinheiro.\n\nA minha maior riqueza sempre foi imaginar vocês dois ao meu lado.\n\nPorque vocês são os dois maiores presentes que Deus colocou na minha vida.\n\nE é com vocês que eu quero construir todas as lembranças que, por enquanto, só existem na minha imaginação.',
        imageSrc: '/img/5m.png',
      },
      {
        content: 'Depois de tudo isso, eu entendi que o amor não é medido pelo tempo, pela distância ou pela facilidade da caminhada.\n\nEle é medido pelas escolhas que fazemos todos os dias.\n\nE, mesmo depois de tudo o que vivemos, se alguém me perguntasse:\n\n"Por que você continuou escolhendo ela?"\n\nMinha resposta continuaria sendo a mesma.\n\nPorque, quando eu olho para o futuro, não consigo imaginar uma versão feliz da minha vida sem você e o Bernardo fazendo parte dela.\n\nVocês são o meu lar, mesmo antes de termos uma casa.\n\nE enquanto esse dia não chega, cada mês que passa e cada cadeado que se abre me aproxima um pouco mais da vida que eu sonho construir ao lado de vocês.',
        imageSrc: '/img/6m.png',
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

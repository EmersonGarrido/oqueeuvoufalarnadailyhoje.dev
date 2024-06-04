/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const phraseParts = {
  start: [
    "Estou esperando o unicornio da equipe de QA para aprovar",
    "Tive um problema inesperado com a máquina de café",
    "O build quebrou depois que tentei rodar em um micro-ondas",
    "A integração com o sistema de teletransporte está complicada",
    "Estou aguardando o mercúrio retrógrado passar",
    "Precisei ajudar um pato a atravessar a rua",
    "O deploy automático falhou após a invasão de alienígenas",
    "Fiz algumas alterações no código enquanto dormia",
    "O problema é que o meu computador decidiu tirar férias",
    "A documentação foi escrita em élfico e estou tentando traduzir",
    "O teste de integração falhou devido a interferências solares",
    "Estava em uma call importante com o Batman",
    "Estou refatorando o código para se alinhar com as fases da lua",
    "Fiquei preso em um loop infinito de procrastinação",
    "O sistema de autenticação agora requer reconhecimento facial de cães",
    "Precisei fazer um rollback porque o futuro não parecia promissor",
    "Houve um problema com a Matrix",
    "O serviço de terceiros está sendo controlado pelo Thanos",
    "Estou analisando um bug que só acontece em Marte",
    "Precisava ajustar a conexão com o oráculo de Delfos",
    "A equipe de QA está ocupada com um unicórnio",
    "Minha máquina de café entrou em greve",
    "O micro-ondas começou a rodar builds sozinho",
    "O teletransporte está fora de serviço",
    "Mercúrio retrógrado afetou meu código",
    "Ajudei um pato a atravessar a rua e me atrasei",
    "Alienígenas interromperam o deploy",
    "Codifiquei enquanto sonhava",
    "Meu computador está de férias",
    "Estou traduzindo documentação em élfico",
    "Interferências solares quebraram a integração",
    "Batman precisou de ajuda em uma call",
    "Refatorei o código conforme as fases da lua",
    "Procrastinei em um loop infinito",
    "O sistema de autenticação requer reconhecimento facial de cães",
    "Fiz rollback por causa de um futuro incerto",
    "A Matrix apresentou problemas",
    "Thanos está controlando o serviço de terceiros",
    "Estou debugando um bug que só aparece em Marte",
    "Ajustei a conexão com o oráculo de Delfos",
    "O servidor foi substituído por um liquidificador",
    "O servidor virou um meme",
    "O bug está escondido nas sombras",
    "A resposta está em um pergaminho antigo",
    "Os testes resolveram se rebelar",
    "A ligação caiu por causa do sinal da Batcaverna",
    "O código está em harmonia com Júpiter",
    "Me perdi no GitHub",
    "A autenticação só funciona com um sorriso",
    "O passado interfere no código",
    "O glitch na Matrix persiste",
    "Thanos não está colaborando",
    "A gravidade marciana afeta o código",
    "Consultando a sabedoria antiga",
    "A equipe de QA está em missão especial",
    "A máquina de café está fora de serviço",
    "O micro-ondas virou uma estação de build",
    "O teletransporte está com defeito",
    "Mercúrio retrógrado causou problemas",
    "Ajudei um pato e me atrasei",
    "Alienígenas interferiram no deploy",
    "Alterei o código enquanto dormia",
    "Meu computador entrou em modo férias",
    "Estou traduzindo documentos élficos",
    "Interferências solares afetaram os testes",
    "Batman precisou de ajuda",
    "Refatorei o código conforme a lua",
    "Fiquei preso em procrastinação",
    "Autenticação facial de cães é necessária",
    "Fiz rollback devido ao futuro incerto",
    "Problemas na Matrix",
    "Thanos está controlando o serviço",
    "Debugando bug de Marte",
    "Ajustando conexão com Delfos",
    "QA está ocupado com unicórnios",
    "Máquina de café quebrou",
    "Micro-ondas virou servidor",
    "Teletransporte está quebrado",
    "Mercúrio retrógrado causou erro",
    "Ajudei pato a atravessar",
    "Alienígenas atrapalharam deploy",
    "Codifiquei dormindo",
    "Computador entrou de férias",
    "Traduzindo élfico",
    "Interferência solar afetou teste",
    "Batman chamou para call",
    "Código conforme fases da lua",
    "Procrastinei infinito",
    "Reconhecimento facial de cães",
    "Rollback devido ao futuro",
    "Problema na Matrix",
    "Thanos controla serviço",
    "Bug em Marte",
    "Conexão com Delfos",
    "Unicórnio da QA",
    "Máquina de café falhou",
    "Servidor liquidificador",
    "Teletransporte complicado",
    "Mercúrio retrógrado",
    "Pato na rua",
    "Deploy falhou",
    "Código dormindo",
    "Computador férias",
    "Traduzir élfico",
    "Teste solar",
    "Call Batman",
    "Código lua",
    "Loop procrastinação",
    "Autenticação cães",
    "Rollback futuro",
    "Matrix problema",
    "Thanos serviço",
    "Bug Marte",
    "Ajustar Delfos",
  ],
  middle: [
    "porque o feedback do cliente dizia que o botão era muito redondo.",
    "devido a uma falha no sistema de previsão de catástrofes.",
    "e estou tentando consertar com fita adesiva.",
    "mas a API decidiu que hoje é seu dia de folga.",
    "já que a revisão do código foi feita por um papagaio.",
    "porque um colega trocou o servidor por um liquidificador.",
    "mas o servidor decidiu virar um meme.",
    "e ainda estou tentando descobrir o que fiz.",
    "porque o bug está se escondendo nas sombras.",
    "e a resposta está em um pergaminho antigo.",
    "porque os testes resolveram se rebelar.",
    "mas a ligação caiu porque o sinal da Batcaverna é fraco.",
    "e agora o código está em harmonia com Júpiter.",
    "porque me perdi no GitHub.",
    "e agora só autentica com um sorriso.",
    "mas o passado insiste em interferir.",
    "porque o glitch na Matrix é persistente.",
    "mas Thanos não está colaborando.",
    "porque a gravidade marciana afeta o código.",
    "para que a sabedoria antiga possa iluminar nosso caminho.",
    "porque o unicórnio ainda não terminou a aprovação.",
    "devido a uma falha catastrófica na máquina de café.",
    "e estou tentando consertar com chiclete.",
    "mas a API está de mau humor hoje.",
    "já que o papagaio fez uma revisão minuciosa.",
    "porque o liquidificador não roda código muito bem.",
    "mas o servidor virou uma piada na internet.",
    "e estou tentando lembrar o que fiz ontem.",
    "porque o bug se escondeu em algum lugar profundo.",
    "e a resposta está em um pergaminho milenar.",
    "porque os testes resolveram fazer greve.",
    "mas o sinal da Batcaverna não ajuda muito.",
    "e agora o código está em sintonia com Saturno.",
    "porque me perdi navegando no GitHub.",
    "e só autentica com reconhecimento facial.",
    "mas o passado continua influenciando o presente.",
    "porque a falha na Matrix é persistente.",
    "mas Thanos está dificultando as coisas.",
    "porque a gravidade de Marte está complicada.",
    "para que possamos seguir a sabedoria dos antigos.",
    "porque o botão estava muito oval.",
    "devido a uma falha no sistema de alarme.",
    "e estou tentando consertar com supercola.",
    "mas a API resolveu tirar férias.",
    "já que o papagaio aprovou todas as mudanças.",
    "porque o liquidificador não compila código.",
    "mas o servidor virou uma sensação na web.",
    "e ainda estou tentando resolver o mistério.",
    "porque o bug está camuflado no sistema.",
    "e a resposta está em um manuscrito antigo.",
    "porque os testes decidiram não cooperar.",
    "mas a ligação caiu devido a interferências.",
    "e agora o código está alinhado com Vênus.",
    "porque me perdi nos repositórios do GitHub.",
    "e agora só autentica com identificação ocular.",
    "mas o passado teima em retornar.",
    "porque o erro na Matrix continua.",
    "mas Thanos não quer colaborar.",
    "porque a gravidade marciana está estranha.",
    "para que a sabedoria ancestral nos guie.",
    "porque o feedback dizia que o botão era quadrado.",
    "devido a um problema no sistema de alertas.",
    "e estou tentando consertar com clips.",
    "mas a API resolveu tirar um dia de folga.",
    "já que o papagaio fez a revisão final.",
    "porque o liquidificador não processa código.",
    "mas o servidor virou uma piada viral.",
    "e ainda estou tentando encontrar o bug.",
    "porque o bug está escondido no código.",
    "e a resposta está em um texto antigo.",
    "porque os testes resolveram não passar.",
    "mas a ligação caiu devido ao sinal fraco.",
    "e agora o código está em sincronia com Marte.",
    "porque me perdi na navegação do GitHub.",
    "e agora só autentica com reconhecimento de voz.",
    "mas o passado insiste em aparecer.",
    "porque o erro na Matrix persiste.",
    "mas Thanos não está colaborando.",
    "porque a gravidade de Marte está anômala.",
    "para que possamos seguir a sabedoria antiga.",
    "porque o botão estava muito achatado.",
    "devido a um erro no sistema de alertas.",
    "e estou tentando consertar com durex.",
    "mas a API resolveu folgar hoje.",
    "já que o papagaio aprovou o código.",
    "porque o liquidificador não roda código.",
    "mas o servidor virou um meme famoso.",
    "e ainda estou tentando desvendar o problema.",
    "porque o bug está escondido no sistema.",
    "e a resposta está em um velho manuscrito.",
    "porque os testes resolveram falhar.",
    "mas a ligação caiu devido a interferências.",
    "e agora o código está alinhado com Saturno.",
    "porque me perdi nos repositórios.",
    "e agora só autentica com iris.",
    "mas o passado continua voltando.",
    "porque a falha na Matrix permanece.",
    "mas Thanos está dificultando.",
    "porque a gravidade marciana está estranha.",
    "para que a sabedoria dos antigos nos guie.",
  ],
  end: [
    "Mas diante disto, estou fazendo o melhor para a empresa, deixando meu legado como desenvolvedor.",
    "Estou comprometido em encontrar a melhor solução para a equipe.",
    "Continuo focado em entregar o melhor resultado possível.",
    "Estou trabalhando duro para garantir que isso não aconteça novamente.",
    "Minha prioridade é resolver esse problema e seguir em frente.",
    "Estou dedicando meu tempo para resolver isso da melhor forma possível.",
    "Estou determinado a superar este desafio para o sucesso do projeto.",
    "Estou empenhado em aprender com essa experiência e melhorar continuamente.",
    "Vou garantir que isso não cause mais atrasos no projeto.",
    "Estou totalmente focado em resolver isso e continuar contribuindo para o time.",
    "Estou buscando maneiras inovadoras de resolver o problema.",
    "Meu foco é encontrar uma solução sustentável.",
    "Estou trabalhando em colaboração com a equipe para resolver isso.",
    "Meu objetivo é evitar que isso ocorra novamente.",
    "Estou aplicando as melhores práticas para solucionar o problema.",
    "Estou determinado a melhorar a eficiência do código.",
    "Estou investindo tempo em testes para garantir a qualidade.",
    "Meu compromisso é com a excelência e a melhoria contínua.",
    "Estou dedicado a aprimorar nosso processo de desenvolvimento.",
    "Estou focado em soluções de longo prazo para evitar futuros problemas.",
    "Estou desenvolvendo estratégias para prevenir ocorrências similares.",
    "Estou empenhado em encontrar uma resolução rápida e eficaz.",
    "Estou trabalhando para garantir a estabilidade do sistema.",
    "Estou comprometido em oferecer suporte contínuo à equipe.",
    "Estou revisando o código para identificar possíveis falhas.",
    "Estou analisando todos os aspectos do problema para encontrar a melhor solução.",
    "Estou colaborando com outros desenvolvedores para resolver isso.",
    "Estou priorizando a correção desse problema para evitar impactos futuros.",
    "Estou buscando formas de otimizar o desempenho do sistema.",
    "Estou empenhado em garantir que nossa plataforma seja robusta e confiável.",
    "Estou trabalhando para minimizar qualquer interrupção no serviço.",
    "Estou determinado a resolver isso o mais rápido possível.",
    "Estou comprometido em aprender com esse incidente e melhorar.",
    "Estou dedicando esforços para implementar melhorias preventivas.",
    "Estou focado em entregar um produto de alta qualidade.",
    "Estou aplicando meu conhecimento e experiência para resolver isso.",
    "Estou comprometido com a transparência e a comunicação clara com a equipe.",
    "Estou trabalhando para fortalecer nossas práticas de desenvolvimento.",
    "Estou investindo tempo em revisar e melhorar nosso código.",
    "Estou focado em encontrar uma solução eficiente e eficaz.",
    "Estou comprometido em garantir a satisfação do cliente.",
    "Estou trabalhando para garantir que nossa infraestrutura seja resiliente.",
    "Estou determinado a garantir a continuidade do projeto.",
    "Estou colaborando para implementar as melhores soluções técnicas.",
    "Estou empenhado em garantir que nosso sistema seja seguro e confiável.",
    "Estou trabalhando para garantir que nossos processos sejam ágeis e eficientes.",
    "Estou focado em entregar resultados que superem as expectativas.",
    "Estou comprometido em manter a qualidade e a integridade do nosso código.",
    "Estou trabalhando para implementar soluções que previnam problemas futuros.",
    "Estou determinado a garantir que nossa plataforma seja escalável.",
    "Estou empenhado em garantir que nosso sistema atenda às necessidades dos usuários.",
    "Estou focado em encontrar soluções inovadoras para nossos desafios.",
    "Estou comprometido em garantir que nossa equipe tenha as ferramentas necessárias para o sucesso.",
    "Estou trabalhando para garantir que nosso produto seja fácil de usar e eficiente.",
    "Estou dedicado a melhorar continuamente nossa abordagem de desenvolvimento.",
    "Estou focado em resolver esse problema de maneira definitiva.",
    "Estou empenhado em garantir que nossa solução seja sustentável a longo prazo.",
    "Estou trabalhando para garantir que nosso sistema seja flexível e adaptável.",
    "Estou comprometido em garantir que nosso código seja limpo e bem documentado.",
    "Estou determinado a garantir que nossa plataforma ofereça uma excelente experiência ao usuário.",
    "Estou colaborando com a equipe para implementar melhorias contínuas.",
    "Estou empenhado em garantir que nosso sistema seja eficiente e performático.",
    "Estou focado em entregar uma solução que atenda às expectativas de todos.",
    "Estou comprometido em garantir que nosso desenvolvimento seja ágil e responsivo.",
    "Estou trabalhando para garantir que nossa infraestrutura suporte o crescimento futuro.",
    "Estou determinado a encontrar a melhor solução para esse problema.",
    "Estou empenhado em garantir que nossa plataforma seja confiável e estável.",
    "Estou focado em entregar uma solução que seja fácil de manter.",
    "Estou comprometido em garantir que nosso código seja resiliente e robusto.",
    "Estou trabalhando para garantir que nossa abordagem de desenvolvimento seja eficiente.",
    "Estou determinado a garantir que nosso produto seja de alta qualidade.",
    "Estou empenhado em garantir que nossa solução seja escalável.",
    "Estou focado em entregar uma solução que seja sustentável.",
    "Estou comprometido em garantir que nosso sistema seja seguro e protegido.",
    "Estou trabalhando para garantir que nossa plataforma seja flexível e adaptável.",
    "Estou determinado a encontrar a solução mais eficaz.",
    "Estou empenhado em garantir que nosso desenvolvimento seja ágil.",
    "Estou focado em entregar resultados que superem as expectativas.",
    "Estou comprometido em garantir que nosso sistema seja robusto e confiável.",
    "Estou trabalhando para garantir que nossa infraestrutura seja resiliente.",
    "Estou determinado a garantir a continuidade do projeto.",
    "Estou empenhado em garantir que nossa solução seja inovadora.",
    "Estou focado em entregar uma solução eficiente e eficaz.",
    "Estou comprometido em garantir a satisfação do cliente.",
    "Estou trabalhando para garantir que nosso produto seja fácil de usar.",
    "Estou determinado a garantir que nossa abordagem de desenvolvimento seja eficiente.",
    "Estou empenhado em garantir que nosso sistema atenda às necessidades dos usuários.",
    "Estou focado em encontrar soluções inovadoras para nossos desafios.",
    "Estou comprometido em garantir que nossa equipe tenha as ferramentas necessárias.",
    "Estou trabalhando para garantir que nosso produto seja eficiente.",
    "Estou determinado a garantir a excelência em nosso código.",
    "Estou empenhado em garantir que nossa plataforma seja confiável.",
    "Estou focado em entregar uma solução que atenda às expectativas.",
    "Estou comprometido em garantir que nosso desenvolvimento seja responsivo.",
    "Estou trabalhando para garantir que nossa infraestrutura suporte o crescimento.",
    "Estou determinado a encontrar a melhor solução.",
    "Estou empenhado em garantir que nossa plataforma seja estável.",
    "Estou focado em entregar uma solução de fácil manutenção.",
    "Estou comprometido em garantir que nosso código seja robusto.",
  ],
};

const getRandomPart = (parts: string[]): string => {
  const randomIndex = Math.floor(Math.random() * parts.length);
  return parts[randomIndex];
};

const generateRandomPhrase = () => {
  const start = getRandomPart(phraseParts.start);
  const middle = getRandomPart(phraseParts.middle);
  const end = getRandomPart(phraseParts.end);
  return `${start} ${middle} ${end}`;
};

function App() {
  const [phrase, setPhrase] = useState("");

  const handleGenerate = () => {
    setPhrase(generateRandomPhrase());
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phrase);
  };

  const shareImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 800;
    const context = canvas.getContext("2d");

    if (context) {
      context.fillStyle = "#1e1e1e";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "#2a2a2a";
      context.font = "20px Arial";
      context.textAlign = "left";
      context.textBaseline = "top";

      const icons = ["💻", "🖥️", "👨‍💻", "👩‍💻", "🔧", "⚙️"];
      icons.forEach((icon, index) => {
        context.fillText(icon, 10 + index * 60, 10);
      });

      context.fillStyle = "white";
      context.font = "24px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";

      const wrapText = (
        context: CanvasRenderingContext2D,
        text: string,
        x: number,
        y: number,
        maxWidth: number,
        lineHeight: number
      ) => {
        const words = text.split(" ");
        let line = "";
        const lines: string[] = [];

        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + " ";
          const metrics = context.measureText(testLine);
          const testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            lines.push(line);
            line = words[n] + " ";
          } else {
            line = testLine;
          }
        }
        lines.push(line);

        for (let k = 0; k < lines.length; k++) {
          context.fillText(lines[k], x, y + k * lineHeight);
        }
      };

      const maxWidth = 700;
      const lineHeight = 30;
      const x = canvas.width / 2;
      const y = canvas.height / 2 - lineHeight * 2;

      wrapText(context, phrase, x, y, maxWidth, lineHeight);

      context.font = "20px Arial";
      context.fillText(
        "OQueFalarNaDailyHoje.dev",
        canvas.width / 2,
        canvas.height - 40
      );

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "daily-phrase.png";
          link.click();
          URL.revokeObjectURL(url);
        }
      });
    }
  };

  return (
    <div className="bg-[#1e1e1e] h-screen w-full flex-col flex items-center justify-start">
      <div className="bg-[#2a2a2a] border-b border-[#3b3b3b] w-full h-16 flex items-center justify-center">
        <h1 className=" text-[#adadad] font-light text-center">
          O Que Falar Na <b className="text-white">DailyHoje</b> .dev
        </h1>
      </div>
      <div className="mt-20">
        <div className="bg-[#2a2a2a] border border-[#3b3b3b] h-20 max-w-96 w-full min-h-[300px] p-4 rounded-md gap-3 shadow-black/50 shadow-md flex items-center justify-center flex-col">
          <div>
            <h1 className="text-white text-center text-lg">
              Diga adeus às desculpas esfarrapadas! <br />
              Gere <b>frases incríveis</b> para suas dailies e <b>brilhe</b> em
              suas reuniões.
            </h1>
          </div>

          <button
            className="bg-[#ffae2f] h-10 w-full rounded-md p-4 flex items-center justify-center text-white"
            onClick={handleGenerate}
          >
            Gerar
          </button>
        </div>
        {phrase && (
          <>
            <div className="text-black mt-4 text-center bg-white rounded-md flex gap-10 max-w-96 p-4 w-full flex-col items-center">
              {phrase}
            </div>
            <button
              className="bg-[#373737] mt-5 h-10 max-w-96 w-full flex items-center justify-center rounded-md p-2 text-white"
              onClick={copyToClipboard}
            >
              Copiar
            </button>
            <button
              className="bg-[#4CAF50] mt-2 h-10 max-w-96 w-full flex items-center justify-center rounded-md p-2 text-white"
              onClick={shareImage}
            >
              Compartilhar como Imagem
            </button>
          </>
        )}

        <div className="text-[#adadad] text-center text-xs font-light mt-10">
          Projeto open-source disponível no{" "}
          <a href="https://github.com/EmersonGarrido/oqueeuvoufalarnadailyhoje.dev">
            Github Emerson Garrido
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

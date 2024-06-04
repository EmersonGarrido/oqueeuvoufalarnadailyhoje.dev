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

/**
 * The main application component that generates random phrases for daily stand-up meetings.
 * It provides functionality to generate a new phrase and copy it to the clipboard.
 */
function App() {
  const [phrase, setPhrase] = useState("");

  /**
   * Generates a new random phrase and updates the state.
   */
  const handleGenerate = () => {
    setPhrase(generateRandomPhrase());
  };

  /**
   * Copies the current phrase to the clipboard.
   */
  const copyToClipboard = () => {
    navigator.clipboard.writeText(phrase);
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

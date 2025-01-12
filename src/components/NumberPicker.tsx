import { useState } from 'react';
import styles from './NumberPicker.module.css';

type BingoColumn = 'B' | 'I' | 'N' | 'G' | 'O';

export function NumberPicker() {
  const [number, setNumber] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [drawnNumbers, setDrawnNumbers] = useState<{
    B: number[];
    I: number[];
    N: number[];
    G: number[];
    O: number[];
  }>({
    B: [],
    I: [],
    N: [],
    G: [],
    O: [],
  });

  // Adicionando estado para os últimos 10 números sorteados
  const [lastDrawnNumbers, setLastDrawnNumbers] = useState<number[]>([]);

  const getLetterForNumber = (num: number): BingoColumn => {
    if (num >= 1 && num <= 15) return 'B';
    if (num >= 16 && num <= 30) return 'I';
    if (num >= 31 && num <= 45) return 'N';
    if (num >= 46 && num <= 60) return 'G';
    if (num >= 61 && num <= 75) return 'O';
    return 'B';
  };

  const sortNumber = (): void => {
    if (Object.values(drawnNumbers).flat().length === 75) {
      alert('Todos os números já foram sorteados!');
      return;
    }

    setNumber(null);
    setIsSpinning(true);

    setTimeout(() => {
      let sortedNumber = Math.floor(Math.random() * 75) + 1;

      while (Object.values(drawnNumbers).flat().includes(sortedNumber)) {
        sortedNumber = Math.floor(Math.random() * 75) + 1;
      }

      const letra: BingoColumn = getLetterForNumber(sortedNumber);

      setDrawnNumbers(prevNumbers => ({
        ...prevNumbers,
        [letra]: [...prevNumbers[letra], sortedNumber],
      }));

      // Atualizando os últimos 10 números sorteados
      setLastDrawnNumbers(prev => {
        const newNumbers = [sortedNumber, ...prev];
        if (newNumbers.length > 10) {
          newNumbers.pop(); // Mantém apenas os últimos 10 números
        }
        return newNumbers;
      });

      setNumber(sortedNumber);
      setIsSpinning(false);
    }, 1000);
  };

  const resetGame = () => {
    setNumber(null);
    setIsSpinning(false);
    setDrawnNumbers({
      B: [],
      I: [],
      N: [],
      G: [],
      O: [],
    });
    setLastDrawnNumbers([]); // Limpar os últimos números sorteados
  };

  return (
    <div className={styles.container}>
      {/* Botão de Resetar Jogo */}
      <button onClick={resetGame} className={styles.resetButton}>
        Resetar Jogo
      </button>

      <button onClick={sortNumber} className={styles.button}>
        Sortear Número
      </button>

      {/* Animação da roleta */}
      <div className={`${styles.roulette} ${isSpinning ? styles.spinning : ''}`}>
        {/* Bola preta onde o número será exibido */}
        <div className={styles.innerBall}>
          <div className={styles.numberDisplay}>
            {/* Exibe a letra acima e o número abaixo */}
            {isSpinning ? (
              <span className={styles.questionMark}></span>
            ) : (
              <>
                <div className={styles.letter}>{getLetterForNumber(number!)}</div>
                <div className={styles.number}>{number}</div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Tabela com os números sorteados */}
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>B</th>
              <th>I</th>
              <th>N</th>
              <th>G</th>
              <th>O</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {drawnNumbers.B.map((num, index) => (
                  <div key={index}>{num}</div>
                ))}
              </td>
              <td>
                {drawnNumbers.I.map((num, index) => (
                  <div key={index}>{num}</div>
                ))}
              </td>
              <td>
                {drawnNumbers.N.map((num, index) => (
                  <div key={index}>{num}</div>
                ))}
              </td>
              <td>
                {drawnNumbers.G.map((num, index) => (
                  <div key={index}>{num}</div>
                ))}
              </td>
              <td>
                {drawnNumbers.O.map((num, index) => (
                  <div key={index}>{num}</div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tabela para exibir os últimos 10 números sorteados em uma única linha */}
      <div className={styles.lastNumbersTable}>
        {/* Exibe o título somente se houver números sorteados */}
        {lastDrawnNumbers.length > 0 && (
          <h3>Últimos Números Sorteados</h3>
        )}
        <div className={styles.lastNumbersRow}>
          {lastDrawnNumbers.map((num, index) => (
            <div key={index} className={styles.lastNumber}>{num}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

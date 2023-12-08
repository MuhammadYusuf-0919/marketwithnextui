export const hightLight = (main: string, span?: string) => {
  return main.split(' ').map((word, index) => {
    const isKeyword = span?.split(' ').includes(word);
    return <span key={index} className={isKeyword ? 'text-green' : ''}>{word} {index < main.split(' ').length - 1 && ' '}</span>;
  });
}
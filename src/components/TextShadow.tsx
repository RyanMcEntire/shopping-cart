const longShadow = (color: string) => {
  let val = `0px 0px ${color}`;
  const total = 1000;

  for (let i = 0; i <= total; i += 1) {
    val += `, ${i}px ${i}px ${color}`;
  }
  return val;
};

type TextShadowProps = {
  letter: string;
  shadowColor: string;
};
const TextShadow: React.FC<TextShadowProps> = ({ letter, shadowColor }) => {
  const style = {
    textShadow: longShadow(shadowColor),
  };
  return <div style={style}>{letter}</div>;
};

export default TextShadow;

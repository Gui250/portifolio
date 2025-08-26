type TypographyH1Props = {
  text: string;
};

export function TypographyH1({ text }: TypographyH1Props) {
  return (
    <h1 className="scroll-m-20 text-center text-xl font-extrabold tracking-tight text-balance">
      {text}
    </h1>
  );
}

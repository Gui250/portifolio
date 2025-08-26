type TecnologiesProps = {
  link: string;
  description: string;
};

export function Tecnologies({ link, description }: TecnologiesProps) {
  return <img src={link} alt={description} />;
}

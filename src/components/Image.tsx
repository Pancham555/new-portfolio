import NextImage, { ImageProps } from "next/image";

const Image = ({ ...rest }: ImageProps) => (
  <NextImage {...rest} width={1000} height={800} className="w-full" />
);

export default Image;

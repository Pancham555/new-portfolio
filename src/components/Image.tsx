import NextImage, { ImageProps } from "next/image";

const Image = ({ ...rest }: ImageProps) => (
  <NextImage
    {...rest}
    width={1000}
    height={800}
    className="w-full h-[28rem] object-cover my-5"
  />
);

export default Image;

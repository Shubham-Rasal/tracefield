import Image from "next/image";

export function ChartFrame({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="overflow-hidden border border-border-light bg-black">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full bg-black"
        priority={false}
      />
      <figcaption className="border-t border-border-light bg-black px-4 py-3 text-sm text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

import Image from 'next/image';
import Link from 'next/link';

const Logo = ({
  href = '',
  src = '',
}: {
  href: string;
  src: string;
}) => (
  <Link href={href}>
    <Image alt='Medicare Logo' height={30} src={src} width={60} />
  </Link>
);

export default Logo;

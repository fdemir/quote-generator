import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <Link href="/" className="item">
          <div className="random">
            <span>random</span>
            <Image src="/icons/shuffle.svg" width="18" height="18" />
          </div>
        </Link>
      </header>
      <style jsx>{`
        header {
          height: 60px;
          width: 100%;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: flex-end;

          .random {
            display: flex;
            align-items: center;
            cursor: pointer;

            span {
              margin-right: 10px;
            }
          }
        }
      `}</style>
    </>
  );
}

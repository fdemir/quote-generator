export default function Quote({ text }) {
  return (
    <>
      <style lang="scss" jsx>{`
        h1 {
          font-weight: 500;
          color: #000;
          line-height: 43px;
          font-size: 30px;
          padding: 10px 0;
          margin-bottom: 80px;
          display: flex;
        }

        h1:before {
          background: #f7df94;
          content: "";
          width: 8px;
          margin-right: 50px;
          display: flex;
          flex-shrink: 0;
        }
      `}</style>
      <h1>{text}</h1>
    </>
  );
}

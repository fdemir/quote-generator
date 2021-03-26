export default function Author({ author, category }) {
  return (
    <>
      <div className="author">
        <div>
          <h2 className="name">{author}</h2>
          <span className={"category"}>{category}</span>
        </div>
        <div></div>
      </div>
      <style jsx>{`
        .author {
          padding: 0 60px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: all 300ms ease-in-out;

          &:hover {
            background-color: #333333;
            .name {
              color: #f2f2f2;
            }
          }

          .name {
            margin-bottom: 5px;
          }

          .category {
            color: #828282;
          }
        }
      `}</style>
    </>
  );
}

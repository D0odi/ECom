import { InputNumber } from "antd";

const ShoppingCartCard = ({ cartUpdate, product }) => {
  return (
    <div
      key={product.id}
      style={{
        flex: 1,
        flexDirection: "row",
        display: "flex",
        height: "70px",
        marginBottom: 10,
      }}
    >
      <div
        style={{
          flex: 3,
          justifyContent: "center",
          alignContent: "end",
          overflow: "hidden",
        }}
      >
        <img
          src={product.thumbnail}
          style={{
            height: 50,
          }}
        />
      </div>
      <div
        style={{
          marginLeft: 10,
          display: "flex",
          flexDirection: "column",
          flex: 5,
          paddingRight: 20,
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        <h3
          style={{
            margin: 0,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {product.title}
        </h3>
        <h4
          style={{
            margin: 0,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {product.title}
        </h4>
        <p
          style={{
            margin: 0,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          ${product.price}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <InputNumber
          size="medium"
          defaultValue={1}
          min={0}
          onChange={(e) => cartUpdate(product.id, e)}
        />
      </div>
    </div>
  );
};

export default ShoppingCartCard;

import { Paper } from "@mui/material";

const Item = ({ index, item }: { index: number; item: any }) => {
  return (
    <Paper>
      <img
        key={index}
        src={item.url}
        alt="Slide"
        style={{ width: "100%", height: "50vh" }}
      />
    </Paper>
  );
};

export default Item;

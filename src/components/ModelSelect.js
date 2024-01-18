import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

export default function ModelSelect() {
  return (
    <Select defaultValue="Model1">
      <Option value="Model1">Model1</Option>
      <Option value="Model2">Model2</Option>
    </Select>
  );
}

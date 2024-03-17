import { PartsTitle } from "./PartsTitle";
import "./CommonPartsStyle.css";

const SelectParts = (props: {
  itemList: number[] | string[];
  partsTitle: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const setOptions = (itemList: number[] | string[]) => {
    const showList = () => {
      return itemList.map((item, key) => {
        return <option key={item}>{item}</option>;
      });
    };
    return showList();
  };
  return (
    <div>
      <div className="partsTitle">
        <PartsTitle partsTitle={props.partsTitle} />
      </div>
      <div>
        <select
          className="selectParts"
          onChange={
            (e) => props.onChange(e.target.value)
            /*(e)=>props.updateInfo({
                            ...props.itemInfo,
                            "deviceNumber":Number(e.target.value)
                        })*/
          }
          defaultValue={"none"}
        >
          <option key="none">none</option>
          {props.itemList && setOptions(props.itemList)}
        </select>
      </div>
    </div>
  );
};

export default SelectParts;

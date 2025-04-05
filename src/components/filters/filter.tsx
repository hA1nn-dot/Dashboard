import { Select } from "antd";

interface ElementList {
    values: number,
    label: string
}

interface FilterProps {
    list: ElementList[];
  }



const Filter: React.FC<FilterProps> = ({list}) => {

    const options = list.map(item => ({
        value: item.values.toString(),
        label: item.label,
    }));

    return (
        <div>
            <Select
            defaultValue="None"
            style={{ width: 120 }}
            options={options}
          />
        </div>
    )
}

export default Filter;
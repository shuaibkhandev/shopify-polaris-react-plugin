import { ActionList, Button, Icon, Popover } from "@shopify/polaris";
import { CalendarIcon } from "@shopify/polaris-icons";
import { useCallback , useState} from "react";


const range = [
  {
    title: "Today",
    alias: "today",
    period: {
      since: "today",
      until: "today",
    },
  },
  {
    title: "Last 7 days",
    alias: "last7days",
    period: {
      since: "-7d",
      until: "-1d",
    },
  },
  {
    title: "Last 30 Days",
    alias: "last30days",
    period: {
      since: "-30d",
      until: "-1d",
    },
  },
];

const DateSelector = () => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [selectedRange, setSelectedRange] = useState(range[2].title);


  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );

  const handleRangeSelect = (selectedAlias) => {
    const selected = range.find((item) => item.alias === selectedAlias);
    console.log("Selected: ",selected);
    
    if(selected){
      setSelectedRange(selected.title)
    }
    setPopoverActive(false);
  }

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Icon source={CalendarIcon} tone="base" />
      <span>{selectedRange}</span>
    </div>
  </Button>
  );

  return (
    <div>
      <Popover
        active={popoverActive}
        activator={activator}
        autofocusTarget="first-node"
        onClose={togglePopoverActive}
      >
        <ActionList
          actionRole="menuitem"
          items={range.map((item)=> (
            {
              content : item.title,
              onAction : () => handleRangeSelect(item.alias)
            }
          ))}
        />
      </Popover>
    </div>
  );
};

export default DateSelector;

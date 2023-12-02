import { ChatIcon } from "@/icon/chaticon";
import { ChevronRightIcon } from "@/icon/chevronrighticon";
import { IconWrapper } from "@/icon/iconwrapper";
import { UsersIcon } from "@/icon/usericon";
import { Accordion, AccordionItem } from "@nextui-org/react";
import AutoCompleteInput from "../input/autocompleteinput";
import ListBox from "../list/listbox";

export default function ListAccordion() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <AutoCompleteInput />
      <Accordion
        selectionMode="multiple"
        showDivider={false}
        defaultExpandedKeys={["1", "2"]}
      >
        <AccordionItem
          key="1"
          title={<small className="text-default-500">FRIENDS</small>}
          // endContent={
          //   <div className="flex items-center gap-1 text-default-400">
          //     <span className="text-small">{12}</span>
          //     <ChevronRightIcon className="text-xl" />
          //   </div>
          // }
          disableIndicatorAnimation={true}
          indicator={({ isOpen }) =>
            isOpen ? (
              <div className="flex items-center gap-1 text-default-400">
                <span className="text-small">{12}</span>
                <ChevronRightIcon className="text-xl" />
              </div>
            ) : (
              <div className="flex items-center gap-1 text-default-400">
                <span className="text-small">{12}</span>
                <ChevronRightIcon className="text-xl" />
              </div>
            )
          }
          startContent={
            <IconWrapper className=" bg-primary/10 text-primary">
              <UsersIcon />
            </IconWrapper>
          }
        >
          <ListBox />
        </AccordionItem>
        <AccordionItem
          key="2"
          title={<small className="text-default-500">CHANNELS</small>}
          startContent={
            <IconWrapper className=" bg-secondary/10 text-secondary">
              <ChatIcon />
            </IconWrapper>
          }
        ></AccordionItem>
      </Accordion>
    </div>
  );
}

import * as TooltipUI from "@radix-ui/react-tooltip";

type Side = "top" | "right" | "bottom" | "left";

interface Props {
  title: string;
  side: Side;
  children: React.ReactNode;
}

const Tooltip = (props: Props) => {
  const { title, side, children } = props;

  return (
    <TooltipUI.Provider delayDuration={0} skipDelayDuration={0}>
      <TooltipUI.Root>
        <TooltipUI.Trigger asChild>{children}</TooltipUI.Trigger>
        <TooltipUI.Portal>
          <TooltipUI.Content
            className="bg-zinc-800 text-gray-200 dark:bg-black text-sm p-1 px-2 rounded-md z-[99999]"
            side={side}
            sideOffset={6}
            hidden={title === ""}
          >
            {title}
            <TooltipUI.Arrow />
          </TooltipUI.Content>
        </TooltipUI.Portal>
      </TooltipUI.Root>
    </TooltipUI.Provider>
  );
};

export default Tooltip;

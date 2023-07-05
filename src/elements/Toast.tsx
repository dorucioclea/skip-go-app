import { FC, Fragment } from "react";
import * as RadixToast from "@radix-ui/react-toast";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = "Uh oh! Something went wrong.";
const DEFAULT_DESCRIPTION = "There was an unexpected error. Please try again.";

const Toast: FC<Props> = ({
  open,
  setOpen,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
}) => {
  return (
    <Fragment>
      <RadixToast.Root
        className="ToastRoot bg-white rounded-md shadow p-4 border-l-8 border-rose-500 text-sm"
        open={open}
        onOpenChange={setOpen}
        duration={5000}
      >
        <RadixToast.Title className="font-bold">{title}</RadixToast.Title>
        <RadixToast.Description asChild>
          <p>{description}</p>
        </RadixToast.Description>
      </RadixToast.Root>
    </Fragment>
  );
};

export default Toast;

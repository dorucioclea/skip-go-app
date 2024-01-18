import { clsx } from "clsx";
import { ComponentProps, forwardRef } from "react";

type Props = ComponentProps<"button"> & {
  address: string;
  walletName: string;
  walletLogo?: string;
};

export const ConnectedWalletButton = forwardRef<HTMLButtonElement, Props>(
  function Component(props, ref) {
    const { address, walletLogo, walletName, className, ...rest } = props;
    return (
      <button
        className={clsx(
          "flex items-center gap-2 transition-colors focus:outline-none",
          "rounded-lg border border-neutral-200 px-2 py-1.5 hover:border-neutral-300 hover:bg-neutral-50",
          className,
        )}
        {...rest}
        ref={ref}
      >
        {walletLogo && (
          <img
            alt={walletName}
            className="h-4 w-4"
            src={walletLogo}
          />
        )}
        <span className="font-mono text-xs font-semibold tabular-nums">
          {address.slice(0, 8)}...{address.slice(-5)}
        </span>
      </button>
    );
  },
  //
);

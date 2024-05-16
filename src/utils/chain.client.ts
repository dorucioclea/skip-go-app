// importing cosmjs deps does not work in edge runtime environments

import { GasPrice } from "@cosmjs/stargate";
import { FeeAsset } from "@skip-router/core";

const CUSTOM_GAS_PRICE_CHAIN_IDS: Record<string, GasPrice> = {
  "dymension_1100-1": GasPrice.fromString("20000000000adym"),
  "carbon-1": GasPrice.fromString("100swth"),
  "akashnet-2": GasPrice.fromString("0.025uakt"),
};

export async function getChainFeeAssets(chainID: string): Promise<FeeAsset[]> {
  const response = await fetch(`/api/fee-assets/${chainID}`);
  if (!response.ok) return [];
  const feeAssets = await response.json();
  return feeAssets;
}

export async function getChainGasPrice(chainID: string): Promise<GasPrice | undefined> {
  const customGasPrice = CUSTOM_GAS_PRICE_CHAIN_IDS[chainID];
  if (customGasPrice) return customGasPrice;
  const response = await fetch(`/api/gas/${chainID}`);
  if (!response.ok) return;
  return GasPrice.fromString(await response.text());
}

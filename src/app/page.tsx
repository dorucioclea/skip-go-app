"use client";

import ChainSelect, { Chain } from "@/components/ChainSelect";
import Button from "@/components/Button";
import dynamic from "next/dynamic";
import AssetSelect, { Asset } from "@/components/AssetSelect";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ASSET_LIST = [
  {
    denom: "uosmo",
    type: "staking",
    origin_chain: "osmosis",
    origin_denom: "uosmo",
    origin_type: "staking",
    symbol: "OSMO",
    decimals: 6,
    description: "Osmosis Staking Coin",
    image: "osmosis/asset/osmo.png",
    coinGeckoId: "osmosis",
  },
  {
    denom: "uion",
    type: "native",
    origin_chain: "osmosis",
    origin_denom: "uion",
    origin_type: "native",
    symbol: "ION",
    decimals: 6,
    description: "Native Coin",
    image: "osmosis/asset/ion.png",
    coinGeckoId: "ion",
  },
  {
    denom:
      "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
    type: "ibc",
    origin_chain: "stride",
    origin_denom: "ustrd",
    origin_type: "staking",
    symbol: "STRD",
    decimals: 6,
    enable: true,
    path: "stride>osmosis",
    channel: "channel-326",
    port: "transfer",
    counter_party: {
      channel: "channel-5",
      port: "transfer",
      denom: "ustrd",
    },
    image: "stride/asset/strd.png",
    coinGeckoId: "stride",
  },
  {
    denom:
      "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901",
    type: "ibc",
    origin_chain: "stride",
    origin_denom: "stuatom",
    origin_type: "native",
    symbol: "stATOM",
    decimals: 6,
    enable: true,
    path: "stride>osmosis",
    channel: "channel-326",
    port: "transfer",
    counter_party: {
      channel: "channel-5",
      port: "transfer",
      denom: "stuatom",
    },
    image: "stride/asset/statom.png",
    coinGeckoId: "stride-staked-atom",
  },
  {
    denom:
      "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC",
    type: "ibc",
    origin_chain: "stride",
    origin_denom: "stuosmo",
    origin_type: "native",
    symbol: "stOSMO",
    decimals: 6,
    enable: true,
    path: "stride>osmosis",
    channel: "channel-326",
    port: "transfer",
    counter_party: {
      channel: "channel-5",
      port: "transfer",
      denom: "stuosmo",
    },
    image: "stride/asset/stosmo.png",
    coinGeckoId: "stride-staked-osmo",
  },
  {
    denom:
      "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
    type: "ibc",
    origin_chain: "likecoin",
    origin_denom: "nanolike",
    origin_type: "staking",
    symbol: "LIKE",
    decimals: 9,
    enable: true,
    path: "likecoin>osmosis",
    channel: "channel-53",
    port: "transfer",
    counter_party: {
      channel: "channel-3",
      port: "transfer",
      denom: "nanolike",
    },
    image: "likecoin/asset/like.png",
    coinGeckoId: "likecoin",
  },
  {
    denom:
      "ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA",
    type: "ibc",
    origin_chain: "cheqd",
    origin_denom: "ncheq",
    origin_type: "staking",
    symbol: "CHEQ",
    decimals: 9,
    enable: true,
    path: "cheqd>osmosis",
    channel: "channel-108",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "ncheq",
    },
    image: "cheqd/asset/cheq.png",
    coinGeckoId: "cheqd-network",
  },
  {
    denom:
      "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
    type: "ibc",
    origin_chain: "crypto-org",
    origin_denom: "basecro",
    origin_type: "staking",
    symbol: "CRO",
    decimals: 8,
    enable: true,
    path: "crypto-org>osmosis",
    channel: "channel-5",
    port: "transfer",
    counter_party: {
      channel: "channel-10",
      port: "transfer",
      denom: "basecro",
    },
    image: "crypto-org/asset/cro.png",
    coinGeckoId: "crypto-com-chain",
  },
  {
    denom:
      "ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3",
    type: "ibc",
    origin_chain: "carbon",
    origin_denom: "swth",
    origin_type: "staking",
    symbol: "SWTH",
    decimals: 8,
    enable: true,
    path: "carbon>osmosis",
    channel: "channel-188",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "swth",
    },
    image: "carbon/asset/swth.png",
    coinGeckoId: "switcheo",
  },
  {
    denom:
      "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4",
    type: "ibc",
    origin_chain: "bostrom",
    origin_denom: "boot",
    origin_type: "staking",
    symbol: "BOOT",
    decimals: 0,
    enable: true,
    path: "bostrom>osmosis",
    channel: "channel-95",
    port: "transfer",
    counter_party: {
      channel: "channel-2",
      port: "transfer",
      denom: "boot",
    },
    image: "bostrom/asset/boot.png",
    coinGeckoId: "bostrom",
  },
  {
    denom:
      "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
    type: "ibc",
    origin_chain: "cosmos",
    origin_denom: "uatom",
    origin_type: "staking",
    symbol: "ATOM",
    decimals: 6,
    enable: true,
    path: "cosmos>osmosis",
    channel: "channel-0",
    port: "transfer",
    counter_party: {
      channel: "channel-141",
      port: "transfer",
      denom: "uatom",
    },
    image: "cosmos/asset/atom.png",
    coinGeckoId: "cosmos",
  },
  {
    denom:
      "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
    type: "ibc",
    origin_chain: "akash",
    origin_denom: "uakt",
    origin_type: "staking",
    symbol: "AKT",
    decimals: 6,
    enable: true,
    path: "akash>osmosis",
    channel: "channel-1",
    port: "transfer",
    counter_party: {
      channel: "channel-9",
      port: "transfer",
      denom: "uakt",
    },
    image: "akash/asset/akt.png",
    coinGeckoId: "akash-network",
  },
  {
    denom:
      "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228",
    type: "ibc",
    origin_chain: "chihuahua",
    origin_denom: "uhuahua",
    origin_type: "staking",
    symbol: "HUAHUA",
    decimals: 6,
    enable: true,
    path: "chihuahua>osmosis",
    channel: "channel-113",
    port: "transfer",
    counter_party: {
      channel: "channel-7",
      port: "transfer",
      denom: "uhuahua",
    },
    image: "chihuahua/asset/huahua.png",
    coinGeckoId: "chihuahua-token",
  },
  {
    denom:
      "ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2",
    type: "ibc",
    origin_chain: "lum",
    origin_denom: "ulum",
    origin_type: "staking",
    symbol: "LUM",
    decimals: 6,
    enable: true,
    path: "lum>osmosis",
    channel: "channel-115",
    port: "transfer",
    counter_party: {
      channel: "channel-3",
      port: "transfer",
      denom: "ulum",
    },
    image: "lum/asset/lum.png",
    coinGeckoId: "lum-network",
  },
  {
    denom:
      "ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD",
    type: "ibc",
    origin_chain: "vidulum",
    origin_denom: "uvdl",
    origin_type: "staking",
    symbol: "VDL",
    decimals: 6,
    enable: true,
    path: "vidulum>osmosis",
    channel: "channel-124",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "uvdl",
    },
    image: "vidulum/asset/vdl.png",
    coinGeckoId: "vidulum",
  },
  {
    denom:
      "ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D",
    type: "ibc",
    origin_chain: "dig-chain",
    origin_denom: "udig",
    origin_type: "staking",
    symbol: "DIG",
    decimals: 6,
    enable: true,
    path: "dig-chain>osmosis",
    channel: "channel-128",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "udig",
    },
    image: "dig-chain/asset/dig.png",
    coinGeckoId: "dig-chain",
  },
  {
    denom:
      "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C",
    type: "ibc",
    origin_chain: "desmos",
    origin_denom: "udsm",
    origin_type: "staking",
    symbol: "DSM",
    decimals: 6,
    enable: true,
    path: "desmos>osmosis",
    channel: "channel-135",
    port: "transfer",
    counter_party: {
      channel: "channel-2",
      port: "transfer",
      denom: "udsm",
    },
    image: "desmos/asset/dsm.png",
    coinGeckoId: "desmos",
  },
  {
    denom:
      "ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3",
    type: "ibc",
    origin_chain: "shentu",
    origin_denom: "uctk",
    origin_type: "staking",
    symbol: "CTK",
    decimals: 6,
    enable: true,
    path: "shentu>osmosis",
    channel: "channel-146",
    port: "transfer",
    counter_party: {
      channel: "channel-8",
      port: "transfer",
      denom: "uctk",
    },
    image: "shentu/asset/ctk.png",
    coinGeckoId: "certik",
  },
  {
    denom:
      "ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE",
    type: "ibc",
    origin_chain: "band",
    origin_denom: "uband",
    origin_type: "staking",
    symbol: "BAND",
    decimals: 6,
    enable: true,
    path: "band>osmosis",
    channel: "channel-148",
    port: "transfer",
    counter_party: {
      channel: "channel-83",
      port: "transfer",
      denom: "uband",
    },
    image: "band/asset/band.png",
    coinGeckoId: "band-protocol",
  },
  {
    denom:
      "ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC",
    type: "ibc",
    origin_chain: "starname",
    origin_denom: "uiov",
    origin_type: "staking",
    symbol: "IOV",
    decimals: 6,
    enable: true,
    path: "starname>osmosis",
    channel: "channel-15",
    port: "transfer",
    counter_party: {
      channel: "channel-2",
      port: "transfer",
      denom: "uiov",
    },
    image: "starname/asset/iov.png",
    coinGeckoId: "starname",
  },
  {
    denom:
      "ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E",
    type: "ibc",
    origin_chain: "sommelier",
    origin_denom: "usomm",
    origin_type: "staking",
    symbol: "SOMM",
    decimals: 6,
    enable: true,
    path: "sommelier>osmosis",
    channel: "channel-165",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "usomm",
    },
    image: "sommelier/asset/somm.png",
    coinGeckoId: "sommelier",
  },
  {
    denom:
      "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593",
    type: "ibc",
    origin_chain: "konstellation",
    origin_denom: "udarc",
    origin_type: "staking",
    symbol: "DARC",
    decimals: 6,
    enable: true,
    path: "konstellation>osmosis",
    channel: "channel-171",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "udarc",
    },
    image: "konstellation/asset/darc.png",
    coinGeckoId: "darcmatter-coin",
  },
  {
    denom:
      "ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84",
    type: "ibc",
    origin_chain: "decentr",
    origin_denom: "udec",
    origin_type: "staking",
    symbol: "DEC",
    decimals: 6,
    enable: true,
    path: "decentr>osmosis",
    channel: "channel-181",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "udec",
    },
    image: "decentr/asset/dec.png",
    coinGeckoId: "decentr",
  },
  {
    denom:
      "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
    type: "ibc",
    origin_chain: "umee",
    origin_denom: "uumee",
    origin_type: "staking",
    symbol: "UMEE",
    decimals: 6,
    enable: true,
    path: "umee>osmosis",
    channel: "channel-184",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "uumee",
    },
    image: "umee/asset/umee.png",
    coinGeckoId: "umee",
  },
  {
    denom:
      "ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F",
    type: "ibc",
    origin_chain: "omniflix",
    origin_denom: "uflix",
    origin_type: "staking",
    symbol: "FLIX",
    decimals: 6,
    enable: true,
    path: "omniflix>osmosis",
    channel: "channel-199",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "uflix",
    },
    image: "omniflix/asset/flix.png",
    coinGeckoId: "omniflix-network",
  },
  {
    denom:
      "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
    type: "ibc",
    origin_chain: "sentinel",
    origin_denom: "udvpn",
    origin_type: "staking",
    symbol: "DVPN",
    decimals: 6,
    enable: true,
    path: "sentinel>osmosis",
    channel: "channel-2",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "udvpn",
    },
    image: "sentinel/asset/dvpn.png",
    coinGeckoId: "sentinel",
  },
  {
    denom:
      "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
    type: "ibc",
    origin_chain: "evmos",
    origin_denom: "aevmos",
    origin_type: "staking",
    symbol: "EVMOS",
    decimals: 18,
    enable: true,
    path: "evmos>osmosis",
    channel: "channel-204",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "aevmos",
    },
    image: "evmos/asset/evmos.png",
    coinGeckoId: "evmos",
  },
  {
    denom:
      "ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7",
    type: "ibc",
    origin_chain: "cerberus",
    origin_denom: "ucrbrus",
    origin_type: "staking",
    symbol: "CRBRUS",
    decimals: 6,
    enable: true,
    path: "cerberus>osmosis",
    channel: "channel-212",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "ucrbrus",
    },
    image: "cerberus/asset/crbrus.png",
    coinGeckoId: "cerberus-2",
  },
  {
    denom:
      "ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219",
    type: "ibc",
    origin_chain: "rizon",
    origin_denom: "uatolo",
    origin_type: "staking",
    symbol: "ATOLO",
    decimals: 6,
    enable: true,
    path: "rizon>osmosis",
    channel: "channel-221",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "uatolo",
    },
    image: "rizon/asset/atolo.png",
    coinGeckoId: "rizon",
  },
  {
    denom:
      "ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447",
    type: "ibc",
    origin_chain: "fetchai",
    origin_denom: "afet",
    origin_type: "staking",
    symbol: "FET",
    decimals: 18,
    enable: true,
    path: "fetchai>osmosis",
    channel: "channel-229",
    port: "transfer",
    counter_party: {
      channel: "channel-10",
      port: "transfer",
      denom: "afet",
    },
    image: "fetchai/asset/fet.png",
    coinGeckoId: "fetch-ai",
  },
  {
    denom:
      "ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC",
    type: "ibc",
    origin_chain: "asset-mantle",
    origin_denom: "umntl",
    origin_type: "staking",
    symbol: "MNTL",
    decimals: 6,
    enable: true,
    path: "asset-mantle>osmosis",
    channel: "channel-232",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "umntl",
    },
    image: "asset-mantle/asset/mntl.png",
    coinGeckoId: "assetmantle",
  },
  {
    denom:
      "ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8",
    type: "ibc",
    origin_chain: "microtick",
    origin_denom: "utick",
    origin_type: "native",
    symbol: "TICK",
    decimals: 6,
    enable: true,
    path: "microtick>osmosis",
    channel: "channel-39",
    port: "transfer",
    counter_party: {
      channel: "channel-16",
      port: "transfer",
      denom: "utick",
    },
    image: "microtick/asset/tick.png",
    coinGeckoId: "microtick",
  },
  {
    denom:
      "ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB",
    type: "ibc",
    origin_chain: "sifchain",
    origin_denom: "rowan",
    origin_type: "staking",
    symbol: "ROWAN",
    decimals: 18,
    enable: true,
    path: "sifchain>osmosis",
    channel: "channel-47",
    port: "transfer",
    counter_party: {
      channel: "channel-17",
      port: "transfer",
      denom: "rowan",
    },
    image: "sifchain/asset/rowan.png",
    coinGeckoId: "sifchain",
  },
  {
    denom:
      "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
    type: "ibc",
    origin_chain: "bitcanna",
    origin_denom: "ubcna",
    origin_type: "staking",
    symbol: "BCNA",
    decimals: 6,
    enable: true,
    path: "bitcanna>osmosis",
    channel: "channel-51",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "ubcna",
    },
    image: "bitcanna/asset/bcna.png",
    coinGeckoId: "bitcanna",
  },
  {
    denom:
      "ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0",
    type: "ibc",
    origin_chain: "iris",
    origin_denom: "uiris",
    origin_type: "staking",
    symbol: "IRIS",
    decimals: 6,
    enable: true,
    path: "iris>osmosis",
    channel: "channel-6",
    port: "transfer",
    counter_party: {
      channel: "channel-3",
      port: "transfer",
      denom: "uiris",
    },
    image: "iris/asset/iris.png",
    coinGeckoId: "iris-network",
  },
  {
    denom:
      "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
    type: "ibc",
    origin_chain: "bitsong",
    origin_denom: "ubtsg",
    origin_type: "staking",
    symbol: "BTSG",
    decimals: 6,
    enable: true,
    path: "bitsong>osmosis",
    channel: "channel-73",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "ubtsg",
    },
    image: "bitsong/asset/btsg.png",
    coinGeckoId: "bitsong",
  },
  {
    denom:
      "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
    type: "ibc",
    origin_chain: "stargaze",
    origin_denom: "ustars",
    origin_type: "staking",
    symbol: "STARS",
    decimals: 6,
    enable: true,
    path: "stargaze>osmosis",
    channel: "channel-75",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "ustars",
    },
    image: "stargaze/asset/stars.png",
    coinGeckoId: "stargaze",
  },
  {
    denom:
      "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
    type: "ibc",
    origin_chain: "ki-chain",
    origin_denom: "uxki",
    origin_type: "staking",
    symbol: "XKI",
    decimals: 6,
    enable: true,
    path: "ki-chain>osmosis",
    channel: "channel-77",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "uxki",
    },
    image: "ki-chain/asset/xki.png",
    coinGeckoId: "ki",
  },
  {
    denom:
      "ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076",
    type: "ibc",
    origin_chain: "regen",
    origin_denom: "uregen",
    origin_type: "staking",
    symbol: "REGEN",
    decimals: 6,
    enable: true,
    path: "regen>osmosis",
    channel: "channel-8",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "uregen",
    },
    image: "regen/asset/regen.png",
    coinGeckoId: "regen",
  },
  {
    denom:
      "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
    type: "ibc",
    origin_chain: "medibloc",
    origin_denom: "umed",
    origin_type: "staking",
    symbol: "MED",
    decimals: 6,
    enable: true,
    path: "medibloc>osmosis",
    channel: "channel-82",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "umed",
    },
    image: "medibloc/asset/med.png",
    coinGeckoId: "medibloc",
  },
  {
    denom:
      "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0",
    type: "ibc",
    origin_chain: "comdex",
    origin_denom: "ucmdx",
    origin_type: "staking",
    symbol: "CMDX",
    decimals: 6,
    enable: true,
    path: "comdex>osmosis",
    channel: "channel-87",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "ucmdx",
    },
    image: "comdex/asset/cmdx.png",
    coinGeckoId: "comdex",
  },
  {
    denom:
      "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
    type: "ibc",
    origin_chain: "secret",
    origin_denom: "uscrt",
    origin_type: "staking",
    symbol: "SCRT",
    decimals: 6,
    enable: true,
    path: "secret>osmosis",
    channel: "channel-88",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "uscrt",
    },
    image: "secret/asset/scrt.png",
    coinGeckoId: "secret",
  },
  {
    denom:
      "ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE",
    type: "ibc",
    origin_chain: "kujira",
    origin_denom: "ukuji",
    origin_type: "staking",
    symbol: "KUJI",
    decimals: 6,
    enable: true,
    path: "kujira>osmosis",
    channel: "channel-259",
    port: "transfer",
    counter_party: {
      channel: "channel-3",
      port: "transfer",
      denom: "ukuji",
    },
    image: "kujira/asset/kuji.png",
    coinGeckoId: "kujira",
  },
  {
    denom:
      "ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273",
    type: "ibc",
    origin_chain: "injective",
    origin_denom: "inj",
    origin_type: "staking",
    symbol: "INJ",
    decimals: 18,
    enable: true,
    path: "injective>osmosis",
    channel: "channel-122",
    port: "transfer",
    counter_party: {
      channel: "channel-8",
      port: "transfer",
      denom: "inj",
    },
    image: "injective/asset/inj.png",
    coinGeckoId: "injective-protocol",
  },
  {
    denom:
      "ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C",
    type: "ibc",
    origin_chain: "tgrade",
    origin_denom: "utgd",
    origin_type: "staking",
    symbol: "TGD",
    decimals: 6,
    enable: true,
    path: "tgrade>osmosis",
    channel: "channel-263",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "utgd",
    },
    image: "tgrade/asset/tgd.png",
    coinGeckoId: "tgrade",
  },
  {
    denom:
      "ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205",
    type: "ibc",
    origin_chain: "kava",
    origin_denom: "ukava",
    origin_type: "staking",
    symbol: "KAVA",
    decimals: 6,
    enable: true,
    path: "kava>osmosis",
    channel: "channel-143",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "ukava",
    },
    image: "kava/asset/kava.png",
    coinGeckoId: "kava",
  },
  {
    denom:
      "ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293",
    type: "ibc",
    origin_chain: "persistence",
    origin_denom: "uxprt",
    origin_type: "staking",
    symbol: "XPRT",
    decimals: 6,
    enable: true,
    path: "persistence>osmosis",
    channel: "channel-4",
    port: "transfer",
    counter_party: {
      channel: "channel-6",
      port: "transfer",
      denom: "uxprt",
    },
    image: "persistence/asset/xprt.png",
    coinGeckoId: "persistence",
  },
  {
    denom:
      "ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC",
    type: "ibc",
    origin_chain: "persistence",
    origin_denom: "stk/uatom",
    origin_type: "native",
    symbol: "stkATOM",
    decimals: 6,
    enable: true,
    path: "persistence>osmosis",
    channel: "channel-4",
    port: "transfer",
    counter_party: {
      channel: "channel-6",
      port: "transfer",
      denom: "stk/uatom",
    },
    image: "persistence/asset/stkatom.png",
    coinGeckoId: "stkatom",
  },
  {
    denom:
      "ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961",
    type: "ibc",
    origin_chain: "ethereum",
    origin_denom: "pstake",
    origin_type: "erc20",
    symbol: "pSTAKE",
    decimals: 18,
    enable: true,
    path: "ethereum>gravity-bridge>persistence>osmosis",
    channel: "channel-4",
    port: "transfer",
    counter_party: {
      channel: "channel-6",
      port: "transfer",
      denom:
        "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
    },
    image: "ethereum/asset/pstake.png",
    coinGeckoId: "pstake-finance",
    contract: "0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
  },
  {
    denom:
      "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
    type: "ibc",
    origin_chain: "emoney",
    origin_denom: "ungm",
    origin_type: "native",
    symbol: "NGM",
    decimals: 6,
    enable: true,
    path: "emoney>osmosis",
    channel: "channel-37",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "ungm",
    },
    image: "emoney//asset/ngm.png",
    coinGeckoId: "e-money",
  },
  {
    denom:
      "ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F",
    type: "ibc",
    origin_chain: "emoney",
    origin_denom: "eeur",
    origin_type: "native",
    symbol: "EEUR",
    decimals: 6,
    enable: true,
    path: "emoney>osmosis",
    channel: "channel-37",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "eeur",
    },
    image: "emoney/asset/eeur.png",
    coinGeckoId: "e-money-eur",
  },
  {
    denom:
      "ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44",
    type: "ibc",
    origin_chain: "gravity-bridge",
    origin_denom: "ugraviton",
    origin_type: "staking",
    symbol: "GRAV",
    decimals: 6,
    enable: true,
    path: "gravity-bridge>osmosis",
    channel: "channel-144",
    port: "transfer",
    counter_party: {
      channel: "channel-10",
      port: "transfer",
      denom: "ugraviton",
    },
    image: "gravity-bridge/asset/grav.png",
    coinGeckoId: "graviton",
  },
  {
    denom:
      "ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5",
    type: "ibc",
    origin_chain: "ethereum",
    origin_denom: "weth",
    origin_type: "erc20",
    symbol: "WETH",
    decimals: 18,
    enable: true,
    path: "ethereum>gravity-bridge>osmosis",
    channel: "channel-144",
    port: "transfer",
    counter_party: {
      channel: "channel-10",
      port: "transfer",
      denom: "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    },
    image: "ethereum/asset/weth.png",
    coinGeckoId: "weth",
    contract: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  },
  {
    denom:
      "ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5",
    type: "ibc",
    origin_chain: "ethereum",
    origin_denom: "dai",
    origin_type: "erc20",
    symbol: "DAI",
    decimals: 18,
    enable: true,
    path: "ethereum>gravity-bridge>osmosis",
    channel: "channel-144",
    port: "transfer",
    counter_party: {
      channel: "channel-10",
      port: "transfer",
      denom: "gravity0x6b175474e89094c44da98b954eedeac495271d0f",
    },
    image: "ethereum/asset/dai.png",
    coinGeckoId: "dai",
    contract: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  },
  {
    denom:
      "ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E",
    type: "ibc",
    origin_chain: "ethereum",
    origin_denom: "usdc",
    origin_type: "erc20",
    symbol: "USDC",
    decimals: 6,
    enable: true,
    path: "ethereum>gravity-bridge>osmosis",
    channel: "channel-144",
    port: "transfer",
    counter_party: {
      channel: "channel-10",
      port: "transfer",
      denom: "gravity0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    },
    image: "ethereum/asset/usdc.png",
    coinGeckoId: "usd-coin",
    contract: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  },
  {
    denom:
      "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
    type: "ibc",
    origin_chain: "axelar",
    origin_denom: "uaxl",
    origin_type: "staking",
    symbol: "AXL",
    decimals: 6,
    enable: true,
    path: "axelar>osmosis",
    channel: "channel-208",
    port: "transfer",
    counter_party: {
      channel: "channel-3",
      port: "transfer",
      denom: "uaxl",
    },
    image: "axelar/asset/axl.png",
    coinGeckoId: "axelar",
  },
  {
    denom:
      "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
    type: "ibc",
    origin_chain: "ethereum",
    origin_denom: "usdc",
    origin_type: "erc20",
    symbol: "axlUSDC",
    decimals: 6,
    enable: true,
    path: "ethereum>axelar>osmosis",
    channel: "channel-208",
    port: "transfer",
    counter_party: {
      channel: "channel-3",
      port: "transfer",
      denom: "uusdc",
    },
    image: "ethereum/asset/usdc.png",
    coinGeckoId: "usd-coin",
    contract: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  },
  {
    denom:
      "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
    type: "ibc",
    origin_chain: "ethereum",
    origin_denom: "dai",
    origin_type: "erc20",
    symbol: "axlDAI",
    decimals: 18,
    enable: true,
    path: "ethereum>axelar>osmosis",
    channel: "channel-208",
    port: "transfer",
    counter_party: {
      channel: "channel-3",
      port: "transfer",
      denom: "dai-wei",
    },
    image: "ethereum/asset/dai.png",
    coinGeckoId: "dai",
    contract: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  },
  {
    denom:
      "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
    type: "ibc",
    origin_chain: "ethereum",
    origin_denom: "wbtc",
    origin_type: "erc20",
    symbol: "axlWBTC",
    decimals: 8,
    enable: true,
    path: "ethereum>axelar>osmosis",
    channel: "channel-208",
    port: "transfer",
    counter_party: {
      channel: "channel-3",
      port: "transfer",
      denom: "wbtc-satoshi",
    },
    image: "ethereum/asset/wbtc.png",
    coinGeckoId: "wrapped-bitcoin",
    contract: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  },
  {
    denom:
      "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
    type: "ibc",
    origin_chain: "ethereum",
    origin_denom: "weth",
    origin_type: "erc20",
    symbol: "axlWETH",
    decimals: 18,
    enable: true,
    path: "ethereum>axelar>osmosis",
    channel: "channel-208",
    port: "transfer",
    counter_party: {
      channel: "channel-3",
      port: "transfer",
      denom: "weth-wei",
    },
    image: "ethereum/asset/weth.png",
    coinGeckoId: "weth",
    contract: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  },
  {
    denom:
      "ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049",
    type: "ibc",
    origin_chain: "ethereum",
    origin_denom: "link",
    origin_type: "erc20",
    symbol: "axlLINK",
    decimals: 18,
    enable: true,
    path: "ethereum>axelar>osmosis",
    channel: "channel-208",
    port: "transfer",
    counter_party: {
      channel: "channel-3",
      port: "transfer",
      denom: "link-wei",
    },
    image: "ethereum/asset/link.png",
    coinGeckoId: "chainlink",
    contract: "0x514910771af9ca656af840dff83e8264ecf986ca",
  },
  {
    denom:
      "ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3",
    type: "ibc",
    origin_chain: "ethereum",
    origin_denom: "mkr",
    origin_type: "erc20",
    symbol: "axlMKR",
    decimals: 18,
    enable: true,
    path: "ethereum>axelar>osmosis",
    channel: "channel-208",
    port: "transfer",
    counter_party: {
      channel: "channel-3",
      port: "transfer",
      denom: "mkr-wei",
    },
    image: "ethereum/asset/mkr.png",
    coinGeckoId: "maker",
    contract: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
  },
  {
    denom:
      "ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7",
    type: "ibc",
    origin_chain: "moonbeam",
    origin_denom: "xcdot",
    origin_type: "erc20",
    symbol: "axlDOT",
    decimals: 10,
    enable: true,
    path: "moonbeam>axelar>osmosis",
    channel: "channel-208",
    port: "transfer",
    counter_party: {
      channel: "channel-3",
      port: "transfer",
      denom: "dot-planck",
    },
    image: "moonbeam/asset/xcdot.png",
    coinGeckoId: "xcdot",
    contract: "0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080",
  },
  {
    denom:
      "ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D",
    type: "ibc",
    origin_chain: "bnb-smart-chain",
    origin_denom: "wbnb",
    origin_type: "staking",
    symbol: "axlWBNB",
    decimals: 18,
    enable: true,
    path: "bnb-smart-chain>axelar>osmosis",
    channel: "channel-208",
    port: "transfer",
    counter_party: {
      channel: "channel-3",
      port: "transfer",
      denom: "wbnb-wei",
    },
    image: "bnb-smart-chain/asset/wbnb.png",
    coinGeckoId: "binancecoin",
  },
  {
    denom:
      "ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB",
    type: "ibc",
    origin_chain: "polygon",
    origin_denom: "wmatic",
    origin_type: "erc20",
    symbol: "axlWMATIC",
    decimals: 18,
    enable: true,
    path: "polygon>axelar>osmosis",
    channel: "channel-208",
    port: "transfer",
    counter_party: {
      channel: "channel-3",
      port: "transfer",
      denom: "wmatic-wei",
    },
    image: "polygon/asset/wmatic.png",
    coinGeckoId: "wmatic",
    contract: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  },
  {
    denom:
      "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
    type: "ibc",
    origin_chain: "juno",
    origin_denom: "ujuno",
    origin_type: "staking",
    symbol: "JUNO",
    decimals: 6,
    enable: true,
    path: "juno>osmosis",
    channel: "channel-42",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "ujuno",
    },
    image: "juno/asset/juno.png",
    coinGeckoId: "juno-network",
  },
  {
    denom:
      "ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B",
    type: "ibc",
    origin_chain: "juno",
    origin_denom: "hope",
    origin_type: "cw20",
    symbol: "HOPE",
    decimals: 6,
    enable: true,
    path: "juno>osmosis",
    channel: "channel-169",
    port: "transfer",
    counter_party: {
      channel: "channel-47",
      port: "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
      denom: "juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z",
    },
    image: "juno/asset/hope.png",
    coinGeckoId: "hope-galaxy",
    contract: "juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z",
  },
  {
    denom:
      "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
    type: "ibc",
    origin_chain: "juno",
    origin_denom: "neta",
    origin_type: "cw20",
    symbol: "NETA",
    decimals: 6,
    enable: true,
    path: "juno>osmosis",
    channel: "channel-169",
    port: "transfer",
    counter_party: {
      channel: "channel-47",
      port: "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
      denom: "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
    },
    image: "juno/asset/neta.png",
    coinGeckoId: "neta",
    contract: "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
  },
  {
    denom:
      "ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6",
    type: "ibc",
    origin_chain: "juno",
    origin_denom: "marble",
    origin_type: "cw20",
    symbol: "MARBLE",
    decimals: 3,
    enable: true,
    path: "juno>osmosis",
    channel: "channel-169",
    port: "transfer",
    counter_party: {
      channel: "channel-47",
      port: "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
      denom: "juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
    },
    image: "juno/asset/marble.png",
    coinGeckoId: "marble",
    contract: "juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
  },
  {
    denom:
      "ibc/c6b6bfcb6ee49a7cab1a7e7b021de35b99d525ac660844952f0f6c78dcb2a57b",
    type: "ibc",
    origin_chain: "juno",
    origin_denom: "sejuno",
    origin_type: "cw20",
    symbol: "seJUNO",
    decimals: 6,
    enable: true,
    path: "juno>osmosis",
    channel: "channel-169",
    port: "transfer",
    counter_party: {
      channel: "channel-47",
      port: "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
      denom: "juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv",
    },
    image: "juno/asset/sejuno.png",
    coinGeckoId: "",
    contract: "juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv",
  },
  {
    denom:
      "ibc/c2df5c3949ca835b221c575625991f09bab4e48fb9c11a4ee357194f736111e3",
    type: "ibc",
    origin_chain: "juno",
    origin_denom: "bjuno",
    origin_type: "cw20",
    symbol: "bJUNO",
    decimals: 6,
    enable: true,
    path: "juno>osmosis",
    channel: "channel-169",
    port: "transfer",
    counter_party: {
      channel: "channel-47",
      port: "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
      denom: "juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3",
    },
    image: "juno/asset/bjuno.png",
    coinGeckoId: "",
    contract: "juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3",
  },
  {
    denom:
      "ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6",
    type: "ibc",
    origin_chain: "juno",
    origin_denom: "seasy",
    origin_type: "cw20",
    symbol: "SEASY",
    decimals: 6,
    enable: true,
    path: "juno>osmosis",
    channel: "channel-169",
    port: "transfer",
    counter_party: {
      channel: "channel-47",
      port: "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
      denom: "juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf",
    },
    image: "juno/asset/seasy.png",
    coinGeckoId: "",
    contract: "juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf",
  },
  {
    denom:
      "ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B",
    type: "ibc",
    origin_chain: "cudos",
    origin_denom: "acudos",
    origin_type: "staking",
    symbol: "CUDOS",
    decimals: 18,
    enable: true,
    path: "cudos>osmosis",
    channel: "channel-298",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "acudos",
    },
    image: "cudos/asset/cudos.png",
    coinGeckoId: "cudos",
  },
  {
    denom:
      "ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2",
    type: "ibc",
    origin_chain: "provenance",
    origin_denom: "nhash",
    origin_type: "staking",
    symbol: "HASH",
    decimals: 9,
    enable: true,
    path: "provenance>osmosis",
    channel: "channel-222",
    port: "transfer",
    counter_party: {
      channel: "channel-7",
      port: "transfer",
      denom: "nhash",
    },
    image: "provenance/asset/hash.png",
    coinGeckoId: "provenance-blockchain",
  },
  {
    denom:
      "ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580",
    type: "ibc",
    origin_chain: "crescent",
    origin_denom: "ucre",
    origin_type: "staking",
    symbol: "CRE",
    decimals: 6,
    enable: true,
    path: "crescent>osmosis",
    channel: "channel-297",
    port: "transfer",
    counter_party: {
      channel: "channel-9",
      port: "transfer",
      denom: "ucre",
    },
    image: "crescent/asset/cre.png",
    coinGeckoId: "crescent-network",
  },
  {
    denom:
      "ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC",
    type: "ibc",
    origin_chain: "teritori",
    origin_denom: "utori",
    origin_type: "staking",
    symbol: "TORI",
    decimals: 6,
    enable: true,
    path: "teritori>osmosis",
    channel: "channel-362",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "utori",
    },
    image: "teritori/asset/tori.png",
    coinGeckoId: "teritori",
  },
  {
    denom:
      "ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604",
    type: "ibc",
    origin_chain: "agoric",
    origin_denom: "ubld",
    origin_type: "staking",
    symbol: "BLD",
    decimals: 6,
    enable: true,
    path: "agoric>osmosis",
    channel: "channel-320",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "ubld",
    },
    image: "agoric/asset/bld.png",
    coinGeckoId: "agoric",
  },
  {
    denom:
      "ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5",
    type: "ibc",
    origin_chain: "agoric",
    origin_denom: "uist",
    origin_type: "native",
    symbol: "IST",
    decimals: 6,
    enable: true,
    path: "agoric>osmosis",
    channel: "channel-320",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "uist",
    },
    image: "agoric/asset/ist.png",
    coinGeckoId: "inter-stable-token",
  },
  {
    denom:
      "ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06",
    type: "ibc",
    origin_chain: "acrechain",
    origin_denom: "aacre",
    origin_type: "staking",
    symbol: "ACRE",
    decimals: 18,
    enable: true,
    path: "acrechain>osmosis",
    channel: "channel-490",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "aacre",
    },
    image: "acrechain/asset/acre.png",
    coinGeckoId: "arable-protocol",
  },
  {
    denom:
      "ibc/01e94a5ff29b8ddefc86f412cc3927f7330e9b523cc63a6194b1108f5276025c",
    type: "ibc",
    origin_chain: "medasdigital",
    origin_denom: "umedas",
    origin_type: "staking",
    symbol: "MEDAS",
    decimals: 6,
    enable: true,
    path: "medasdigital>osmosis",
    channel: "channel-519",
    port: "transfer",
    counter_party: {
      channel: "channel-0",
      port: "transfer",
      denom: "umedas",
    },
    image: "medasdigital/asset/medas.png",
    coinGeckoId: "medasdigital",
  },
  {
    denom:
      "ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580",
    type: "ibc",
    origin_chain: "mars-protocol",
    origin_denom: "umars",
    origin_type: "staking",
    symbol: "MARS",
    decimals: 6,
    enable: true,
    path: "mars-protocol>osmosis",
    channel: "channel-557",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "umars",
    },
    image: "mars-protocol/asset/mars.png",
    coinGeckoId: "mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3",
  },
  {
    denom:
      "ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D",
    type: "ibc",
    origin_chain: "quicksilver",
    origin_denom: "uqck",
    origin_type: "staking",
    symbol: "QCK",
    decimals: 6,
    enable: true,
    path: "quicksilver>osmosis",
    channel: "channel-522",
    port: "transfer",
    counter_party: {
      channel: "channel-2",
      port: "transfer",
      denom: "uqck",
    },
    image: "quicksilver/asset/qck.png",
    coinGeckoId: "quicksilver",
  },
  {
    denom:
      "ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83",
    type: "ibc",
    origin_chain: "quicksilver",
    origin_denom: "uqstars",
    origin_type: "native",
    symbol: "qSTARS",
    decimals: 6,
    enable: true,
    path: "quicksilver>osmosis",
    channel: "channel-522",
    port: "transfer",
    counter_party: {
      channel: "channel-2",
      port: "transfer",
      denom: "uqstars",
    },
    image: "quicksilver/asset/qstars.png",
    coinGeckoId: "",
  },
  {
    denom:
      "ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC",
    type: "ibc",
    origin_chain: "quicksilver",
    origin_denom: "uqatom",
    origin_type: "native",
    symbol: "qATOM",
    decimals: 6,
    enable: true,
    path: "quicksilver>osmosis",
    channel: "channel-522",
    port: "transfer",
    counter_party: {
      channel: "channel-2",
      port: "transfer",
      denom: "uqatom",
    },
    image: "quicksilver/asset/qatom.png",
    coinGeckoId: "",
  },
  {
    denom:
      "ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206",
    type: "ibc",
    origin_chain: "quicksilver",
    origin_denom: "uqregen",
    origin_type: "native",
    symbol: "qREGEN",
    decimals: 6,
    enable: true,
    path: "quicksilver>osmosis",
    channel: "channel-522",
    port: "transfer",
    counter_party: {
      channel: "channel-2",
      port: "transfer",
      denom: "uqregen",
    },
    image: "quicksilver/asset/qregen.png",
    coinGeckoId: "",
  },
  {
    denom:
      "ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC",
    type: "ibc",
    origin_chain: "quicksilver",
    origin_denom: "uqosmo",
    origin_type: "native",
    symbol: "qOSMO",
    decimals: 6,
    enable: true,
    path: "quicksilver>osmosis",
    channel: "channel-522",
    port: "transfer",
    counter_party: {
      channel: "channel-2",
      port: "transfer",
      denom: "uqosmo",
    },
    image: "quicksilver/asset/qosmo.png",
    coinGeckoId: "",
  },
  {
    denom:
      "ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68",
    type: "ibc",
    origin_chain: "regen",
    origin_denom: "eco.uC.NCT",
    origin_type: "native",
    symbol: "NCT",
    decimals: 6,
    enable: true,
    path: "regen>osmosis",
    channel: "channel-8",
    port: "transfer",
    counter_party: {
      channel: "channel-1",
      port: "transfer",
      denom: "eco.uC.NCT",
    },
    image: "regen/asset/nct.png",
    coinGeckoId: "toucan-protocol-nature-carbon-tonne",
  },
];

// HUB
// Terra2
// Axelar
// EVMOS
// …anywhere else?
// Probably iteratively gonna run into node problems as we grow scope

// Hub (atom)
// stride, quicksilver, neutron (liquid staked assets)
// Axelar/Gravity (Eth)
// Nobel (USDC)
// Agoric (IST)

const chains = [
  {
    id: "cosmos",
    name: "Cosmos Hub",
  },
  {
    id: "terra",
    name: "Terra 2.0",
  },
  {
    id: "neutron",
    name: "Neutron",
  },
  {
    id: "evmos",
    name: "Evmos",
  },
  {
    id: "axelar",
    name: "Axelar",
  },
  {
    id: "stride",
    name: "Stride",
  },
  {
    id: "quicksilver",
    name: "Quicksilver",
  },
  {
    id: "gravity-bridge",
    name: "Gravity Bridge",
  },
  {
    id: "noble",
    name: "Noble",
  },
  {
    id: "osmosis",
    name: "Osmosis",
  },
];

function useAssetsQuery(chain: string) {
  return useQuery({
    queryKey: ["assets", chain],
    queryFn: async () => {
      const response = await axios.get(
        `https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${chain}/assets.json`
      );
      const responseJSON = response.data;

      return responseJSON as Asset[];
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}

export default function Home() {
  const [sourceChain, setSourceChain] = useState({
    id: "osmosis",
    name: "Osmosis",
  });
  const [targetChain, setTargetChain] = useState({
    id: "cosmos",
    name: "Cosmos Hub",
  });

  const { data: assets } = useAssetsQuery(sourceChain.id);

  const [selectedAsset, setSelectedAsset] = useState(assets ? assets[0] : null);

  useEffect(() => {
    if (assets) {
      setSelectedAsset(assets[0]);
    }
  }, [assets]);

  useEffect(() => {
    if (sourceChain.id === targetChain.id) {
      setTargetChain(
        chains.find((chain) => chain.id !== sourceChain.id) as Chain
      );
    }
  }, [sourceChain]);

  useEffect(() => {
    if (sourceChain.id === targetChain.id) {
      setSourceChain(
        chains.find((chain) => chain.id !== targetChain.id) as Chain
      );
    }
  }, [targetChain]);

  return (
    <main className="px-4">
      <div className="py-16">
        <p className="text-center font-black text-xl tracking-wider">
          ibc<span className="text-indigo-500">.fun</span>
        </p>
      </div>
      <div className="w-full max-w-2xl mx-auto space-y-4">
        <div className="px-4 py-6 border border-zinc-700 rounded-lg space-y-8">
          <div className="md:grid grid-cols-2 gap-4">
            <div className="bg-zinc-800 p-4 rounded-t-md md:rounded-md">
              <p className="font-semibold text-sm mb-3">Source Chain</p>
              <ChainSelect
                chain={sourceChain}
                chains={chains}
                onSelect={(chain) => setSourceChain(chain)}
              />
            </div>
            <div className="bg-zinc-800 p-4 rounded-b-md md:rounded-md">
              <p className="font-semibold text-sm mb-3">Destination Chain</p>
              <ChainSelect
                chain={targetChain}
                chains={chains}
                onSelect={(chain) => setTargetChain(chain)}
              />
            </div>
          </div>
          <div className="bg-zinc-800 p-4 rounded-md">
            <p className="font-semibold text-sm mb-3">Asset</p>
            <div className="border border-zinc-600 rounded-md p-4 space-y-4">
              <div className="sm:flex items-center">
                <div className="sm:w-48">
                  {selectedAsset && assets && (
                    <AssetSelect
                      asset={selectedAsset}
                      assets={assets}
                      onSelect={(asset) => setSelectedAsset(asset)}
                    />
                  )}
                </div>
                <div className="flex-1">
                  <input
                    className="bg-transparent font-bold text-xl p-4 placeholder:text-zinc-500 w-full outline-none"
                    type="text"
                    placeholder="0.000"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">
                  <span className="text-zinc-400">Amount Available:</span>{" "}
                  <span className="font-medium">2.355837</span>
                </p>
                <button className="font-bold text-sm text-indigo-500 hover:text-indigo-400 active:text-indigo-500">
                  MAX
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-indigo-600 hover:bg-indigo-500/90 active:bg-indigo-600 text-white focus-visible:outline-indigo-600 w-full rounded-md px-6 py-2.5 h-16 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors">
            Connect Wallet
          </button>
        </div>
      </div>
    </main>
  );
}

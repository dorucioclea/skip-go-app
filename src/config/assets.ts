import { Asset } from "@/cosmos";

export const ASSET_LIST: Record<string, Asset[]> = {
  "passage-1": [
    {
      denom: "upasg",
      type: "staking",
      origin_chain: "passage",
      origin_denom: "upasg",
      origin_type: "staking",
      symbol: "PASG",
      decimals: 6,
      description: "Passage Staking Coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/passage/asset/pasg.png",
    },
  ],
  "noble-1": [
    {
      denom: "ustake",
      type: "staking",
      origin_chain: "noble",
      origin_denom: "ustake",
      origin_type: "staking",
      symbol: "NOBLE",
      decimals: 6,
      description: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/noble/asset/stake.png",
    },
    {
      denom: "uusdc",
      type: "native",
      origin_chain: "noble",
      origin_denom: "uusdc",
      origin_type: "native",
      symbol: "USDC",
      decimals: 6,
      description: "",
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
    {
      denom: "ufrienzies",
      type: "native",
      origin_chain: "noble",
      origin_denom: "ufrienzies",
      origin_type: "native",
      symbol: "FRNZ",
      decimals: 6,
      description: "Native Coin",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/noble/asset/frnz.png",
    },
    {
      denom:
        "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
  ],
  "canto_7700-1": [
    {
      denom: "acanto",
      type: "staking",
      origin_chain: "canto",
      origin_denom: "acanto",
      origin_type: "staking",
      symbol: "CANTO",
      decimals: 18,
      description: "Canto Staking Coin",
      coinGeckoId: "canto",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/canto/asset/canto.png",
    },
    {
      denom:
        "ibc/9117A26BA81E29FA4F78F57DC2BD90CD3D26848101BA880445F119B22A1E254E",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/DC186CA7A8C009B43774EBDC825C935CABA9743504CE6037507E6E5CCE12858A",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "weth",
      origin_type: "erc20",
      symbol: "gWETH",
      decimals: 18,
      coinGeckoId: "weth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/weth.png",
    },
    {
      denom:
        "ibc/4F6A2DEFEA52CD8D90966ADCB2BD0593D3993AB0DF7F6AEB3EFD6167D79237B0",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdt",
      origin_type: "erc20",
      symbol: "gUSDT",
      decimals: 6,
      coinGeckoId: "tether",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdt.png",
    },
    {
      denom:
        "ibc/17CD484EE7D9723B847D95015FA3EBD1572FD13BC84FB838F55B18A57450F25B",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "gUSDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
  ],
  "omniflixhub-1": [
    {
      denom: "uflix",
      type: "staking",
      origin_chain: "omniflix",
      origin_denom: "uflix",
      origin_type: "staking",
      symbol: "FLIX",
      decimals: 6,
      description: "OmniFlix Staking Coin",
      coinGeckoId: "omniflix-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/omniflix/asset/flix.png",
    },
    {
      denom:
        "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/F951C98B3D08879376970DD39F74907896391810FD40AF9B2357A02E9E82BBA5",
      type: "ibc",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
    {
      denom:
        "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/CC12CFFD769D5E0059D98E760DD34FAB477261785B99240C97F6AABC4F566CB5",
      type: "ibc",
      origin_chain: "chihuahua",
      origin_denom: "uhuahua",
      origin_type: "staking",
      symbol: "HUAHUA",
      decimals: 6,
      coinGeckoId: "chihuahua-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/chihuahua/asset/huahua.png",
    },
  ],
  "kichain-2": [
    {
      denom: "uxki",
      type: "staking",
      origin_chain: "ki-chain",
      origin_denom: "uxki",
      origin_type: "staking",
      symbol: "XKI",
      decimals: 6,
      description: "Ki-chain Staking Coin",
      coinGeckoId: "ki",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ki-chain/asset/xki.png",
    },
    {
      denom:
        "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
  ],
  "mars-1": [
    {
      denom: "umars",
      type: "staking",
      origin_chain: "mars-protocol",
      origin_denom: "umars",
      origin_type: "staking",
      symbol: "MARS",
      decimals: 6,
      description: "Mars Staking Coin",
      coinGeckoId: "mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/mars-protocol/asset/mars.png",
    },
    {
      denom:
        "ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "axlUSDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
    {
      denom:
        "ibc/923A25D77C573CC5B74BF8ECE7EDB1D27EE9B77F84892BBBF8CA51BD6FFFA397",
      type: "ibc",
      origin_chain: "crescent",
      origin_denom: "ucre",
      origin_type: "staking",
      symbol: "CRE",
      decimals: 6,
      coinGeckoId: "crescent-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crescent/asset/cre.png",
    },
    {
      denom:
        "ibc/C814F0B662234E24248AE3B2FE2C1B54BBAF12934B757F6E7BC5AEC119963895",
      type: "ibc",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
    {
      denom:
        "ibc/90F27756D300141BDF07B83E65401BDC58C05269B9BAE3ECB0B20FAB166BCF8F",
      type: "ibc",
      origin_chain: "kujira",
      origin_denom: "ukuji",
      origin_type: "staking",
      symbol: "KUJI",
      decimals: 6,
      coinGeckoId: "kujira",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kujira/asset/kuji.png",
    },
    {
      denom:
        "ibc/D70B0FBF97AEB04491E9ABF4467A7F66CD6250F4382CE5192D856114B83738D2",
      type: "ibc",
      origin_chain: "terra",
      origin_denom: "uluna",
      origin_type: "staking",
      symbol: "LUNA",
      decimals: 6,
      coinGeckoId: "terra",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/asset/luna.png",
    },
    {
      denom:
        "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
  ],
  "mantle-1": [
    {
      denom: "umntl",
      type: "staking",
      origin_chain: "asset-mantle",
      origin_denom: "umntl",
      origin_type: "staking",
      symbol: "MNTL",
      decimals: 6,
      description: "AssetMantle Staking Coin",
      coinGeckoId: "assetmantle",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/asset-mantle/asset/mntl.png",
    },
    {
      denom:
        "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/4CD525F166D32B0132C095F353F4C6F033B0FF5C49141470D1EFDA1D63303D04",
      type: "ibc",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
  ],
  "injective-1": [
    {
      denom: "inj",
      type: "staking",
      origin_chain: "injective",
      origin_denom: "inj",
      origin_type: "staking",
      symbol: "INJ",
      decimals: 18,
      description: "Injective Staking Coin",
      coinGeckoId: "injective-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/injective/asset/inj.png",
    },
    {
      denom:
        "ibc/E7807A46C0B7B44B350DA58F51F278881B863EC4DCA94635DAB39E52C30766CB",
      type: "ibc",
      origin_chain: "chihuahua",
      origin_denom: "uhuahua",
      origin_type: "staking",
      symbol: "HUAHUA",
      decimals: 6,
      coinGeckoId: "chihuahua-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/chihuahua/asset/huahua.png",
    },
    {
      denom:
        "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/16618B7F7AC551F48C057A13F4CA5503693FBFF507719A85BC6876B8BD75F821",
      type: "ibc",
      origin_chain: "evmos",
      origin_denom: "aevmos",
      origin_type: "staking",
      symbol: "EVMOS",
      decimals: 18,
      coinGeckoId: "evmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/asset/evmos.png",
    },
    {
      denom:
        "ibc/B786E7CBBF026F6F15A8DA248E0F18C62A0F7A70CB2DABD9239398C8B5150ABB",
      type: "ibc",
      origin_chain: "persistence",
      origin_denom: "uxprt",
      origin_type: "staking",
      symbol: "XPRT",
      decimals: 6,
      coinGeckoId: "persistence",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/persistence/asset/xprt.png",
    },
    {
      denom:
        "ibc/624BA9DD171915A2B9EA70F69638B2CEA179959850C1A586F6C485498F29EDD4",
      type: "ibc",
      origin_chain: "moonbeam",
      origin_denom: "xcdot",
      origin_type: "erc20",
      symbol: "axlDOT",
      decimals: 10,
      coinGeckoId: "xcdot",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/moonbeam/asset/xcdot.png",
    },
    {
      denom:
        "ibc/DD9182E8E2B13C89D6B4707C7B43E8DB6193F9FF486AFA0E6CF86B427B0D231A",
      type: "ibc",
      origin_chain: "nois",
      origin_denom: "unois",
      origin_type: "staking",
      symbol: "NOIS",
      decimals: 6,
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/nois/asset/nois.png",
    },
    {
      denom: "peggy0x8d983cb9388eac77af0474fa441c4815500cb7bb",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/atom.png",
    },
    {
      denom: "peggy0xe28b3b32b6c345a34ff64674606124dd5aceca30",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "inj",
      origin_type: "erc20",
      symbol: "INJ",
      decimals: 18,
      coinGeckoId: "inj",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/inj.png",
    },
    {
      denom: "peggy0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "uluna",
      origin_type: "erc20",
      symbol: "LUNC",
      decimals: 6,
      coinGeckoId: "terra-luna",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/lunc.png",
    },
    {
      denom: "peggy0xa47c8bf37f92abed4a126bda807a7b7498661acd",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "uusd",
      origin_type: "erc20",
      symbol: "USTC",
      decimals: 18,
      coinGeckoId: "terrausd",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/ustc.png",
    },
    {
      denom: "peggy0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "cel",
      origin_type: "erc20",
      symbol: "CEL",
      decimals: 4,
      coinGeckoId: "celsius-degree-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/cel.png",
    },
    {
      denom: "peggy0xdac17f958d2ee523a2206206994597c13d831ec7",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "usdt",
      origin_type: "erc20",
      symbol: "USDT",
      decimals: 6,
      coinGeckoId: "tether",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdt.png",
    },
    {
      denom: "peggy0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "USDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
    {
      denom: "peggy0xb8c77482e45f1f44de1745f52c74426c631bdd52",
      type: "bridge",
      origin_chain: "bnb-beacon-chain",
      origin_denom: "bnb",
      origin_type: "native",
      symbol: "BNB",
      decimals: 18,
      coinGeckoId: "binancecoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bnb-beacon-chain/asset/bnb.png",
    },
    {
      denom: "peggy0xfa6de2697d59e88ed7fc4dfe5a33dac43565ea41",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "defi5",
      origin_type: "erc20",
      symbol: "DEFI5",
      decimals: 18,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/defi5.png",
    },
    {
      denom: "peggy0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "utk",
      origin_type: "erc20",
      symbol: "UTK",
      decimals: 18,
      coinGeckoId: "utrust",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/utk.png",
    },
    {
      denom: "peggy0xc944e90c64b2c07662a292be6244bdf05cda44a7",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "grt",
      origin_type: "erc20",
      symbol: "GRT",
      decimals: 18,
      coinGeckoId: "the-graph",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/grt.png",
    },
    {
      denom: "peggy0xc55c2175e90a46602fd42e931f62b3acc1a013ca",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "stars",
      origin_type: "erc20",
      symbol: "STARS",
      decimals: 18,
      coinGeckoId: "mogul-productions",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/stars.png",
    },
    {
      denom: "peggy0xac9bb427953ac7fddc562adca86cf42d988047fd",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "stt",
      origin_type: "erc20",
      symbol: "STT",
      decimals: 18,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/stt.png",
    },
    {
      denom: "peggy0xa8c8cfb141a3bb59fea1e2ea6b79b5ecbcd7b6ca",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "noia",
      origin_type: "erc20",
      symbol: "NOIA",
      decimals: 18,
      coinGeckoId: "noia-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/noia.png",
    },
    {
      denom: "peggy0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "enj",
      origin_type: "erc20",
      symbol: "ENJ",
      decimals: 18,
      coinGeckoId: "enjincoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/enj.png",
    },
    {
      denom: "peggy0xe41d2489571d322189246dafa5ebde1f4699f498",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "zrx",
      origin_type: "erc20",
      symbol: "ZRX",
      decimals: 18,
      coinGeckoId: "0x",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/zrx.png",
    },
    {
      denom: "peggy0xcc4304a31d09258b0029ea7fe63d032f52e44efe",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "swap",
      origin_type: "erc20",
      symbol: "SWAP",
      decimals: 18,
      coinGeckoId: "trustswap",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/swap.png",
    },
    {
      denom: "peggy0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "weth",
      origin_type: "erc20",
      symbol: "WETH",
      decimals: 18,
      coinGeckoId: "weth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/weth.png",
    },
    {
      denom: "peggy0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "snx",
      origin_type: "erc20",
      symbol: "SNX",
      decimals: 18,
      coinGeckoId: "havven",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/snx.png",
    },
    {
      denom: "peggy0xbb0e17ef65f82ab018d8edd776e8dd940327b28b",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "axs",
      origin_type: "erc20",
      symbol: "AXS",
      decimals: 18,
      coinGeckoId: "axie-infinity",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/axs.png",
    },
    {
      denom: "peggy0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "nexo",
      origin_type: "erc20",
      symbol: "NEXO",
      decimals: 18,
      coinGeckoId: "nexo",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/nexo.png",
    },
    {
      denom: "peggy0xaaef88cea01475125522e117bfe45cf32044e238",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "gf",
      origin_type: "erc20",
      symbol: "GF",
      decimals: 18,
      coinGeckoId: "guildfi",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/gf.png",
    },
    {
      denom: "peggy0x967da4048cd07ab37855c090aaf366e4ce1b9f48",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "ocean",
      origin_type: "erc20",
      symbol: "OCEAN",
      decimals: 18,
      coinGeckoId: "ocean-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/ocean.png",
    },
    {
      denom: "peggy0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "shib",
      origin_type: "erc20",
      symbol: "SHIB",
      decimals: 18,
      coinGeckoId: "shiba-inu",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/shib.png",
    },
    {
      denom: "peggy0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "aave",
      origin_type: "erc20",
      symbol: "AAVE",
      decimals: 18,
      coinGeckoId: "aave",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/aave.png",
    },
    {
      denom: "peggy0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "matic",
      origin_type: "erc20",
      symbol: "MATIC",
      decimals: 18,
      coinGeckoId: "matic-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/matic.png",
    },
    {
      denom: "peggy0x6f259637dcd74c767781e37bc6133cd6a68aa161",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "ht",
      origin_type: "erc20",
      symbol: "HT",
      decimals: 18,
      coinGeckoId: "huobi-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/ht.png",
    },
    {
      denom: "peggy0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "sushi",
      origin_type: "erc20",
      symbol: "SUSHI",
      decimals: 18,
      coinGeckoId: "sushi",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/sushi.png",
    },
    {
      denom: "peggy0x6b175474e89094c44da98b954eedeac495271d0f",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "dai",
      origin_type: "erc20",
      symbol: "DAI",
      decimals: 18,
      coinGeckoId: "dai",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/dai.png",
    },
    {
      denom: "peggy0x514910771af9ca656af840dff83e8264ecf986ca",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "link",
      origin_type: "erc20",
      symbol: "LINK",
      decimals: 18,
      coinGeckoId: "chainlink",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/link.png",
    },
    {
      denom: "peggy0x50f09629d0afdf40398a3f317cc676ca9132055c",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "evai",
      origin_type: "erc20",
      symbol: "EVAI",
      decimals: 8,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/evai.png",
    },
    {
      denom: "peggy0x4a220e6096b25eadb88358cb44068a3248254675",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "qnt",
      origin_type: "erc20",
      symbol: "QNT",
      decimals: 18,
      coinGeckoId: "quant-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/qnt.png",
    },
    {
      denom: "peggy0x4fabb145d64652a948d72533023f6e7a623c7c53",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "busd",
      origin_type: "erc20",
      symbol: "BUSD",
      decimals: 18,
      coinGeckoId: "binance-usd",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/busd.png",
    },
    {
      denom: "peggy0x4e15361fd6b4bb609fa63c81a2be19d873717870",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "ftm",
      origin_type: "erc20",
      symbol: "FTM",
      decimals: 18,
      coinGeckoId: "fantom",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/ftm.png",
    },
    {
      denom: "peggy0x45804880de22913dafe09f4980848ece6ecbaf78",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "paxg",
      origin_type: "erc20",
      symbol: "PAXG",
      decimals: 18,
      coinGeckoId: "pax-gold",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/paxg.png",
    },
    {
      denom: "peggy0x3506424f91fd33084466f402d5d97f05f8e3b4af",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "chz",
      origin_type: "erc20",
      symbol: "CHZ",
      decimals: 18,
      coinGeckoId: "chiliz",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/chz.png",
    },
    {
      denom: "peggy0x3155ba85d5f96b2d030a4966af206230e46849cb",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "rune",
      origin_type: "erc20",
      symbol: "RUNE",
      decimals: 18,
      coinGeckoId: "thorchain-erc20",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/rune.png",
    },
    {
      denom: "peggy0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "wbtc",
      origin_type: "erc20",
      symbol: "WBTC",
      decimals: 8,
      coinGeckoId: "wrapped-bitcoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/wbtc.png",
    },
    {
      denom: "peggy0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "uni",
      origin_type: "erc20",
      symbol: "UNI",
      decimals: 18,
      coinGeckoId: "uniswap",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/uni.png",
    },
    {
      denom: "peggy0x04fa0d235c4abf4bcf4787af4cf447de572ef828",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "uma",
      origin_type: "erc20",
      symbol: "UMA",
      decimals: 18,
      coinGeckoId: "uma",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/uma.png",
    },
    {
      denom: "peggy0x0d8775f648430679a709e98d2b0cb6250d2887ef",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "bat",
      origin_type: "erc20",
      symbol: "BAT",
      decimals: 18,
      coinGeckoId: "basic-attention-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/bat.png",
    },
    {
      denom: "peggy0x0cec1a9154ff802e7934fc916ed7ca50bde6844e",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "pool",
      origin_type: "erc20",
      symbol: "POOL",
      decimals: 18,
      coinGeckoId: "pooltogether",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/pool.png",
    },
    {
      denom: "peggy0x111111111117dc0aa78b770fa6a738034120c302",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "1inch",
      origin_type: "erc20",
      symbol: "1INCH",
      decimals: 18,
      coinGeckoId: "1inch",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/1inch.png",
    },
    {
      denom: "peggy0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "yfi",
      origin_type: "erc20",
      symbol: "YFI",
      decimals: 18,
      coinGeckoId: "yearn-finance",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/yfi.png",
    },
    {
      denom: "peggy0xc00e94cb662c3520282e6f5717214004a7f26888",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "comp",
      origin_type: "erc20",
      symbol: "COMP",
      decimals: 18,
      coinGeckoId: "compound-governance-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/comp.png",
    },
    {
      denom: "peggy0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "cell",
      origin_type: "erc20",
      symbol: "CELL",
      decimals: 18,
      coinGeckoId: "cellframe",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/cell.png",
    },
    {
      denom: "peggy0x080b12e80c9b45e97c23b6ad10a16b3e2a123949",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "xbx",
      origin_type: "erc20",
      symbol: "XBX",
      decimals: 18,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/xbx.png",
    },
    {
      denom: "peggy0xde4c5a791913838027a2185709e98c5c6027ea63",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "xac",
      origin_type: "erc20",
      symbol: "XAC",
      decimals: 8,
      coinGeckoId: "general-attention-currency",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/xac.png",
    },
    {
      denom: "peggy0x92D6C1e31e14520e676a687F0a93788B716BEff5",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "dydx",
      origin_type: "erc20",
      symbol: "DYDX",
      decimals: 18,
      coinGeckoId: "dydx",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/dydx.png",
    },
    {
      denom: "peggy0x4d224452801ACEd8B2F0aebE155379bb5D594381",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "ape",
      origin_type: "erc20",
      symbol: "APE",
      decimals: 18,
      coinGeckoId: "apecoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/ape.png",
    },
    {
      denom: "peggy0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "steth",
      origin_type: "erc20",
      symbol: "stETH",
      decimals: 18,
      coinGeckoId: "staked-ether",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/steth.png",
    },
    {
      denom: "peggy0xc690F7C7FcfFA6a82b79faB7508c466FEfdfc8c5",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "lym",
      origin_type: "erc20",
      symbol: "LYM",
      decimals: 18,
      coinGeckoId: "lympo",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/lym.png",
    },
  ],
  "comdex-1": [
    {
      denom: "ucmdx",
      type: "staking",
      origin_chain: "comdex",
      origin_denom: "ucmdx",
      origin_type: "staking",
      symbol: "CMDX",
      decimals: 6,
      description: "Comdex Staking Coin",
      coinGeckoId: "comdex",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/comdex/asset/cmdx.png",
    },
    {
      denom: "uharbor",
      type: "native",
      origin_chain: "comdex",
      origin_denom: "uharbor",
      origin_type: "native",
      symbol: "HARBOR",
      decimals: 6,
      description: "Harbor Protocol Governance Token",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/comdex/asset/harbor.png",
    },
    {
      denom: "ucmst",
      type: "native",
      origin_chain: "comdex",
      origin_denom: "ucmst",
      origin_type: "native",
      symbol: "CMST",
      decimals: 6,
      description: "Harbor Protocol Stablecoin",
      coinGeckoId: "composite",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/comdex/asset/cmst.png",
    },
    {
      denom:
        "ibc/167E3D88D71B7D2F6308D3EF93FC3DD51932B2D9672D72B71418F61CBC5F5717",
      type: "ibc",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
    {
      denom:
        "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/961FA3E54F5DCCA639F37A7C45F7BBE41815579EF1513B5AFBEFCFEB8F256352",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/E1616E7C19EA474C565737709A628D6F8A23FF9D3E9A7A6871306CF5E0A5341E",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "axlUSDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
  ],
  "sifchain-1": [
    {
      denom: "rowan",
      type: "staking",
      origin_chain: "sifchain",
      origin_denom: "rowan",
      origin_type: "staking",
      symbol: "ROWAN",
      decimals: 18,
      description: "Sifchain Staking Coin",
      coinGeckoId: "sifchain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/sifchain/asset/rowan.png",
    },
    {
      denom:
        "ibc/21CB41565FCA19AB6613EE06B0D56E588E0DC3E53FF94BA499BB9635794A1A35",
      type: "ibc",
      origin_chain: "sentinel",
      origin_denom: "udvpn",
      origin_type: "staking",
      symbol: "DVPN",
      decimals: 6,
      coinGeckoId: "sentinel",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/sentinel/asset/dvpn.png",
    },
    {
      denom:
        "ibc/6D717BFF5537D129035BAB39F593D638BA258A9F8D86FB7ECCEAB05B6950CC3E",
      type: "ibc",
      origin_chain: "akash",
      origin_denom: "uakt",
      origin_type: "staking",
      symbol: "AKT",
      decimals: 6,
      coinGeckoId: "akash-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/akash/asset/akt.png",
    },
    {
      denom:
        "ibc/2CC6F10253D563A7C238096BA63D060F7F356E37D5176E517034B8F730DB4AB6",
      type: "ibc",
      origin_chain: "regen",
      origin_denom: "uregen",
      origin_type: "staking",
      symbol: "REGEN",
      decimals: 6,
      coinGeckoId: "regen",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/regen/asset/regen.png",
    },
    {
      denom:
        "ibc/F20C4E30E4202C11FE009D6D58B2FF212C99084CB6F767287A51A93EFD960086",
      type: "ibc",
      origin_chain: "starname",
      origin_denom: "uiov",
      origin_type: "staking",
      symbol: "IOV",
      decimals: 6,
      coinGeckoId: "starname",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/starname/asset/iov.png",
    },
    {
      denom:
        "ibc/D87BC708A791246AA683D514C273736F07579CBD56C9CA79B7823F9A01C16270",
      type: "ibc",
      origin_chain: "persistence",
      origin_denom: "uxprt",
      origin_type: "staking",
      symbol: "XPRT",
      decimals: 6,
      coinGeckoId: "persistence",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/persistence/asset/xprt.png",
    },
    {
      denom:
        "ibc/B4314D0E670CB43C88A5DCA09F76E5E812BD831CC2FEC6E434C9E5A9D1F57953",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/ACA7D0100794F39DF3FF0C5E31638B24737321C24F32C2C486A24C78DD8F2029",
      type: "ibc",
      origin_chain: "emoney",
      origin_denom: "ungm",
      origin_type: "staking",
      symbol: "NGM",
      decimals: 6,
      coinGeckoId: "e-money",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/emoney/asset/ngm.png",
    },
    {
      denom:
        "ibc/7B8A3357032F3DB000ACFF3B2C9F8E77B932F21004FC93B5A8F77DE24161A573",
      type: "ibc",
      origin_chain: "emoney",
      origin_denom: "eeur",
      origin_type: "native",
      symbol: "EEUR",
      decimals: 6,
      coinGeckoId: "e-money-eur",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/emoney/asset/eeur.png",
    },
    {
      denom:
        "ibc/F279AB967042CAC10BFF70FAECB179DCE37AAAE4CD4C1BC4565C2BBC383BC0FA",
      type: "ibc",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
    {
      denom:
        "ibc/B21954812E6E642ADC0B5ACB233E02A634BF137C572575BF80F7C0CC3DB2E74D",
      type: "ibc",
      origin_chain: "crypto-org",
      origin_denom: "basecro",
      origin_type: "staking",
      symbol: "CRO",
      decimals: 8,
      coinGeckoId: "crypto-com-chain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crypto-org/asset/cro.png",
    },
    {
      denom:
        "ibc/11DFDFADE34DCE439BA732EBA5CD8AA804A544BA1ECC0882856289FAF01FE53F",
      type: "ibc",
      origin_chain: "iris",
      origin_denom: "uiris",
      origin_type: "staking",
      symbol: "IRIS",
      decimals: 6,
      coinGeckoId: "iris-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/iris/asset/iris.png",
    },
    {
      denom:
        "ibc/345D30E8ED06B47FC538ED131D99D16126F07CD6F8B35DE96AAF4C1E445AF466",
      type: "ibc",
      origin_chain: "secret",
      origin_denom: "uscrt",
      origin_type: "staking",
      symbol: "SCRT",
      decimals: 6,
      coinGeckoId: "secret",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/secret/asset/scrt.png",
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
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom: "ceth",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "eth",
      origin_type: "erc20",
      symbol: "ETH",
      decimals: 18,
      coinGeckoId: "ethereum",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/eth.png",
    },
    {
      denom: "cusdc",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "USDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
    {
      denom: "csrm",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "srm",
      origin_type: "erc20",
      symbol: "SRM",
      decimals: 6,
      coinGeckoId: "serum",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/srm.png",
    },
    {
      denom: "cusdt",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "usdt",
      origin_type: "erc20",
      symbol: "USDT",
      decimals: 6,
      coinGeckoId: "tether",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdt.png",
    },
    {
      denom: "ccro",
      type: "bridge",
      origin_chain: "crypto-org",
      origin_denom: "basecro",
      origin_type: "staking",
      symbol: "CRO",
      decimals: 8,
      coinGeckoId: "crypto-com-chain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crypto-org/asset/cro.png",
    },
    {
      denom: "c1inch",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "1inch",
      origin_type: "erc20",
      symbol: "1INCH",
      decimals: 18,
      coinGeckoId: "1inch",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/1inch.png",
    },
    {
      denom: "caave",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "aave",
      origin_type: "erc20",
      symbol: "AAVE",
      decimals: 18,
      coinGeckoId: "aave",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/aave.png",
    },
    {
      denom: "cakro",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "akro",
      origin_type: "erc20",
      symbol: "AKRO",
      decimals: 18,
      coinGeckoId: "akropolis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/akro.png",
    },
    {
      denom: "cant",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "ant",
      origin_type: "erc20",
      symbol: "ANT",
      decimals: 18,
      coinGeckoId: "aragon",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/ant.png",
    },
    {
      denom: "caxs",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "axs",
      origin_type: "erc20",
      symbol: "AXS",
      decimals: 18,
      coinGeckoId: "axie-infinity",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/axs.png",
    },
    {
      denom: "cb20",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "b20",
      origin_type: "erc20",
      symbol: "B20",
      decimals: 18,
      coinGeckoId: "b20",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/b20.png",
    },
    {
      denom: "cbal",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "bal",
      origin_type: "erc20",
      symbol: "BAL",
      decimals: 18,
      coinGeckoId: "balancer",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/bal.png",
    },
    {
      denom: "cband",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "uband",
      origin_type: "erc20",
      symbol: "Band",
      decimals: 18,
      coinGeckoId: "band-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/band.png",
    },
    {
      denom: "cbat",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "bat",
      origin_type: "erc20",
      symbol: "BAT",
      decimals: 18,
      coinGeckoId: "basic-attention-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/bat.png",
    },
    {
      denom: "cbnt",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "bnt",
      origin_type: "erc20",
      symbol: "BNT",
      decimals: 18,
      coinGeckoId: "bancor",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/bnt.png",
    },
    {
      denom: "cbond",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "bond",
      origin_type: "erc20",
      symbol: "BOND",
      decimals: 18,
      coinGeckoId: "barnbridge",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/bond.png",
    },
    {
      denom: "cbtsg",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "ubtsg",
      origin_type: "erc20",
      symbol: "BTSG",
      decimals: 18,
      coinGeckoId: "bitsong",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/btsg.png",
    },
    {
      denom: "ccocos",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "cocos",
      origin_type: "erc20",
      symbol: "COCOS",
      decimals: 18,
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/cocos.png",
    },
    {
      denom: "ccomp",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "comp",
      origin_type: "erc20",
      symbol: "COMP",
      decimals: 18,
      coinGeckoId: "xxxxx",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/comp.png",
    },
    {
      denom: "cconv",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "conv",
      origin_type: "erc20",
      symbol: "CONV",
      decimals: 18,
      coinGeckoId: "convergence",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/conv.png",
    },
    {
      denom: "ccream",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "cream",
      origin_type: "erc20",
      symbol: "CREAM",
      decimals: 18,
      coinGeckoId: "cream-2",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/cream.png",
    },
    {
      denom: "cdai",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "dai",
      origin_type: "erc20",
      symbol: "DAI",
      decimals: 18,
      coinGeckoId: "dai",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/dai.png",
    },
    {
      denom: "cdaofi",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "daofi",
      origin_type: "erc20",
      symbol: "DAOFI",
      decimals: 18,
      coinGeckoId: "xxxxx",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/daofi.png",
    },
    {
      denom: "cdfyn",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "dfyn",
      origin_type: "erc20",
      symbol: "DFYN",
      decimals: 18,
      coinGeckoId: "dfyn-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/dfyn.png",
    },
    {
      denom: "cdino",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "dino",
      origin_type: "erc20",
      symbol: "DINO",
      decimals: 18,
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/dino.png",
    },
    {
      denom: "cdnxc",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "dnxc",
      origin_type: "erc20",
      symbol: "DNXC",
      decimals: 18,
      coinGeckoId: "dinox",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/dnxc.png",
    },
    {
      denom: "cdon",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "don",
      origin_type: "erc20",
      symbol: "DON",
      decimals: 18,
      coinGeckoId: "donkey-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/don.png",
    },
    {
      denom: "cenj",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "enj",
      origin_type: "erc20",
      symbol: "ENJ",
      decimals: 18,
      coinGeckoId: "enjincoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/enj.png",
    },
    {
      denom: "cern",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "ern",
      origin_type: "erc20",
      symbol: "ERN",
      decimals: 18,
      coinGeckoId: "ethernity-chain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/ern.png",
    },
    {
      denom: "cesd",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "esd",
      origin_type: "erc20",
      symbol: "ESD",
      decimals: 18,
      coinGeckoId: "empty-set-dollar",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/esd.png",
    },
    {
      denom: "cfrax",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "frax",
      origin_type: "erc20",
      symbol: "FRAX",
      decimals: 18,
      coinGeckoId: "frax",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/frax.png",
    },
    {
      denom: "cftm",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "ftm",
      origin_type: "erc20",
      symbol: "FTM",
      decimals: 18,
      coinGeckoId: "fantom",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/ftm.png",
    },
    {
      denom: "cfxs",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "fxs",
      origin_type: "erc20",
      symbol: "FXS",
      decimals: 18,
      coinGeckoId: "frax-share",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/fxs.png",
    },
    {
      denom: "cgrt",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "grt",
      origin_type: "erc20",
      symbol: "GRT",
      decimals: 18,
      coinGeckoId: "the-graph",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/grt.png",
    },
    {
      denom: "ciotx",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "iotx",
      origin_type: "erc20",
      symbol: "IOTX",
      decimals: 18,
      coinGeckoId: "iotex",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/iotx.png",
    },
    {
      denom: "ckeep",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "keep",
      origin_type: "erc20",
      symbol: "KEEP",
      decimals: 18,
      coinGeckoId: "keep-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/keep.png",
    },
    {
      denom: "ckft",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "kft",
      origin_type: "erc20",
      symbol: "KFT",
      decimals: 18,
      coinGeckoId: "knit-finance",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/kft.png",
    },
    {
      denom: "cldo",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "ldo",
      origin_type: "erc20",
      symbol: "LDO",
      decimals: 18,
      coinGeckoId: "lido-dao",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/ldo.png",
    },
    {
      denom: "cleash",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "leash",
      origin_type: "erc20",
      symbol: "LEASH",
      decimals: 18,
      coinGeckoId: "leash",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/leash.png",
    },
    {
      denom: "clgcy",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "lgcy",
      origin_type: "erc20",
      symbol: "LGCY",
      decimals: 18,
      coinGeckoId: "lgcy-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/lgcy.png",
    },
    {
      denom: "clina",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "lina",
      origin_type: "erc20",
      symbol: "LINA",
      decimals: 18,
      coinGeckoId: "linear",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/lina.png",
    },
    {
      denom: "clink",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "link",
      origin_type: "erc20",
      symbol: "LINK",
      decimals: 18,
      coinGeckoId: "chainlink",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/link.png",
    },
    {
      denom: "clon",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "lon",
      origin_type: "erc20",
      symbol: "LON",
      decimals: 18,
      coinGeckoId: "tokenlon",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/lon.png",
    },
    {
      denom: "clrc",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "lrc",
      origin_type: "erc20",
      symbol: "LRC",
      decimals: 18,
      coinGeckoId: "loopring",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/lrc.png",
    },
    {
      denom: "cmana",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "mana",
      origin_type: "erc20",
      symbol: "MANA",
      decimals: 18,
      coinGeckoId: "decentraland",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/mana.png",
    },
    {
      denom: "cmatic",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "matic",
      origin_type: "erc20",
      symbol: "MATIC",
      decimals: 18,
      coinGeckoId: "matic-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/matic.png",
    },
    {
      denom: "cmetis",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "metis",
      origin_type: "erc20",
      symbol: "METIS",
      decimals: 18,
      coinGeckoId: "metis-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/metis.png",
    },
    {
      denom: "cocean",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "ocean",
      origin_type: "erc20",
      symbol: "OCEAN",
      decimals: 18,
      coinGeckoId: "ocean-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/ocean.png",
    },
    {
      denom: "cogn",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "ogn",
      origin_type: "erc20",
      symbol: "OGN",
      decimals: 18,
      coinGeckoId: "origin-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/ogn.png",
    },
    {
      denom: "coh",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "oh",
      origin_type: "erc20",
      symbol: "OH",
      decimals: 18,
      coinGeckoId: "oh-finance",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/oh.png",
    },
    {
      denom: "cpaid",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "paid",
      origin_type: "erc20",
      symbol: "PAID",
      decimals: 18,
      coinGeckoId: "paid-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/paid.png",
    },
    {
      denom: "cpols",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "pols",
      origin_type: "erc20",
      symbol: "POLS",
      decimals: 18,
      coinGeckoId: "polkastarter",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/pols.png",
    },
    {
      denom: "cpond",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "pond",
      origin_type: "erc20",
      symbol: "POND",
      decimals: 18,
      coinGeckoId: "marlin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/pond.png",
    },
    {
      denom: "cquick",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "quick",
      origin_type: "erc20",
      symbol: "QUICK",
      decimals: 18,
      coinGeckoId: "quick",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/quick.png",
    },
    {
      denom: "crail",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "rail",
      origin_type: "erc20",
      symbol: "RAIL",
      decimals: 18,
      coinGeckoId: "railgun",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/rail.png",
    },
    {
      denom: "cratom",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "ratom",
      origin_type: "erc20",
      symbol: "RATOM",
      decimals: 18,
      coinGeckoId: "stafi-ratom",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/ratom.png",
    },
    {
      denom: "creef",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "reef",
      origin_type: "erc20",
      symbol: "REEF",
      decimals: 18,
      coinGeckoId: "reef",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/reef.png",
    },
    {
      denom: "crfuel",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "rfuel",
      origin_type: "erc20",
      symbol: "RFUEL",
      decimals: 18,
      coinGeckoId: "rio-defi",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/rfuel.png",
    },
    {
      denom: "crly",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "rly",
      origin_type: "erc20",
      symbol: "RLY",
      decimals: 18,
      coinGeckoId: "rally-2",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/rly.png",
    },
    {
      denom: "crndr",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "rndr",
      origin_type: "erc20",
      symbol: "RNDR",
      decimals: 18,
      coinGeckoId: "render-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/rndr.png",
    },
    {
      denom: "crune",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "rune",
      origin_type: "erc20",
      symbol: "RUNE",
      decimals: 18,
      coinGeckoId: "thorchain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/rune.png",
    },
    {
      denom: "csaito",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "saito",
      origin_type: "erc20",
      symbol: "SAITO",
      decimals: 18,
      coinGeckoId: "saito",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/saito.png",
    },
    {
      denom: "csand",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "sand",
      origin_type: "erc20",
      symbol: "SAND",
      decimals: 18,
      coinGeckoId: "the-sandbox",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/sand.png",
    },
    {
      denom: "cshib",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "shib",
      origin_type: "erc20",
      symbol: "SHIB",
      decimals: 18,
      coinGeckoId: "shiba-inu",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/shib.png",
    },
    {
      denom: "csnx",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "snx",
      origin_type: "erc20",
      symbol: "SNX",
      decimals: 18,
      coinGeckoId: "havven",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/snx.png",
    },
    {
      denom: "csusd",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "susd",
      origin_type: "erc20",
      symbol: "sUSD",
      decimals: 18,
      coinGeckoId: "nusd",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/susd.png",
    },
    {
      denom: "csushi",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "sushi",
      origin_type: "erc20",
      symbol: "SUSHI",
      decimals: 18,
      coinGeckoId: "sushi",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/sushi.png",
    },
    {
      denom: "csxp",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "sxp",
      origin_type: "erc20",
      symbol: "SXP",
      decimals: 18,
      coinGeckoId: "swipe",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/sxp.png",
    },
    {
      denom: "ctidal",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "tidal",
      origin_type: "erc20",
      symbol: "TIDAL",
      decimals: 18,
      coinGeckoId: "tidal-finance",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/tidal.png",
    },
    {
      denom: "ctoke",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "toke",
      origin_type: "erc20",
      symbol: "TOKE",
      decimals: 18,
      coinGeckoId: "tokemak",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/toke.png",
    },
    {
      denom: "ctshp",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "tshp",
      origin_type: "erc20",
      symbol: "TSHP",
      decimals: 18,
      coinGeckoId: "12ships",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/tshp.png",
    },
    {
      denom: "ctusd",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "tusd",
      origin_type: "erc20",
      symbol: "TUSD",
      decimals: 18,
      coinGeckoId: "true-usd",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/tusd.png",
    },
    {
      denom: "cufo",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "ufo",
      origin_type: "erc20",
      symbol: "UFO",
      decimals: 18,
      coinGeckoId: "ufo-gaming",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/ufo.png",
    },
    {
      denom: "cuma",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "uma",
      origin_type: "erc20",
      symbol: "UMA",
      decimals: 18,
      coinGeckoId: "uma",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/uma.png",
    },
    {
      denom: "cuni",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "uni",
      origin_type: "erc20",
      symbol: "UNI",
      decimals: 18,
      coinGeckoId: "uniswap",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/uni.png",
    },
    {
      denom: "cust",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "uusd",
      origin_type: "erc20",
      symbol: "USTC",
      decimals: 18,
      coinGeckoId: "wrapped-ust",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/ust.png",
    },
    {
      denom: "cwbtc",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "wbtc",
      origin_type: "erc20",
      symbol: "WBTC",
      decimals: 8,
      coinGeckoId: "wrapped-bitcoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/wbtc.png",
    },
    {
      denom: "cwfil",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "wfil",
      origin_type: "erc20",
      symbol: "WFIL",
      decimals: 18,
      coinGeckoId: "wrapped-filecoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/wfil.png",
    },
    {
      denom: "cwscrt",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "wscrt",
      origin_type: "erc20",
      symbol: "WSCRT",
      decimals: 6,
      coinGeckoId: "secret-erc20",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/wscrt.png",
    },
    {
      denom: "cyfi",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "yfi",
      origin_type: "erc20",
      symbol: "YFI",
      decimals: 18,
      coinGeckoId: "yearn-finance",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/yfi.png",
    },
    {
      denom: "czcn",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "zcn",
      origin_type: "erc20",
      symbol: "ZCN",
      decimals: 10,
      coinGeckoId: "0chain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/zcn.png",
    },
    {
      denom: "czcx",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "zcx",
      origin_type: "erc20",
      symbol: "ZCX",
      decimals: 18,
      coinGeckoId: "unizen",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/zcx.png",
    },
    {
      denom: "czrx",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "zrx",
      origin_type: "erc20",
      symbol: "ZCX",
      decimals: 18,
      coinGeckoId: "0x",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/zrx.png",
    },
    {
      denom:
        "ibc/4F7199F3ECB5FA109E71EB9ED2FA3DE6A98F3C87E7E60285BFEDDAA2DF1EB0B4",
      type: "ibc",
      origin_chain: "medasdigital",
      origin_denom: "umedas",
      origin_type: "staking",
      symbol: "MEDAS",
      decimals: 6,
      coinGeckoId: "medasdigital",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/medasdigital/asset/medas.png",
    },
  ],
  "neutron-1": [
    {
      denom: "untrn",
      type: "staking",
      origin_chain: "neutron",
      origin_denom: "untrn",
      origin_type: "staking",
      symbol: "NTRN",
      decimals: 6,
      description: "Neutron DAO Token",
      coinGeckoId: "neutron",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/neutron/asset/ntrn.png",
    },
    {
      denom:
        "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/C0E66D1C81D8AAF0E6896E05190FDFBC222367148F86AC3EA679C28327A763CD",
      type: "ibc",
      origin_chain: "axelar",
      origin_denom: "uaxl",
      origin_type: "staking",
      symbol: "AXL",
      decimals: 6,
      coinGeckoId: "axelar",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/axelar/asset/axl.png",
    },
    {
      denom:
        "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "axlUSDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
    {
      denom:
        "ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A",
      type: "ibc",
      origin_chain: "terra",
      origin_denom: "astro",
      origin_type: "cw20",
      symbol: "ASTRO",
      decimals: 6,
      coinGeckoId: "astroport-fi",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/asset/astro.png",
    },
    {
      denom:
        "ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C",
      type: "ibc",
      origin_chain: "stride",
      origin_denom: "stuatom",
      origin_type: "native",
      symbol: "stATOM",
      decimals: 6,
      coinGeckoId: "stride-staked-atom",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/statom.png",
    },
  ],
  darchub: [
    {
      denom: "udarc",
      type: "staking",
      origin_chain: "konstellation",
      origin_denom: "udarc",
      origin_type: "staking",
      symbol: "DARC",
      decimals: 6,
      description: "Konstellation Staking Coin",
      coinGeckoId: "darcmatter-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/konstellation/asset/darc.png",
    },
    {
      denom:
        "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
  ],
  "quicksilver-2": [
    {
      denom: "uqck",
      type: "staking",
      origin_chain: "quicksilver",
      origin_denom: "uqck",
      origin_type: "staking",
      symbol: "QCK",
      decimals: 6,
      description: "Quicksilver Staking Coin",
      coinGeckoId: "quicksilver",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/quicksilver/asset/qck.png",
    },
    {
      denom: "uqstars",
      type: "native",
      origin_chain: "quicksilver",
      origin_denom: "uqstars",
      origin_type: "native",
      symbol: "qSTARS",
      decimals: 6,
      description: "Quicksilver Staked Stars",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/quicksilver/asset/qstars.png",
    },
    {
      denom: "uqatom",
      type: "native",
      origin_chain: "quicksilver",
      origin_denom: "uqatom",
      origin_type: "native",
      symbol: "qATOM",
      decimals: 6,
      description: "Quicksilver Staked ATOM",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/quicksilver/asset/qatom.png",
    },
    {
      denom: "uqregen",
      type: "native",
      origin_chain: "quicksilver",
      origin_denom: "uqregen",
      origin_type: "native",
      symbol: "qREGEN",
      decimals: 6,
      description: "Quicksilver Staked REGEN",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/quicksilver/asset/qregen.png",
    },
    {
      denom:
        "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/49BAE4CD2172833F14000627DA87ED8024AD46A38D6ED33F6239F22B5832F958",
      type: "ibc",
      origin_chain: "stargaze",
      origin_denom: "ustars",
      origin_type: "staking",
      symbol: "STARS",
      decimals: 6,
      coinGeckoId: "stargaze",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stargaze/asset/stars.png",
    },
    {
      denom:
        "ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/50601881EB04667D5BD252FAEB5AA0713F117A2AB9DE365CF7DF9BB4083065B8",
      type: "ibc",
      origin_chain: "persistence",
      origin_denom: "uxprt",
      origin_type: "staking",
      symbol: "XPRT",
      decimals: 6,
      coinGeckoId: "persistence",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/persistence/asset/pstake.png",
    },
    {
      denom:
        "ibc/73E97EB411B29C6F989C35D277D1A7FC65083572F102AC6BD101884EE9FB2C9F",
      type: "ibc",
      origin_chain: "evmos",
      origin_denom: "aevmos",
      origin_type: "staking",
      symbol: "EVMOS",
      decimals: 18,
      coinGeckoId: "evmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/asset/evmos.png",
    },
    {
      denom:
        "ibc/A7E38774F447445DB94A8ED00BEE78EFC43EED7A732D314D3F7F4AB743993E9F",
      type: "ibc",
      origin_chain: "regen",
      origin_denom: "uregen",
      origin_type: "staking",
      symbol: "REGEN",
      decimals: 6,
      coinGeckoId: "regen",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/regen/asset/regen.png",
    },
    {
      denom: "uqosmo",
      type: "native",
      origin_chain: "quicksilver",
      origin_denom: "uqosmo",
      origin_type: "native",
      symbol: "qOSMO",
      decimals: 6,
      description: "Quicksilver Staked OSMO",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/quicksilver/asset/qosmo.png",
    },
  ],
  "fetchhub-4": [
    {
      denom: "afet",
      type: "staking",
      origin_chain: "fetchai",
      origin_denom: "afet",
      origin_type: "staking",
      symbol: "FET",
      decimals: 18,
      description: "Fetch.ai Staking Coin",
      coinGeckoId: "fetch-ai",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/fetchai/asset/fet.png",
    },
    {
      denom: "nanomobx",
      type: "native",
      origin_chain: "fetchai",
      origin_denom: "nanomobx",
      origin_type: "native",
      symbol: "MOBX",
      decimals: 9,
      description: "Native Coin",
      coinGeckoId: "mobix",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/fetchai/asset/mobx.png",
    },
  ],
  "akashnet-2": [
    {
      denom: "uakt",
      type: "staking",
      origin_chain: "akash",
      origin_denom: "uakt",
      origin_type: "staking",
      symbol: "AKT",
      decimals: 6,
      description: "Akash Staking Coin",
      coinGeckoId: "akash-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/akash/asset/akt.png",
    },
    {
      denom:
        "ibc/2E5D0AC026AC1AFA65A23023BA4F24BB8DDF94F118EDC0BAD6F625BFC557CDED",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/1849A429022CBAAB619074CA4412D0016F262218BE6DD828BA8A3DD97D6B52BB",
      type: "ibc",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
    {
      denom:
        "ibc/B567D2C79ED9D9D78B5761E8E4D261C7013E349518FD499D42B2BD1B81266DD6",
      type: "ibc",
      origin_chain: "kava",
      origin_denom: "ukava",
      origin_type: "staking",
      symbol: "KAVA",
      decimals: 6,
      coinGeckoId: "kava",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/kava.png",
    },
    {
      denom:
        "ibc/3A67DDC3D4035596F1E4D5B563F434ED3FB0CD06169AE4779FB224CE5EF757A7",
      type: "ibc",
      origin_chain: "kava",
      origin_denom: "swp",
      origin_type: "native",
      symbol: "SWP",
      decimals: 6,
      coinGeckoId: "kava-swap",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/swp.png",
    },
    {
      denom:
        "ibc/9554B3A33B18F2FA7492E2EBB4D128FD98D812BB182B12CC6BCB5E94161E2C10",
      type: "ibc",
      origin_chain: "kava",
      origin_denom: "hard",
      origin_type: "native",
      symbol: "HARD",
      decimals: 6,
      coinGeckoId: "kava-lend",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/hard.png",
    },
    {
      denom:
        "ibc/F5CCE0AC7102584371EBA8A2C7B1094EAE554994B91B0511581BD2AB0237ED62",
      type: "ibc",
      origin_chain: "kava",
      origin_denom: "usdx",
      origin_type: "native",
      symbol: "USDX",
      decimals: 6,
      coinGeckoId: "usdx",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/usdx.png",
    },
    {
      denom:
        "ibc/AAFAD8AC1A29CDA9985742B9DE3C32C1163798919C0B3A4C339A70D5F49D1E15",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/B4F8297D4C270E82BDF11D51FD51A9FD23B0958B98B1E08346477452119E7D70",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/8DF58513AF8A608CD13929F5300EBCBD034FAFBA284691E8FC414A193F57529C",
      type: "ibc",
      origin_chain: "sifchain",
      origin_denom: "rowan",
      origin_type: "staking",
      symbol: "ROWAN",
      decimals: 18,
      coinGeckoId: "sifchain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/sifchain/asset/rowan.png",
    },
  ],
  nyx: [
    {
      denom: "unyx",
      type: "staking",
      origin_chain: "nyx",
      origin_denom: "unyx",
      origin_type: "staking",
      symbol: "NYX",
      decimals: 6,
      description: "Nyx Staking Coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/nyx/asset/nyx.png",
    },
    {
      denom: "unym",
      type: "native",
      origin_chain: "nyx",
      origin_denom: "unym",
      origin_type: "native",
      symbol: "NYM",
      decimals: 6,
      description: "Native Coin",
      coinGeckoId: "nym",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/nyx/asset/nym.png",
    },
    {
      denom:
        "ibc/FC9D92EC12BC974E8B6179D411351524CD5C2EBC3CE29D5BA856414FEFA47093",
      type: "ibc",
      origin_chain: "gravity-bridge",
      origin_denom: "ugraviton",
      origin_type: "staking",
      symbol: "GRAV",
      decimals: 6,
      coinGeckoId: "graviton",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/gravity-bridge/asset/grav.png",
    },
  ],
  "umee-1": [
    {
      denom: "uumee",
      type: "staking",
      origin_chain: "umee",
      origin_denom: "uumee",
      origin_type: "staking",
      symbol: "UMEE",
      decimals: 6,
      description: "Umee Staking Coin",
      coinGeckoId: "umee",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/umee/asset/umee.png",
    },
    {
      denom:
        "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/04CE51E6E02243E565AE676DD60336E48D455F8AAD0611FA0299A22FDAC448D6",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "weth",
      origin_type: "erc20",
      symbol: "axlWETH",
      decimals: 18,
      coinGeckoId: "weth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/weth.png",
    },
    {
      denom:
        "ibc/153B97FE395140EAAA2D7CAC537AF1804AEC5F0595CBC5F1603094018D158C0C",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "wbtc",
      origin_type: "erc20",
      symbol: "axlWBTC",
      decimals: 8,
      coinGeckoId: "wrapped-bitcoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/wbtc.png",
    },
    {
      denom:
        "ibc/49788C29CD84E08D25CA7BE960BC1F61E88FEFC6333F58557D236D693398466A",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "axlUSDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
    {
      denom:
        "ibc/6B49A789937D4E50BF01F0F50DDEDF5C1103EDF01306B7021BDF23BDE65D99BA",
      type: "ibc",
      origin_chain: "stride",
      origin_denom: "stuosmo",
      origin_type: "native",
      symbol: "stOSMO",
      decimals: 6,
      coinGeckoId: "stride-staked-osmo",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/stosmo.png",
    },
    {
      denom:
        "ibc/8184469200C5E667794375F5B0EC3B9ABB6FF79082941BF5D0F8FF59FEBA862E",
      type: "ibc",
      origin_chain: "bnb-smart-chain",
      origin_denom: "wbnb",
      origin_type: "staking",
      symbol: "axlWBNB",
      decimals: 18,
      coinGeckoId: "binancecoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bnb-smart-chain/asset/wbnb.png",
    },
    {
      denom:
        "ibc/AB2652E28C9961D13CFF2EC5F53C7E2965C8D0CF37A33CC97D8EEF6212F315C8",
      type: "ibc",
      origin_chain: "moonbeam",
      origin_denom: "xcdot",
      origin_type: "erc20",
      symbol: "axlDOT",
      decimals: 10,
      coinGeckoId: "xcdot",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/moonbeam/asset/xcdot.png",
    },
    {
      denom:
        "ibc/BA460328D9ABA27E643A924071FDB3836E4CE8084C6D2380F25EFAB85CF8EB11",
      type: "ibc",
      origin_chain: "agoric",
      origin_denom: "uist",
      origin_type: "native",
      symbol: "IST",
      decimals: 6,
      coinGeckoId: "inter-stable-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/agoric/asset/ist.png",
    },
    {
      denom:
        "ibc/C86651B4D30C1739BF8B061E36F4473A0C9D60380B52D01E56A6874037A5D060",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "dai",
      origin_type: "erc20",
      symbol: "axlDAI",
      decimals: 18,
      coinGeckoId: "dai",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/dai.png",
    },
    {
      denom:
        "ibc/C8B3026C2844D204F3A49F91058DC947F01F2FC36AFF17850FFC8701504BDDEE",
      type: "ibc",
      origin_chain: "stride",
      origin_denom: "stuatom",
      origin_type: "native",
      symbol: "stATOM",
      decimals: 6,
      coinGeckoId: "stride-staked-atom",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/statom.png",
    },
    {
      denom:
        "ibc/D1CB2804AA5EB64D503F28E8DF3552F8A4D642802B66EFE50DE432B755F37AE1",
      type: "ibc",
      origin_chain: "axelar",
      origin_denom: "uaxl",
      origin_type: "staking",
      symbol: "AXL",
      decimals: 6,
      coinGeckoId: "axelar",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/axelar/asset/axl.png",
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
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
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
      coinGeckoId: "akash-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/akash/asset/akt.png",
    },
    {
      denom:
        "ibc/FAEC929814E0D916C019EB4B8BE58360EC3B6AB6A2B3185CB1EA0B54832DEE68",
      type: "ibc",
      origin_chain: "polygon",
      origin_denom: "wmatic",
      origin_type: "erc20",
      symbol: "axlWMATIC",
      decimals: 18,
      coinGeckoId: "wmatic",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/polygon/asset/wmatic.png",
    },
    {
      denom:
        "ibc/223420B0E8CF9CC47BCAB816AB3A20AE162EED27C1177F4B2BC270C83E11AD8D",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "uusdt",
      origin_type: "erc20",
      symbol: "axlUSDT",
      decimals: 6,
      coinGeckoId: "tether",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdt.png",
    },
    {
      denom:
        "ibc/452372B8214E22C625E98958C5EDFB939C48E6590E40B711E9D30206EF8EDC9B",
      type: "ibc",
      origin_chain: "terra",
      origin_denom: "uluna",
      origin_type: "staking",
      symbol: "LUNA",
      decimals: 6,
      coinGeckoId: "terra-luna-2",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/asset/luna.png",
    },
  ],
  "chihuahua-1": [
    {
      denom: "uhuahua",
      type: "staking",
      origin_chain: "chihuahua",
      origin_denom: "uhuahua",
      origin_type: "staking",
      symbol: "HUAHUA",
      decimals: 6,
      description: "Chihuahua Staking Coin",
      coinGeckoId: "chihuahua-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/chihuahua/asset/huahua.png",
    },
    {
      denom:
        "ibc/FAC1BAAA6ECDCB88408A6EEEA13AD4736DA687F85ACD22B5BBD00D36754AC0FA",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/C1A2C4681159048DD4A116652D8594EC5CD1C30D9FD282A9DAEAD6328CF3CDCA",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/6F0955036B92C0A1EE4EB03942A989369DB275CA57454E5F564B581AB5D81CDB",
      type: "ibc",
      origin_chain: "injective",
      origin_denom: "inj",
      origin_type: "staking",
      symbol: "INJ",
      decimals: 18,
      coinGeckoId: "injective-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/injective/asset/inj.png",
    },
    {
      denom:
        "ibc/EB2CED20AB0466F18BE49285E56B31306D4C60438A022EA995BA65D5E3CF7E09",
      type: "ibc",
      origin_chain: "secret",
      origin_denom: "uscrt",
      origin_type: "staking",
      symbol: "SCRT",
      decimals: 6,
      coinGeckoId: "secret",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/secret/asset/scrt.png",
    },
    {
      denom:
        "ibc/89C79BD28DCCF300B9EE87740B061011AD870EC480777FAB95D85B3ED36BC06C",
      type: "ibc",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
  ],
  "columbus-5": [
    {
      denom: "uluna",
      type: "staking",
      origin_chain: "terra",
      origin_denom: "uluna",
      origin_type: "staking",
      symbol: "LUNA",
      decimals: 6,
      description: "Terra Staking Coin",
      coinGeckoId: "terra-luna-2",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/asset/luna.png",
    },
  ],
  "nois-1": [
    {
      denom: "unois",
      type: "staking",
      origin_chain: "nois",
      origin_denom: "unois",
      origin_type: "staking",
      symbol: "NOIS",
      decimals: 6,
      description: "Nois Staking Coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/nois/asset/nois.png",
    },
  ],
  "crescent-1": [
    {
      denom: "ucre",
      type: "staking",
      origin_chain: "crescent",
      origin_denom: "ucre",
      origin_type: "staking",
      symbol: "CRE",
      decimals: 6,
      description: "Crescent Staking Coin",
      coinGeckoId: "crescent-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crescent/asset/cre.png",
    },
    {
      denom: "ubcre",
      type: "native",
      origin_chain: "crescent",
      origin_denom: "ubcre",
      origin_type: "native",
      symbol: "bCRE",
      decimals: 6,
      description: "Crescent Liquidated CRE",
      coinGeckoId: "liquid-staking-crescent",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crescent/asset/bcre.png",
    },
    {
      denom:
        "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/C950356239AD2A205DE09FDF066B1F9FF19A7CA7145EA48A5B19B76EE47E52F7",
      type: "ibc",
      origin_chain: "gravity-bridge",
      origin_denom: "ugraviton",
      origin_type: "staking",
      symbol: "GRAV",
      decimals: 6,
      coinGeckoId: "graviton",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/gravity-bridge/asset/grav.png",
    },
    {
      denom:
        "ibc/DBF5FA602C46392DE9F4796A0FC7D02F3A8A3D32CA3FAA50B761D4AA6F619E95",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "weth",
      origin_type: "bridge",
      symbol: "gWETH",
      decimals: 18,
      coinGeckoId: "weth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/weth.png",
    },
    {
      denom:
        "ibc/CD01034D6749F20AAC5330EF4FD8B8CA7C40F7527AB8C4A302FBD2A070852EE1",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "bridge",
      symbol: "USDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
    {
      denom:
        "ibc/F1806958CA98757B91C3FA1573ECECD24F6FA3804F074A6977658914A49E65A3",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "weth",
      origin_type: "bridge",
      symbol: "axlWETH",
      decimals: 18,
      coinGeckoId: "weth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/weth.png",
    },
    {
      denom:
        "ibc/BFF0D3805B50D93E2FA5C0B2DDF7E0B30A631076CD80BC12A48C0E95404B4A41",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "bridge",
      symbol: "axlUSDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
    {
      denom:
        "ibc/11F940BCDFD7CFBFD7EDA13F25DA95D308286D441209D780C9863FD4271514EB",
      type: "ibc",
      origin_chain: "agoric",
      origin_denom: "ubld",
      origin_type: "staking",
      symbol: "BLD",
      decimals: 6,
      coinGeckoId: "agoric",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/agoric/asset/bld.png",
    },
    {
      denom:
        "ibc/CA1261224952DF089EFD363D8DBB30A8AB6D8CD181E60EE9E68E432F8DE14FE3",
      type: "ibc",
      origin_chain: "agoric",
      origin_denom: "uist",
      origin_type: "native",
      symbol: "IST",
      decimals: 6,
      coinGeckoId: "inter-stable-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/agoric/asset/ist.png",
    },
    {
      denom:
        "ibc/5A76568E079A31FA12165E4559BA9F1E9D4C97F9C2060B538C84DCD503815E30",
      type: "ibc",
      origin_chain: "injective",
      origin_denom: "inj",
      origin_type: "staking",
      symbol: "INJ",
      decimals: 18,
      coinGeckoId: "injective-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/injective/asset/inj.png",
    },
    {
      denom:
        "ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8",
      type: "ibc",
      origin_chain: "terra-classic",
      origin_denom: "uluna",
      origin_type: "staking",
      symbol: "LUNC",
      decimals: 6,
      coinGeckoId: "terra-luna-classic",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra-classic/asset/lunc.png",
    },
    {
      denom:
        "ibc/8F865D9760B482FF6254EDFEC1FF2F1273B9AB6873A7DE484F89639795D73D75",
      type: "ibc",
      origin_chain: "terra",
      origin_denom: "uluna",
      origin_type: "staking",
      symbol: "LUNA",
      decimals: 6,
      coinGeckoId: "terra",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/asset/luna.png",
    },
    {
      denom:
        "ibc/0634D0993744740D675AD01E81156EAC945AEAAE17C074918DC7FF52F41B263E",
      type: "ibc",
      origin_chain: "axelar",
      origin_denom: "uaxl",
      origin_type: "staking",
      symbol: "AXL",
      decimals: 6,
      coinGeckoId: "axelar",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/axelar/asset/axl.png",
    },
    {
      denom:
        "ibc/61DF64ADF65230540C14C63D64897BE08A3DC9A516A91425913F01240E2F432F",
      type: "ibc",
      origin_chain: "comdex",
      origin_denom: "ucmdx",
      origin_type: "staking",
      symbol: "CMDX",
      decimals: 6,
      coinGeckoId: "comdex",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/comdex/asset/cmdx.png",
    },
    {
      denom:
        "ibc/9EC8A1701813BB7B73BFED2496009ABB2C8BF187E6CDFA788D77F68E08BC05CD",
      type: "ibc",
      origin_chain: "comdex",
      origin_denom: "ucmst",
      origin_type: "staking",
      symbol: "CMDX",
      decimals: 6,
      coinGeckoId: "composite",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/comdex/asset/cmst.png",
    },
    {
      denom:
        "ibc/C814F0B662234E24248AE3B2FE2C1B54BBAF12934B757F6E7BC5AEC119963895",
      type: "ibc",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
    {
      denom:
        "ibc/10A0DD366A472B098DFD93FBAE62E65DA387F314872C4AD3AE43185154738D8D",
      type: "ibc",
      origin_chain: "mars-protocol",
      origin_denom: "umars",
      origin_type: "staking",
      symbol: "MARS",
      decimals: 6,
      coinGeckoId: "mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/mars-protocol/asset/mars.png",
    },
    {
      denom:
        "ibc/1620B95419728A7DEF482DEB9462DD6B9FA120BCB49CCCF74209A56AB9835E59",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "wbtc",
      origin_type: "bridge",
      symbol: "gWBTC",
      decimals: 8,
      coinGeckoId: "gravity-bridge-wbtc",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/wbtc.png",
    },
    {
      denom:
        "ibc/4171A6F59F8A708D807E03B43FA0E16EC7041C189557B7A8E519757424367D41",
      type: "ibc",
      origin_chain: "stride",
      origin_denom: "staevmos",
      origin_type: "native",
      symbol: "stEVMOS",
      decimals: 18,
      coinGeckoId: "stride-staked-evmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/stevmos.png",
    },
    {
      denom:
        "ibc/4DF678EF85F1FD3CEFF41429E14B22E5D7730B00230688E6783AF06112415620",
      type: "ibc",
      origin_chain: "canto",
      origin_denom: "acanto",
      origin_type: "staking",
      symbol: "CANTO",
      decimals: 18,
      coinGeckoId: "canto",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/canto/asset/canto.png",
    },
    {
      denom:
        "ibc/6F4968A73F90CF7DE6394BF937D6DF7C7D162D74D839C13F53B41157D315E05F",
      type: "ibc",
      origin_chain: "terra-classic",
      origin_denom: "uusd",
      origin_type: "native",
      symbol: "USTC",
      decimals: 6,
      coinGeckoId: "terraclassicusd",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra-classic/asset/uusd.png",
    },
    {
      denom:
        "ibc/73E97EB411B29C6F989C35D277D1A7FC65083572F102AC6BD101884EE9FB2C9F",
      type: "ibc",
      origin_chain: "evmos",
      origin_denom: "aevmos",
      origin_type: "staking",
      symbol: "EVMOS",
      decimals: 18,
      coinGeckoId: "evmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/asset/evmos.png",
    },
    {
      denom:
        "ibc/764D1629980B02BAFF3D25BEE4FB1E0C5E350AFA252FDF66E68E10D2179A826A",
      type: "ibc",
      origin_chain: "okc",
      origin_denom: "wei",
      origin_type: "staking",
      symbol: "OKT",
      decimals: 18,
      coinGeckoId: "okc-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crescent/asset/okt.png",
    },
    {
      denom:
        "ibc/D64F87FAE0B35C1954DD7921BA7A2939705DE77CBF72B8002F2E3552EDE4DE52",
      type: "ibc",
      origin_chain: "stride",
      origin_denom: "stuatom",
      origin_type: "native",
      symbol: "stATOM",
      decimals: 6,
      coinGeckoId: "stride-staked-atom",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/statom.png",
    },
    {
      denom:
        "ibc/E32F6485CDAE995FC492010770936119D0BF90F5226C9AED727988DF03B5F569",
      type: "ibc",
      origin_chain: "persistence",
      origin_denom: "stk/uatom",
      origin_type: "native",
      symbol: "stkATOM",
      decimals: 6,
      coinGeckoId: "stkatom",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/persistence/asset/stkatom.png",
    },
    {
      denom:
        "ibc/65CE3A1EC2EE4CAAC202494AE4E857D60704C46CE4770AD8BD80E41429618D58",
      type: "ibc",
      origin_chain: "iris",
      origin_denom: "uiris",
      origin_type: "staking",
      symbol: "IRIS",
      decimals: 6,
      coinGeckoId: "iris-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/iris/asset/iris.png",
    },
    {
      denom:
        "ibc/C8597ECBB1156C89A9CCEA8B3704F9E196926030371BE919BB9167FE3E6BAE29",
      type: "ibc",
      origin_chain: "noble",
      origin_denom: "ufrienzies",
      origin_type: "native",
      symbol: "FRNZ",
      decimals: 6,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/noble/asset/frnz.png",
    },
    {
      denom:
        "ibc/BAEA8E5E532DD3442D8938DA6E3C456EEE52CFD2CCC1B3512B0A77E7BEDB2F45",
      type: "ibc",
      origin_chain: "comdex",
      origin_denom: "uharbor",
      origin_type: "native",
      symbol: "HARBOR",
      decimals: 6,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/comdex/asset/harbor.png",
    },
    {
      denom:
        "ibc/5EDC10227E40B52D893F5A26C107E2A338C4A643615C10B356DC62B5F4FE1DB1",
      type: "ibc",
      origin_chain: "crypto-org",
      origin_denom: "basecro",
      origin_type: "staking",
      symbol: "CRO",
      decimals: 8,
      coinGeckoId: "crypto-com-chain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crypto-org/asset/cro.png",
    },
    {
      denom:
        "ibc/4DD3698C2FCEA87CDE843D3EA6228F2589A4DF6655A7C16D766010D9CA2E69FB",
      type: "ibc",
      origin_chain: "evmos",
      origin_denom: "neok",
      origin_type: "erc20",
      symbol: "NEOK",
      decimals: 18,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/asset/neok.png",
    },
  ],
  "dimension_37-1": [
    {
      denom: "axpla",
      type: "staking",
      origin_chain: "xpla",
      origin_denom: "axpla",
      origin_type: "staking",
      symbol: "XPLA",
      decimals: 18,
      description: "XPLA Staking Coin",
      coinGeckoId: "xpla",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/xpla/asset/xpla.png",
    },
    {
      denom:
        "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "axlUSDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
  ],
  "gravity-bridge-3": [
    {
      denom: "ugraviton",
      type: "staking",
      origin_chain: "gravity-bridge",
      origin_denom: "ugraviton",
      origin_type: "staking",
      symbol: "GRAVITON",
      decimals: 6,
      description: "Gravity-bridge Staking Coin",
      coinGeckoId: "graviton",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/gravity-bridge/asset/grav.png",
    },
    {
      denom:
        "ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/2E5D0AC026AC1AFA65A23023BA4F24BB8DDF94F118EDC0BAD6F625BFC557CDED",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/0C273962C274B2C05B22D9474BFE5B84D6A6FCAD198CB9B0ACD35EA521A36606",
      type: "ibc",
      origin_chain: "nyx",
      origin_denom: "unym",
      origin_type: "native",
      symbol: "NYM",
      decimals: 6,
      coinGeckoId: "nym",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/nyx/asset/nym.png",
    },
    {
      denom:
        "ibc/74A48437840E981DD7789856D97EE5E3751DF474D22EDCD66DB046AF0B725A64",
      type: "ibc",
      origin_chain: "persistence",
      origin_denom: "uxprt",
      origin_type: "staking",
      symbol: "XPRT",
      decimals: 6,
      coinGeckoId: "persistence",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/persistence/asset/xprt.png",
    },
    {
      denom:
        "ibc/048BE20AE2E6BFD4142C547E04F17E5F94363003A12B7B6C084E08101BFCF7D1",
      type: "ibc",
      origin_chain: "chihuahua",
      origin_denom: "uhuahua",
      origin_type: "staking",
      symbol: "HUAHUA",
      decimals: 6,
      coinGeckoId: "chihuahua-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/chihuahua/asset/huahua.png",
    },
    {
      denom:
        "ibc/5012B1C96F286E8A6604A87037CE51241C6F1CA195B71D1E261FCACB69FB6BC2",
      type: "ibc",
      origin_chain: "cheqd",
      origin_denom: "ncheq",
      origin_type: "staking",
      symbol: "CHEQ",
      decimals: 8,
      coinGeckoId: "cheqd-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cheqd/asset/cheq.png",
    },
    {
      denom:
        "ibc/3D5109BC236E6BD75F90CC03A5B7AA360FF3CB3F535B662227CEE78E83477AD9",
      type: "ibc",
      origin_chain: "iris",
      origin_denom: "uiris",
      origin_type: "staking",
      symbol: "IRIS",
      decimals: 6,
      coinGeckoId: "iris-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/iris/asset/iris.png",
    },
    {
      denom:
        "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602",
      type: "ibc",
      origin_chain: "stargaze",
      origin_denom: "ustars",
      origin_type: "staking",
      symbol: "STARS",
      decimals: 6,
      coinGeckoId: "stargaze",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stargaze/asset/stars.png",
    },
    {
      denom:
        "ibc/7907EA1A11FD4FC2A815FCAA54948C42F08E3F3C874EE48861386286FEB80160",
      type: "ibc",
      origin_chain: "secret",
      origin_denom: "uscrt",
      origin_type: "staking",
      symbol: "SCRT",
      decimals: 6,
      coinGeckoId: "secret",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/secret/asset/scrt.png",
    },
    {
      denom:
        "ibc/4CD51DA94425EB1C8D1983832E46F410528DB2AAFBFC0C646845DAC2DB7D97AE",
      type: "ibc",
      origin_chain: "crescent",
      origin_denom: "ucre",
      origin_type: "staking",
      symbol: "CRE",
      decimals: 6,
      coinGeckoId: "crescent-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crescent/asset/cre.png",
    },
    {
      denom:
        "ibc/5AEBA89C7BEEF2C56EE23AC2138661C2EE7AB33C48CDE4C3C1E2E3218C4A2C41",
      type: "ibc",
      origin_chain: "crescent",
      origin_denom: "ubcre",
      origin_type: "native",
      symbol: "bCRE",
      decimals: 6,
      coinGeckoId: "liquid-staking-crescent",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crescent/asset/bcre.png",
    },
    {
      denom:
        "ibc/D157AD8A50DAB0FC4EB95BBE1D9407A590FA2CDEE04C90A76C005089BF76E519",
      type: "ibc",
      origin_chain: "unification",
      origin_denom: "nund",
      origin_type: "staking",
      symbol: "FUND",
      decimals: 9,
      coinGeckoId: "unification",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/unification/asset/fund.png",
    },
    {
      denom: "gravity0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "wbtc",
      origin_type: "erc20",
      symbol: "WBTC",
      decimals: 8,
      coinGeckoId: "wrapped-bitcoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/wbtc.png",
    },
    {
      denom: "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "weth",
      origin_type: "erc20",
      symbol: "WETH",
      decimals: 18,
      coinGeckoId: "weth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/weth.png",
    },
    {
      denom: "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "USDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
    {
      denom: "gravity0x6B175474E89094C44Da98b954EedeAC495271d0F",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "dai",
      origin_type: "erc20",
      symbol: "DAI",
      decimals: 18,
      coinGeckoId: "dai",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/dai.png",
    },
    {
      denom: "gravity0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "uni",
      origin_type: "erc20",
      symbol: "UNI",
      decimals: 18,
      coinGeckoId: "uniswap",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/uni.png",
    },
    {
      denom: "gravity0x45804880de22913dafe09f4980848ece6ecbaf78",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "paxg",
      origin_type: "erc20",
      symbol: "PAXG",
      decimals: 18,
      coinGeckoId: "pax-gold",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/paxg.png",
    },
    {
      denom: "gravity0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "storj",
      origin_type: "erc20",
      symbol: "STORJ",
      decimals: 8,
      coinGeckoId: "storj",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/storj.png",
    },
    {
      denom: "gravity0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "steth",
      origin_type: "erc20",
      symbol: "STETH",
      decimals: 18,
      coinGeckoId: "staked-ether",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/steth.png",
    },
    {
      denom: "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "pstake",
      origin_type: "erc20",
      symbol: "PSTAKE",
      decimals: 18,
      coinGeckoId: "pstake-finance",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/pstake.png",
    },
    {
      denom: "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "usdt",
      origin_type: "erc20",
      symbol: "USDT",
      decimals: 6,
      coinGeckoId: "tether",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdt.png",
    },
    {
      denom: "gravity0x2C5Bcad9Ade17428874855913Def0A02D8bE2324",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "stketh",
      origin_type: "erc20",
      symbol: "stkETH",
      decimals: 18,
      coinGeckoId: "pstake-staked-eth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/stketh.png",
    },
    {
      denom: "gravity0x30D20208d987713f46DFD34EF128Bb16C404D10f",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "sd",
      origin_type: "erc20",
      symbol: "SD",
      decimals: 18,
      coinGeckoId: "stader",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/sd.png",
    },
    {
      denom: "gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "page",
      origin_type: "erc20",
      symbol: "PAGE",
      decimals: 8,
      coinGeckoId: "page",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/page.png",
    },
    {
      denom: "gravity0x853d955aCEf822Db058eb8505911ED77F175b99e",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "frax",
      origin_type: "erc20",
      symbol: "FRAX",
      decimals: 18,
      coinGeckoId: "frax",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/frax.png",
    },
  ],
  "meme-1": [
    {
      denom: "umeme",
      type: "staking",
      origin_chain: "meme",
      origin_denom: "umeme",
      origin_type: "staking",
      symbol: "MEME",
      decimals: 6,
      description: "Meme Staking Coin",
      coinGeckoId: "meme-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/meme/asset/meme.png",
    },
    {
      denom:
        "ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
  ],
  "quasar-1": [
    {
      denom: "uqsr",
      type: "staking",
      origin_chain: "quasar",
      origin_denom: "uqsr",
      origin_type: "staking",
      symbol: "QSR",
      decimals: 6,
      description: "Quasar Staking Coin",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/quasar/asset/qsr.png",
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
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "axlUSDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
  ],
  "bitcanna-1": [
    {
      denom: "ubcna",
      type: "staking",
      origin_chain: "bitcanna",
      origin_denom: "ubcna",
      origin_type: "staking",
      symbol: "BCNA",
      decimals: 6,
      description: "Bitcanna Staking Coin",
      coinGeckoId: "bitcanna",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bitcanna/asset/bcna.png",
    },
    {
      denom:
        "ibc/8D9262E35CAE362FA74AE05E430550757CF8D842EC1B241F645D3CB7179AFD10",
      type: "ibc",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
    {
      denom:
        "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
  ],
  "evmos_9001-2": [
    {
      denom: "aevmos",
      type: "staking",
      origin_chain: "evmos",
      origin_denom: "aevmos",
      origin_type: "staking",
      symbol: "EVMOS",
      decimals: 18,
      description: "Evmos Staking Coin",
      coinGeckoId: "evmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/asset/evmos.png",
    },
    {
      denom:
        "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/ADF401C952ADD9EE232D52C8303B8BE17FE7953C8D420F20769AF77240BD0C58",
      type: "ibc",
      origin_chain: "injective",
      origin_denom: "inj",
      origin_type: "staking",
      symbol: "INJ",
      decimals: 18,
      coinGeckoId: "injective-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/injective/asset/inj.png",
    },
    {
      denom:
        "ibc/1FA2E811AA853A2AE028D82D490B1E967312DB871C9A40B19684FACB1DDD7881",
      type: "ibc",
      origin_chain: "crypto-org",
      origin_denom: "basecro",
      origin_type: "staking",
      symbol: "CRO",
      decimals: 8,
      coinGeckoId: "crypto-com-chain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crypto-org/asset/cro.png",
    },
    {
      denom:
        "ibc/7F0C2CB6E79CC36D29DA7592899F98E3BEFD2CF77A94340C317032A78812393D",
      type: "ibc",
      origin_chain: "gravity-bridge",
      origin_denom: "ugraviton",
      origin_type: "staking",
      symbol: "GRAV",
      decimals: 6,
      coinGeckoId: "graviton",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/gravity-bridge/asset/grav.png",
    },
    {
      denom:
        "ibc/693989F95CF3279ADC113A6EF21B02A51EC054C95A9083F2E290126668149433",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "gUSDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
    {
      denom:
        "ibc/DF63978F803A2E27CA5CC9B7631654CCF0BBC788B3B7F0A10200508E37C70992",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdt",
      origin_type: "erc20",
      symbol: "gUSDT",
      decimals: 6,
      coinGeckoId: "tether",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdt.png",
    },
    {
      denom:
        "ibc/350B6DC0FF48E3BDB856F40A8259909E484259ED452B3F4F39A0FEF874F30F61",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "wbtc",
      origin_type: "erc20",
      symbol: "gWBTC",
      decimals: 8,
      coinGeckoId: "wrapped-bitcoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/wbtc.png",
    },
    {
      denom:
        "ibc/6B3FCE336C3465D3B72F7EFB4EB92FC521BC480FE9653F627A0BD0237DF213F3",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "weth",
      origin_type: "erc20",
      symbol: "gWETH",
      decimals: 18,
      coinGeckoId: "weth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/weth.png",
    },
    {
      denom:
        "ibc/F96A7F81E8F82E4EE81F94D507CD257319EFB70FE46E23B4953F63B62E855603",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "dai",
      origin_type: "erc20",
      symbol: "gDAI",
      decimals: 18,
      coinGeckoId: "dai",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/dai.png",
    },
    {
      denom:
        "ibc/46AB1362B4446BCE0FD7D2F247FFCA8CC39BC6CA7AEAD03C77CABBD1CB41E5C9",
      type: "ibc",
      origin_chain: "tgrade",
      origin_denom: "utgd",
      origin_type: "staking",
      symbol: "TGD",
      decimals: 6,
      coinGeckoId: "tgrade",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/tgrade/asset/tgd.png",
    },
    {
      denom:
        "ibc/63C53CBDF471D4E867366ABE2E631197257118D1B2BEAD1946C8A408F96464C3",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "axlUSDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
    {
      denom:
        "ibc/C834CD421B4FD910BBC97E06E86B5E6F64EA2FE36D6AE0E4304C2E1FB1E7333C",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "wbtc",
      origin_type: "erc20",
      symbol: "axlWBTC",
      decimals: 8,
      coinGeckoId: "wrapped-bitcoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/wbtc.png",
    },
    {
      denom:
        "ibc/356EDE917394B2AEF7F915EB24FA683A0CCB8D16DD4ECCEDC2AD0CEC6B66AC81",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "weth",
      origin_type: "erc20",
      symbol: "axlWETH",
      decimals: 18,
      coinGeckoId: "weth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/weth.png",
    },
    {
      denom:
        "ibc/CBA4784581AD4BEF308C536A3CD44D4A940A520E61B0D1E4FB115C539F61DEE5",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "dai",
      origin_type: "erc20",
      symbol: "axlDAI",
      decimals: 18,
      coinGeckoId: "dai",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/dai.png",
    },
    {
      denom:
        "ibc/7A043B7AAABF55E77C66A815F7E64B1450BAF0704FDFB16A7BD8CF4AF585687E",
      type: "ibc",
      origin_chain: "acrechain",
      origin_denom: "aacre",
      origin_type: "staking",
      symbol: "ACRE",
      decimals: 18,
      coinGeckoId: "arable-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/acrechain/asset/acre.png",
    },
    {
      denom:
        "ibc/F2EFEE7ABE073C133AF0541085B4AAD68C4A4BE43BEC501C342FF33FE0E3E0CE",
      type: "ibc",
      origin_chain: "acrechain",
      origin_denom: "cnto",
      origin_type: "erc20",
      symbol: "CNTO",
      decimals: 18,
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/acrechain/asset/cnto.png",
    },
    {
      denom: "erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9",
      type: "native",
      origin_chain: "evmos",
      origin_denom: "neok",
      origin_type: "erc20",
      symbol: "NEOK",
      decimals: 18,
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/asset/neok.png",
    },
  ],
  "eightball-1": [
    {
      denom: "uebl",
      type: "staking",
      origin_chain: "8ball",
      origin_denom: "uebl",
      origin_type: "staking",
      symbol: "EBL",
      decimals: 6,
      description: "8ball Staking Coin",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/8ball/asset/8ball.png",
    },
  ],
  "migaloo-1": [
    {
      denom: "uwhale",
      type: "staking",
      origin_chain: "migaloo",
      origin_denom: "uwhale",
      origin_type: "staking",
      symbol: "WHALE",
      decimals: 6,
      description: "WHALE Staking Coin",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/migaloo/asset/whitewhale.png",
    },
    {
      denom:
        "ibc/84B8C4F1FE15019DBD937B5670905B6280BB7C0D031E9F4D9F50E33386D3CAE6",
      type: "ibc",
      origin_chain: "terra",
      origin_denom: "cub",
      origin_type: "cw20",
      symbol: "CUB",
      decimals: 6,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/asset/cub.png",
    },
    {
      denom:
        "ibc/E224A26BBDD3FBBB461CBFC40EDC74BAA9606C667371F428F147A8D6C98C28D6",
      type: "ibc",
      origin_chain: "terra",
      origin_denom: "blue",
      origin_type: "cw20",
      symbol: "BLUE",
      decimals: 6,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/asset/blue.png",
    },
  ],
  "teritori-1": [
    {
      denom: "utori",
      type: "staking",
      origin_chain: "teritori",
      origin_denom: "utori",
      origin_type: "staking",
      symbol: "TORI",
      decimals: 6,
      description: "Teritori Staking Coin",
      coinGeckoId: "teritori",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/teritori/asset/tori.png",
    },
    {
      denom:
        "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
  ],
  "core-1": [
    {
      denom: "uxprt",
      type: "staking",
      origin_chain: "persistence",
      origin_denom: "uxprt",
      origin_type: "staking",
      symbol: "XPRT",
      decimals: 6,
      description: "Persistence Staking Coin",
      coinGeckoId: "persistence",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/persistence/asset/xprt.png",
    },
    {
      denom: "stk/uatom",
      type: "native",
      origin_chain: "persistence",
      origin_denom: "stk/uatom",
      origin_type: "native",
      symbol: "stkATOM",
      decimals: 6,
      description: "PSTAKE Liquid-Staked ATOM",
      coinGeckoId: "stkatom",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/persistence/asset/stkatom.png",
    },
    {
      denom:
        "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "pstake",
      origin_type: "erc20",
      symbol: "PSTAKE",
      decimals: 18,
      coinGeckoId: "pstake-finance",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/pstake.png",
    },
    {
      denom:
        "ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/69B4810E989B56FC6CA41F395228236FA7E7F59B9A3B7AF3FB0A344361C38389",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/BA51309DEEE69EF9159FADDCD9F566C372157A1F4E559076D201B255C27F484A",
      type: "ibc",
      origin_chain: "sifchain",
      origin_denom: "rowan",
      origin_type: "staking",
      symbol: "ROWAN",
      decimals: 18,
      coinGeckoId: "sifchain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/sifchain/asset/rowan.png",
    },
    {
      denom:
        "ibc/CA687302422C075B26948BEC7143F6D47BACAB53421D57DF30741F91D4DFCA1F",
      type: "ibc",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
    {
      denom:
        "ibc/31D711D31CD5D83D98E76B1486EEDA1A38CD1F7D6FCBD03521FE51323115AECA",
      type: "ibc",
      origin_chain: "gravity-bridge",
      origin_denom: "ugraviton",
      origin_type: "staking",
      symbol: "GRAV",
      decimals: 6,
      coinGeckoId: "graviton",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/gravity-bridge/asset/grav.png",
    },
  ],
  "shentu-2.2": [
    {
      denom: "uctk",
      type: "staking",
      origin_chain: "shentu",
      origin_denom: "uctk",
      origin_type: "staking",
      symbol: "CTK",
      decimals: 6,
      description: "Shentu Staking Coin",
      coinGeckoId: "certik",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/shentu/asset/ctk.png",
    },
  ],
  "axelar-dojo-1": [
    {
      denom: "uaxl",
      type: "staking",
      origin_chain: "axelar",
      origin_denom: "uaxl",
      origin_type: "staking",
      symbol: "AXL",
      decimals: 6,
      description: "Axelar Staking Coin",
      coinGeckoId: "axelar",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/axelar/asset/axl.png",
    },
    {
      denom:
        "ibc/9117A26BA81E29FA4F78F57DC2BD90CD3D26848101BA880445F119B22A1E254E",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/9E3EB38E5E157AEBFF4A8EAC66E654BC8ECFCB1F758F4D1C0F2D65945E9E2935",
      type: "ibc",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
    {
      denom:
        "ibc/B090DC21658BD57698522880590CA53947B8B09355764131AA94EC75517D46A5",
      type: "ibc",
      origin_chain: "crescent",
      origin_denom: "ucre",
      origin_type: "staking",
      symbol: "CRE",
      decimals: 6,
      coinGeckoId: "crescent-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crescent/asset/cre.png",
    },
    {
      denom:
        "ibc/FC48493C53C0A6EF28A191F42A65500643DDF8A0B5B89ADF3FC5FCB60AA6D92A",
      type: "ibc",
      origin_chain: "crescent",
      origin_denom: "ubcre",
      origin_type: "staking",
      symbol: "bCRE",
      decimals: 6,
      coinGeckoId: "liquid-staking-crescent",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crescent/asset/bcre.png",
    },
    {
      denom:
        "ibc/ADF401C952ADD9EE232D52C8303B8BE17FE7953C8D420F20769AF77240BD0C58",
      type: "ibc",
      origin_chain: "injective",
      origin_denom: "inj",
      origin_type: "staking",
      symbol: "INJ",
      decimals: 18,
      coinGeckoId: "injective-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/injective/asset/inj.png",
    },
    {
      denom:
        "ibc/5B0968D76C6250F0824BD0BB4317DB34E884A14B345C83FB8256809855AC7CA7",
      type: "ibc",
      origin_chain: "secret",
      origin_denom: "uscrt",
      origin_type: "staking",
      symbol: "SCRT",
      decimals: 6,
      coinGeckoId: "secret",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/secret/asset/scrt.png",
    },
    {
      denom:
        "ibc/1EDB735A58AA984F6FF11E332077D8A05D5E70E355427C2CF419BD1566FC1E2C",
      type: "ibc",
      origin_chain: "kujira",
      origin_denom: "ukuji",
      origin_type: "staking",
      symbol: "KUJI",
      decimals: 6,
      coinGeckoId: "kujira",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kujira/asset/kuji.png",
    },
    {
      denom:
        "ibc/A139C0E0B5E87CBA8EAEEB12B9BEE13AC7C814CFBBFA87BBCADD67E31003466C",
      type: "ibc",
      origin_chain: "stargaze",
      origin_denom: "ustars",
      origin_type: "staking",
      symbol: "STARS",
      decimals: 6,
      coinGeckoId: "stargaze",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stargaze/asset/stars.png",
    },
    {
      denom:
        "ibc/7E3492CD5C2BC8F4C1E936E8AFB8BDD1B45526F8D716BB00B3A4465089E616F5",
      type: "ibc",
      origin_chain: "asset-mantle",
      origin_denom: "umntl",
      origin_type: "staking",
      symbol: "MNTL",
      decimals: 6,
      coinGeckoId: "assetmantle",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/asset-mantle/asset/mntl.png",
    },
    {
      denom:
        "ibc/B76399CD0009818F7D347EEC032A4E472173D12F0DC99C2ACFB6BEFCC01030E3",
      type: "ibc",
      origin_chain: "fetchai",
      origin_denom: "afet",
      origin_type: "staking",
      symbol: "FET",
      decimals: 18,
      coinGeckoId: "fetch-ai",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/fetchai/asset/fet.png",
    },
    {
      denom:
        "ibc/33C0B536F10138B8F2F7485F0A48F53C4F5A7004DFAB00EA750312731209293F",
      type: "ibc",
      origin_chain: "ki-chain",
      origin_denom: "uxki",
      origin_type: "staking",
      symbol: "XKI",
      decimals: 6,
      coinGeckoId: "ki",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ki-chain/asset/xki.png",
    },
    {
      denom:
        "ibc/73D370D177CC659EA123B423D1AC194F0733537E5A346ECEA1DCBC8FEBB45FD3",
      type: "ibc",
      origin_chain: "evmos",
      origin_denom: "aevmos",
      origin_type: "staking",
      symbol: "EVMOS",
      decimals: 18,
      coinGeckoId: "evmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/asset/evmos.png",
    },
    {
      denom:
        "ibc/5336218FAC4BC06222A3FDD158602CBAAAAE1B16D4B738732C03F6ABDDB1E948",
      type: "ibc",
      origin_chain: "regen",
      origin_denom: "uregen",
      origin_type: "staking",
      symbol: "REGEN",
      decimals: 6,
      coinGeckoId: "regen",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/regen/asset/regen.png",
    },
    {
      denom:
        "ibc/ACD9A665DB6C19EC1D057A43D468E324CA9FB9C5ABF82235815F7B7745A15B80",
      type: "ibc",
      origin_chain: "emoney",
      origin_denom: "ungm",
      origin_type: "staking",
      symbol: "NGM",
      decimals: 6,
      coinGeckoId: "e-money",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/emoney/asset/ngm.png",
    },
    {
      denom:
        "ibc/373EF14936B38AC8F8A7E7024C0FB7099369FDDFDA3CDA9EFA73684B16249B64",
      type: "ibc",
      origin_chain: "emoney",
      origin_denom: "eeur",
      origin_type: "native",
      symbol: "EEUR",
      decimals: 6,
      coinGeckoId: "e-money-eur",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/emoney/asset/eeur.png",
    },
    {
      denom:
        "ibc/2ED9C8628F4F8E7B9308E9536E6A6683AC309668278BE15A9A0834305D05FEB8",
      type: "ibc",
      origin_chain: "emoney",
      origin_denom: "enok",
      origin_type: "native",
      symbol: "ENOK",
      decimals: 6,
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/emoney/asset/enok.png",
    },
    {
      denom:
        "ibc/8AB63045FD5AC383AB262B303B80EE05564DEE775CE0F800560864358A565AC7",
      type: "ibc",
      origin_chain: "emoney",
      origin_denom: "esek",
      origin_type: "native",
      symbol: "ESEK",
      decimals: 6,
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/emoney/asset/esek.png",
    },
    {
      denom:
        "ibc/070BC757491B68B55BE06136B5EE317B15C3D16F71CC4F4AB45AD2E2CB1BEF16",
      type: "ibc",
      origin_chain: "emoney",
      origin_denom: "echf",
      origin_type: "native",
      symbol: "ECHF",
      decimals: 6,
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/emoney/asset/echf.png",
    },
    {
      denom:
        "ibc/FF8354E18037DB52CD6DE68E28F880A7764ED214A877F528F8C6E81D6BD5C8B3",
      type: "ibc",
      origin_chain: "emoney",
      origin_denom: "edkk",
      origin_type: "native",
      symbol: "EDKK",
      decimals: 6,
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/emoney/asset/edkk.png",
    },
    {
      denom: "uusdc",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "axlUSDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
    {
      denom: "uusdt",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "usdt",
      origin_type: "erc20",
      symbol: "axlUSDT",
      decimals: 6,
      coinGeckoId: "tether",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdt.png",
    },
    {
      denom: "wbtc-satoshi",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "wbtc",
      origin_type: "erc20",
      symbol: "axlWBTC",
      decimals: 8,
      coinGeckoId: "wrapped-bitcoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/wbtc.png",
    },
    {
      denom: "ape-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "ape",
      origin_type: "erc20",
      symbol: "axlAPE",
      decimals: 18,
      coinGeckoId: "apecoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/ape.png",
    },
    {
      denom: "aave-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "aave",
      origin_type: "erc20",
      symbol: "axlAAVE",
      decimals: 18,
      coinGeckoId: "aave",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/aave.png",
    },
    {
      denom: "dai-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "dai",
      origin_type: "erc20",
      symbol: "axlDAI",
      decimals: 18,
      coinGeckoId: "dai",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/dai.png",
    },
    {
      denom: "frax-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "frax",
      origin_type: "erc20",
      symbol: "axlFRAX",
      decimals: 18,
      coinGeckoId: "frax",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/frax.png",
    },
    {
      denom: "weth-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "weth",
      origin_type: "erc20",
      symbol: "axlWETH",
      decimals: 18,
      coinGeckoId: "weth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/weth.png",
    },
    {
      denom: "link-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "link",
      origin_type: "erc20",
      symbol: "axlLINK",
      decimals: 18,
      coinGeckoId: "chainlink",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/link.png",
    },
    {
      denom: "mkr-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "mkr",
      origin_type: "erc20",
      symbol: "axlMKR",
      decimals: 18,
      coinGeckoId: "maker",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/mkr.png",
    },
    {
      denom: "rai-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "rai",
      origin_type: "erc20",
      symbol: "axlRAI",
      decimals: 18,
      coinGeckoId: "rai",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/rai.png",
    },
    {
      denom: "shib-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "shib",
      origin_type: "erc20",
      symbol: "axlSHIB",
      decimals: 18,
      coinGeckoId: "shiba-inu",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/shib.png",
    },
    {
      denom: "steth-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "steth",
      origin_type: "erc20",
      symbol: "stETH",
      decimals: 18,
      coinGeckoId: "staked-ether",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/steth.png",
    },
    {
      denom: "uni-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "uni",
      origin_type: "erc20",
      symbol: "axlUNI",
      decimals: 18,
      coinGeckoId: "uniswap",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/uni.png",
    },
    {
      denom: "wmatic-wei",
      type: "bridge",
      origin_chain: "polygon",
      origin_denom: "wmatic",
      origin_type: "erc20",
      symbol: "axlWMATIC",
      decimals: 18,
      coinGeckoId: "wmatic",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/polygon/asset/wmatic.png",
    },
    {
      denom: "wglmr-wei",
      type: "bridge",
      origin_chain: "moonbeam",
      origin_denom: "wglmr",
      origin_type: "erc20",
      symbol: "axlWGLMR",
      decimals: 18,
      coinGeckoId: "wrapped-moonbeam",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/moonbeam/asset/wglmr.png",
    },
    {
      denom: "dot-planck",
      type: "bridge",
      origin_chain: "moonbeam",
      origin_denom: "dot",
      origin_type: "erc20",
      symbol: "xcDOT",
      decimals: 10,
      coinGeckoId: "xcdot",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/moonbeam/asset/xcdot.png",
    },
    {
      denom: "wftm-wei",
      type: "bridge",
      origin_chain: "fantom",
      origin_denom: "wftm",
      origin_type: "erc20",
      symbol: "axlWFTM",
      decimals: 18,
      coinGeckoId: "wrapped-fantom",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/fantom/asset/wftm.png",
    },
    {
      denom: "wavax-wei",
      type: "bridge",
      origin_chain: "avalanche",
      origin_denom: "wavax",
      origin_type: "erc20",
      symbol: "axlWAVAX",
      decimals: 18,
      coinGeckoId: "wrapped-avax",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/avalanche/asset/wavax.png",
    },
    {
      denom: "wbnb-wei",
      type: "bridge",
      origin_chain: "bnb-smart-chain",
      origin_denom: "wbnb",
      origin_type: "erc20",
      symbol: "axlWBNB",
      decimals: 18,
      coinGeckoId: "wbnb",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bnb-smart-chain/asset/wbnb.png",
    },
    {
      denom: "busd-wei",
      type: "bridge",
      origin_chain: "bnb-smart-chain",
      origin_denom: "busd",
      origin_type: "erc20",
      symbol: "axlBUSD",
      decimals: 18,
      coinGeckoId: "binance-usd",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bnb-smart-chain/asset/busd.png",
    },
    {
      denom: "wsteth-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "wsteth",
      origin_type: "erc20",
      symbol: "wstETH",
      decimals: 18,
      coinGeckoId: "wrapped-steth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/wsteth.png",
    },
    {
      denom: "sfrxeth-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "sfrxeth",
      origin_type: "erc20",
      symbol: "sfrxETH",
      decimals: 18,
      coinGeckoId: "staked-frax-ether",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/sfrxeth.png",
    },
    {
      denom: "reth-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "reth",
      origin_type: "erc20",
      symbol: "rETH",
      decimals: 18,
      coinGeckoId: "rocket-pool-eth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/reth.png",
    },
    {
      denom: "cbeth-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "cbeth",
      origin_type: "erc20",
      symbol: "cbETH",
      decimals: 18,
      coinGeckoId: "coinbase-wrapped-staked-eth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/cbeth.png",
    },
    {
      denom: "pepe-wei",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "pepe",
      origin_type: "erc20",
      symbol: "axlPEPE",
      decimals: 18,
      coinGeckoId: "pepe",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/pepe.png",
    },
    {
      denom: "cusd-wei",
      type: "bridge",
      origin_chain: "celo",
      origin_denom: "cusd",
      origin_type: "erc20",
      symbol: "cUSD",
      decimals: 18,
      coinGeckoId: "celo-dollar",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/celo/asset/cusd.png",
    },
    {
      denom: "mpx-wei",
      type: "bridge",
      origin_chain: "fantom",
      origin_denom: "mpx",
      origin_type: "erc20",
      symbol: "axlMPX",
      decimals: 18,
      coinGeckoId: "mpx",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/fantom/asset/mpx.png",
    },
    {
      denom: "wfil-wei",
      type: "bridge",
      origin_chain: "filecoin",
      origin_denom: "wfil",
      origin_type: "native",
      symbol: "axlFIL",
      decimals: 18,
      coinGeckoId: "filecoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/filecoin/asset/fil.png",
    },
    {
      denom: "arb-wei",
      type: "bridge",
      origin_chain: "arbitrum",
      origin_denom: "arb",
      origin_type: "native",
      symbol: "axlARB",
      decimals: 18,
      coinGeckoId: "arbitrum",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/arbitrum/asset/arb.png",
    },
  ],
  "stride-1": [
    {
      denom: "ustrd",
      type: "staking",
      origin_chain: "stride",
      origin_denom: "ustrd",
      origin_type: "staking",
      symbol: "STRD",
      decimals: 6,
      description: "Stride Staking Coin",
      coinGeckoId: "stride",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/strd.png",
    },
    {
      denom: "stuatom",
      type: "native",
      origin_chain: "stride",
      origin_denom: "stuatom",
      origin_type: "native",
      symbol: "stATOM",
      decimals: 6,
      description: "Stride Staked Atom",
      coinGeckoId: "stride-staked-atom",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/statom.png",
    },
    {
      denom: "stustars",
      type: "native",
      origin_chain: "stride",
      origin_denom: "stustars",
      origin_type: "native",
      symbol: "stSTARS",
      decimals: 6,
      description: "Stride Staked Stars",
      coinGeckoId: "stride-staked-stars",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/ststars.png",
    },
    {
      denom: "stujuno",
      type: "native",
      origin_chain: "stride",
      origin_denom: "stujuno",
      origin_type: "native",
      symbol: "stJUNO",
      decimals: 6,
      description: "Stride Staked Juno",
      coinGeckoId: "stride-staked-juno",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/stjuno.png",
    },
    {
      denom: "stuosmo",
      type: "native",
      origin_chain: "stride",
      origin_denom: "stuosmo",
      origin_type: "native",
      symbol: "stOSMO",
      decimals: 6,
      description: "Stride Staked Osmo",
      coinGeckoId: "stride-staked-osmo",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/stosmo.png",
    },
    {
      denom: "stuluna",
      type: "native",
      origin_chain: "stride",
      origin_denom: "stuluna",
      origin_type: "native",
      symbol: "stLUNA",
      decimals: 6,
      description: "Stride Staked Luna",
      coinGeckoId: "stride-staked-luna",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/stluna.png",
    },
    {
      denom: "staevmos",
      type: "native",
      origin_chain: "stride",
      origin_denom: "staevmos",
      origin_type: "native",
      symbol: "stEVMOS",
      decimals: 18,
      description: "Stride Staked Evmos",
      coinGeckoId: "stride-staked-evmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/stevmos.png",
    },
    {
      denom: "stinj",
      type: "native",
      origin_chain: "stride",
      origin_denom: "stinj",
      origin_type: "native",
      symbol: "stINJ",
      decimals: 18,
      description: "Stride Staked Injective",
      coinGeckoId: "stride-staked-injective",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/stinj.png",
    },
    {
      denom: "stuumee",
      type: "native",
      origin_chain: "stride",
      origin_denom: "stuumee",
      origin_type: "native",
      symbol: "stUMEE",
      decimals: 6,
      description: "Stride Staked Umee",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/stumee.png",
    },
    {
      denom: "stucmdx",
      type: "native",
      origin_chain: "stride",
      origin_denom: "stucmdx",
      origin_type: "native",
      symbol: "stCMDX",
      decimals: 6,
      description: "Stride Staked CMDX",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/stcmdx.png",
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
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/7EAE5BEF3A26B64AFBD89828AFDDB1DC7024A0276D22745201632C40E6E634D0",
      type: "ibc",
      origin_chain: "stargaze",
      origin_denom: "ustars",
      origin_type: "staking",
      symbol: "STARS",
      decimals: 6,
      coinGeckoId: "stargaze",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stargaze/asset/stars.png",
    },
    {
      denom:
        "ibc/DA356E369C3E5CF6A9F1DCD99CE8ED55FBD595E676A5CF033CE784C060492D5A",
      type: "ibc",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
    {
      denom:
        "ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/2475196A6E87EEA47C8878EDE62E99C0FAA14A81B83165E4121E776622EF59BE",
      type: "ibc",
      origin_chain: "crypto-org",
      origin_denom: "basecro",
      origin_type: "staking",
      symbol: "CRO",
      decimals: 8,
      coinGeckoId: "crypto-com-chain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crypto-org/asset/cro.png",
    },
    {
      denom:
        "ibc/D54D8A7843F08148FEEFA1DDCC7C9EAF94A4FC4F7E42EE90BBB18E157A31FDF1",
      type: "ibc",
      origin_chain: "acrechain",
      origin_denom: "aacre",
      origin_type: "staking",
      symbol: "ACRE",
      decimals: 18,
      coinGeckoId: "arable-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/acrechain/asset/acre.png",
    },
    {
      denom:
        "ibc/DFAE6C8B4F9BC2FE094442BF3BD7F94551BE9C337EFA6A24B0DD6CF54AEED093",
      type: "ibc",
      origin_chain: "acrechain",
      origin_denom: "cnto",
      origin_type: "erc20",
      symbol: "CNTO",
      decimals: 18,
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/acrechain/asset/cnto.png",
    },
    {
      denom:
        "ibc/4B322204B4F59D770680FE4D7A565DDC3F37BFF035474B717476C66A4F83DD72",
      type: "ibc",
      origin_chain: "evmos",
      origin_denom: "aevmos",
      origin_type: "staking",
      symbol: "EVMOS",
      decimals: 18,
      coinGeckoId: "evmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/asset/evmos.png",
    },
    {
      denom:
        "ibc/E61BCB1126F42A2ED73B4CEA2221C9635BC2102F0417543C38071779F991942E",
      type: "ibc",
      origin_chain: "terra",
      origin_denom: "uluna",
      origin_type: "staking",
      symbol: "LUNA",
      decimals: 6,
      coinGeckoId: "terra",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/asset/luna.png",
    },
    {
      denom:
        "ibc/A7454562FF29FE068F42F9DE4805ABEF54F599D1720B345D6518D9B5C64EA6D2",
      type: "ibc",
      origin_chain: "injective",
      origin_denom: "inj",
      origin_type: "staking",
      symbol: "INJ",
      decimals: 18,
      coinGeckoId: "injective-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/injective/asset/inj.png",
    },
    {
      denom:
        "ibc/1A2271226209D309902AFF4F21BD21237CB514DD24EA2EE0423BF74C6135D8B8",
      type: "ibc",
      origin_chain: "umee",
      origin_denom: "uumee",
      origin_type: "staking",
      symbol: "UMEE",
      decimals: 6,
      coinGeckoId: "umee",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/umee/asset/umee.png",
    },
    {
      denom:
        "ibc/EB66980014602E6BD50A1CB9FFB8FA694DC3EC10A48D2C1C649D732954F88D4A",
      type: "ibc",
      origin_chain: "comdex",
      origin_denom: "ucmdx",
      origin_type: "staking",
      symbol: "CMDX",
      decimals: 6,
      coinGeckoId: "comdex",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/comdex/asset/cmdx.png",
    },
  ],
  "kaiyo-1": [
    {
      denom: "ukuji",
      type: "staking",
      origin_chain: "kujira",
      origin_denom: "ukuji",
      origin_type: "staking",
      symbol: "KUJI",
      decimals: 6,
      description: "Kujira Staking Coin",
      coinGeckoId: "kujira",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kujira/asset/kuji.png",
    },
    {
      denom:
        "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
      type: "native",
      origin_chain: "kujira",
      origin_denom:
        "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
      origin_type: "native",
      symbol: "USK",
      decimals: 6,
      description: "USK Stable Asset",
      coinGeckoId: "usk",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kujira/asset/usk.png",
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
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/BBC45F1B65B6D3C11C3C56A9428D38C3A8D03944473791C52DFB7CD3F8342CBC",
      type: "ibc",
      origin_chain: "crypto-org",
      origin_denom: "basecro",
      origin_type: "staking",
      symbol: "CRO",
      decimals: 8,
      coinGeckoId: "crypto-com-chain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crypto-org/asset/cro.png",
    },
    {
      denom:
        "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5",
      type: "ibc",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
    {
      denom:
        "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602",
      type: "ibc",
      origin_chain: "stargaze",
      origin_denom: "ustars",
      origin_type: "staking",
      symbol: "STARS",
      decimals: 6,
      coinGeckoId: "stargaze",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stargaze/asset/stars.png",
    },
    {
      denom:
        "ibc/2F1447818CF99498AE62D9FB4D5E0C9FD48C68FC118C34D2ECFFFED0AD082196",
      type: "ibc",
      origin_chain: "gravity-bridge",
      origin_denom: "ugraviton",
      origin_type: "staking",
      symbol: "GRAV",
      decimals: 6,
      coinGeckoId: "graviton",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/gravity-bridge/asset/grav.png",
    },
    {
      denom:
        "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07",
      type: "ibc",
      origin_chain: "comdex",
      origin_denom: "ucmdx",
      origin_type: "staking",
      symbol: "CMDX",
      decimals: 6,
      coinGeckoId: "comdex",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/comdex/asset/cmdx.png",
    },
    {
      denom:
        "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5",
      type: "ibc",
      origin_chain: "secret",
      origin_denom: "uscrt",
      origin_type: "staking",
      symbol: "SCRT",
      decimals: 6,
      coinGeckoId: "secret",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/secret/asset/scrt.png",
    },
    {
      denom:
        "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10",
      type: "ibc",
      origin_chain: "evmos",
      origin_denom: "aevmos",
      origin_type: "staking",
      symbol: "EVMOS",
      decimals: 18,
      coinGeckoId: "evmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/asset/evmos.png",
    },
    {
      denom:
        "ibc/C01154C2547F4CB10A985EA78E7CD4BA891C1504360703A37E1D7043F06B5E1F",
      type: "ibc",
      origin_chain: "axelar",
      origin_denom: "uaxl",
      origin_type: "staking",
      symbol: "AXL",
      decimals: 6,
      coinGeckoId: "axelar",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/axelar/asset/axl.png",
    },
    {
      denom:
        "ibc/F2331645B9683116188EF36FC04A809C28BD36B54555E8705A37146D0182F045",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdt",
      origin_type: "erc20",
      symbol: "axlUSDT",
      decimals: 6,
      coinGeckoId: "tether",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdt.png",
    },
    {
      denom:
        "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "axlUSDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
    {
      denom:
        "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2",
      type: "ibc",
      origin_chain: "avalanche",
      origin_denom: "wavax",
      origin_type: "erc20",
      symbol: "axlWAVAX",
      decimals: 18,
      coinGeckoId: "wrapped-avax",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/avalanche/asset/wavax.png",
    },
    {
      denom:
        "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "weth",
      origin_type: "erc20",
      symbol: "axlWETH",
      decimals: 18,
      coinGeckoId: "weth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/weth.png",
    },
    {
      denom:
        "ibc/3914BDEF46F429A26917E4D8D434620EC4817DC6B6E68FB327E190902F1E9242",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "dai",
      origin_type: "erc20",
      symbol: "axlDAI",
      decimals: 18,
      coinGeckoId: "dai",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/dai.png",
    },
    {
      denom:
        "ibc/4925CCFAD4FFBC63D7C52BB9AE2DE8CF7D0809124FBA1F44F4F2B7B4267D5E5A",
      type: "ibc",
      origin_chain: "terra",
      origin_denom: "cub",
      origin_type: "cw20",
      symbol: "CUB",
      decimals: 6,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/asset/cub.png",
    },
    {
      denom:
        "ibc/3766EE7E4A42BA83C4AB0DD26B144B26B7758BDAB4017E0924C95FBFC69A2589",
      type: "ibc",
      origin_chain: "terra",
      origin_denom: "blue",
      origin_type: "cw20",
      symbol: "BLUE",
      decimals: 6,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/asset/blue.png",
    },
    {
      denom:
        "ibc/DBF6ABDB5F3D4267C039967515594453F4A31007FD838A566F563A01D2C2FB80",
      type: "ibc",
      origin_chain: "mars-protocol",
      origin_denom: "umars",
      origin_type: "staking",
      symbol: "MARS",
      decimals: 6,
      coinGeckoId: "mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/mars-protocol/asset/mars.png",
    },
  ],
  "phoenix-1": [
    {
      denom: "uluna",
      type: "staking",
      origin_chain: "terra",
      origin_denom: "uluna",
      origin_type: "staking",
      symbol: "LUNA",
      decimals: 6,
      description: "Terra Staking Coin",
      coinGeckoId: "terra-luna-2",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/asset/luna.png",
    },
  ],
  "cosmoshub-4": [
    {
      denom: "uatom",
      type: "staking",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      description: "Cosmos Staking Coin",
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "poolDFB8434D5A80B4EAFA94B6878BD5B85265AC6C5D37204AB899B1C3C52543DA7E",
      type: "pool",
      origin_chain: "cosmos",
      origin_denom:
        "poolDFB8434D5A80B4EAFA94B6878BD5B85265AC6C5D37204AB899B1C3C52543DA7E",
      origin_type: "pool",
      symbol: "GDEX-1",
      decimals: 6,
      description: "pool/1",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/pool.png",
    },
    {
      denom:
        "poolE71FE13681A283B7015E4E4C4852B0EDA72CC97A5CDE2ECA2A6C8C06C86AC775",
      type: "pool",
      origin_chain: "cosmos",
      origin_denom:
        "poolE71FE13681A283B7015E4E4C4852B0EDA72CC97A5CDE2ECA2A6C8C06C86AC775",
      origin_type: "pool",
      symbol: "GDEX-2",
      decimals: 6,
      description: "pool/2",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/pool.png",
    },
    {
      denom:
        "poolD639A99414646D7136C65C6845D0EB3456EDD3D6C2C43050D3FA3A24995B0E75",
      type: "pool",
      origin_chain: "cosmos",
      origin_denom:
        "poolD639A99414646D7136C65C6845D0EB3456EDD3D6C2C43050D3FA3A24995B0E75",
      origin_type: "pool",
      symbol: "GDEX-3",
      decimals: 6,
      description: "pool/3",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/pool.png",
    },
    {
      denom:
        "pool2B9C24833CAA268C9081EC251693A724E8D343FC25A841FF00FD37B047BA4DEA",
      type: "pool",
      origin_chain: "cosmos",
      origin_denom:
        "pool2B9C24833CAA268C9081EC251693A724E8D343FC25A841FF00FD37B047BA4DEA",
      origin_type: "pool",
      symbol: "GDEX-4",
      decimals: 6,
      description: "pool/4",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/pool.png",
    },
    {
      denom:
        "pool32DD066BE949E5FDCC7DC09EBB67C7301D0CA957C2EF56A39B37430165447DAC",
      type: "pool",
      origin_chain: "cosmos",
      origin_denom:
        "pool32DD066BE949E5FDCC7DC09EBB67C7301D0CA957C2EF56A39B37430165447DAC",
      origin_type: "pool",
      symbol: "GDEX-5",
      decimals: 6,
      description: "pool/5",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/pool.png",
    },
    {
      denom:
        "pool4BFAFC499776D30A4FA0D6033135F00CC4EFC770D19A74CAD37433B579F77FC0",
      type: "pool",
      origin_chain: "cosmos",
      origin_denom:
        "pool4BFAFC499776D30A4FA0D6033135F00CC4EFC770D19A74CAD37433B579F77FC0",
      origin_type: "pool",
      symbol: "GDEX-6",
      decimals: 6,
      description: "pool/6",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/pool.png",
    },
    {
      denom:
        "pool7AE391C099D1D88CC85A9FA8A0DC5650BF8DDE0DCE7D0824C073802C020A7747",
      type: "pool",
      origin_chain: "cosmos",
      origin_denom:
        "pool7AE391C099D1D88CC85A9FA8A0DC5650BF8DDE0DCE7D0824C073802C020A7747",
      origin_type: "pool",
      symbol: "GDEX-7",
      decimals: 6,
      description: "pool/7",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/pool.png",
    },
    {
      denom:
        "poolF2805980C54E1474BDCCF70EF5FE881F3B8EFCF8BA3198765C01D91904521788",
      type: "pool",
      origin_chain: "cosmos",
      origin_denom:
        "poolF2805980C54E1474BDCCF70EF5FE881F3B8EFCF8BA3198765C01D91904521788",
      origin_type: "pool",
      symbol: "GDEX-8",
      decimals: 6,
      description: "pool/8",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/pool.png",
    },
    {
      denom:
        "poolBD5F1AF7A8B1F068C178F1D637DF126968EC10AB204A10116E320B2B8AF4FAC2",
      type: "pool",
      origin_chain: "cosmos",
      origin_denom:
        "poolBD5F1AF7A8B1F068C178F1D637DF126968EC10AB204A10116E320B2B8AF4FAC2",
      origin_type: "pool",
      symbol: "GDEX-9",
      decimals: 6,
      description: "pool/9",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/pool.png",
    },
    {
      denom:
        "poolB457CE9240C221C0F76952FED6506F74375EDD38B32A6020B7DDDFD5A4867D5C",
      type: "pool",
      origin_chain: "cosmos",
      origin_denom:
        "poolB457CE9240C221C0F76952FED6506F74375EDD38B32A6020B7DDDFD5A4867D5C",
      origin_type: "pool",
      symbol: "GDEX-10",
      decimals: 6,
      description: "pool/10",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/pool.png",
    },
    {
      denom:
        "poolD1121E78E731AFD35FEA13CF9FA0044A1472F73A0EE784160CCAAAAE5C7AAD7E",
      type: "pool",
      origin_chain: "cosmos",
      origin_denom:
        "poolD1121E78E731AFD35FEA13CF9FA0044A1472F73A0EE784160CCAAAAE5C7AAD7E",
      origin_type: "pool",
      symbol: "GDEX-11",
      decimals: 6,
      description: "pool/11",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/pool.png",
    },
    {
      denom:
        "pool60EFB07817D6B193A9FADA611404B8E11D82D6B7F0D10D57D3134C93E2BF7414",
      type: "pool",
      origin_chain: "cosmos",
      origin_denom:
        "pool60EFB07817D6B193A9FADA611404B8E11D82D6B7F0D10D57D3134C93E2BF7414",
      origin_type: "pool",
      symbol: "GDEX-12",
      decimals: 6,
      description: "pool/12",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/pool.png",
    },
    {
      denom:
        "poolCF8B847997F5EB92B9C8DBAE41656F61D6BE708B1B42D31063291813014AD63F",
      type: "pool",
      origin_chain: "cosmos",
      origin_denom:
        "poolCF8B847997F5EB92B9C8DBAE41656F61D6BE708B1B42D31063291813014AD63F",
      origin_type: "pool",
      symbol: "GDEX-13",
      decimals: 6,
      description: "pool/13",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/pool.png",
    },
    {
      denom:
        "poolAC9AF7B48E4497A0A9AF109E4286464A0EF06E7C35AD79198F03AB17A6A4CCA7",
      type: "pool",
      origin_chain: "cosmos",
      origin_denom:
        "poolAC9AF7B48E4497A0A9AF109E4286464A0EF06E7C35AD79198F03AB17A6A4CCA7",
      origin_type: "pool",
      symbol: "GDEX-14",
      decimals: 6,
      description: "pool/14",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/pool.png",
    },
    {
      denom:
        "poolFD005C5AB01714A4B62E87F5213F5D5CDE357773D70712916A93664BCE5A6931",
      type: "pool",
      origin_chain: "cosmos",
      origin_denom:
        "poolFD005C5AB01714A4B62E87F5213F5D5CDE357773D70712916A93664BCE5A6931",
      origin_type: "pool",
      symbol: "GDEX-15",
      decimals: 6,
      description: "pool/15",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/pool.png",
    },
    {
      denom:
        "ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/5BB694D466CCF099EF73F165F88472AF51D9C4991EAA42BD1168C5304712CC0D",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/68A333688E5B07451F95555F8FE510E43EF9D3D44DF0909964F92081EF9BE5A7",
      type: "ibc",
      origin_chain: "starname",
      origin_denom: "uiov",
      origin_type: "staking",
      symbol: "IOV",
      decimals: 6,
      coinGeckoId: "starname",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/starname/asset/iov.png",
    },
    {
      denom:
        "ibc/12DA42304EE1CE96071F712AA4D58186AD11C3165C0DCDA71E017A54F3935E66",
      type: "ibc",
      origin_chain: "iris",
      origin_denom: "uiris",
      origin_type: "staking",
      symbol: "IRIS",
      decimals: 6,
      coinGeckoId: "iris-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/iris/asset/iris.png",
    },
    {
      denom:
        "ibc/2181AAB0218EAC24BC9F86BD1364FBBFA3E6E3FCC25E88E3E68C15DC6E752D86",
      type: "ibc",
      origin_chain: "akash",
      origin_denom: "uakt",
      origin_type: "staking",
      symbol: "AKT",
      decimals: 6,
      coinGeckoId: "akash-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/akash/asset/akt.png",
    },
    {
      denom:
        "ibc/1FBDD58D438B4D04D26CBFB2E722C18984A0F1A52468C4F42F37D102F3D3F399",
      type: "ibc",
      origin_chain: "regen",
      origin_denom: "uregen",
      origin_type: "staking",
      symbol: "REGEN",
      decimals: 6,
      coinGeckoId: "regen",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/regen/asset/regen.png",
    },
    {
      denom:
        "ibc/42E47A5BA708EBE6E0C227006254F2784E209F4DBD3C6BB77EDC4B29EF875E8E",
      type: "ibc",
      origin_chain: "sentinel",
      origin_denom: "udvpn",
      origin_type: "staking",
      symbol: "DVPN",
      decimals: 6,
      coinGeckoId: "sentinel",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/sentinel/asset/dvpn.png",
    },
    {
      denom:
        "ibc/C932ADFE2B4216397A4F17458B6E4468499B86C3BC8116180F85D799D6F5CC1B",
      type: "ibc",
      origin_chain: "crypto-org",
      origin_denom: "basecro",
      origin_type: "staking",
      symbol: "CRO",
      decimals: 8,
      coinGeckoId: "crypto-com-chain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crypto-org/asset/cro.png",
    },
    {
      denom:
        "ibc/81D08BC39FB520EBD948CF017910DD69702D34BF5AC160F76D3B5CFC444EBCE0",
      type: "ibc",
      origin_chain: "persistence",
      origin_denom: "uxprt",
      origin_type: "staking",
      symbol: "XPRT",
      decimals: 6,
      coinGeckoId: "persistence",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/persistence/asset/xprt.png",
    },
    {
      denom:
        "ibc/F5ED5F3DC6F0EF73FA455337C027FE91ABCB375116BF51A228E44C493E020A09",
      type: "ibc",
      origin_chain: "sifchain",
      origin_denom: "rowan",
      origin_type: "staking",
      symbol: "ROWAN",
      decimals: 18,
      coinGeckoId: "sifchain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/sifchain/asset/rowan.png",
    },
    {
      denom:
        "ibc/B93F321238F7BB15AB5B882660AAE72286C8E9035DE34E2B30F60E54C623C63C",
      type: "ibc",
      origin_chain: "emoney",
      origin_denom: "eeur",
      origin_type: "native",
      symbol: "EEUR",
      decimals: 6,
      coinGeckoId: "e-money-eur",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/emoney/asset/eeur.png",
    },
    {
      denom:
        "ibc/E070CE91CC4BD15AEC9B5788C0826755AAD35052A3037E9AC62BE70B4C9A7DBB",
      type: "ibc",
      origin_chain: "emoney",
      origin_denom: "ungm",
      origin_type: "staking",
      symbol: "NGM",
      decimals: 6,
      coinGeckoId: "e-money",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/emoney/asset/ngm.png",
    },
    {
      denom:
        "ibc/CDAB23DA5495290063363BD1C3499E26189036302DC689985A7E23F8DF8D8DB0",
      type: "ibc",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
    {
      denom:
        "ibc/1D5826F7EDE6E3B13009FEF994DC9CAAF15CC24CA7A9FF436FFB2E56FD72F54F",
      type: "ibc",
      origin_chain: "likecoin",
      origin_denom: "nanolike",
      origin_type: "staking",
      symbol: "LIKE",
      decimals: 9,
      coinGeckoId: "likecoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/likecoin/asset/like.png",
    },
    {
      denom:
        "ibc/6469BDA6F62C4F4B8F76629FA1E72A02A3D1DD9E2B22DDB3C3B2296DEAD29AB8",
      type: "ibc",
      origin_chain: "injective",
      origin_denom: "inj",
      origin_type: "staking",
      symbol: "INJ",
      decimals: 18,
      coinGeckoId: "injective-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/injective/asset/inj.png",
    },
    {
      denom:
        "ibc/533E5FFC606FD11B8DCA309C66AFD6A1F046EF784A73F323A332CF6823F0EA87",
      type: "ibc",
      origin_chain: "ki-chain",
      origin_denom: "uxki",
      origin_type: "staking",
      symbol: "XKI",
      decimals: 6,
      coinGeckoId: "ki",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ki-chain/asset/xki.png",
    },
    {
      denom:
        "ibc/E7D5E9D0E9BF8B7354929A817DD28D4D017E745F638954764AA88522A7A409EC",
      type: "ibc",
      origin_chain: "bitsong",
      origin_denom: "ubtsg",
      origin_type: "staking",
      symbol: "BTSG",
      decimals: 6,
      coinGeckoId: "bitsong",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bitsong/asset/btsg.png",
    },
    {
      denom:
        "ibc/ADBEC1A7AC2FEF73E06B066A1C94DAB6C27924EF7EA3F5A43378150009620284",
      type: "ibc",
      origin_chain: "bitcanna",
      origin_denom: "ubcna",
      origin_type: "staking",
      symbol: "BCNA",
      decimals: 6,
      coinGeckoId: "bitcanna",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bitcanna/asset/bcna.png",
    },
    {
      denom:
        "ibc/8870C4203CEBF2279BA065E3DE95FC3F8E05A4A93424E7DC707A21514BE353A0",
      type: "ibc",
      origin_chain: "kava",
      origin_denom: "ukava",
      origin_type: "staking",
      symbol: "KAVA",
      decimals: 6,
      coinGeckoId: "kava",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/kava.png",
    },
    {
      denom:
        "ibc/20A7DC8E24709E6F1EE0F4E832C2ED345ADD77425890482A349AE3C43CAC6B2C",
      type: "ibc",
      origin_chain: "rizon",
      origin_denom: "uatolo",
      origin_type: "staking",
      symbol: "ATOLO",
      decimals: 6,
      coinGeckoId: "rizon",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/rizon/asset/atolo.png",
    },
    {
      denom:
        "ibc/3F18D520CE791A40357D061FAD657CED6B21D023F229EAF131D7FE7CE6F488BD",
      type: "ibc",
      origin_chain: "crescent",
      origin_denom: "ucre",
      origin_type: "staking",
      symbol: "CRE",
      decimals: 6,
      coinGeckoId: "crescent-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crescent/asset/cre.png",
    },
    {
      denom:
        "ibc/835EE9D00C35D72128F195B50F8A89EB83E5011C43EA0AA00D16348E2208FEBB",
      type: "ibc",
      origin_chain: "crescent",
      origin_denom: "ubcre",
      origin_type: "native",
      symbol: "bCRE",
      decimals: 6,
      coinGeckoId: "liquid-staking-crescent",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crescent/asset/bcre.png",
    },
    {
      denom:
        "ibc/DEC41A02E47658D40FC71E5A35A9C807111F5A6662A3FB5DA84C4E6F53E616B3",
      type: "ibc",
      origin_chain: "umee",
      origin_denom: "uumee",
      origin_type: "staking",
      symbol: "UMEE",
      decimals: 6,
      coinGeckoId: "umee",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/umee/asset/umee.png",
    },
    {
      denom:
        "ibc/1542F8DC70E7999691E991E1EDEB1B47E65E3A217B1649D347098EE48ACB580F",
      type: "ibc",
      origin_chain: "secret",
      origin_denom: "uscrt",
      origin_type: "staking",
      symbol: "SCRT",
      decimals: 6,
      coinGeckoId: "secret",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/secret/asset/scrt.png",
    },
    {
      denom:
        "ibc/19DD710119533524061885A6F190B18AF28D9537E2BAE37F32A62C1A25979287",
      type: "ibc",
      origin_chain: "evmos",
      origin_denom: "aevmos",
      origin_type: "staking",
      symbol: "EVMOS",
      decimals: 18,
      coinGeckoId: "evmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/asset/evmos.png",
    },
    {
      denom:
        "ibc/DB9AAADFBE21E014373EF97141D451F453B9B9A2C8B65F5CF8E7CE57531B6850",
      type: "ibc",
      origin_chain: "crypto-org",
      origin_denom: "basecro",
      origin_type: "staking",
      symbol: "CRO",
      decimals: 8,
      coinGeckoId: "crypto-com-chain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crypto-org/asset/cro.png",
    },
    {
      denom:
        "ibc/9DFC3B38276E617E802EC8E05C85368D36836368795CE16A2A37B9942E29573C",
      type: "ibc",
      origin_chain: "aioz",
      origin_denom: "attoaioz",
      origin_type: "staking",
      symbol: "AIOZ",
      decimals: 18,
      coinGeckoId: "aioz-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/aioz/asset/aioz.png",
    },
    {
      denom:
        "ibc/0025F8A87464A471E66B234C4F93AEC5B4DA3D42D7986451A059273426290DD5",
      type: "ibc",
      origin_chain: "neutron",
      origin_denom: "untrn",
      origin_type: "staking",
      symbol: "NTRN",
      decimals: 6,
      coinGeckoId: "neutron",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/neutron/asset/ntrn.png",
    },
  ],
  "kava_2222-10": [
    {
      denom: "ukava",
      type: "staking",
      origin_chain: "kava",
      origin_denom: "ukava",
      origin_type: "staking",
      symbol: "KAVA",
      decimals: 6,
      description: "Kava Staking Coin",
      coinGeckoId: "kava",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/kava.png",
    },
    {
      denom: "erc20/multichain/dai",
      type: "native",
      origin_chain: "kava",
      origin_denom: "erc20/multichain/dai",
      origin_type: "native",
      symbol: "bDAI",
      decimals: 18,
      description: "DAI Earned in Kava",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/bdai.png",
    },
    {
      denom: "erc20/multichain/usdc",
      type: "native",
      origin_chain: "kava",
      origin_denom: "busdc",
      origin_type: "native",
      symbol: "bUSDC",
      decimals: 6,
      description: "USDC Earned in Kava",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/busdc.png",
    },
    {
      denom: "erc20/multichain/usdt",
      type: "native",
      origin_chain: "kava",
      origin_denom: "busdt",
      origin_type: "native",
      symbol: "bUSDT",
      decimals: 6,
      description: "USDT Earned in Kava",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/busdt.png",
    },
    {
      denom: "erc20/axelar/usdc",
      type: "bridge",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "axlUSDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
    {
      denom: "swp",
      type: "native",
      origin_chain: "kava",
      origin_denom: "swp",
      origin_type: "native",
      symbol: "SWP",
      decimals: 6,
      description: "Kava Swap Coin",
      coinGeckoId: "kava-swap",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/swp.png",
    },
    {
      denom: "usdx",
      type: "native",
      origin_chain: "kava",
      origin_denom: "usdx",
      origin_type: "native",
      symbol: "USDX",
      decimals: 6,
      description: "USD Stable Asset",
      coinGeckoId: "usdx",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/usdx.png",
    },
    {
      denom: "hard",
      type: "native",
      origin_chain: "kava",
      origin_denom: "hard",
      origin_type: "native",
      symbol: "HARD",
      decimals: 6,
      description: "HardPool Gov. Coin",
      coinGeckoId: "kava-lend",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/hard.png",
    },
    {
      denom: "debt",
      type: "native",
      origin_chain: "kava",
      origin_denom: "debt",
      origin_type: "native",
      symbol: "DEBT",
      decimals: 6,
      description: "System Total Debt",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/debt.png",
    },
    {
      denom: "hbtc",
      type: "bridge",
      origin_chain: "huobi",
      origin_denom: "hbtc",
      origin_type: "bridge",
      symbol: "HBTC",
      decimals: 8,
      description: "HBTC on Kava Chain",
      coinGeckoId: "huobi-btc",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/hbtc.png",
    },
    {
      denom: "bnb",
      type: "bridge",
      origin_chain: "bnb-beacon-chain",
      origin_denom: "bnb",
      origin_type: "bep2",
      symbol: "BNB",
      decimals: 8,
      coinGeckoId: "binancecoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bnb-beacon-chain/asset/bnb.png",
    },
    {
      denom: "btcb",
      type: "bridge",
      origin_chain: "bnb-beacon-chain",
      origin_denom: "btcb",
      origin_type: "bep2",
      symbol: "BTCB",
      decimals: 8,
      coinGeckoId: "bitcoin-bep2",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bnb-beacon-chain/asset/btcb.png",
    },
    {
      denom: "busd",
      type: "bridge",
      origin_chain: "bnb-beacon-chain",
      origin_denom: "busd",
      origin_type: "bep2",
      symbol: "BUSD",
      decimals: 8,
      coinGeckoId: "binance-usd",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bnb-beacon-chain/asset/busd.png",
    },
    {
      denom: "xrpb",
      type: "bridge",
      origin_chain: "bnb-beacon-chain",
      origin_denom: "xrpb",
      origin_type: "bep2",
      symbol: "XRPB",
      decimals: 8,
      coinGeckoId: "ripple",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bnb-beacon-chain/asset/xrpb.png",
    },
    {
      denom:
        "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
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
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/799FDD409719A1122586A629AE8FCA17380351A51C1F47A80A1B8E7F2A491098",
      type: "ibc",
      origin_chain: "akash",
      origin_denom: "uakt",
      origin_type: "staking",
      symbol: "AKT",
      decimals: 6,
      coinGeckoId: "akash-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/akash/asset/akt.png",
    },
    {
      denom: "erc20/multichain/wbtc",
      type: "native",
      origin_chain: "kava",
      origin_denom: "wbtc",
      origin_type: "native",
      symbol: "Unknown",
      decimals: 8,
      description: "",
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/unknown.png",
    },
  ],
  "sommelier-3": [
    {
      denom: "usomm",
      type: "staking",
      origin_chain: "sommelier",
      origin_denom: "usomm",
      origin_type: "staking",
      symbol: "SOMM",
      decimals: 6,
      description: "Sommelier Staking Coin",
      coinGeckoId: "sommelier",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/sommelier/asset/somm.png",
    },
    {
      denom:
        "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
  ],
  "crypto-org-chain-mainnet-1": [
    {
      denom: "basecro",
      type: "staking",
      origin_chain: "crypto-org",
      origin_denom: "basecro",
      origin_type: "staking",
      symbol: "CRO",
      decimals: 8,
      description: "Cronos",
      coinGeckoId: "crypto-com-chain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crypto-org/asset/cro.png",
    },
    {
      denom:
        "ibc/67E8B26BE190FB3F191DA72D6A390DB7DFA6E92C99CB37644DECBEBD2A075C41",
      type: "ibc",
      origin_chain: "sifchain",
      origin_denom: "rowan",
      origin_type: "staking",
      symbol: "ROWAN",
      decimals: 18,
      coinGeckoId: "sifchain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/sifchain/asset/rowan.png",
    },
    {
      denom:
        "ibc/B5919B1B65A79F595F71D2E8306FD1FB70B969A268230E745A6DBE86F1060D58",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/80D5E86278CE910A7A9653CCA7DEB62C817E07AF9C0C657B43191C43DE60B107",
      type: "ibc",
      origin_chain: "evmos",
      origin_denom: "aevmos",
      origin_type: "staking",
      symbol: "EVMOS",
      decimals: 18,
      coinGeckoId: "evmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/asset/evmos.png",
    },
  ],
  "stargaze-1": [
    {
      denom: "ustars",
      type: "staking",
      origin_chain: "stargaze",
      origin_denom: "ustars",
      origin_type: "staking",
      symbol: "STARS",
      decimals: 6,
      description: "Stargaze Staking Coin",
      coinGeckoId: "stargaze",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stargaze/asset/stars.png",
    },
    {
      denom:
        "ibc/448C1061CE97D86CC5E86374CD914870FB8EBA16C58661B5F1D3F46729A2422D",
      type: "ibc",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
    {
      denom:
        "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/3554989531C7DB295D548F373FE93205215CAC2820A62D748E5A3703044D481E",
      type: "ibc",
      origin_chain: "gravity-bridge",
      origin_denom: "ugraviton",
      origin_type: "staking",
      symbol: "GRAV",
      decimals: 6,
      coinGeckoId: "graviton",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/gravity-bridge/asset/grav.png",
    },
    {
      denom:
        "ibc/71D1A2823DC0563C5D70CCB64264C0AB5E33F10887FAE3D5889FB31718B2C933",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "gamm/pool/604",
      origin_type: "pool",
      symbol: "gamm/pool/604",
      decimals: 18,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/pool.png",
    },
    {
      denom:
        "ibc/0F181D9F5BB18A8496153C1666E934169515592C135E8E9FCCC355889858EAF9",
      type: "ibc",
      origin_chain: "nois",
      origin_denom: "unois",
      origin_type: "staking",
      symbol: "NOIS",
      decimals: 6,
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/nois/asset/nois.png",
    },
  ],
  "juno-1": [
    {
      denom: "ujuno",
      type: "staking",
      origin_chain: "juno",
      origin_denom: "ujuno",
      origin_type: "staking",
      symbol: "JUNO",
      decimals: 6,
      description: "JUNO Staking Coin",
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
    },
    {
      denom:
        "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
    },
    {
      denom:
        "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
      type: "ibc",
      origin_chain: "osmosis",
      origin_denom: "uion",
      origin_type: "native",
      symbol: "ION",
      decimals: 6,
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
    },
    {
      denom:
        "ibc/008BFD000A10BCE5F0D4DD819AE1C1EC2942396062DABDD6AE64A655ABC7085B",
      type: "ibc",
      origin_chain: "bitsong",
      origin_denom: "ubtsg",
      origin_type: "staking",
      symbol: "BTSG",
      decimals: 6,
      coinGeckoId: "bitsong",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bitsong/asset/btsg.png",
    },
    {
      denom:
        "ibc/A5A405107D27B0C4CDF9C6CCB6FF05EB8D1B7F9F322BE5C1B2315B2758329B87",
      type: "ibc",
      origin_chain: "rizon",
      origin_denom: "uatolo",
      origin_type: "staking",
      symbol: "ATOLO",
      decimals: 6,
      coinGeckoId: "rizon",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/rizon/asset/atolo.png",
    },
    {
      denom:
        "ibc/F6B367385300865F654E110976B838502504231705BAC0849B0651C226385885",
      type: "ibc",
      origin_chain: "stargaze",
      origin_denom: "ustars",
      origin_type: "staking",
      symbol: "STARS",
      decimals: 6,
      coinGeckoId: "stargaze",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stargaze/asset/stars.png",
    },
    {
      denom:
        "ibc/D836B191CDAE8EDACDEBE7B64B504C5E06CC17C6A072DAF278F9A96DF66F6241",
      type: "ibc",
      origin_chain: "chihuahua",
      origin_denom: "uhuahua",
      origin_type: "staking",
      symbol: "HUAHUA",
      decimals: 6,
      coinGeckoId: "chihuahua-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/chihuahua/asset/huahua.png",
    },
    {
      denom:
        "ibc/6842C591DC4588411A565C9FF650FB15A17DFE3F0A43201E8141E4D14B8D171A",
      type: "ibc",
      origin_chain: "dig-chain",
      origin_denom: "udig",
      origin_type: "staking",
      symbol: "DIG",
      decimals: 6,
      coinGeckoId: "dig-chain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/dig-chain/asset/dig.png",
    },
    {
      denom:
        "ibc/7455B3F2F2737906BACF4AE980069A4CAB7C7F9FDAABAEFBA439DF037AEC5898",
      type: "ibc",
      origin_chain: "persistence",
      origin_denom: "uxprt",
      origin_type: "staking",
      symbol: "XPRT",
      decimals: 6,
      coinGeckoId: "persistence",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/persistence/asset/xprt.png",
    },
    {
      denom:
        "ibc/946AD96F278770521526D7283F58268DA2F6ACDDE40324A9D1C86811D78C86A0",
      type: "ibc",
      origin_chain: "comdex",
      origin_denom: "ucmdx",
      origin_type: "staking",
      symbol: "CMDX",
      decimals: 6,
      coinGeckoId: "comdex",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/comdex/asset/cmdx.png",
    },
    {
      denom:
        "ibc/DFC6F33796D5D0075C5FB54A4D7B8E76915ACF434CB1EE2A1BA0BB8334E17C3A",
      type: "ibc",
      origin_chain: "akash",
      origin_denom: "uakt",
      origin_type: "staking",
      symbol: "AKT",
      decimals: 6,
      coinGeckoId: "akash-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/akash/asset/akt.png",
    },
    {
      denom:
        "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      type: "ibc",
      origin_chain: "cosmos",
      origin_denom: "uatom",
      origin_type: "staking",
      symbol: "ATOM",
      decimals: 6,
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
    },
    {
      denom:
        "ibc/92E4AB82E3B2AF2D5181AC69C74F9F6D890442C7B7B02CC8634B9D3ED7CF936D",
      type: "ibc",
      origin_chain: "sifchain",
      origin_denom: "rowan",
      origin_type: "staking",
      symbol: "ROWAN",
      decimals: 18,
      coinGeckoId: "sifchain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/sifchain/asset/rowan.png",
    },
    {
      denom:
        "ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD",
      type: "ibc",
      origin_chain: "secret",
      origin_denom: "uscrt",
      origin_type: "staking",
      symbol: "SCRT",
      decimals: 6,
      coinGeckoId: "secret",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/secret/asset/scrt.png",
    },
    {
      denom:
        "ibc/0CB5D60E57FD521FA39D11E3E410144389010AC5EF5F292BC9BDD832FA2FDBF9",
      type: "ibc",
      origin_chain: "bitcanna",
      origin_denom: "ubcna",
      origin_type: "staking",
      symbol: "BCNA",
      decimals: 6,
      coinGeckoId: "bitcanna",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bitcanna/asset/bcna.png",
    },
    {
      denom:
        "ibc/52423136339C1CE8C91F6A586DFE41591BDDD4665AE526DFFA8421F9ACF95196",
      type: "ibc",
      origin_chain: "emoney",
      origin_denom: "ungm",
      origin_type: "staking",
      symbol: "NGM",
      decimals: 6,
      coinGeckoId: "e-money",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/emoney/asset/ngm.png",
    },
    {
      denom:
        "ibc/B9F7C1E4CE9219B5AF06C47B18661DBD49CCD7A6C18FF789E2FB62BB365CFF9C",
      type: "ibc",
      origin_chain: "emoney",
      origin_denom: "eeur",
      origin_type: "native",
      symbol: "EEUR",
      decimals: 6,
      coinGeckoId: "e-money-eur",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/emoney/asset/eeur.png",
    },
    {
      denom:
        "ibc/EAC38D55372F38F1AFD68DF7FE9EF762DCF69F26520643CF3F9D292A738D8034",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdc",
      origin_type: "erc20",
      symbol: "axlUSDC",
      decimals: 6,
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
    },
    {
      denom:
        "ibc/281FEE887CDF71EB9C1FEFC554822DCB06BE4E8A8BFF944ED64E3D03437E9384",
      type: "ibc",
      origin_chain: "mars-protocol",
      origin_denom: "umars",
      origin_type: "staking",
      symbol: "MARS",
      decimals: 6,
      coinGeckoId: "mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/mars-protocol/asset/mars.png",
    },
    {
      denom:
        "ibc/95A45A81521EAFDBEDAEEB6DA975C02E55B414C95AD3CE50709272366A90CA17",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "weth",
      origin_type: "erc20",
      symbol: "axlWETH",
      decimals: 18,
      coinGeckoId: "weth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/weth.png",
    },
    {
      denom:
        "ibc/3A6ADE78FB8169C034C29C4F2E1A61CE596EC8235366F22381D981A98F1F5A5C",
      type: "ibc",
      origin_chain: "migaloo",
      origin_denom: "uwhale",
      origin_type: "staking",
      symbol: "WHALE",
      decimals: 6,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/migaloo/asset/whitewhale.png",
    },
    {
      denom:
        "ibc/2F7C2A3D5D42553ED46F57D8B0DE3733B1B5FF571E2C6A051D34525904B4C0AF",
      type: "ibc",
      origin_chain: "migaloo",
      origin_denom: "ampwhale",
      origin_type: "native",
      symbol: "ampWHALE",
      decimals: 6,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/migaloo/asset/ampwhale.png",
    },
    {
      denom:
        "ibc/01BAE2E69D02670B22758FBA74E4114B6E88FC1878936C919DA345E6C6C92ABF",
      type: "ibc",
      origin_chain: "migaloo",
      origin_denom: "bwhale",
      origin_type: "native",
      symbol: "bWHALE",
      decimals: 6,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/migaloo/asset/bwhale.png",
    },
    {
      denom:
        "ibc/AEC6690629B7EAF808D1A0B3EEF7C9B9229315F175FE8900AD5C4F7B6FD62E29",
      type: "ibc",
      origin_chain: "terra",
      origin_denom: "cub",
      origin_type: "cw20",
      symbol: "CUB",
      decimals: 6,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/asset/cub.png",
    },
    {
      denom:
        "ibc/738D8F365F1CA9CA6B5851E77EEB878FC6FCC784EE687A10A933F0D1FAC960C0",
      type: "ibc",
      origin_chain: "terra",
      origin_denom: "blue",
      origin_type: "cw20",
      symbol: "BLUE",
      decimals: 6,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/asset/blue.png",
    },
    {
      denom:
        "ibc/1D9E14A1F00613ED39E4B8A8763A20C9BE5B5EA0198F2FE47EAE43CD91A0137B",
      type: "ibc",
      origin_chain: "nois",
      origin_denom: "unois",
      origin_type: "staking",
      symbol: "NOIS",
      decimals: 6,
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/nois/asset/nois.png",
    },
  ],
  "osmosis-1": [
    {
      denom: "uosmo",
      type: "staking",
      origin_chain: "osmosis",
      origin_denom: "uosmo",
      origin_type: "staking",
      symbol: "OSMO",
      decimals: 6,
      description: "Osmosis Staking Coin",
      coinGeckoId: "osmosis",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/osmo.png",
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
      coinGeckoId: "ion",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/osmosis/asset/ion.png",
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
      coinGeckoId: "stride",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/strd.png",
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
      coinGeckoId: "stride-staked-atom",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/statom.png",
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
      coinGeckoId: "stride-staked-osmo",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/stosmo.png",
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
      coinGeckoId: "likecoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/likecoin/asset/like.png",
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
      coinGeckoId: "cheqd-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cheqd/asset/cheq.png",
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
      coinGeckoId: "crypto-com-chain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crypto-org/asset/cro.png",
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
      coinGeckoId: "switcheo",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/carbon/asset/swth.png",
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
      coinGeckoId: "bostrom",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bostrom/asset/boot.png",
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
      coinGeckoId: "cosmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cosmos/asset/atom.png",
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
      coinGeckoId: "akash-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/akash/asset/akt.png",
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
      coinGeckoId: "chihuahua-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/chihuahua/asset/huahua.png",
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
      coinGeckoId: "lum-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/lum/asset/lum.png",
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
      coinGeckoId: "vidulum",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/vidulum/asset/vdl.png",
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
      coinGeckoId: "dig-chain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/dig-chain/asset/dig.png",
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
      coinGeckoId: "desmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/desmos/asset/dsm.png",
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
      coinGeckoId: "certik",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/shentu/asset/ctk.png",
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
      coinGeckoId: "band-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/band/asset/band.png",
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
      coinGeckoId: "starname",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/starname/asset/iov.png",
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
      coinGeckoId: "sommelier",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/sommelier/asset/somm.png",
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
      coinGeckoId: "darcmatter-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/konstellation/asset/darc.png",
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
      coinGeckoId: "decentr",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/decentr/asset/dec.png",
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
      coinGeckoId: "umee",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/umee/asset/umee.png",
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
      coinGeckoId: "omniflix-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/omniflix/asset/flix.png",
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
      coinGeckoId: "sentinel",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/sentinel/asset/dvpn.png",
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
      coinGeckoId: "evmos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/asset/evmos.png",
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
      coinGeckoId: "cerberus-2",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cerberus/asset/crbrus.png",
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
      coinGeckoId: "rizon",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/rizon/asset/atolo.png",
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
      coinGeckoId: "fetch-ai",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/fetchai/asset/fet.png",
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
      coinGeckoId: "assetmantle",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/asset-mantle/asset/mntl.png",
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
      coinGeckoId: "microtick",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/microtick/asset/tick.png",
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
      coinGeckoId: "sifchain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/sifchain/asset/rowan.png",
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
      coinGeckoId: "bitcanna",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bitcanna/asset/bcna.png",
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
      coinGeckoId: "iris-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/iris/asset/iris.png",
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
      coinGeckoId: "bitsong",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bitsong/asset/btsg.png",
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
      coinGeckoId: "stargaze",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stargaze/asset/stars.png",
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
      coinGeckoId: "ki",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ki-chain/asset/xki.png",
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
      coinGeckoId: "regen",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/regen/asset/regen.png",
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
      coinGeckoId: "medibloc",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/medibloc/asset/med.png",
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
      coinGeckoId: "comdex",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/comdex/asset/cmdx.png",
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
      coinGeckoId: "secret",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/secret/asset/scrt.png",
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
      coinGeckoId: "kujira",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kujira/asset/kuji.png",
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
      coinGeckoId: "injective-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/injective/asset/inj.png",
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
      coinGeckoId: "tgrade",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/tgrade/asset/tgd.png",
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
      coinGeckoId: "kava",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/kava/asset/kava.png",
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
      coinGeckoId: "persistence",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/persistence/asset/xprt.png",
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
      coinGeckoId: "stkatom",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/persistence/asset/stkatom.png",
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
      coinGeckoId: "pstake-finance",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/pstake.png",
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
      coinGeckoId: "e-money",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/emoney//asset/ngm.png",
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
      coinGeckoId: "e-money-eur",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/emoney/asset/eeur.png",
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
      coinGeckoId: "graviton",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/gravity-bridge/asset/grav.png",
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
      coinGeckoId: "weth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/weth.png",
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
      coinGeckoId: "dai",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/dai.png",
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
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
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
      coinGeckoId: "axelar",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/axelar/asset/axl.png",
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
      coinGeckoId: "usd-coin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdc.png",
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
      coinGeckoId: "dai",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/dai.png",
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
      coinGeckoId: "wrapped-bitcoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/wbtc.png",
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
      coinGeckoId: "weth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/weth.png",
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
      coinGeckoId: "chainlink",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/link.png",
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
      coinGeckoId: "maker",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/mkr.png",
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
      coinGeckoId: "xcdot",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/moonbeam/asset/xcdot.png",
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
      coinGeckoId: "binancecoin",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bnb-smart-chain/asset/wbnb.png",
    },
    {
      denom:
        "ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D",
      type: "ibc",
      origin_chain: "bnb-smart-chain",
      origin_denom: "busd",
      origin_type: "erc20",
      symbol: "axlBUSD",
      decimals: 18,
      coinGeckoId: "binance-usd",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/bnb-smart-chain/asset/busd.png",
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
      coinGeckoId: "wmatic",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/polygon/asset/wmatic.png",
    },
    {
      denom:
        "ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "usdt",
      origin_type: "erc20",
      symbol: "axlUSDT",
      decimals: 6,
      coinGeckoId: "tether",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/usdt.png",
    },
    {
      denom:
        "ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "wsteth",
      origin_type: "erc20",
      symbol: "wstETH",
      decimals: 18,
      coinGeckoId: "wrapped-steth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/wsteth.png",
    },
    {
      denom:
        "ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "sfrxeth",
      origin_type: "erc20",
      symbol: "sfrxETH",
      decimals: 18,
      coinGeckoId: "staked-frax-ether",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/sfrxeth.png",
    },
    {
      denom:
        "ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "reth",
      origin_type: "erc20",
      symbol: "rETH",
      decimals: 18,
      coinGeckoId: "rocket-pool-eth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/reth.png",
    },
    {
      denom:
        "ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "cbeth",
      origin_type: "erc20",
      symbol: "cbETH",
      decimals: 18,
      coinGeckoId: "coinbase-wrapped-staked-eth",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/cbeth.png",
    },
    {
      denom:
        "ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B",
      type: "ibc",
      origin_chain: "ethereum",
      origin_denom: "pepe",
      origin_type: "erc20",
      symbol: "PEPE",
      decimals: 18,
      coinGeckoId: "pepe",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/ethereum/asset/pepe.png",
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
      coinGeckoId: "juno-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/juno.png",
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
      coinGeckoId: "hope-galaxy",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/hope.png",
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
      coinGeckoId: "neta",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/neta.png",
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
      coinGeckoId: "marble",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/marble.png",
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
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/sejuno.png",
    },
    {
      denom:
        "ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3",
      type: "ibc",
      origin_chain: "terra",
      origin_denom: "cub",
      origin_type: "cw20",
      symbol: "CUB",
      decimals: 6,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/asset/cub.png",
    },
    {
      denom:
        "ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E",
      type: "ibc",
      origin_chain: "terra",
      origin_denom: "blue",
      origin_type: "cw20",
      symbol: "BLUE",
      decimals: 6,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/terra/asset/blue.png",
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
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/bjuno.png",
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
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/juno/asset/seasy.png",
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
      coinGeckoId: "cudos",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/cudos/asset/cudos.png",
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
      coinGeckoId: "provenance-blockchain",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/provenance/asset/hash.png",
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
      coinGeckoId: "crescent-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/crescent/asset/cre.png",
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
      coinGeckoId: "teritori",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/teritori/asset/tori.png",
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
      coinGeckoId: "agoric",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/agoric/asset/bld.png",
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
      coinGeckoId: "inter-stable-token",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/agoric/asset/ist.png",
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
      coinGeckoId: "arable-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/acrechain/asset/acre.png",
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
      coinGeckoId: "medasdigital",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/medasdigital/asset/medas.png",
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
      coinGeckoId: "mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/mars-protocol/asset/mars.png",
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
      coinGeckoId: "quicksilver",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/quicksilver/asset/qck.png",
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
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/quicksilver/asset/qstars.png",
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
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/quicksilver/asset/qatom.png",
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
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/quicksilver/asset/qregen.png",
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
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/quicksilver/asset/qosmo.png",
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
      coinGeckoId: "toucan-protocol-nature-carbon-tonne",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/regen/asset/nct.png",
    },
    {
      denom:
        "ibc/BB0AFE2AFBD6E883690DAE4B9168EAC2B306BCC9C9292DACBB4152BBB08DB25F",
      type: "ibc",
      origin_chain: "aioz",
      origin_denom: "attoaioz",
      origin_type: "staking",
      symbol: "AIOZ",
      decimals: 18,
      coinGeckoId: "aioz-network",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/aioz/asset/aioz.png",
    },
    {
      denom:
        "ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B",
      type: "ibc",
      origin_chain: "odin",
      origin_denom: "loki",
      origin_type: "staking",
      symbol: "ODIN",
      decimals: 6,
      coinGeckoId: "odin-protocol",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png",
    },
    {
      denom:
        "ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6",
      type: "ibc",
      origin_chain: "arbitrum",
      origin_denom: "arb",
      origin_type: "native",
      symbol: "ARB",
      decimals: 18,
      coinGeckoId: "arbitrum",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/arbitrum/asset/arb.png",
    },
    {
      denom:
        "ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D",
      type: "ibc",
      origin_chain: "whitewhale",
      origin_denom: "uwhite",
      origin_type: "erc20",
      symbol: "WHALE",
      decimals: 6,
      coinGeckoId: "white-whale",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/whitewhale/asset/whale.png",
    },
    {
      denom:
        "ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E",
      type: "ibc",
      origin_chain: "comdex",
      origin_denom: "ucmst",
      origin_type: "native",
      symbol: "CMST",
      decimals: 6,
      coinGeckoId: "composite",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/comdex/asset/cmst.png",
    },
    {
      denom:
        "ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F",
      type: "ibc",
      origin_chain: "stride",
      origin_denom: "stuumee",
      origin_type: "native",
      symbol: "stUMEE",
      decimals: 6,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/stumee.png",
    },
    {
      denom:
        "ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01",
      type: "ibc",
      origin_chain: "stride",
      origin_denom: "staevmos",
      origin_type: "native",
      symbol: "stEVMOS",
      decimals: 18,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/stevmos.png",
    },
    {
      denom:
        "ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A",
      type: "ibc",
      origin_chain: "stride",
      origin_denom: "stustars",
      origin_type: "native",
      symbol: "stSTARS",
      decimals: 6,
      coinGeckoId: "stride-staked-stars",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/ststars.png",
    },
    {
      denom:
        "ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE",
      type: "ibc",
      origin_chain: "stride",
      origin_denom: "stujuno",
      origin_type: "native",
      symbol: "stJUNO",
      decimals: 6,
      coinGeckoId: "stride-staked-juno",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/stride/asset/stjuno.png",
    },
    {
      denom:
        "ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477",
      type: "ibc",
      origin_chain: "quasar",
      origin_denom: "uqsr",
      origin_type: "staking",
      symbol: "QSR",
      decimals: 6,
      coinGeckoId: "",
      image:
        "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/quasar/asset/qsr.png",
    },
  ],
};

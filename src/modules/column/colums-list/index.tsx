import React from "react";
import "./styles.scss";
import Button from "../../../components/button";
import CardWithText from "../../../components/card-with-text";

const ColumnList = () => {
  const list = [
    {
      menuName: "2021.05.17   23:25",
      thumb: require("../../../assets/images/column-1.jpg"),
      desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"]
    },
    {
      menuName: "2021.05.17   23:25",
      thumb: require("../../../assets/images/column-2.jpg"),
      desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"]
    },
    {
      menuName: "2021.05.17   23:25",
      thumb: require("../../../assets/images/column-3.jpg"),
      desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"]
    },
    {
      menuName: "2021.05.17   23:25",
      thumb: require("../../../assets/images/column-4.jpg"),
      desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"]
    },
    {
      menuName: "2021.05.17   23:25",
      thumb: require("../../../assets/images/column-5.jpg"),
      desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"]
    },
    {
      menuName: "2021.05.17   23:25",
      thumb: require("../../../assets/images/column-6.jpg"),
      desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"]
    },
    {
      menuName: "2021.05.17   23:25",
      thumb: require("../../../assets/images/column-7.jpg"),
      desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"]
    },
    {
      menuName: "2021.05.17   23:25",
      thumb: require("../../../assets/images/column-8.jpg"),
      desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"]
    }
  ];

  const _renderMenus = () => (
    <div className={"d-flex flex-wrap justify-content-between gap-2 text-start"}>
      {list.map(lst => (
        <CardWithText
          key={lst.menuName}
          source={lst.thumb}
          title={lst.menuName}
          desc={lst.desc}
          tags={lst.tags}
        />
      ))}
    </div>
  )

  return (
    <section className={"container menu-category my-5 text-center p-0"}>
      {_renderMenus()}

      <Button text={"記録をもっと見る"}/>
    </section>
  )
}

export default ColumnList;
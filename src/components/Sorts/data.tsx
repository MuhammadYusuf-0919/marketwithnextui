import Bottle from "@/assets/bottle";
import Carrot from "@/assets/carrot";
import Fish from "@/assets/fish";
import Meat from "@/assets/meat";
import Table from "@/assets/table";

export const sorts = [
    {
        img: (val: string) => <Fish className={val} />,
        des: 'Fish'
    },
    {
        img: (val: string) => <Carrot className={val} />,
        des: 'Veggie'
    },
    {
        img: (val: string) => <Bottle className={val} />,
        des: "Detox"
    },
    {
        img: (val: string) => <Meat className={val} />,
        des: 'Keto'
    },
    {
        img: (val: string) => <Table className={val} />,
        des: 'Table'
    },

]
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { 
	GiBarn,
	GiBoatFishing, 
	GiCactus, 
	GiCastle, 
	GiCaveEntrance, 
	GiForestCamp, 
	GiIsland, 
	GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
	{
		label: 'Beach',
		icon: TbBeach,
		description: 'This property is close to the beach!'
	},
	{
		label: 'Windmills',
		icon: GiWindmill,
		description: 'This property has windmills!'
	},
	{
		label: 'Modern',
		icon: MdOutlineVilla,
		description: 'This property is modern!'
	},
	{
		label: 'Countryside',
		icon: TbMountain,
		description: 'This property is in the countryside!'
	},
	{
		label: 'Pools',
		icon: TbPool,
		description: 'This property has a pool'
	},
	{
		label: 'Islands',
		icon: GiIsland,
		description: 'This property is on an island'
	},
	{
		label: 'Lake',
		icon: GiBoatFishing,
		description: 'This property is close to a lake'
	},
	{
		label: 'Skiing',
		icon: FaSkiing,
		description: 'This property is has skiing activites'
	},
	{
		label: 'Castles',
		icon: GiCastle,
		description: 'This property is in a castle'
	},
	{
		label: 'Camping',
		icon: GiForestCamp,
		description: 'This property has camping activities'
	},
	{
		label: 'Arctic',
		icon: BsSnow,
		description: 'This property has camping activities!'
	},
	{
		label: 'Cave',
		icon: GiCaveEntrance,
		description: 'This property is in a cave!'
	},
	{
		label: 'Desert',
		icon: GiCactus,
		description: 'This property is in the desert!'
	},
	{
		label: 'Barn',
		icon: GiBarn,
		description: 'This property is in the farm!'
	},
	{
		label: 'Lux',
		icon: IoDiamond,
		description: 'This property is luxurious!'
	},
]

const Categories = () => {
	const params = useSearchParams();
	const category = params?.get('category');
	const pathname = usePathname();

	const isMainPage = pathname === '/';

	if (!isMainPage) {
		return null;
	}
	return ( 
		<Container>
			<div
				className='
					pt-4
					flex
					flex-row
					items-center
					justify-between
					overflow-x-auto
				'

			>
				{categories.map((item) => (
					<CategoryBox
						key={item.label}
						label={item.label}
						selected={category == item.label}
						icon={item.icon}
					/>
				))}
			</div>
		</Container>
	 );
}
 
export default Categories;
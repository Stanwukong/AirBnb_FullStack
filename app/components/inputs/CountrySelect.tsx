"use client"; 

import Select from 'react-select';
import useCountries from '../../hooks/useCountries';

export type CountrySelectValue = {
	flag: string;
	label: string;
	latlng: number[];
	value: string;
	region: string;
}

interface CountrySelectProps {
	value?: CountrySelectValue;	
	onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
	value,
	onChange
}) => {
	const { getAll } = useCountries();
	return ( 
		<div>
			<Select 
				placeholder="Select a country"
				isClearable
				options={getAll()}
				value={value}
				onChange={() => onChange(value as CountrySelectValue)}
				formatOptionLabel={(option: any) => (
				  <div className="flex flex-row items-center gap-3">
					<div>{option.flag}</div>
					<div>{option.label}, 
					<span className="text-neutral-500 ml-1">{option.region}</span>
					</div>
				  </div>
				)}
			/>
		</div>
	 );
}
 
export default CountrySelect;
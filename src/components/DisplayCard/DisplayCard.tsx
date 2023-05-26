export type DisplayCardProps = {
	key: number;
	name: string;
};

const capitaliseFirstLetter = (word: string) =>
	word.charAt(0).toUpperCase() + word.slice(1);

export const DisplayCard = (props: DisplayCardProps) => {
	return (
		<div>
			<p>{capitaliseFirstLetter(props.name)}</p>
		</div>
	);
};

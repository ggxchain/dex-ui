import styles from "./ellipsis.module.scss";
export const Ellipsis = (value: string) => {
	return (
		<span title={value} className={styles.ellipsis}>
			{value}
		</span>
	);
};

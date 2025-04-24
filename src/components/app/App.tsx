import { CSSProperties, useState } from 'react';

import { Article } from '../.././components/article/Article';
import { ArticleParamsForm } from '../.././components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from '../.././constants/articleProps';

import styles from '../../styles/index.module.scss';

export const App = () => {
	const [state, setState] = useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': state.fontFamilyOption.value,
					'--font-size': state.fontSizeOption.value,
					'--font-color': state.fontColor.value,
					'--container-width': state.contentWidth.value,
					'--bg-color': state.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onApply={setState} />
			<Article />
		</main>
	);
};

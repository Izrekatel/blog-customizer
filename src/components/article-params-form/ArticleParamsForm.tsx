import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Separator } from 'src/ui/separator';
import { RadioGroup } from 'src/ui/radio-group';
import { Select } from 'src/ui/select';
import { useState } from 'react';
import {
	fontSizeOptions,
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const openContainer = () => {
		setIsOpen(isOpen === true ? false : true);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={openContainer} />
			<aside
				className={clsx(styles.container, { [styles.containerOpen]: isOpen })}>
				<form title='Задайте параметры' className={styles.form}>
					<Select
						title='Шрифт'
						options={fontFamilyOptions}
						selected={defaultArticleState.fontFamilyOption}
						onChange={() => {}}
						onClose={() => {}}
					/>
					<RadioGroup
						name='typeSize'
						options={fontSizeOptions}
						selected={defaultArticleState.fontSizeOption}
						title='Размер шрифта'
						onChange={() => {}}
					/>
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={defaultArticleState.fontColor}
						onChange={() => {}}
						onClose={() => {}}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={defaultArticleState.backgroundColor}
						onChange={() => {}}
						onClose={() => {}}
					/>
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={defaultArticleState.contentWidth}
						onChange={() => {}}
						onClose={() => {}}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={() => {}}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={() => {}}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};

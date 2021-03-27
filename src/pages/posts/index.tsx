import Head from 'next/head';
import React from 'react';
import styles from './styles.module.scss';

export default function Posts() {
	return (
		<>
			<Head>
				<title> Posts | ignews</title>
			</Head>

			<main className={styles.container}>
				<div className={styles.posts}>
					<a href="">
						<time>12 de março</time>
						<strong>Coisa Linda Coisa maravilhosa</strong>
						<p>
							lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum
							dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
							amet lorem ipsum dolor sit amet
						</p>
					</a>
					<a href="">
						<time>12 de março</time>
						<strong>Coisa Linda Coisa maravilhosa</strong>
						<p>
							lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum
							dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
							amet lorem ipsum dolor sit amet
						</p>
					</a>
					<a href="">
						<time>12 de março</time>
						<strong>Coisa Linda Coisa maravilhosa</strong>
						<p>
							lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum
							dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
							amet lorem ipsum dolor sit amet
						</p>
					</a>
					<a href="">
						<time>12 de março</time>
						<strong>Coisa Linda Coisa maravilhosa</strong>
						<p>
							lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum
							dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
							amet lorem ipsum dolor sit amet
						</p>
					</a>
				</div>
			</main>
		</>
	);
}
